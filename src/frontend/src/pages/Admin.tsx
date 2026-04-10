import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { Lock, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { useAdminLogin } from "../api/backend-api";
import { useAdmin } from "../hooks/use-admin";

export default function Admin() {
  const navigate = useNavigate();
  const { isLoggedIn, saveToken } = useAdmin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAdminLogin();

  // If already logged in (token in localStorage), redirect immediately
  useEffect(() => {
    if (isLoggedIn) {
      navigate({ to: "/admin/orders" });
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const result = await login.mutateAsync({ username, password });
      if (result.__kind__ === "ok") {
        saveToken(result.ok);
        navigate({ to: "/admin/orders" });
      } else {
        setError(
          "Access denied. Sirf authorized person hi login kar sakte hain.",
        );
      }
    } catch {
      setError(
        "Access denied. Sirf authorized person hi login kar sakte hain.",
      );
    }
  };

  // Don't render the form if already redirecting
  if (isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo & Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated mb-4">
            <img
              src="/assets/logo.png"
              alt="Jain Grocery"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "/assets/images/placeholder.svg";
              }}
            />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Jain Grocery
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Admin Panel</p>
        </div>

        {/* Restricted Access Notice */}
        <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4">
          <ShieldAlert className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-amber-800">
              Admin access is restricted to authorized personnel only.
            </p>
            <p className="text-xs text-amber-700 mt-0.5">
              यह पेज केवल अधिकृत व्यक्ति के लिए है।
            </p>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-card rounded-2xl shadow-elevated border border-border p-6">
          <h2 className="font-display text-lg font-semibold text-foreground mb-5 text-center flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="username" className="text-sm font-medium">
                Username
              </Label>
              <Input
                id="username"
                data-ocid="admin-username-input"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="h-11"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                data-ocid="admin-password-input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="h-11"
              />
            </div>

            {error && (
              <div
                data-ocid="admin-login-error"
                className="flex items-start gap-2 bg-destructive/10 border border-destructive/20 rounded-lg py-2.5 px-3"
              >
                <ShieldAlert className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                <p className="text-destructive text-sm leading-snug">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              data-ocid="admin-login-btn"
              className="w-full h-11 font-semibold text-base mt-2"
              disabled={login.isPending}
            >
              {login.isPending ? "Signing in…" : "Sign In"}
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          © {new Date().getFullYear()} Jain Grocery · Admin Access Only
        </p>
      </div>
    </div>
  );
}
