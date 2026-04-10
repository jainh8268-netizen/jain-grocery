import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BUXfmnrd.js";
import { u as useActiveProducts } from "./backend-api-DVfVOMSU.js";
import { L as Layout } from "./Layout-DpysmBCh.js";
import { c as createLucideIcon } from "./createLucideIcon-Dt2RpemB.js";
import { P as Phone } from "./phone-BbDMeGaq.js";
import { M as MessageCircle, S as ShoppingBasket } from "./shopping-basket-CUZCeWvL.js";
import { S as ShoppingBag } from "./shopping-bag-B2dKOntW.js";
import { S as Smartphone } from "./smartphone-DG4je4NN.js";
import { X } from "./x-BBgfwS_S.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode);
const PRIMARY_PHONE = "9887193799";
const WHATSAPP_LINK = "https://wa.me/919887193799";
const INSTALL_DISMISSED_KEY = "jain_grocery_install_dismissed";
function FeaturedProductCard({
  product
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/products",
      className: "product-card fade-in flex flex-col hover:scale-[1.02] transition-smooth",
      "data-ocid": `home-product-${product.id}`,
      "aria-label": `View ${product.name}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-square bg-secondary overflow-hidden", children: [
          product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "w-full h-full object-cover",
              onError: (e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const fb = el.nextElementSibling;
                if (fb) fb.style.display = "flex";
              }
            }
          ) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full hidden flex-col items-center justify-center gap-1 text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBasket, { size: 28, className: "opacity-40" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 pt-2 pb-2.5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground text-center leading-snug line-clamp-2 mb-1", children: product.name }),
          product.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center line-clamp-1 leading-relaxed", children: product.description })
        ] })
      ]
    }
  );
}
function FeaturedSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "product-card flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square bg-muted animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2.5 pt-2 pb-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded animate-pulse mx-auto w-3/4 mb-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded animate-pulse mx-auto w-1/2" })
    ] })
  ] });
}
function PWAInstallBanner({ onDismiss }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mx-5 mb-4 rounded-2xl border border-accent/25 overflow-hidden",
      style: { background: "oklch(0.97 0.03 155 / 0.5)" },
      "data-ocid": "pwa-install-banner",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-accent/15", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 14, className: "text-accent-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm text-foreground", children: "📱 App Install Karein" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onDismiss,
              className: "w-6 h-6 flex items-center justify-center rounded-full bg-muted/60 hover:bg-muted text-muted-foreground transition-smooth",
              "aria-label": "Dismiss install banner",
              "data-ocid": "pwa-banner-dismiss-btn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🤖" }),
              " Android (Chrome):"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
              "3-dot menu (⋮) → ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"Add to Home screen"' }),
              ' → "Add"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🍎" }),
              " iPhone (Safari):"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
              "Share button (□↑) → ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"Add to Home Screen"' }),
              ' → "Add"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-1 flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💻" }),
              " Computer (PC/Mac):"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
              "Address bar ke right mein install icon (⊕) → ya 3-dot menu →",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"Install Jain Grocery"' })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Home() {
  const { data: products, isLoading } = useActiveProducts();
  const featured = (products == null ? void 0 : products.slice(0, 6)) ?? [];
  const [showInstallBanner, setShowInstallBanner] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-10",
          style: {
            backgroundImage: "radial-gradient(circle at 20% 80%, var(--background) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--background) 0%, transparent 50%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center text-center px-5 pt-8 pb-6 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-20 h-20 rounded-full bg-primary-foreground/20 border-2 border-primary-foreground/40 overflow-hidden shadow-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/logo.png",
                alt: "Jain Grocery Logo",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const fallback = t.nextElementSibling;
                  if (fallback) fallback.style.display = "flex";
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden w-full h-full items-center justify-center text-3xl",
                "aria-hidden": "true",
                children: "🛒"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-primary-foreground flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 10, className: "text-accent-foreground" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-primary-foreground leading-tight", children: "Jain Grocery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-base font-medium", children: "Quality Grocery Items Available" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/60 text-xs", children: "Devpura, Bundi, Rajasthan" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-sm leading-relaxed max-w-xs text-center bg-primary-foreground/10 rounded-xl px-4 py-3", children: "Welcome to Jain Grocery. Here you can see all available grocery products. To place an order please call us directly." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -mt-1 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/grocery-hero.dim_800x400.jpg",
          alt: "Fresh Indian grocery items at Jain Grocery",
          className: "w-full h-44 object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-5 space-y-3 bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: handleCall,
          className: "btn-call text-lg py-4 shadow-elevated",
          "data-ocid": "cta-call-now",
          "aria-label": "Call Jain Grocery now",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 20, className: "shrink-0" }),
            "Call Now — 98871 93799"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: WHATSAPP_LINK,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full font-semibold text-base transition-smooth active:scale-95",
          style: { background: "#25D366", color: "#fff" },
          "data-ocid": "cta-whatsapp-order",
          "aria-label": "Order via WhatsApp",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20, className: "shrink-0" }),
            "WhatsApp par Order karein"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/products",
          className: "flex items-center justify-center gap-2 w-full bg-accent/15 text-foreground border border-accent/30 px-6 py-3.5 rounded-full font-semibold text-base transition-smooth hover:bg-accent/25 active:scale-95",
          "data-ocid": "cta-view-products",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 18 }),
            "View All Products",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "ml-auto" })
          ]
        }
      )
    ] }),
    showInstallBanner && /* @__PURE__ */ jsxRuntimeExports.jsx(PWAInstallBanner, { onDismiss: handleDismissBanner }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-foreground", children: "Our Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/products",
            className: "text-sm text-primary font-medium flex items-center gap-0.5 hover:underline",
            "data-ocid": "link-see-all-products",
            children: [
              "See all ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: isLoading ? ["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedSkeleton, {}, k)) : featured.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FeaturedProductCard,
        {
          product
        },
        String(product.id)
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/products",
          className: "mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-muted/50 text-muted-foreground text-sm font-medium hover:bg-muted transition-smooth",
          "data-ocid": "link-all-products-bottom",
          children: [
            "View All Products ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-5 mb-5 rounded-2xl bg-accent/10 border border-accent/20 p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 16, className: "text-accent-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground mb-0.5", children: "Local & Fresh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Providing quality dals, flours, spices & gud to the community of Bundi since years." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/about",
            className: "text-xs text-primary font-medium mt-1 inline-flex items-center gap-0.5 hover:underline",
            "data-ocid": "link-learn-more",
            children: [
              "Learn more ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 12 })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Home as default
};
