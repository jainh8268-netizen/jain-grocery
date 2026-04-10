import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Camera,
  Check,
  Eye,
  EyeOff,
  ImageOff,
  ImagePlus,
  Loader2,
  LogOut,
  Package,
  Plus,
  ShoppingBag,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  useAddProduct,
  useAllProducts,
  useFixProductImages,
  useToggleProduct,
  useUploadImage,
} from "../api/backend-api";
import { useAdmin } from "../hooks/use-admin";
import type { Product } from "../types";

function ProductRow({
  product,
  token,
}: {
  product: Product;
  token: string;
}) {
  const toggle = useToggleProduct(token);
  const upload = useUploadImage(token);
  const [imgError, setImgError] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [saveMsg, setSaveMsg] = useState<"success" | "error" | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSaveMsg(null);

    // Show local preview immediately
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    try {
      await upload.mutateAsync({ file, productId: product.id });
      setSaveMsg("success");
      setImgError(false);
      setTimeout(() => {
        setSaveMsg(null);
        setShowUpload(false);
        setPreview(null);
      }, 1800);
    } catch (err) {
      console.error(
        "[ProductRow] Image upload failed for product",
        String(product.id),
        err,
      );
      setSaveMsg("error");
      setPreview(null);
    } finally {
      // Reset file input so same file can be re-selected
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleClose = () => {
    setShowUpload(false);
    setSaveMsg(null);
    setPreview(null);
  };

  return (
    <div
      data-ocid={`product-row-${product.id}`}
      className={`bg-card rounded-xl border p-3 transition-smooth ${
        product.isActive ? "border-border" : "border-border opacity-60"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Image */}
        <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0 flex items-center justify-center">
          {(preview ?? product.imageUrl) && !imgError ? (
            <img
              src={preview ?? product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <ImageOff className="w-6 h-6 text-muted-foreground/40" />
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground text-sm truncate">
            {product.name}
          </p>
          {product.description && (
            <p className="text-xs text-muted-foreground truncate mt-0.5">
              {product.description}
            </p>
          )}
          {product.isActive ? (
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 text-xs mt-1">
              <Eye className="w-3 h-3 mr-1" />
              Active
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="text-muted-foreground text-xs mt-1"
            >
              <EyeOff className="w-3 h-3 mr-1" />
              Hidden
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Update Photo Toggle */}
          <Button
            size="sm"
            variant="ghost"
            data-ocid={`update-photo-toggle-${product.id}`}
            className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
            title="Photo gallery se change karein"
            disabled={upload.isPending}
            onClick={() => {
              setShowUpload((v) => !v);
              setSaveMsg(null);
              setPreview(null);
            }}
          >
            {upload.isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Camera className="w-4 h-4" />
            )}
          </Button>

          {/* Toggle Active */}
          <Button
            size="sm"
            variant={product.isActive ? "outline" : "default"}
            data-ocid={`toggle-product-${product.id}`}
            className="text-xs h-8 px-3"
            disabled={toggle.isPending}
            onClick={() => toggle.mutate(product.id)}
          >
            {product.isActive ? "Hide" : "Show"}
          </Button>
        </div>
      </div>

      {/* Inline File Upload Panel */}
      {showUpload && (
        <div className="mt-3 pt-3 border-t border-border space-y-2">
          <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <ImagePlus className="w-3.5 h-3.5" />
            Gallery se nayi photo choose karein
          </p>

          {upload.isPending ? (
            <div className="flex items-center gap-2 py-2 px-3 bg-muted/50 rounded-lg">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              <span className="text-xs text-muted-foreground">
                Photo upload ho rahi hai…
              </span>
            </div>
          ) : (
            <div className="flex gap-2">
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                data-ocid={`photo-file-input-${product.id}`}
                className="hidden"
                onChange={handleFileChange}
              />
              <Button
                size="sm"
                data-ocid={`pick-photo-btn-${product.id}`}
                variant="outline"
                className="flex-1 h-9 text-xs gap-1.5"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImagePlus className="w-3.5 h-3.5" />
                Gallery se Photo Chunein
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-9 px-2 shrink-0 text-muted-foreground"
                onClick={handleClose}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}

          {saveMsg === "success" && (
            <p className="text-xs text-green-600 flex items-center gap-1 font-medium">
              <Check className="w-3 h-3" /> Photo update ho gayi!
            </p>
          )}
          {saveMsg === "error" && (
            <p className="text-destructive text-xs">
              Upload nahi hua. Dobara try karein.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function AdminProducts() {
  const navigate = useNavigate();
  const { token, isLoggedIn, clearToken } = useAdmin();
  const { data: products = [], isLoading } = useAllProducts(token);
  const addProduct = useAddProduct(token);
  const fixImages = useFixProductImages(token);
  const uploadNewImage = useUploadImage(token);

  const [newName, setNewName] = useState("");
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const [newDescription, setNewDescription] = useState("");
  const [addError, setAddError] = useState("");
  const [fixMsg, setFixMsg] = useState<"success" | "error" | null>(null);
  const [showFixConfirm, setShowFixConfirm] = useState(false);
  const newImageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: "/admin" });
    }
  }, [isLoggedIn, navigate]);

  const handleNewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setNewImageFile(file);
    setNewImagePreview(URL.createObjectURL(file));
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddError("");
    if (!newName.trim()) {
      setAddError("Product name is required.");
      return;
    }
    try {
      let imageUrl = "";

      // Upload the image first if one was selected
      if (newImageFile) {
        const uploadFn = uploadNewImage;
        imageUrl = await uploadFn.mutateAsync({ file: newImageFile });
      }

      await addProduct.mutateAsync({
        name: newName.trim(),
        imageUrl,
        description: newDescription.trim(),
      });

      setNewName("");
      setNewImageFile(null);
      setNewImagePreview(null);
      setNewDescription("");
      if (newImageInputRef.current) newImageInputRef.current.value = "";
    } catch (err) {
      console.error("[AdminProducts] Add product failed:", err);
      setAddError("Product add nahi hua. Dobara try karein.");
    }
  };

  const handleFixImages = async () => {
    setFixMsg(null);
    setShowFixConfirm(false);
    try {
      await fixImages.mutateAsync();
      setFixMsg("success");
      setTimeout(() => setFixMsg(null), 4000);
    } catch {
      setFixMsg("error");
    }
  };

  const handleLogout = () => {
    clearToken();
    navigate({ to: "/admin" });
  };

  if (!isLoggedIn) return null;

  const activeCount = products.filter((p) => p.isActive).length;
  const isAddingProduct = addProduct.isPending || uploadNewImage.isPending;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-subtle sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo.png"
              alt="Jain Grocery"
              className="h-8 w-8 rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
            <span className="font-display font-semibold text-foreground">
              Admin
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            data-ocid="admin-logout-btn"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground text-xs h-8"
          >
            <LogOut className="w-3.5 h-3.5 mr-1" />
            Logout
          </Button>
        </div>

        {/* Tab Nav */}
        <div className="max-w-2xl mx-auto px-4 flex border-t border-border">
          <Link
            to="/admin/orders"
            data-ocid="admin-tab-orders"
            className="flex-1 py-2.5 text-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="flex items-center justify-center gap-1.5">
              <ShoppingBag className="w-4 h-4" />
              Orders
            </span>
          </Link>
          <Link
            to="/admin/products"
            data-ocid="admin-tab-products"
            className="flex-1 py-2.5 text-center text-sm font-semibold text-primary border-b-2 border-primary"
          >
            <span className="flex items-center justify-center gap-1.5">
              <Package className="w-4 h-4" />
              Products
            </span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-5 space-y-6">
        {/* Fix Wrong Photos Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
          <div className="flex items-start gap-2">
            <Wrench className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-amber-800">
                Galat Photos Theek Karo
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                Products 10–13 ki galat image URLs saaf ho jayengi. Phir aap
                camera icon se gallery se nayi photo laga sakte hain.
              </p>
            </div>
          </div>

          {!showFixConfirm ? (
            <Button
              size="sm"
              data-ocid="fix-photos-btn"
              className="w-full h-9 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm"
              disabled={fixImages.isPending}
              onClick={() => setShowFixConfirm(true)}
            >
              <Wrench className="w-4 h-4 mr-1.5" />
              Galat Photos Theek Karo
            </Button>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-medium text-amber-800">
                Aap sure hain? Products 10–13 ki image URLs clear ho jayengi.
              </p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  data-ocid="fix-photos-confirm-btn"
                  className="flex-1 h-9 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold"
                  disabled={fixImages.isPending}
                  onClick={handleFixImages}
                >
                  {fixImages.isPending ? "Ho raha hai…" : "Haan, Theek Karo"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 h-9 text-xs"
                  onClick={() => setShowFixConfirm(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {fixMsg === "success" && (
            <p className="text-xs text-green-700 flex items-center gap-1 font-medium">
              <Check className="w-3 h-3" /> Photos clear ho gayi! Ab camera icon
              se gallery se nayi photos chunein.
            </p>
          )}
          {fixMsg === "error" && (
            <p className="text-destructive text-xs font-medium">
              Kuch galat hua. Dobara try karein.
            </p>
          )}
        </div>

        {/* Add New Product */}
        <div className="bg-card rounded-2xl border border-border p-4 shadow-subtle">
          <h2 className="font-display text-base font-semibold text-foreground mb-4 flex items-center gap-2">
            <Plus className="w-4 h-4 text-primary" />
            Add New Product
          </h2>
          <form onSubmit={handleAddProduct} className="space-y-3">
            <div className="space-y-1.5">
              <Label htmlFor="product-name" className="text-sm font-medium">
                Product Name *
              </Label>
              <Input
                id="product-name"
                data-ocid="add-product-name"
                placeholder="e.g. Moong Dal"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="h-10"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="product-description"
                className="text-sm font-medium"
              >
                Description (Hindi mein likhen)
              </Label>
              <Textarea
                id="product-description"
                data-ocid="add-product-description"
                placeholder="e.g. शुद्ध और ताजी मूंग दाल, बेहतरीन स्वाद के लिए।"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                rows={3}
                className="resize-none text-sm"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-1.5">
              <Label className="text-sm font-medium">
                Product Photo (optional)
              </Label>
              <input
                ref={newImageInputRef}
                type="file"
                accept="image/*"
                data-ocid="add-product-image-file"
                className="hidden"
                onChange={handleNewImageChange}
              />
              {newImagePreview ? (
                <div className="flex items-center gap-3 p-2 bg-muted/40 rounded-lg border border-border">
                  <img
                    src={newImagePreview}
                    alt="Preview"
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground font-medium truncate">
                      {newImageFile?.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Photo ready hai
                    </p>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0 text-muted-foreground shrink-0"
                    onClick={() => {
                      setNewImageFile(null);
                      setNewImagePreview(null);
                      if (newImageInputRef.current)
                        newImageInputRef.current.value = "";
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  data-ocid="add-product-image-btn"
                  className="w-full h-10 gap-2 text-sm"
                  onClick={() => newImageInputRef.current?.click()}
                >
                  <ImagePlus className="w-4 h-4" />
                  Gallery se Photo Chunein
                </Button>
              )}
            </div>

            {addError && <p className="text-destructive text-xs">{addError}</p>}

            <Button
              type="submit"
              data-ocid="add-product-btn"
              className="w-full h-10 font-semibold"
              disabled={isAddingProduct}
            >
              {isAddingProduct ? (
                <>
                  <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
                  {uploadNewImage.isPending
                    ? "Photo upload ho rahi hai…"
                    : "Adding…"}
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-1.5" />
                  Add Product
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Product List */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-base font-semibold text-foreground">
              All Products
            </h2>
            <span className="text-sm text-muted-foreground">
              {activeCount}/{products.length} active
            </span>
          </div>

          {isLoading ? (
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-20 w-full rounded-xl" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div
              data-ocid="products-empty-state"
              className="text-center py-12 space-y-2"
            >
              <Package className="w-10 h-10 mx-auto text-muted-foreground/40" />
              <p className="text-muted-foreground text-sm">No products yet.</p>
              <p className="text-xs text-muted-foreground">
                Add your first product above.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {products.map((product: Product) => (
                <ProductRow
                  key={product.id.toString()}
                  product={product}
                  token={token!}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
