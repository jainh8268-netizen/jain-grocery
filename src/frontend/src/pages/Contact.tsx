import { MapPin, Phone, Store } from "lucide-react";
import { Layout } from "../components/Layout";

const PHONE_PRIMARY = "9887193799";
const PHONE_SECONDARY = "7014287291";

export default function Contact() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="section-header text-center">
        <h1 className="font-display text-2xl font-bold">Contact Us</h1>
        <p className="text-primary-foreground/80 text-sm mt-1">
          We're here to help — call us anytime
        </p>
      </div>

      <div className="px-4 py-6 space-y-5 fade-in">
        {/* Business Card */}
        <div className="bg-card rounded-2xl border border-border shadow-subtle overflow-hidden">
          {/* Business Name Row */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <div className="bg-primary/10 rounded-full p-2.5 shrink-0">
              <Store className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                Business
              </p>
              <p className="font-display font-bold text-foreground text-lg leading-tight">
                Jain Grocery
              </p>
            </div>
          </div>

          {/* Address Row */}
          <div className="flex items-start gap-3 px-5 py-4 border-b border-border">
            <div className="bg-primary/10 rounded-full p-2.5 shrink-0 mt-0.5">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                Address
              </p>
              <p className="text-foreground font-semibold leading-snug mt-0.5">
                Devpura, Bundi
              </p>
              <p className="text-muted-foreground text-sm">Rajasthan</p>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-3 px-5 py-4">
            <div className="bg-primary/10 rounded-full p-2.5 shrink-0 mt-0.5">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
                Phone Numbers
              </p>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="block text-foreground font-semibold text-base hover:text-primary transition-colors"
                data-ocid="contact-phone-primary"
              >
                {PHONE_PRIMARY}
              </a>
              <a
                href={`tel:${PHONE_SECONDARY}`}
                className="block text-muted-foreground font-medium text-sm mt-0.5 hover:text-primary transition-colors"
                data-ocid="contact-phone-secondary"
              >
                {PHONE_SECONDARY}
              </a>
            </div>
          </div>
        </div>

        {/* Primary Call Button */}
        <a
          href={`tel:${PHONE_PRIMARY}`}
          className="btn-call text-lg py-4"
          data-ocid="contact-call-primary"
        >
          <Phone className="h-5 w-5" />
          Call Now — {PHONE_PRIMARY}
        </a>

        {/* Secondary Call Button */}
        <a
          href={`tel:${PHONE_SECONDARY}`}
          className="flex items-center justify-center gap-2 w-full bg-primary/10 text-primary px-6 py-3.5 rounded-full font-semibold text-base transition-smooth hover:bg-primary/20 active:scale-95 border border-primary/30"
          data-ocid="contact-call-secondary"
        >
          <Phone className="h-5 w-5" />
          Call — {PHONE_SECONDARY}
        </a>

        {/* Location Map Visual */}
        <div className="bg-card rounded-2xl border border-border shadow-subtle overflow-hidden">
          <div className="bg-accent/10 h-36 flex flex-col items-center justify-center gap-3 relative">
            {/* Decorative grid lines */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10 bg-primary rounded-full p-4 shadow-elevated">
              <MapPin className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="relative z-10 text-sm font-semibold text-foreground/70">
              Devpura, Bundi, Rajasthan
            </p>
          </div>
          <div className="px-5 py-3 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              📍 Find us in Devpura locality, Bundi
            </span>
          </div>
        </div>

        {/* Operating Hours hint */}
        <div className="bg-accent/10 rounded-xl px-4 py-3 border border-accent/20 text-center">
          <p className="text-sm text-foreground font-medium">
            🕐 Call us to check availability &amp; get price
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            We're happy to help with all grocery needs
          </p>
        </div>
      </div>
    </Layout>
  );
}
