# Design Brief

## Direction

Jain Grocery — A warm, locally-sourced mobile grocery app emphasizing simplicity, accessibility, and prominent call-to-order interactions.

## Tone

Approachable and utilitarian; a digital extension of a local grocer's shop with warmth and earth tones—never corporate or cold.

## Differentiation

Oversized terracotta call buttons on every product card and page header, creating an unmistakable interaction pattern paired with a cream warm background that evokes familiarity and trust.

## Color Palette

| Token      | OKLCH          | Role                           |
| ---------- | -------------- | ------------------------------ |
| background | 0.96 0.015 75  | Warm cream off-white           |
| foreground | 0.2 0.03 50    | Dark warm text                 |
| card       | 0.98 0.01 75   | Card surfaces                  |
| primary    | 0.48 0.15 35   | Terracotta call buttons        |
| secondary  | 0.92 0.02 75   | Subtle section dividers        |
| accent     | 0.55 0.12 155  | Sage secondary accent          |
| muted      | 0.92 0.02 75   | Disabled/neutral states        |
| destructive| 0.5 0.2 25     | Error/warning states           |

## Typography

- Display: **Lora** — warm serif for headings and welcome message; editorial, approachable
- Body: **DM Sans** — clean sans-serif for product names, labels, and body copy; highly legible on mobile
- Scale: Hero `text-4xl md:text-5xl font-bold tracking-tight`, section `text-2xl font-bold`, labels `text-sm font-semibold`, body `text-base`

## Elevation & Depth

Subtle warm shadows on card surfaces; no hard drop shadows. Header and product cards elevated with `shadow-subtle`, footer with minimal visual weight. Dark mode uses warm charcoal background with amber-shifted card highlights.

## Structural Zones

| Zone    | Background        | Border                  | Notes                                     |
| ------- | ----------------- | ----------------------- | ----------------------------------------- |
| Header  | `bg-primary`      | None                    | Terracotta with white text, prominent CTA |
| Content | `bg-background`   | None                    | Warm cream, alternates product sections  |
| Product | `bg-card`         | `border-border subtle`  | Elevated card with `shadow-subtle`        |
| Nav     | `bg-secondary`    | `border-t border-muted` | Bottom navigation tabs with active state  |
| Footer  | `bg-secondary`    | `border-t border-muted` | Contact info, minimal weight              |

## Spacing & Rhythm

Generous vertical spacing (3–4 rem between sections on mobile), tight horizontal padding. Product grid: 2 columns on mobile (`gap-3`), 3–4 on desktop. Cards use `p-4` internal spacing; product images take full card width with 16px bottom padding.

## Component Patterns

- **Buttons**: Terracotta primary with white text, medium rounded (8px), `font-semibold`, scale-up on hover, scale-down on active
- **Cards**: Cream background, warm shadow, 8px border-radius, 16px padding; product images 100% width
- **Badges**: Sage accent on muted background for stock status or tags
- **Input**: Warm border with focus ring in terracotta

## Motion

Entrance: fade-in on page load; button hover scales 1.02x with opacity shift. No decorative animations. Tap-to-call triggers immediate native dialer. Bottom nav tab transitions smooth 200ms.

## Constraints

- No gradients; solid colors only
- No animations beyond hover states and tab transitions
- All buttons (CTAs) use terracotta primary
- Shadows never harsh; warm undertone only
- Product images always full-width card
- Mobile-first; responsive grid shifts to 3–4 columns at md+ breakpoints

## Signature Detail

Oversized terracotta "Call to Order" buttons on every product card, visually reinforcing the app's core action without text-heavy menus or hidden CTAs.

---

**Design tokens**: See `src/frontend/src/index.css` for OKLCH palette and Tailwind config mappings.
**Fonts**: Lora (display, `/assets/fonts/Lora.woff2`), DM Sans (body, `/assets/fonts/DMSans.woff2`).
