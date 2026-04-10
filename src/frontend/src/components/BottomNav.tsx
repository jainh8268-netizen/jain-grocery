import { Link, useRouterState } from "@tanstack/react-router";
import { Grid3x3, Home, Info, Phone, ShoppingCart } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/products", label: "Products", icon: Grid3x3, exact: false },
  { to: "/order", label: "Order", icon: ShoppingCart, exact: false },
  { to: "/about", label: "About", icon: Info, exact: false },
  { to: "/contact", label: "Contact", icon: Phone, exact: false },
];

export function BottomNav() {
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      data-ocid="bottom-nav"
    >
      <div className="flex items-stretch h-16 max-w-lg mx-auto">
        {navItems.map(({ to, label, icon: Icon, exact }) => {
          const isActive = exact ? pathname === to : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center flex-1 gap-0.5 text-xs font-medium transition-colors duration-200 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid={`nav-${label.toLowerCase()}`}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 1.8}
                className={isActive ? "text-primary" : ""}
              />
              <span className={isActive ? "font-semibold" : ""}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
