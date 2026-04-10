import { a as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, S as Skeleton } from "./index-BUXfmnrd.js";
import { L as LogOut, E as Eye, B as Badge } from "./badge-B13odcwk.js";
import { B as Button } from "./button-jktOQAg4.js";
import { e as useAllOrders, O as OrderStatus, f as useMarkOrderRead, g as useMarkOrderCompleted } from "./backend-api-DVfVOMSU.js";
import { u as useAdmin } from "./use-admin-BM8PHilH.js";
import { S as ShoppingBag } from "./shopping-bag-B2dKOntW.js";
import { P as Package } from "./package-CIlo3Ywu.js";
import { P as Phone } from "./phone-BbDMeGaq.js";
import { C as CircleCheckBig } from "./circle-check-big-D_Twhecs.js";
import { c as createLucideIcon } from "./createLucideIcon-Dt2RpemB.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function formatDate(nanoseconds) {
  const ms = Number(nanoseconds) / 1e6;
  return new Date(ms).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function statusBadge(status) {
  if (status === OrderStatus.completed)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/20 text-accent-foreground border-accent/30 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3 mr-1" }),
      "Completed"
    ] });
  if (status === OrderStatus.read)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-secondary text-secondary-foreground border-border text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 mr-1" }),
      "Read"
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/15 text-primary border-primary/30 text-xs font-semibold", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
    "Pending"
  ] });
}
function OrderCard({
  order,
  token
}) {
  const markRead = useMarkOrderRead(token);
  const markCompleted = useMarkOrderCompleted(token);
  const isPending = order.status === OrderStatus.pending;
  const isRead = order.status === OrderStatus.read;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `order-card-${order.id}`,
      className: `bg-card rounded-2xl border p-4 space-y-3 transition-smooth ${isPending ? "border-primary/40 shadow-elevated" : "border-border shadow-subtle"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground truncate", children: order.customerName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${order.customerPhone}`,
                className: "flex items-center gap-1 text-primary text-sm mt-0.5 hover:underline",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
                  order.customerPhone
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1 shrink-0", children: [
            statusBadge(order.status),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: formatDate(order.createdAt) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 rounded-xl p-3 space-y-1", children: order.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center justify-between text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item.productName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-medium", children: [
                "×",
                item.quantity.toString()
              ] })
            ]
          },
          `${item.productId}-${item.productName}`
        )) }),
        order.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground italic border-l-2 border-border pl-3", children: order.notes }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
          isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              "data-ocid": `mark-read-${order.id}`,
              className: "flex-1 text-xs h-8",
              disabled: markRead.isPending,
              onClick: () => markRead.mutate(order.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5 mr-1" }),
                "Mark Read"
              ]
            }
          ),
          (isPending || isRead) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              "data-ocid": `mark-completed-${order.id}`,
              className: "flex-1 text-xs h-8",
              disabled: markCompleted.isPending,
              onClick: () => markCompleted.mutate(order.id),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5 mr-1" }),
                "Mark Completed"
              ]
            }
          ),
          order.status === OrderStatus.completed && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center w-full py-1", children: "Order fulfilled ✓" })
        ] })
      ]
    }
  );
}
function AdminOrders() {
  const navigate = useNavigate();
  const { token, isLoggedIn, clearToken } = useAdmin();
  const { data: orders = [], isLoading } = useAllOrders(token);
  reactExports.useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: "/admin" });
    }
  }, [isLoggedIn, navigate]);
  const unreadCount = orders.filter(
    (o) => o.status === OrderStatus.pending
  ).length;
  const sortedOrders = [...orders].sort((a, b) => {
    const priority = { pending: 0, read: 1, completed: 2 };
    const pa = priority[a.status] ?? 1;
    const pb = priority[b.status] ?? 1;
    if (pa !== pb) return pa - pb;
    return Number(b.createdAt - a.createdAt);
  });
  const handleLogout = () => {
    clearToken();
    navigate({ to: "/admin" });
  };
  if (!isLoggedIn) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-card border-b border-border shadow-subtle sticky top-0 z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 h-14 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/logo.png",
              alt: "Jain Grocery",
              className: "h-8 w-8 rounded-full object-cover",
              onError: (e) => {
                e.target.src = "/assets/images/placeholder.svg";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground", children: "Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            "data-ocid": "admin-logout-btn",
            onClick: handleLogout,
            className: "text-muted-foreground hover:text-foreground text-xs h-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5 mr-1" }),
              "Logout"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto px-4 flex border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin/orders",
            "data-ocid": "admin-tab-orders",
            className: "flex-1 py-2.5 text-center text-sm font-semibold text-primary border-b-2 border-primary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
              "Orders",
              unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground text-xs rounded-full px-1.5 py-0.5 leading-none ml-1", children: unreadCount })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin/products",
            "data-ocid": "admin-tab-products",
            className: "flex-1 py-2.5 text-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
              "Products"
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 w-full max-w-2xl mx-auto px-4 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold text-foreground", children: "Customer Orders" }),
        unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-primary font-medium", children: [
          unreadCount,
          " new"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-36 w-full rounded-2xl" }, i)) }) : sortedOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": "orders-empty-state",
          className: "text-center py-16 space-y-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-12 h-12 mx-auto text-muted-foreground/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-medium", children: "No orders yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Orders placed by customers will appear here." })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: sortedOrders.map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        OrderCard,
        {
          order,
          token
        },
        order.id.toString()
      )) })
    ] })
  ] });
}
export {
  AdminOrders as default
};
