import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Loader2,
  Package,
  Phone,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { useActiveProducts, usePlaceOrder } from "../api/backend-api";
import { Layout } from "../components/Layout";
import type { OrderInput, OrderItem, Product } from "../types";

interface SelectedProduct {
  product: Product;
  quantity: number;
}

function ProductSkeleton() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
      <Skeleton className="h-5 w-5 rounded" />
      <Skeleton className="h-10 w-10 rounded-lg shrink-0" />
      <Skeleton className="h-4 flex-1" />
    </div>
  );
}

function SuccessBanner({ onReset }: { onReset: () => void }) {
  return (
    <div
      className="fade-in flex flex-col items-center justify-center gap-6 py-16 px-6 text-center"
      data-ocid="order-success"
    >
      <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
        <CheckCircle className="w-10 h-10 text-accent" />
      </div>
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Order Placed!
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Your order has been received. We will call you shortly to confirm.
        </p>
      </div>
      <div className="w-full max-w-xs space-y-3">
        <a
          href="tel:9887193799"
          className="btn-call"
          data-ocid="success-call-btn"
        >
          <Phone className="w-5 h-5" />
          Call to Confirm: 9887193799
        </a>
        <Button
          variant="outline"
          className="w-full rounded-full"
          onClick={onReset}
          data-ocid="place-another-btn"
        >
          Place Another Order
        </Button>
      </div>
    </div>
  );
}

function buildWhatsAppMessage(
  customerName: string,
  customerPhone: string,
  selectedProducts: SelectedProduct[],
  notes: string,
): string {
  const itemLines = selectedProducts
    .map(({ product, quantity }) => `  • ${product.name} × ${quantity}`)
    .join("\n");

  let message = "🛒 *Naya Order!*\n\n";
  message += `👤 *Naam:* ${customerName}\n`;
  message += `📞 *Phone:* ${customerPhone}\n\n`;
  message += `*Products:*\n${itemLines}`;
  if (notes.trim()) {
    message += `\n\n📝 *Notes:* ${notes.trim()}`;
  }
  return message;
}

export default function Order() {
  const { data: products = [], isLoading } = useActiveProducts();
  const placeOrder = usePlaceOrder();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [selected, setSelected] = useState<Record<string, SelectedProduct>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function toggleProduct(product: Product) {
    const id = product.id.toString();
    setSelected((prev) => {
      if (prev[id]) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: { product, quantity: 1 } };
    });
    if (errors.products) setErrors((e) => ({ ...e, products: "" }));
  }

  function setQuantity(product: Product, qty: number) {
    const id = product.id.toString();
    setSelected((prev) => ({
      ...prev,
      [id]: { product, quantity: Math.max(1, qty) },
    }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit phone number";
    if (Object.keys(selected).length === 0)
      e.products = "Please select at least one product";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const selectedList = Object.values(selected);
    const items: OrderItem[] = selectedList.map(({ product, quantity }) => ({
      productId: product.id,
      productName: product.name,
      quantity: BigInt(quantity),
    }));

    const input: OrderInput = {
      customerName: name.trim(),
      customerPhone: phone.trim(),
      items,
      notes: notes.trim(),
    };

    try {
      await placeOrder.mutateAsync(input);
      setSubmitted(true);

      // After successful order — send WhatsApp notification to owner
      const waMessage = buildWhatsAppMessage(
        name.trim(),
        phone.trim(),
        selectedList,
        notes,
      );
      const encodedMsg = encodeURIComponent(waMessage);
      window.open(`https://wa.me/919887193799?text=${encodedMsg}`, "_blank");
    } catch {
      setErrors({
        submit: "Failed to place order. Please try again or call us.",
      });
    }
  }

  function resetForm() {
    setName("");
    setPhone("");
    setNotes("");
    setSelected({});
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <Layout>
        <SuccessBanner onReset={resetForm} />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="section-header">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-6 h-6 text-primary-foreground/80" />
          <div>
            <h1 className="font-display text-xl font-bold text-primary-foreground leading-tight">
              Place Your Order
            </h1>
            <p className="text-primary-foreground/75 text-sm mt-0.5">
              Select products and we'll call to confirm
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="px-4 pt-5 pb-32 space-y-6"
        data-ocid="order-form"
        noValidate
      >
        {/* Contact Details */}
        <section className="bg-card rounded-2xl border border-border p-4 space-y-4">
          <h2 className="font-display text-base font-semibold text-foreground">
            Your Details
          </h2>

          <div className="space-y-1.5">
            <Label htmlFor="customer-name" className="text-sm font-medium">
              Your Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="customer-name"
              data-ocid="input-name"
              type="text"
              placeholder="e.g. Ramesh Kumar"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
              }}
              className={
                errors.name
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
              autoComplete="name"
            />
            {errors.name && (
              <p className="text-destructive text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="customer-phone" className="text-sm font-medium">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="customer-phone"
              data-ocid="input-phone"
              type="tel"
              placeholder="e.g. 9887193799"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              className={
                errors.phone
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
              inputMode="numeric"
              autoComplete="tel"
            />
            {errors.phone && (
              <p className="text-destructive text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </section>

        {/* Product Selection */}
        <section className="bg-card rounded-2xl border border-border p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-semibold text-foreground">
              Select Products <span className="text-destructive">*</span>
            </h2>
            {Object.keys(selected).length > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {Object.keys(selected).length} selected
              </span>
            )}
          </div>

          {errors.products && (
            <p className="text-destructive text-xs">{errors.products}</p>
          )}

          {isLoading ? (
            <div className="space-y-2">
              {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                <ProductSkeleton key={k} />
              ))}
            </div>
          ) : products.length === 0 ? (
            <div
              className="flex flex-col items-center gap-2 py-8 text-center"
              data-ocid="products-empty"
            >
              <Package className="w-10 h-10 text-muted-foreground/50" />
              <p className="text-muted-foreground text-sm">
                No products available right now.
              </p>
            </div>
          ) : (
            <div className="space-y-2" data-ocid="product-list">
              {products.map((product) => {
                const id = product.id.toString();
                const isChecked = !!selected[id];
                return (
                  <label
                    key={id}
                    htmlFor={`chk-${id}`}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-smooth cursor-pointer select-none ${
                      isChecked
                        ? "border-primary bg-primary/5"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                    data-ocid={`product-row-${id}`}
                  >
                    <Checkbox
                      id={`chk-${id}`}
                      checked={isChecked}
                      onCheckedChange={() => toggleProduct(product)}
                      className="shrink-0 pointer-events-none"
                      data-ocid={`checkbox-${id}`}
                    />
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover shrink-0 border border-border"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-muted shrink-0 flex items-center justify-center">
                        <Package className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                    <span className="flex-1 text-sm font-medium text-foreground min-w-0 truncate">
                      {product.name}
                    </span>
                    {isChecked && (
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-base transition-smooth hover:bg-primary/10 active:scale-90"
                          onClick={(e) => {
                            e.preventDefault();
                            setQuantity(product, selected[id].quantity - 1);
                          }}
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold tabular-nums">
                          {selected[id].quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-base transition-smooth hover:bg-primary/10 active:scale-90"
                          onClick={(e) => {
                            e.preventDefault();
                            setQuantity(product, selected[id].quantity + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </label>
                );
              })}
            </div>
          )}
        </section>

        {/* Special Notes */}
        <section className="bg-card rounded-2xl border border-border p-4 space-y-3">
          <h2 className="font-display text-base font-semibold text-foreground">
            Special Notes{" "}
            <span className="text-muted-foreground text-xs font-normal">
              (optional)
            </span>
          </h2>
          <Textarea
            id="order-notes"
            data-ocid="input-notes"
            placeholder="Any special requests or delivery notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="resize-none"
          />
        </section>

        {/* Order Summary (if items selected) */}
        {Object.keys(selected).length > 0 && (
          <section
            className="bg-primary/[0.08] rounded-2xl border border-primary/20 p-4 fade-in"
            data-ocid="order-summary"
          >
            <h2 className="font-display text-sm font-semibold text-foreground mb-3">
              Order Summary
            </h2>
            <div className="space-y-1.5">
              {Object.values(selected).map(({ product, quantity }) => (
                <div
                  key={product.id.toString()}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-foreground truncate min-w-0 max-w-[70%]">
                    {product.name}
                  </span>
                  <span className="text-muted-foreground shrink-0 ml-2">
                    ×{quantity}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Submit Error */}
        {errors.submit && (
          <p className="text-destructive text-sm text-center bg-destructive/10 rounded-xl px-4 py-3">
            {errors.submit}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={placeOrder.isPending}
          className="btn-call disabled:opacity-60 disabled:cursor-not-allowed"
          data-ocid="submit-order-btn"
        >
          {placeOrder.isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Placing Order…
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Place Order
            </>
          )}
        </button>

        {/* Call Fallback */}
        <p className="text-center text-muted-foreground text-xs pb-2">
          Prefer to call?{" "}
          <a
            href="tel:9887193799"
            className="text-primary font-semibold underline-offset-2 hover:underline"
          >
            9887193799
          </a>
        </p>
      </form>
    </Layout>
  );
}
