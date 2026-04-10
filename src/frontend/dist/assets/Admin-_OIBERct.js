import { a as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-BUXfmnrd.js";
import { B as Button } from "./button-jktOQAg4.js";
import { L as Label, I as Input } from "./label-Coe8TfdT.js";
import { d as useAdminLogin } from "./backend-api-DVfVOMSU.js";
import { u as useAdmin } from "./use-admin-BM8PHilH.js";
import { c as createLucideIcon } from "./createLucideIcon-Dt2RpemB.js";
import { L as Lock } from "./lock-jCKWtgZ2.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode);
function Admin() {
  const navigate = useNavigate();
  const { isLoggedIn, saveToken } = useAdmin();
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const login = useAdminLogin();
  reactExports.useEffect(() => {
    if (isLoggedIn) {
      navigate({ to: "/admin/orders" });
    }
  }, [isLoggedIn, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await login.mutateAsync({ username, password });
      if (result.__kind__ === "ok") {
        saveToken(result.ok);
        navigate({ to: "/admin/orders" });
      } else {
        setError(
          "Access denied. Sirf authorized person hi login kar sakte hain."
        );
      }
    } catch {
      setError(
        "Access denied. Sirf authorized person hi login kar sakte hain."
      );
    }
  };
  if (isLoggedIn) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/logo.png",
          alt: "Jain Grocery",
          className: "w-full h-full object-cover",
          onError: (e) => {
            e.target.src = "/assets/images/placeholder.svg";
          }
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Jain Grocery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Admin Panel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-amber-600 mt-0.5 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-amber-800", children: "Admin access is restricted to authorized personnel only." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 mt-0.5", children: "यह पेज केवल अधिकृत व्यक्ति के लिए है।" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-elevated border border-border p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold text-foreground mb-5 text-center flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-primary" }),
        "Sign In"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "username", className: "text-sm font-medium", children: "Username" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "username",
              "data-ocid": "admin-username-input",
              type: "text",
              placeholder: "Enter username",
              value: username,
              onChange: (e) => setUsername(e.target.value),
              autoComplete: "username",
              required: true,
              className: "h-11"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "password",
              "data-ocid": "admin-password-input",
              type: "password",
              placeholder: "Enter password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              autoComplete: "current-password",
              required: true,
              className: "h-11"
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "admin-login-error",
            className: "flex items-start gap-2 bg-destructive/10 border border-destructive/20 rounded-lg py-2.5 px-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-destructive mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm leading-snug", children: error })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            "data-ocid": "admin-login-btn",
            className: "w-full h-11 font-semibold text-base mt-2",
            disabled: login.isPending,
            children: login.isPending ? "Signing in…" : "Sign In"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground mt-6", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Jain Grocery · Admin Access Only"
    ] })
  ] }) });
}
export {
  Admin as default
};
