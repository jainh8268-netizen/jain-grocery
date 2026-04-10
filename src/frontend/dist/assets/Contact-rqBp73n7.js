import { j as jsxRuntimeExports } from "./index-BUXfmnrd.js";
import { L as Layout } from "./Layout-DpysmBCh.js";
import { S as Store, M as MapPin } from "./store-CvMTe6W7.js";
import { P as Phone } from "./phone-BbDMeGaq.js";
import "./createLucideIcon-Dt2RpemB.js";
const PHONE_PRIMARY = "9887193799";
const PHONE_SECONDARY = "7014287291";
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 text-sm mt-1", children: "We're here to help — call us anytime" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-6 space-y-5 fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border shadow-subtle overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-full p-2.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide", children: "Business" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-lg leading-tight", children: "Jain Grocery" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 px-5 py-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-full p-2.5 shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold leading-snug mt-0.5", children: "Devpura, Bundi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Rajasthan" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/10 rounded-full p-2.5 shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2", children: "Phone Numbers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${PHONE_PRIMARY}`,
                className: "block text-foreground font-semibold text-base hover:text-primary transition-colors",
                "data-ocid": "contact-phone-primary",
                children: PHONE_PRIMARY
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `tel:${PHONE_SECONDARY}`,
                className: "block text-muted-foreground font-medium text-sm mt-0.5 hover:text-primary transition-colors",
                "data-ocid": "contact-phone-secondary",
                children: PHONE_SECONDARY
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `tel:${PHONE_PRIMARY}`,
          className: "btn-call text-lg py-4",
          "data-ocid": "contact-call-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
            "Call Now — ",
            PHONE_PRIMARY
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `tel:${PHONE_SECONDARY}`,
          className: "flex items-center justify-center gap-2 w-full bg-primary/10 text-primary px-6 py-3.5 rounded-full font-semibold text-base transition-smooth hover:bg-primary/20 active:scale-95 border border-primary/30",
          "data-ocid": "contact-call-secondary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
            "Call — ",
            PHONE_SECONDARY
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border shadow-subtle overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 h-36 flex flex-col items-center justify-center gap-3 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "24px 24px"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 bg-primary rounded-full p-4 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-7 w-7 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 text-sm font-semibold text-foreground/70", children: "Devpura, Bundi, Rajasthan" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-3 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "📍 Find us in Devpura locality, Bundi" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 rounded-xl px-4 py-3 border border-accent/20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: "🕐 Call us to check availability & get price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "We're happy to help with all grocery needs" })
      ] })
    ] })
  ] });
}
export {
  Contact as default
};
