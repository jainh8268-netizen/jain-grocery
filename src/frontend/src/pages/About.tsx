import { Link } from "@tanstack/react-router";
import { Lock, MapPin, Phone, Smartphone, Store, X } from "lucide-react";
import { useState } from "react";
import { Layout } from "../components/Layout";

function InstallInstructions({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="bg-card rounded-2xl border border-border p-4 shadow-subtle relative"
      data-ocid="about-install-card"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted-foreground transition-smooth"
        aria-label="Close install instructions"
      >
        <X size={12} />
      </button>
      <div className="flex items-center gap-2 mb-4 pr-6">
        <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
          <Smartphone size={15} className="text-accent-foreground" />
        </div>
        <h3 className="font-display font-semibold text-foreground text-base">
          📱 App Install Karein
        </h3>
      </div>

      <div className="space-y-4">
        {/* Android */}
        <div className="bg-muted/40 rounded-xl p-3">
          <p className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5">
            <span>🤖</span> Android (Chrome)
          </p>
          <ol className="space-y-1">
            {[
              "Chrome mein 3-dot menu (⋮) click karein",
              '"Add to Home screen" select karein',
              '"Add" dabayein — Done!',
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* iPhone */}
        <div className="bg-muted/40 rounded-xl p-3">
          <p className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5">
            <span>🍎</span> iPhone (Safari)
          </p>
          <ol className="space-y-1">
            {[
              "Safari mein Share button (□↑) click karein",
              '"Add to Home Screen" select karein',
              '"Add" dabayein — Done!',
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* PC */}
        <div className="bg-muted/40 rounded-xl p-3">
          <p className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1.5">
            <span>💻</span> Computer (PC/Mac)
          </p>
          <ol className="space-y-1">
            {[
              "Chrome mein address bar ke right side par install icon (⊕) click karein",
              'Ya browser 3-dot menu → "Install Jain Grocery"',
              '"Install" click karein — Done!',
            ].map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [showInstall, setShowInstall] = useState(false);

  return (
    <Layout>
      {/* Page Header */}
      <div className="section-header text-center">
        <h1 className="font-display text-2xl font-bold text-primary-foreground">
          About Us
        </h1>
      </div>

      <div className="px-5 py-6 space-y-6 fade-in">
        {/* Logo + Business Name */}
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="rounded-full border-4 border-primary/30 shadow-elevated overflow-hidden w-28 h-28 bg-card flex items-center justify-center">
            <img
              src="/assets/logo.png"
              alt="Jain Grocery Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement("div");
                  fallback.className =
                    "flex items-center justify-center w-full h-full";
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Jain Grocery
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Your Local Grocery Store
            </p>
          </div>
        </div>

        {/* Description Card */}
        <div className="bg-card rounded-2xl border border-border p-5 shadow-subtle">
          <div className="flex items-center gap-2 mb-3">
            <Store className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-foreground text-lg">
              Our Story
            </h3>
          </div>
          <p className="text-foreground/80 leading-relaxed text-sm">
            Jain Grocery is a local grocery shop in Devpura Bundi providing
            quality grocery products like dals, flours, spices, and gud.
          </p>
          <p className="text-foreground/80 leading-relaxed text-sm mt-3">
            Customers can browse products in the app and call us directly to
            place their order.
          </p>
        </div>

        {/* Location Card */}
        <div className="bg-card rounded-2xl border border-border p-5 shadow-subtle">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-foreground text-lg">
              Our Location
            </h3>
          </div>
          <p className="text-foreground/80 text-sm">Devpura, Bundi</p>
          <p className="text-foreground/80 text-sm">Rajasthan, India</p>
        </div>

        {/* Contact Card */}
        <div className="bg-card rounded-2xl border border-border p-5 shadow-subtle">
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-foreground text-lg">
              Contact Us
            </h3>
          </div>
          <div className="space-y-3">
            <a
              href="tel:9887193799"
              data-ocid="about-call-primary"
              className="btn-call"
            >
              <Phone className="w-5 h-5" />
              Call: 9887193799
            </a>
            <a
              href="tel:7014287291"
              data-ocid="about-call-secondary"
              className="btn-call"
            >
              <Phone className="w-5 h-5" />
              Call: 7014287291
            </a>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-muted/40 rounded-2xl border border-border p-5">
          <h3 className="font-display font-semibold text-foreground text-lg mb-3">
            What We Offer
          </h3>
          <ul className="space-y-2">
            {[
              "Fresh Dals & Pulses",
              "Flours & Grains",
              "Spices & Masalas",
              "Jaggery (Gud)",
              "And much more…",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* PWA Install */}
        {showInstall ? (
          <InstallInstructions onClose={() => setShowInstall(false)} />
        ) : (
          <button
            type="button"
            onClick={() => setShowInstall(true)}
            data-ocid="about-install-app-btn"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-accent/30 bg-accent/8 text-foreground hover:bg-accent/15 transition-colors duration-200 text-sm font-medium shadow-subtle"
          >
            <Smartphone className="w-4 h-4 text-accent-foreground" />📱 App
            Install Karein (Home Screen)
          </button>
        )}

        {/* Admin Login — owner only */}
        <div className="flex justify-center pt-2 pb-4">
          <Link
            to="/admin"
            data-ocid="about-admin-login"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/60 transition-colors duration-200 text-sm font-medium shadow-subtle"
          >
            <Lock className="w-4 h-4" />
            Admin Login
          </Link>
        </div>
      </div>
    </Layout>
  );
}
