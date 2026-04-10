import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BUXfmnrd.js";
import { L as Layout } from "./Layout-DpysmBCh.js";
import { S as Store, M as MapPin } from "./store-CvMTe6W7.js";
import { P as Phone } from "./phone-BbDMeGaq.js";
import { S as Smartphone } from "./smartphone-DG4je4NN.js";
import { L as Lock } from "./lock-jCKWtgZ2.js";
import { X } from "./x-BBgfwS_S.js";
import "./createLucideIcon-Dt2RpemB.js";
function InstallInstructions({ onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-2xl border border-border p-4 shadow-subtle relative",
      "data-ocid": "about-install-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-smooth",
            "aria-label": "Close install instructions",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4 pr-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 15, className: "text-accent-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base", children: "📱 App Install Karein" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🤖" }),
              " Android (Chrome)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: [
              "Chrome mein 3-dot menu (⋮) click karein",
              '"Add to Home screen" select karein',
              '"Add" dabayein — Done!'
            ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5", children: i + 1 }),
                  step
                ]
              },
              step
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🍎" }),
              " iPhone (Safari)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: [
              "Safari mein Share button (□↑) click karein",
              '"Add to Home Screen" select karein',
              '"Add" dabayein — Done!'
            ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5", children: i + 1 }),
                  step
                ]
              },
              step
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💻" }),
              " Computer (PC/Mac)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-1", children: [
              "Chrome mein address bar ke right side par install icon (⊕) click karein",
              'Ya browser 3-dot menu → "Install Jain Grocery"',
              '"Install" click karein — Done!'
            ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5", children: i + 1 }),
                  step
                ]
              },
              step
            )) })
          ] })
        ] })
      ]
    }
  );
}
function About() {
  const [showInstall, setShowInstall] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-header text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-primary-foreground", children: "About Us" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-6 space-y-6 fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border-4 border-primary/30 shadow-elevated overflow-hidden w-28 h-28 bg-card flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/assets/logo.png",
            alt: "Jain Grocery Logo",
            className: "w-full h-full object-cover",
            onError: (e) => {
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const fallback = document.createElement("div");
                fallback.className = "flex items-center justify-center w-full h-full";
                parent.appendChild(fallback);
              }
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Jain Grocery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Your Local Grocery Store" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-5 shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg", children: "Our Story" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 leading-relaxed text-sm", children: "Jain Grocery is a local grocery shop in Devpura Bundi providing quality grocery products like dals, flours, spices, and gud." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 leading-relaxed text-sm mt-3", children: "Customers can browse products in the app and call us directly to place their order." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-5 shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg", children: "Our Location" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 text-sm", children: "Devpura, Bundi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 text-sm", children: "Rajasthan, India" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-5 shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg", children: "Contact Us" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:9887193799",
              "data-ocid": "about-call-primary",
              className: "btn-call",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                "Call: 9887193799"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:7014287291",
              "data-ocid": "about-call-secondary",
              className: "btn-call",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                "Call: 7014287291"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-2xl border border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg mb-3", children: "What We Offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
          "Fresh Dals & Pulses",
          "Flours & Grains",
          "Spices & Masalas",
          "Jaggery (Gud)",
          "And much more…"
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-center gap-2 text-sm text-foreground/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary flex-shrink-0" }),
              item
            ]
          },
          item
        )) })
      ] }),
      showInstall ? /* @__PURE__ */ jsxRuntimeExports.jsx(InstallInstructions, { onClose: () => setShowInstall(false) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setShowInstall(true),
          "data-ocid": "about-install-app-btn",
          className: "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-accent/30 bg-accent/8 text-foreground hover:bg-accent/15 transition-colors duration-200 text-sm font-medium shadow-subtle",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "w-4 h-4 text-accent-foreground" }),
            "📱 App Install Karein (Home Screen)"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-2 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/admin",
          "data-ocid": "about-admin-login",
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/60 transition-colors duration-200 text-sm font-medium shadow-subtle",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
            "Admin Login"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  About as default
};
