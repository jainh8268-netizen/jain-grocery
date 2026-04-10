import { a as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, S as Skeleton } from "./index-BUXfmnrd.js";
import { L as LogOut, B as Badge, E as Eye } from "./badge-B13odcwk.js";
import { B as Button } from "./button-jktOQAg4.js";
import { L as Label, I as Input } from "./label-Coe8TfdT.js";
import { C as Check, T as Textarea, L as LoaderCircle } from "./textarea-D_lwk8aT.js";
import { h as useAllProducts, i as useAddProduct, j as useFixProductImages, k as useUploadImage, l as useToggleProduct } from "./backend-api-DVfVOMSU.js";
import { u as useAdmin } from "./use-admin-BM8PHilH.js";
import { S as ShoppingBag } from "./shopping-bag-B2dKOntW.js";
import { P as Package } from "./package-CIlo3Ywu.js";
import { c as createLucideIcon } from "./createLucideIcon-Dt2RpemB.js";
import { X } from "./x-BBgfwS_S.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
];
const ImageOff = createLucideIcon("image-off", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
];
const ImagePlus = createLucideIcon("image-plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
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
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
function ProductRow({
  product,
  token
}) {
  const toggle = useToggleProduct(token);
  const upload = useUploadImage(token);
  const [imgError, setImgError] = reactExports.useState(false);
  const [showUpload, setShowUpload] = reactExports.useState(false);
  const [preview, setPreview] = reactExports.useState(null);
  const [saveMsg, setSaveMsg] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const handleFileChange = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    setSaveMsg(null);
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    try {
      await upload.mutateAsync({ file, productId: product.id });
      setSaveMsg("success");
      setImgError(false);
      setTimeout(() => {
        setSaveMsg(null);
        setShowUpload(false);
        setPreview(null);
      }, 1800);
    } catch (err) {
      console.error(
        "[ProductRow] Image upload failed for product",
        String(product.id),
        err
      );
      setSaveMsg("error");
      setPreview(null);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };
  const handleClose = () => {
    setShowUpload(false);
    setSaveMsg(null);
    setPreview(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `product-row-${product.id}`,
      className: `bg-card rounded-xl border p-3 transition-smooth ${product.isActive ? "border-border" : "border-border opacity-60"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0 flex items-center justify-center", children: (preview ?? product.imageUrl) && !imgError ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: preview ?? product.imageUrl,
              alt: product.name,
              className: "w-full h-full object-cover",
              onError: () => setImgError(true)
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(ImageOff, { className: "w-6 h-6 text-muted-foreground/40" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm truncate", children: product.name }),
            product.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate mt-0.5", children: product.description }),
            product.isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent/20 text-accent-foreground border-accent/30 text-xs mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3 mr-1" }),
              "Active"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "text-muted-foreground text-xs mt-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3 h-3 mr-1" }),
                  "Hidden"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                "data-ocid": `update-photo-toggle-${product.id}`,
                className: "h-8 w-8 p-0 text-muted-foreground hover:text-primary",
                title: "Photo gallery se change karein",
                disabled: upload.isPending,
                onClick: () => {
                  setShowUpload((v) => !v);
                  setSaveMsg(null);
                  setPreview(null);
                },
                children: upload.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: product.isActive ? "outline" : "default",
                "data-ocid": `toggle-product-${product.id}`,
                className: "text-xs h-8 px-3",
                disabled: toggle.isPending,
                onClick: () => toggle.mutate(product.id),
                children: product.isActive ? "Hide" : "Show"
              }
            )
          ] })
        ] }),
        showUpload && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 pt-3 border-t border-border space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-muted-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "w-3.5 h-3.5" }),
            "Gallery se nayi photo choose karein"
          ] }),
          upload.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-2 px-3 bg-muted/50 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Photo upload ho rahi hai…" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                accept: "image/*",
                "data-ocid": `photo-file-input-${product.id}`,
                className: "hidden",
                onChange: handleFileChange
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                "data-ocid": `pick-photo-btn-${product.id}`,
                variant: "outline",
                className: "flex-1 h-9 text-xs gap-1.5",
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "w-3.5 h-3.5" }),
                  "Gallery se Photo Chunein"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-9 px-2 shrink-0 text-muted-foreground",
                onClick: handleClose,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
              }
            )
          ] }),
          saveMsg === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-600 flex items-center gap-1 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }),
            " Photo update ho gayi!"
          ] }),
          saveMsg === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs", children: "Upload nahi hua. Dobara try karein." })
        ] })
      ]
    }
  );
}
function AdminProducts() {
  const navigate = useNavigate();
  const { token, isLoggedIn, clearToken } = useAdmin();
  const { data: products = [], isLoading } = useAllProducts(token);
  const addProduct = useAddProduct(token);
  const fixImages = useFixProductImages();
  const uploadNewImage = useUploadImage(token);
  const [newName, setNewName] = reactExports.useState("");
  const [newImageFile, setNewImageFile] = reactExports.useState(null);
  const [newImagePreview, setNewImagePreview] = reactExports.useState(null);
  const [newDescription, setNewDescription] = reactExports.useState("");
  const [addError, setAddError] = reactExports.useState("");
  const [fixMsg, setFixMsg] = reactExports.useState(null);
  const [showFixConfirm, setShowFixConfirm] = reactExports.useState(false);
  const newImageInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: "/admin" });
    }
  }, [isLoggedIn, navigate]);
  const handleNewImageChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    setNewImageFile(file);
    setNewImagePreview(URL.createObjectURL(file));
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setAddError("");
    if (!newName.trim()) {
      setAddError("Product name is required.");
      return;
    }
    try {
      let imageUrl = "";
      if (newImageFile) {
        const uploadFn = uploadNewImage;
        imageUrl = await uploadFn.mutateAsync({ file: newImageFile });
      }
      await addProduct.mutateAsync({
        name: newName.trim(),
        imageUrl,
        description: newDescription.trim()
      });
      setNewName("");
      setNewImageFile(null);
      setNewImagePreview(null);
      setNewDescription("");
      if (newImageInputRef.current) newImageInputRef.current.value = "";
    } catch (err) {
      console.error("[AdminProducts] Add product failed:", err);
      setAddError("Product add nahi hua. Dobara try karein.");
    }
  };
  const handleFixImages = async () => {
    setFixMsg(null);
    setShowFixConfirm(false);
    try {
      await fixImages.mutateAsync();
      setFixMsg("success");
      setTimeout(() => setFixMsg(null), 4e3);
    } catch {
      setFixMsg("error");
    }
  };
  const handleLogout = () => {
    clearToken();
    navigate({ to: "/admin" });
  };
  if (!isLoggedIn) return null;
  const activeCount = products.filter((p) => p.isActive).length;
  const isAddingProduct = addProduct.isPending || uploadNewImage.isPending;
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
            className: "flex-1 py-2.5 text-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
              "Orders"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin/products",
            "data-ocid": "admin-tab-products",
            className: "flex-1 py-2.5 text-center text-sm font-semibold text-primary border-b-2 border-primary",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center justify-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
              "Products"
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 w-full max-w-2xl mx-auto px-4 py-5 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-4 h-4 text-amber-600 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-amber-800", children: "Galat Photos Theek Karo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 mt-0.5", children: "Products 10–13 ki galat image URLs saaf ho jayengi. Phir aap camera icon se gallery se nayi photo laga sakte hain." })
          ] })
        ] }),
        !showFixConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            "data-ocid": "fix-photos-btn",
            className: "w-full h-9 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm",
            disabled: fixImages.isPending,
            onClick: () => setShowFixConfirm(true),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-4 h-4 mr-1.5" }),
              "Galat Photos Theek Karo"
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-amber-800", children: "Aap sure hain? Products 10–13 ki image URLs clear ho jayengi." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                "data-ocid": "fix-photos-confirm-btn",
                className: "flex-1 h-9 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold",
                disabled: fixImages.isPending,
                onClick: handleFixImages,
                children: fixImages.isPending ? "Ho raha hai…" : "Haan, Theek Karo"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "flex-1 h-9 text-xs",
                onClick: () => setShowFixConfirm(false),
                children: "Cancel"
              }
            )
          ] })
        ] }),
        fixMsg === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-green-700 flex items-center gap-1 font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }),
          " Photos clear ho gayi! Ab camera icon se gallery se nayi photos chunein."
        ] }),
        fixMsg === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs font-medium", children: "Kuch galat hua. Dobara try karein." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border p-4 shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-base font-semibold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 text-primary" }),
          "Add New Product"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddProduct, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "product-name", className: "text-sm font-medium", children: "Product Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "product-name",
                "data-ocid": "add-product-name",
                placeholder: "e.g. Moong Dal",
                value: newName,
                onChange: (e) => setNewName(e.target.value),
                className: "h-10"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "product-description",
                className: "text-sm font-medium",
                children: "Description (Hindi mein likhen)"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "product-description",
                "data-ocid": "add-product-description",
                placeholder: "e.g. शुद्ध और ताजी मूंग दाल, बेहतरीन स्वाद के लिए।",
                value: newDescription,
                onChange: (e) => setNewDescription(e.target.value),
                rows: 3,
                className: "resize-none text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium", children: "Product Photo (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: newImageInputRef,
                type: "file",
                accept: "image/*",
                "data-ocid": "add-product-image-file",
                className: "hidden",
                onChange: handleNewImageChange
              }
            ),
            newImagePreview ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-2 bg-muted/40 rounded-lg border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: newImagePreview,
                  alt: "Preview",
                  className: "w-14 h-14 rounded-lg object-cover shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground font-medium truncate", children: newImageFile == null ? void 0 : newImageFile.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Photo ready hai" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "button",
                  size: "sm",
                  variant: "ghost",
                  className: "h-8 w-8 p-0 text-muted-foreground shrink-0",
                  onClick: () => {
                    setNewImageFile(null);
                    setNewImagePreview(null);
                    if (newImageInputRef.current)
                      newImageInputRef.current.value = "";
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                "data-ocid": "add-product-image-btn",
                className: "w-full h-10 gap-2 text-sm",
                onClick: () => {
                  var _a;
                  return (_a = newImageInputRef.current) == null ? void 0 : _a.click();
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "w-4 h-4" }),
                  "Gallery se Photo Chunein"
                ]
              }
            )
          ] }),
          addError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-xs", children: addError }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              "data-ocid": "add-product-btn",
              className: "w-full h-10 font-semibold",
              disabled: isAddingProduct,
              children: isAddingProduct ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-1.5 animate-spin" }),
                uploadNewImage.isPending ? "Photo upload ho rahi hai…" : "Adding…"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-1.5" }),
                "Add Product"
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-semibold text-foreground", children: "All Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            activeCount,
            "/",
            products.length,
            " active"
          ] })
        ] }),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-xl" }, i)) }) : products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "products-empty-state",
            className: "text-center py-12 space-y-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-10 h-10 mx-auto text-muted-foreground/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No products yet." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Add your first product above." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProductRow,
          {
            product,
            token
          },
          product.id.toString()
        )) })
      ] })
    ] })
  ] });
}
export {
  AdminProducts as default
};
