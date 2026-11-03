---
name: eicf-frontend-design
description: >-
  Design system and motion playbook for the EICF institutional website
  (Next.js App Router + plain CSS in app/globals.css). Use this skill whenever
  creating or restyling a page, section or component of the EICF site, adding
  animations (scroll reveal, counters, marquee, parallax, rotating words), or
  working on the interactive map (Leaflet + OpenStreetMap).
---

# EICF — Frontend design & motion playbook

Patterns distilled from the 50 projects of
[SudeepAcharjee/The-50-Front-end-Project](https://github.com/SudeepAcharjee/The-50-Front-end-Project)
(Company Portfolio, Hotel "Luxe", Photography Portfolio, Restaurant…) and
re-implemented **without jQuery / Bootstrap**, as native React + CSS.

| Pattern in the repo (jQuery plugin)        | EICF equivalent (native)                                    |
| :----------------------------------------- | :---------------------------------------------------------- |
| `waypoints.js` + `animate.css` (reveal)    | `components/Motion.tsx` → `useRevealOnScroll()` (auto)      |
| `counterup.js` / `jquery.countTo.js`       | `<CountUp value={…} />` in `components/Motion.tsx`          |
| `typed.js` (hero rotating words)           | `<RotatingWords words={[…]} />`                             |
| `owl.carousel` logo strip                  | `.marquee` (pure CSS infinite scroll)                       |
| `rellax.js` / `jquery.stellar` (parallax)  | `.parallax` + `--py` CSS var set by `useParallax()`         |
| `hoverbox` (photography)                   | `.spotlight` cards (mouse-follow radial light, `--mx/--my`) |
| `isotope` filters                          | single `<select>` / few short chips (avoid tab overload)    |
| Google Maps embed                          | Leaflet + OpenStreetMap (`components/maps/*`)               |

## Typography (layout.tsx)

- Display / headings: **Bricolage Grotesque** (`--font-display`), weight 600–700, tight tracking.
- Editorial accent: **Instrument Serif** italic (`--font-accent`) → every `<em>` inside `h1/h2/h3`.
- Body / UI: **Plus Jakarta Sans** (`--font-sans`).
- Never use more than these three families.

## Rules

1. **Few tabs.** Max 5 top-level navigation entries; filters = ≤ 5 short chips,
   otherwise a `<select>` inside a `.filter-bar`.
2. **Reveal is automatic**: elements matching the selector list in
   `useRevealOnScroll()` fade/slide in. Add `data-reveal` to opt a custom block in,
   `data-reveal="off"` to opt out.
3. **Numbers animate**: use `<CountUp value={n} suffix="+" />` for KPI figures.
4. **Respect `prefers-reduced-motion`** (handled globally in `globals.css`).
5. **Maps**: always load Leaflet components through `next/dynamic` with
   `ssr: false`; tiles = OpenStreetMap with attribution kept visible.

## Verification

- `pnpm exec tsc --noEmit` must pass.
- `pnpm build` must pass (Leaflet must never be imported in a server component).

