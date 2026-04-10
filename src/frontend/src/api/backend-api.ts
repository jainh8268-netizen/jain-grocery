import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ExternalBlob, createActor } from "../backend";
import type { Order, OrderId, OrderInput, Product, ProductId } from "../types";

type UploadFn = (file: ExternalBlob) => Promise<Uint8Array>;
type DownloadFn = (file: Uint8Array) => Promise<ExternalBlob>;

// Module-level refs — captured from createActor callback so they persist
// across React re-renders and are available inside mutation functions.
const uploadFnRef: { current: UploadFn | null } = { current: null };
const downloadFnRef: { current: DownloadFn | null } = { current: null };

function useBackendActor() {
  return useActor((canisterId, uploadFile, downloadFile, options) => {
    // Always update refs so they stay fresh with latest functions
    uploadFnRef.current = uploadFile;
    downloadFnRef.current = downloadFile;
    return createActor(canisterId, uploadFile, downloadFile, options);
  });
}

export function useActiveProducts() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Product[]>({
    queryKey: ["activeProducts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getActiveProducts() as Promise<Product[]>;
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePlaceOrder() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: OrderInput) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.placeOrder(input) as Promise<Order>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

export function useAdminLogin() {
  const { actor } = useBackendActor();
  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: { username: string; password: string }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.adminLogin(username, password);
    },
  });
}

export function useAllProducts(token: string | null) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Product[]>({
    queryKey: ["allProducts", token],
    queryFn: async () => {
      if (!actor || !token) return [];
      return actor.getAllProducts(token) as Promise<Product[]>;
    },
    enabled: !!actor && !isFetching && !!token,
  });
}

export function useAllOrders(token: string | null) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Order[]>({
    queryKey: ["orders", token],
    queryFn: async () => {
      if (!actor || !token) return [];
      return actor.getAllOrders(token) as Promise<Order[]>;
    },
    enabled: !!actor && !isFetching && !!token,
    refetchInterval: 30000,
  });
}

export function useMarkOrderRead(token: string | null) {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (orderId: OrderId) => {
      if (!actor || !token) throw new Error("Not authenticated");
      return actor.markOrderRead(token, orderId) as Promise<Order | null>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

export function useMarkOrderCompleted(token: string | null) {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (orderId: OrderId) => {
      if (!actor || !token) throw new Error("Not authenticated");
      return actor.markOrderCompleted(token, orderId) as Promise<Order | null>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}

export function useAddProduct(token: string | null) {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      imageUrl,
      description,
    }: { name: string; imageUrl: string; description: string }) => {
      if (!actor || !token) throw new Error("Not authenticated");
      return actor.addProduct(
        token,
        name,
        imageUrl,
        description,
      ) as Promise<Product>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      queryClient.invalidateQueries({ queryKey: ["activeProducts"] });
    },
  });
}

export function useToggleProduct(token: string | null) {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (productId: ProductId) => {
      if (!actor || !token) throw new Error("Not authenticated");
      return actor.toggleProduct(token, productId) as Promise<Product | null>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      queryClient.invalidateQueries({ queryKey: ["activeProducts"] });
    },
  });
}

export function useRateProduct() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      rating,
      comment,
    }: { productId: bigint; rating: number; comment: string }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.rateProduct(productId, BigInt(rating), comment);
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["productRatings", String(variables.productId)],
      });
      queryClient.invalidateQueries({
        queryKey: ["productAvgRating", String(variables.productId)],
      });
    },
  });
}

export function useProductRatings(productId: bigint) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["productRatings", String(productId)],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductRatings(productId);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateProductImage(token: string | null) {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      productId,
      imageUrl,
    }: { productId: bigint; imageUrl: string }) => {
      if (!actor || !token) throw new Error("Not authenticated");
      return actor.updateProductImage(token, productId, imageUrl);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      queryClient.invalidateQueries({ queryKey: ["activeProducts"] });
    },
  });
}

// No-op: backend seed data is now correct, no image fix needed
export function useFixProductImages(_token: string | null) {
  return useMutation({
    mutationFn: async () => {},
  });
}

export function useProductAverageRating(productId: bigint) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<number | null>({
    queryKey: ["productAvgRating", String(productId)],
    queryFn: async () => {
      if (!actor) return null;
      const result = await actor.getProductAverageRating(productId);
      if (Array.isArray(result) && result.length === 0) return null;
      if (Array.isArray(result) && result.length > 0) return Number(result[0]);
      if (typeof result === "number") return result;
      if (result === null || result === undefined) return null;
      return Number(result);
    },
    enabled: !!actor && !isFetching,
  });
}

/**
 * Waits up to 5 seconds for the upload/download storage functions to become
 * available. The refs are populated during useActor() render — if the hook
 * hasn't been called yet when mutate() fires, we retry with a small delay.
 */
async function waitForStorageFns(
  maxWaitMs = 5000,
): Promise<{ uploadFn: UploadFn; downloadFn: DownloadFn }> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    if (uploadFnRef.current && downloadFnRef.current) {
      return {
        uploadFn: uploadFnRef.current,
        downloadFn: downloadFnRef.current,
      };
    }
    await new Promise((r) => setTimeout(r, 100));
  }
  throw new Error(
    "Storage functions not ready — actor setup may have failed. Please refresh and try again.",
  );
}

/**
 * Uploads a File using object-storage and returns the public CDN URL.
 * Flow: File → Uint8Array → ExternalBlob.fromBytes → uploadFile (returns hashBytes)
 *       → downloadFile(hashBytes) → ExternalBlob.getDirectURL() → CDN URL
 * If productId is provided, also calls updateProductImage on the backend.
 */
export function useUploadImage(token: string | null) {
  // Call useBackendActor here so its render callback runs and populates refs
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      file,
      productId,
    }: { file: File; productId?: bigint }) => {
      if (!actor || !token) {
        console.error("[useUploadImage] Actor or token missing", {
          hasActor: !!actor,
          hasToken: !!token,
        });
        throw new Error("Not authenticated");
      }

      // Wait for storage functions — they're populated by useBackendActor render
      let uploadFn: UploadFn;
      let downloadFn: DownloadFn;
      try {
        const fns = await waitForStorageFns();
        uploadFn = fns.uploadFn;
        downloadFn = fns.downloadFn;
      } catch (err) {
        console.error("[useUploadImage] Storage functions not ready:", err);
        throw new Error(
          "Storage not initialized. Please refresh and try again.",
        );
      }

      // Step 1: Convert File → Uint8Array
      let bytes: Uint8Array<ArrayBuffer>;
      try {
        const arrayBuffer = await file.arrayBuffer();
        bytes = new Uint8Array(arrayBuffer) as Uint8Array<ArrayBuffer>;
        console.log(
          "[useUploadImage] File read as bytes, size:",
          bytes.byteLength,
        );
      } catch (err) {
        console.error("[useUploadImage] Failed to read file:", err);
        throw new Error("Could not read the selected image file.");
      }

      // Step 2: Wrap in ExternalBlob (imported from src/backend.ts, NOT @caffeineai/object-storage)
      const blob = ExternalBlob.fromBytes(bytes);

      // Step 3: Upload to object-storage — returns sentinel+hash bytes
      let hashBytes: Uint8Array;
      try {
        hashBytes = await uploadFn(blob);
        console.log(
          "[useUploadImage] Upload succeeded, hash bytes length:",
          hashBytes.length,
        );
      } catch (err) {
        console.error("[useUploadImage] uploadFile failed:", err);
        throw new Error(
          "Image upload failed. Please check your connection and try again.",
        );
      }

      // Step 4: Resolve hash bytes → public CDN URL via downloadFile
      let imageUrl: string;
      try {
        const resolvedBlob = await downloadFn(hashBytes);
        imageUrl = resolvedBlob.getDirectURL();
        console.log("[useUploadImage] Resolved CDN URL:", imageUrl);
      } catch (err) {
        console.error(
          "[useUploadImage] downloadFile/getDirectURL failed:",
          err,
        );
        throw new Error("Could not resolve image URL after upload.");
      }

      if (!imageUrl || imageUrl.trim() === "") {
        console.error("[useUploadImage] Empty CDN URL returned");
        throw new Error("Upload completed but returned an empty image URL.");
      }

      // Step 5: Persist the CDN URL to the backend if a productId was given
      if (productId !== undefined) {
        try {
          await actor.updateProductImage(token, productId, imageUrl);
          console.log(
            "[useUploadImage] Backend updated for product",
            String(productId),
          );
        } catch (err) {
          console.error("[useUploadImage] updateProductImage failed:", err);
          throw new Error(
            "Image uploaded but could not save to product. Please try again.",
          );
        }
      }

      return imageUrl;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
      queryClient.invalidateQueries({ queryKey: ["activeProducts"] });
    },
    onError: (err: unknown) => {
      console.error("[useUploadImage] Mutation failed:", err);
    },
  });
}
