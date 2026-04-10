import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  CheckCircle,
  Clock,
  Eye,
  LogOut,
  Package,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { useEffect } from "react";
import {
  useAllOrders,
  useMarkOrderCompleted,
  useMarkOrderRead,
} from "../api/backend-api";
import { useAdmin } from "../hooks/use-admin";
import { OrderStatus } from "../types";
import type { Order } from "../types";

function formatDate(nanoseconds: bigint): string {
  const ms = Number(nanoseconds) / 1_000_000;
  return new Date(ms).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function statusBadge(status: OrderStatus) {
  if (status === OrderStatus.completed)
    return (
      <Badge className="bg-accent/20 text-accent-foreground border-accent/30 text-xs">
        <CheckCircle className="w-3 h-3 mr-1" />
        Completed
      </Badge>
    );
  if (status === OrderStatus.read)
    return (
      <Badge className="bg-secondary text-secondary-foreground border-border text-xs">
        <Eye className="w-3 h-3 mr-1" />
        Read
      </Badge>
    );
  return (
    <Badge className="bg-primary/15 text-primary border-primary/30 text-xs font-semibold">
      <Clock className="w-3 h-3 mr-1" />
      Pending
    </Badge>
  );
}

function OrderCard({
  order,
  token,
}: {
  order: Order;
  token: string;
}) {
  const markRead = useMarkOrderRead(token);
  const markCompleted = useMarkOrderCompleted(token);
  const isPending = order.status === OrderStatus.pending;
  const isRead = order.status === OrderStatus.read;

  return (
    <div
      data-ocid={`order-card-${order.id}`}
      className={`bg-card rounded-2xl border p-4 space-y-3 transition-smooth ${
        isPending
          ? "border-primary/40 shadow-elevated"
          : "border-border shadow-subtle"
      }`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-semibold text-foreground truncate">
            {order.customerName}
          </p>
          <a
            href={`tel:${order.customerPhone}`}
            className="flex items-center gap-1 text-primary text-sm mt-0.5 hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            {order.customerPhone}
          </a>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          {statusBadge(order.status)}
          <span className="text-muted-foreground text-xs">
            {formatDate(order.createdAt)}
          </span>
        </div>
      </div>

      {/* Items */}
      <div className="bg-muted/50 rounded-xl p-3 space-y-1">
        {order.items.map((item) => (
          <div
            key={`${item.productId}-${item.productName}`}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-foreground">{item.productName}</span>
            <span className="text-muted-foreground font-medium">
              ×{item.quantity.toString()}
            </span>
          </div>
        ))}
      </div>

      {/* Notes */}
      {order.notes && (
        <p className="text-sm text-muted-foreground italic border-l-2 border-border pl-3">
          {order.notes}
        </p>
      )}

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        {isPending && (
          <Button
            size="sm"
            variant="outline"
            data-ocid={`mark-read-${order.id}`}
            className="flex-1 text-xs h-8"
            disabled={markRead.isPending}
            onClick={() => markRead.mutate(order.id)}
          >
            <Eye className="w-3.5 h-3.5 mr-1" />
            Mark Read
          </Button>
        )}
        {(isPending || isRead) && (
          <Button
            size="sm"
            data-ocid={`mark-completed-${order.id}`}
            className="flex-1 text-xs h-8"
            disabled={markCompleted.isPending}
            onClick={() => markCompleted.mutate(order.id)}
          >
            <CheckCircle className="w-3.5 h-3.5 mr-1" />
            Mark Completed
          </Button>
        )}
        {order.status === OrderStatus.completed && (
          <p className="text-xs text-muted-foreground text-center w-full py-1">
            Order fulfilled ✓
          </p>
        )}
      </div>
    </div>
  );
}

export default function AdminOrders() {
  const navigate = useNavigate();
  const { token, isLoggedIn, clearToken } = useAdmin();
  const { data: orders = [], isLoading } = useAllOrders(token);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ to: "/admin" });
    }
  }, [isLoggedIn, navigate]);

  const unreadCount = orders.filter(
    (o) => o.status === OrderStatus.pending,
  ).length;

  const sortedOrders = [...orders].sort((a, b) => {
    const priority = { pending: 0, read: 1, completed: 2 };
    const pa = priority[a.status as keyof typeof priority] ?? 1;
    const pb = priority[b.status as keyof typeof priority] ?? 1;
    if (pa !== pb) return pa - pb;
    return Number(b.createdAt - a.createdAt);
  });

  const handleLogout = () => {
    clearToken();
    navigate({ to: "/admin" });
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-subtle sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo.png"
              alt="Jain Grocery"
              className="h-8 w-8 rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
            <span className="font-display font-semibold text-foreground">
              Admin
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            data-ocid="admin-logout-btn"
            onClick={handleLogout}
            className="text-muted-foreground hover:text-foreground text-xs h-8"
          >
            <LogOut className="w-3.5 h-3.5 mr-1" />
            Logout
          </Button>
        </div>

        {/* Tab Nav */}
        <div className="max-w-2xl mx-auto px-4 flex border-t border-border">
          <Link
            to="/admin/orders"
            data-ocid="admin-tab-orders"
            className="flex-1 py-2.5 text-center text-sm font-semibold text-primary border-b-2 border-primary"
          >
            <span className="flex items-center justify-center gap-1.5">
              <ShoppingBag className="w-4 h-4" />
              Orders
              {unreadCount > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5 py-0.5 leading-none ml-1">
                  {unreadCount}
                </span>
              )}
            </span>
          </Link>
          <Link
            to="/admin/products"
            data-ocid="admin-tab-products"
            className="flex-1 py-2.5 text-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="flex items-center justify-center gap-1.5">
              <Package className="w-4 h-4" />
              Products
            </span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-5">
        {/* Section title */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Customer Orders
          </h2>
          {unreadCount > 0 && (
            <span className="text-sm text-primary font-medium">
              {unreadCount} new
            </span>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-36 w-full rounded-2xl" />
            ))}
          </div>
        ) : sortedOrders.length === 0 ? (
          <div
            data-ocid="orders-empty-state"
            className="text-center py-16 space-y-3"
          >
            <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground/40" />
            <p className="text-muted-foreground font-medium">No orders yet</p>
            <p className="text-sm text-muted-foreground">
              Orders placed by customers will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedOrders.map((order) => (
              <OrderCard
                key={order.id.toString()}
                order={order}
                token={token!}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
