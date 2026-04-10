import { u as useRouterState, j as jsxRuntimeExports, L as Link } from "./index-BUXfmnrd.js";
import { c as createLucideIcon } from "./createLucideIcon-Dt2RpemB.js";
import { P as Phone } from "./phone-BbDMeGaq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
];
const Grid3x3 = createLucideIcon("grid-3x3", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
];
const ShoppingCart = createLucideIcon("shopping-cart", __iconNode);
const navItems = [
  { to: "/", label: "Home", icon: House, exact: true },
  { to: "/products", label: "Products", icon: Grid3x3, exact: false },
  { to: "/order", label: "Order", icon: ShoppingCart, exact: false },
  { to: "/about", label: "About", icon: Info, exact: false },
  { to: "/contact", label: "Contact", icon: Phone, exact: false }
];
function BottomNav() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: "fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border",
      style: { paddingBottom: "env(safe-area-inset-bottom)" },
      "data-ocid": "bottom-nav",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-stretch h-16 max-w-lg mx-auto", children: navItems.map(({ to, label, icon: Icon, exact }) => {
        const isActive = exact ? pathname === to : pathname.startsWith(to);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to,
            className: `flex flex-col items-center justify-center flex-1 gap-0.5 text-xs font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
            "data-ocid": `nav-${label.toLowerCase()}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon,
                {
                  size: 20,
                  strokeWidth: isActive ? 2.5 : 1.8,
                  className: isActive ? "text-primary" : ""
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: isActive ? "font-semibold" : "", children: label })
            ]
          },
          to
        );
      }) })
    }
  );
}
function Layout({
  children,
  showBottomNav = true,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        className: `flex-1 w-full max-w-lg mx-auto ${showBottomNav ? "pb-20" : ""} ${className}`,
        children
      }
    ),
    showBottomNav && /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {}),
    showBottomNav && /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "pb-20 text-center py-3 text-xs text-muted-foreground bg-background", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ".",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hover:text-foreground transition-colors",
          children: "Built with love using caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  Layout as L,
  ShoppingCart as S
};
