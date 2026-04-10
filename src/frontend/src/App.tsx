import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/Home"));
const ProductsPage = lazy(() => import("./pages/Products"));
const OrderPage = lazy(() => import("./pages/Order"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const AdminPage = lazy(() => import("./pages/Admin"));
const AdminOrdersPage = lazy(() => import("./pages/AdminOrders"));
const AdminProductsPage = lazy(() => import("./pages/AdminProducts"));

function PageFallback() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-48 w-full rounded-xl" />
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <Outlet />
    </Suspense>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: ProductsPage,
});

const orderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order",
  component: OrderPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const adminOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/orders",
  component: AdminOrdersPage,
});

const adminProductsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/products",
  component: AdminProductsPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  orderRoute,
  aboutRoute,
  contactRoute,
  adminRoute,
  adminOrdersRoute,
  adminProductsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
