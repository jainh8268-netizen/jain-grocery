import { j as jsxRuntimeExports, r as reactExports } from "./index-BUXfmnrd.js";
import { u as useActiveProducts, a as useProductAverageRating, b as useRateProduct } from "./backend-api-DVfVOMSU.js";
import { L as Layout } from "./Layout-DpysmBCh.js";
import { c as createLucideIcon } from "./createLucideIcon-Dt2RpemB.js";
import { P as Phone } from "./phone-BbDMeGaq.js";
import { M as MessageCircle, S as ShoppingBasket } from "./shopping-basket-CUZCeWvL.js";
import { C as CircleCheckBig } from "./circle-check-big-D_Twhecs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$1);
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function StarRating({
  value,
  onChange,
  readOnly = false,
  count,
  size = 18
}) {
  const stars = [1, 2, 3, 4, 5];
  if (readOnly) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: stars.map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          size,
          style: {
            fill: star <= Math.round(value) ? "#f59e0b" : "transparent",
            color: star <= Math.round(value) ? "#f59e0b" : "#d1d5db"
          },
          "aria-hidden": "true"
        },
        star
      )) }),
      count !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
        value > 0 ? value.toFixed(1) : "0",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-70", children: [
          "(",
          count,
          ")"
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "fieldset",
    {
      className: "flex items-center gap-1 border-0 m-0 p-0",
      "aria-label": "Star rating selector",
      children: stars.map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onChange == null ? void 0 : onChange(star),
          "aria-label": `Rate ${star} star${star !== 1 ? "s" : ""}`,
          className: "p-0.5 transition-transform hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              size,
              style: {
                fill: star <= value ? "#f59e0b" : "transparent",
                color: star <= value ? "#f59e0b" : "#9ca3af"
              }
            }
          )
        },
        star
      ))
    }
  );
}
const PRIMARY_PHONE = "9887193799";
function getWhatsAppLink(productName) {
  const text = `Namaste, main ${productName} order karna chahta hoon`;
  return `https://wa.me/919887193799?text=${encodeURIComponent(text)}`;
}
function RatingForm({ productId, productName, onClose }) {
  const [stars, setStars] = reactExports.useState(0);
  const [comment, setComment] = reactExports.useState("");
  const [submitted, setSubmitted] = reactExports.useState(false);
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
          }, 2e3);
        }
      }
    );
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-xl bg-accent/10 border border-accent/20 px-3 py-3 flex items-center gap-2 text-sm text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16, className: "text-accent shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shukriya! Aapki rating di gayi." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-xl bg-card border border-border px-3 py-3 space-y-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-muted-foreground", children: [
      productName,
      " ko rate karein"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: stars, onChange: setStars, size: 22 }),
    stars === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive/70", children: "Pehle stars select karein" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        value: comment,
        onChange: (e) => setComment(e.target.value),
        placeholder: "Apni rai likhein... (optional)",
        rows: 2,
        className: "w-full text-xs bg-background border border-input rounded-lg px-2.5 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground",
        "data-ocid": "rating-comment-input"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleSubmit,
          disabled: stars === 0 || isPending,
          className: "flex-1 text-xs font-semibold py-2 rounded-full bg-primary text-primary-foreground transition-smooth hover:opacity-90 disabled:opacity-50 active:scale-95",
          "data-ocid": "rating-submit-btn",
          children: isPending ? "Saving..." : "Submit Rating"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onClose,
          className: "text-xs px-3 py-2 rounded-full border border-border text-muted-foreground hover:bg-muted transition-smooth",
          "data-ocid": "rating-cancel-btn",
          children: "Cancel"
        }
      )
    ] })
  ] });
}
function ProductAverage({ productId }) {
  const { data: avg } = useProductAverageRating(productId);
  const displayValue = avg ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1 mb-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { value: displayValue, readOnly: true, size: 13 }),
    (avg === null || avg === void 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground opacity-60", children: "No ratings yet" })
  ] });
}
function ProductCard({ product }) {
  const [imgError, setImgError] = reactExports.useState(false);
  const [showRating, setShowRating] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "product-card fade-in flex flex-col",
      "data-ocid": "product-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full aspect-square bg-secondary overflow-hidden", children: !imgError && product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.imageUrl,
            alt: product.name,
            className: "w-full h-full object-cover transition-smooth hover:scale-105",
            onError: () => setImgError(true)
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBasket, { size: 36, className: "opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium opacity-60", children: "No Image" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 pb-1 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-foreground text-center leading-snug line-clamp-2 mb-1", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ProductAverage, { productId: product.id }),
          product.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center leading-relaxed line-clamp-3", children: product.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3", children: showRating ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          RatingForm,
          {
            productId: product.id,
            productName: product.name,
            onClose: () => setShowRating(false)
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowRating(true),
            className: "w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground py-1.5 rounded-lg hover:bg-muted/60 transition-smooth",
            "data-ocid": "rate-product-btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12 }),
              "Rate this product"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3 pt-2 flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${PRIMARY_PHONE}`,
              className: "btn-call-sm w-full rounded-full py-2.5",
              "data-ocid": "product-call-btn",
              "aria-label": `Call for price on ${product.name}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, strokeWidth: 2.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Call for Price" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: getWhatsAppLink(product.name),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center gap-1.5 w-full rounded-full py-2 text-xs font-semibold transition-smooth active:scale-95",
              style: { background: "#25D366", color: "#fff" },
              "data-ocid": "product-whatsapp-btn",
              "aria-label": `WhatsApp order for ${product.name}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 13, strokeWidth: 2.5 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WhatsApp Order" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function SkeletonCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "product-card flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square bg-muted animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pt-3 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-muted rounded animate-pulse mx-auto w-3/4 mb-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded animate-pulse mx-auto w-1/2 mb-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded animate-pulse mx-auto w-full mb-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded animate-pulse mx-auto w-4/5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-3 flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 bg-muted rounded-full animate-pulse w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-muted rounded-full animate-pulse w-full" })
    ] })
  ] });
}
function Products() {
  const { data: products, isLoading, isError, refetch } = useActiveProducts();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-primary-foreground leading-tight", children: "Our Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/80 mt-1", children: "Fresh & Quality Grocery Items" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background px-4 pt-4 pb-2 space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `tel:${PRIMARY_PHONE}`,
          className: "btn-call text-base",
          "data-ocid": "products-call-banner-btn",
          "aria-label": "Call for price now",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, strokeWidth: 2.5 }),
            "Call for Price Now"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://wa.me/919887193799",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm transition-smooth active:scale-95",
          style: { background: "#25D366", color: "#fff" },
          "data-ocid": "products-whatsapp-banner-btn",
          "aria-label": "Order via WhatsApp",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 17, strokeWidth: 2.5 }),
            "WhatsApp par Order karein"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4", children: [
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 gap-3",
          "aria-label": "Loading products",
          "data-ocid": "products-loading",
          children: Array.from({ length: 6 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, `skeleton-${i}`))
        }
      ),
      isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-16 gap-4 text-center",
          "data-ocid": "products-error",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ShoppingBasket,
              {
                size: 48,
                className: "text-muted-foreground opacity-40"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-lg", children: "Couldn't load products" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Please check your connection and try again." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => refetch(),
                className: "flex items-center gap-2 btn-call-sm px-6 py-3 rounded-full",
                "data-ocid": "products-retry-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 15 }),
                  "Try Again"
                ]
              }
            )
          ]
        }
      ),
      !isLoading && !isError && products && products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-16 gap-3 text-center",
          "data-ocid": "products-empty",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ShoppingBasket,
              {
                size: 48,
                className: "text-muted-foreground opacity-40"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-lg", children: "No products yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Products will appear here once added by the shop owner." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${PRIMARY_PHONE}`,
                className: "btn-call-sm px-6 py-3 rounded-full mt-2",
                "data-ocid": "products-empty-call-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15 }),
                  "Call Us Directly"
                ]
              }
            )
          ]
        }
      ),
      !isLoading && !isError && products && products.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-2 gap-3",
          "data-ocid": "products-grid",
          "aria-label": "Product grid",
          children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, String(product.id)))
        }
      )
    ] }),
    !isLoading && !isError && products && products.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-6 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `tel:${PRIMARY_PHONE}`,
        className: "btn-call text-base",
        "data-ocid": "products-call-bottom-btn",
        "aria-label": "Call for price",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, strokeWidth: 2.5 }),
          "Call for Price"
        ]
      }
    ) })
  ] });
}
export {
  Products as default
};
