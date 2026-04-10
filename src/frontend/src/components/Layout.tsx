import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
  showBottomNav?: boolean;
  className?: string;
}

export function Layout({
  children,
  showBottomNav = true,
  className = "",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main
        className={`flex-1 w-full max-w-lg mx-auto ${showBottomNav ? "pb-20" : ""} ${className}`}
      >
        {children}
      </main>
      {showBottomNav && <BottomNav />}
      {showBottomNav && (
        <footer className="pb-20 text-center py-3 text-xs text-muted-foreground bg-background">
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </footer>
      )}
    </div>
  );
}

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {title && (
        <header className="bg-card border-b border-border shadow-subtle sticky top-0 z-40">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Jain Grocery"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-display font-semibold text-foreground">
              {title}
            </span>
          </div>
        </header>
      )}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}
