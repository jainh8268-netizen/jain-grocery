import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Leaf,
  MessageCircle,
  Phone,
  ShoppingBag,
  ShoppingBasket,
  Smartphone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useActiveProducts } from "../api/backend-api";
import { Layout } from "../components/Layout";

const PRIMARY_PHONE = "9887193799";
const WHATSAPP_LINK = "https://wa.me/919887193799";
const INSTALL_DISMISSED_KEY = "jain_grocery_install_dismissed";

function FeaturedProductCard({
  product,
}: {
  product: { id: bigint; name: string; imageUrl: string; description: string };
}) {
  return (
    <Link
      to="/products"
      className="product-card fade-in flex flex-col hover:scale-[1.02] transition-smooth"
      data-ocid={`home-product-${product.id}`}
      aria-label={`View ${product.name}`}
    >
      <div className="relative w-full aspect-square bg-secondary overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const fb = el.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = "flex";
            }}
          />
        ) : null}
        <div className="w-full h-full hidden flex-col items-center justify-center gap-1 text-muted-foreground">
          <ShoppingBasket size={28} className="opacity-40" />
        </div>
      </div>
      <div className="px-2.5 pt-2 pb-2.5 flex-1">
        <p className="font-semibold text-sm text-foreground text-center leading-snug line-clamp-2 mb-1">
          {product.name}
        </p>
        {product.description && (
          <p className="text-xs text-muted-foreground text-center line-clamp-1 leading-relaxed">
            {product.description}
          </p>
        )}
      </div>
    </Link>
  );
}

function FeaturedSkeleton() {
  return (
    <div className="product-card flex flex-col">
      <div className="w-full aspect-square bg-muted animate-pulse" />
      <div className="px-2.5 pt-2 pb-2.5">
        <div className="h-4 bg-muted rounded animate-pulse mx-auto w-3/4 mb-1" />
        <div className="h-3 bg-muted rounded animate-pulse mx-auto w-1/2" />
      </div>
    </div>
  );
}

function PWAInstallBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      className="mx-5 mb-4 rounded-2xl border border-accent/25 overflow-hidden"
      style={{ background: "oklch(0.97 0.03 155 / 0.5)" }}
      data-ocid="pwa-install-banner"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-accent/15">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
            <Smartphone size={14} className="text-accent-foreground" />
          </div>
          <span className="font-display font-semibold text-sm text-foreground">
            📱 App Install Karein
          </span>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          className="w-6 h-6 flex items-center justify-center rounded-full bg-muted/60 hover:bg-muted text-muted-foreground transition-smooth"
          aria-label="Dismiss install banner"
          data-ocid="pwa-banner-dismiss-btn"
        >
          <X size={12} />
        </button>
      </div>

      {/* Instructions */}
      <div className="px-4 py-3 space-y-3">
        {/* Android */}
        <div>
          <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1">
            <span>🤖</span> Android (Chrome):
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            3-dot menu (⋮) → <strong>"Add to Home screen"</strong> → "Add"
          </p>
        </div>
        {/* iPhone */}
        <div>
          <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1">
            <span>🍎</span> iPhone (Safari):
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Share button (□↑) → <strong>"Add to Home Screen"</strong> → "Add"
          </p>
        </div>
        {/* PC */}
        <div>
          <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1">
            <span>💻</span> Computer (PC/Mac):
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Address bar ke right mein install icon (⊕) → ya 3-dot menu →{" "}
            <strong>"Install Jain Grocery"</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { data: products, isLoading } = useActiveProducts();
  const featured = products?.slice(0, 6) ?? [];
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(INSTALL_DISMISSED_KEY);
    if (!dismissed) {
      setShowInstallBanner(true);
    }
  }, []);

  const handleDismissBanner = () => {
    localStorage.setItem(INSTALL_DISMISSED_KEY, "1");
    setShowInstallBanner(false);
  };

  const handleCall = () => {
    window.location.href = `tel:${PRIMARY_PHONE}`;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="section-header relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, var(--background) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--background) 0%, transparent 50%)",
          }}
        />

        {/* Logo + Brand */}
        <div className="relative z-10 flex flex-col items-center text-center px-5 pt-8 pb-6 gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/20 border-2 border-primary-foreground/40 overflow-hidden shadow-lg">
              <img
                src="/assets/logo.png"
                alt="Jain Grocery Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const fallback = t.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                className="hidden w-full h-full items-center justify-center text-3xl"
                aria-hidden="true"
              >
                🛒
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-primary-foreground flex items-center justify-center">
              <Leaf size={10} className="text-accent-foreground" />
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="font-display text-3xl font-bold text-primary-foreground leading-tight">
              Jain Grocery
            </h1>
            <p className="text-primary-foreground/80 text-base font-medium">
              Quality Grocery Items Available
            </p>
            <p className="text-primary-foreground/60 text-xs">
              Devpura, Bundi, Rajasthan
            </p>
          </div>

          <p className="text-primary-foreground/75 text-sm leading-relaxed max-w-xs text-center bg-primary-foreground/10 rounded-xl px-4 py-3">
            Welcome to Jain Grocery. Here you can see all available grocery
            products. To place an order please call us directly.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative -mt-1 overflow-hidden">
        <img
          src="/assets/generated/grocery-hero.dim_800x400.jpg"
          alt="Fresh Indian grocery items at Jain Grocery"
          className="w-full h-44 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* CTA Section */}
      <div className="px-5 py-5 space-y-3 bg-background">
        <button
          type="button"
          onClick={handleCall}
          className="btn-call text-lg py-4 shadow-elevated"
          data-ocid="cta-call-now"
          aria-label="Call Jain Grocery now"
        >
          <Phone size={20} className="shrink-0" />
          Call Now — 98871 93799
        </button>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full font-semibold text-base transition-smooth active:scale-95"
          style={{ background: "#25D366", color: "#fff" }}
          data-ocid="cta-whatsapp-order"
          aria-label="Order via WhatsApp"
        >
          <MessageCircle size={20} className="shrink-0" />
          WhatsApp par Order karein
        </a>

        <Link
          to="/products"
          className="flex items-center justify-center gap-2 w-full bg-accent/15 text-foreground border border-accent/30 px-6 py-3.5 rounded-full font-semibold text-base transition-smooth hover:bg-accent/25 active:scale-95"
          data-ocid="cta-view-products"
        >
          <ShoppingBag size={18} />
          View All Products
          <ChevronRight size={16} className="ml-auto" />
        </Link>
      </div>

      {/* PWA Install Banner */}
      {showInstallBanner && (
        <PWAInstallBanner onDismiss={handleDismissBanner} />
      )}

      {/* Featured Products Preview */}
      <div className="px-5 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Our Products
          </h2>
          <Link
            to="/products"
            className="text-sm text-primary font-medium flex items-center gap-0.5 hover:underline"
            data-ocid="link-see-all-products"
          >
            See all <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {isLoading
            ? ["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
                <FeaturedSkeleton key={k} />
              ))
            : featured.map((product) => (
                <FeaturedProductCard
                  key={String(product.id)}
                  product={product}
                />
              ))}
        </div>

        <Link
          to="/products"
          className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground text-sm font-medium hover:bg-muted transition-smooth"
          data-ocid="link-all-products-bottom"
        >
          View All Products <ChevronRight size={14} />
        </Link>
      </div>

      {/* About strip */}
      <div className="mx-5 mb-5 rounded-2xl bg-accent/10 border border-accent/20 p-4 flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
          <Leaf size={16} className="text-accent-foreground" />
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground mb-0.5">
            Local &amp; Fresh
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Providing quality dals, flours, spices &amp; gud to the community of
            Bundi since years.
          </p>
          <Link
            to="/about"
            className="text-xs text-primary font-medium mt-1 inline-flex items-center gap-0.5 hover:underline"
            data-ocid="link-learn-more"
          >
            Learn more <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
