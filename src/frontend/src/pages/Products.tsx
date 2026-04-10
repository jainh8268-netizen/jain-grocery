import {
  CheckCircle,
  MessageCircle,
  Phone,
  RefreshCw,
  ShoppingBasket,
  Star as StarIcon,
} from "lucide-react";
import { useState } from "react";
import {
  useActiveProducts,
  useProductAverageRating,
  useRateProduct,
} from "../api/backend-api";
import { Layout } from "../components/Layout";
import { StarRating } from "../components/StarRating";
import type { Product } from "../types";

const PRIMARY_PHONE = "9887193799";

function getWhatsAppLink(productName: string) {
  const text = `Namaste, main ${productName} order karna chahta hoon`;
  return `https://wa.me/919887193799?text=${encodeURIComponent(text)}`;
}

interface RatingFormProps {
  productId: bigint;
  productName: string;
  onClose: () => void;
}

function RatingForm({ productId, productName, onClose }: RatingFormProps) {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { mutate: rateProduct, isPending } = useRateProduct();

  const handleSubmit = () => {
    if (stars === 0) return;
    rateProduct(
      { productId, rating: stars, comment },
      {
        onSuccess: () => {
          setSubmitted(true);
          setTimeout(() => {
            onClose();
          }, 2000);
        },
      },
    );
  };

  if (submitted) {
    return (
      <div className="mt-2 rounded-xl bg-accent/10 border border-accent/20 px-3 py-3 flex items-center gap-2 text-sm text-foreground">
        <CheckCircle size={16} className="text-accent shrink-0" />
        <span>Shukriya! Aapki rating di gayi.</span>
      </div>
    );
  }

  return (
    <div className="mt-2 rounded-xl bg-card border border-border px-3 py-3 space-y-2.5">
      <p className="text-xs font-medium text-muted-foreground">
        {productName} ko rate karein
      </p>
      <StarRating value={stars} onChange={setStars} size={22} />
      {stars === 0 && (
        <p className="text-xs text-destructive/70">Pehle stars select karein</p>
      )}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Apni rai likhein... (optional)"
        rows={2}
        className="w-full text-xs bg-background border border-input rounded-lg px-2.5 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground"
        data-ocid="rating-comment-input"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={stars === 0 || isPending}
          className="flex-1 text-xs font-semibold py-2 rounded-full bg-primary text-primary-foreground transition-smooth hover:opacity-90 disabled:opacity-50 active:scale-95"
          data-ocid="rating-submit-btn"
        >
          {isPending ? "Saving..." : "Submit Rating"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-xs px-3 py-2 rounded-full border border-border text-muted-foreground hover:bg-muted transition-smooth"
          data-ocid="rating-cancel-btn"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

interface ProductAverageProps {
  productId: bigint;
}

function ProductAverage({ productId }: ProductAverageProps) {
  const { data: avg } = useProductAverageRating(productId);
  const displayValue = avg ?? 0;

  return (
    <div className="flex items-center justify-center gap-1 mb-1">
      <StarRating value={displayValue} readOnly size={13} />
      {(avg === null || avg === undefined) && (
        <span className="text-xs text-muted-foreground opacity-60">
          No ratings yet
        </span>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const [showRating, setShowRating] = useState(false);

  return (
    <div
      className="product-card fade-in flex flex-col"
      data-ocid="product-card"
    >
      {/* Image area */}
      <div className="relative w-full aspect-square bg-secondary overflow-hidden">
        {!imgError && product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-smooth hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
            <ShoppingBasket size={36} className="opacity-40" />
            <span className="text-xs font-medium opacity-60">No Image</span>
          </div>
        )}
      </div>

      {/* Name + Description */}
      <div className="px-3 pt-3 pb-1 flex-1">
        <h3 className="font-display font-semibold text-sm text-foreground text-center leading-snug line-clamp-2 mb-1">
          {product.name}
        </h3>
        <ProductAverage productId={product.id} />
        {product.description && (
          <p className="text-xs text-muted-foreground text-center leading-relaxed line-clamp-3">
            {product.description}
          </p>
        )}
      </div>

      {/* Rating Form */}
      <div className="px-3">
        {showRating ? (
          <RatingForm
            productId={product.id}
            productName={product.name}
            onClose={() => setShowRating(false)}
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowRating(true)}
            className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground py-1.5 rounded-lg hover:bg-muted/60 transition-smooth"
            data-ocid="rate-product-btn"
          >
            <StarIcon size={12} />
            Rate this product
          </button>
        )}
      </div>

      {/* Buttons */}
      <div className="px-3 pb-3 pt-2 flex flex-col gap-2">
        <a
          href={`tel:${PRIMARY_PHONE}`}
          className="btn-call-sm w-full rounded-full py-2.5"
          data-ocid="product-call-btn"
          aria-label={`Call for price on ${product.name}`}
        >
          <Phone size={14} strokeWidth={2.5} />
          <span>Call for Price</span>
        </a>
        <a
          href={getWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full rounded-full py-2 text-xs font-semibold transition-smooth active:scale-95"
          style={{ background: "#25D366", color: "#fff" }}
          data-ocid="product-whatsapp-btn"
          aria-label={`WhatsApp order for ${product.name}`}
        >
          <MessageCircle size={13} strokeWidth={2.5} />
          <span>WhatsApp Order</span>
        </a>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="product-card flex flex-col">
      <div className="w-full aspect-square bg-muted animate-pulse" />
      <div className="px-3 pt-3 pb-2">
        <div className="h-4 bg-muted rounded animate-pulse mx-auto w-3/4 mb-1" />
        <div className="h-3 bg-muted rounded animate-pulse mx-auto w-1/2 mb-1" />
        <div className="h-3 bg-muted rounded animate-pulse mx-auto w-full mb-0.5" />
        <div className="h-3 bg-muted rounded animate-pulse mx-auto w-4/5" />
      </div>
      <div className="px-3 pb-3 flex flex-col gap-2">
        <div className="h-9 bg-muted rounded-full animate-pulse w-full" />
        <div className="h-8 bg-muted rounded-full animate-pulse w-full" />
      </div>
    </div>
  );
}

export default function Products() {
  const { data: products, isLoading, isError, refetch } = useActiveProducts();

  return (
    <Layout>
      {/* Section header */}
      <div className="section-header text-center">
        <h1 className="font-display text-2xl font-bold text-primary-foreground leading-tight">
          Our Products
        </h1>
        <p className="text-sm text-primary-foreground/80 mt-1">
          Fresh &amp; Quality Grocery Items
        </p>
      </div>

      {/* Quick call + WhatsApp banner */}
      <div className="bg-background px-4 pt-4 pb-2 space-y-2">
        <a
          href={`tel:${PRIMARY_PHONE}`}
          className="btn-call text-base"
          data-ocid="products-call-banner-btn"
          aria-label="Call for price now"
        >
          <Phone size={18} strokeWidth={2.5} />
          Call for Price Now
        </a>
        <a
          href="https://wa.me/919887193799"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm transition-smooth active:scale-95"
          style={{ background: "#25D366", color: "#fff" }}
          data-ocid="products-whatsapp-banner-btn"
          aria-label="Order via WhatsApp"
        >
          <MessageCircle size={17} strokeWidth={2.5} />
          WhatsApp par Order karein
        </a>
      </div>

      {/* Product grid */}
      <div className="px-4 py-4">
        {isLoading && (
          <div
            className="grid grid-cols-2 gap-3"
            aria-label="Loading products"
            data-ocid="products-loading"
          >
            {Array.from({ length: 6 }, (_, i) => i).map((i) => (
              <SkeletonCard key={`skeleton-${i}`} />
            ))}
          </div>
        )}

        {isError && (
          <div
            className="flex flex-col items-center justify-center py-16 gap-4 text-center"
            data-ocid="products-error"
          >
            <ShoppingBasket
              size={48}
              className="text-muted-foreground opacity-40"
            />
            <div>
              <p className="font-display font-semibold text-foreground text-lg">
                Couldn't load products
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Please check your connection and try again.
              </p>
            </div>
            <button
              type="button"
              onClick={() => refetch()}
              className="flex items-center gap-2 btn-call-sm px-6 py-3 rounded-full"
              data-ocid="products-retry-btn"
            >
              <RefreshCw size={15} />
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !isError && products && products.length === 0 && (
          <div
            className="flex flex-col items-center justify-center py-16 gap-3 text-center"
            data-ocid="products-empty"
          >
            <ShoppingBasket
              size={48}
              className="text-muted-foreground opacity-40"
            />
            <p className="font-display font-semibold text-foreground text-lg">
              No products yet
            </p>
            <p className="text-sm text-muted-foreground">
              Products will appear here once added by the shop owner.
            </p>
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="btn-call-sm px-6 py-3 rounded-full mt-2"
              data-ocid="products-empty-call-btn"
            >
              <Phone size={15} />
              Call Us Directly
            </a>
          </div>
        )}

        {!isLoading && !isError && products && products.length > 0 && (
          <div
            className="grid grid-cols-2 gap-3"
            data-ocid="products-grid"
            aria-label="Product grid"
          >
            {products.map((product) => (
              <ProductCard key={String(product.id)} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom call strip */}
      {!isLoading && !isError && products && products.length > 0 && (
        <div className="px-4 pb-6 pt-2">
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="btn-call text-base"
            data-ocid="products-call-bottom-btn"
            aria-label="Call for price"
          >
            <Phone size={18} strokeWidth={2.5} />
            Call for Price
          </a>
        </div>
      )}
    </Layout>
  );
}
