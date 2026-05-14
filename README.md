# Savour: Premium Food Delivery Landing Page

> A motion-first marketing site for a premium food delivery brand.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![Next.js](https://img.shields.io/badge/next.js-14-black)
![Framer Motion](https://img.shields.io/badge/framer--motion-latest-purple)
![Tailwind](https://img.shields.io/badge/tailwind-4-38BDF8)

**Live site: [savour.vercel.app](https://website-ui-development-with-claude-may-10th-2026-omz3w8hdv.vercel.app)**

---

## What It Is

Savour is a concept landing page for a premium food delivery app. The project was a UI exercise focused on production-grade motion design, editorial typography, and a cohesive premium brand identity — built entirely with Next.js 14, Framer Motion, and Tailwind CSS 4.

---

## Design System

**Typography**
Fraunces serif for all display headings with italic weight contrast. High scale ratio between heading sizes for a strong editorial hierarchy.

**Color**
Deep charcoal background with amber/saffron as the dominant accent. Rose as a secondary accent used sparingly. Every neutral is tinted warm rather than defaulting to pure black.

**Motion**
Spring physics throughout — no linear easing. Scroll-triggered reveals using useInView with staggered children. Every interactive element has whileHover and whileTap states. Enter animations use blur+translate for a polished feel.

---

## Sections

- **Hero** — Headline with floating order card and chef attribution
- **Food Marquee** — Infinite scrolling strip of food photography
- **Stats** — Asymmetric pull quote layout replacing the standard metric grid
- **Features** — Magazine-style bento layout with varied card sizes
- **How It Works** — Three-step flow with food photography
- **Testimonials** — Carousel with press mentions
- **Pricing** — Three-tier with monthly/yearly toggle
- **CTA** — Promo code section with dual action

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14, TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Fonts | Fraunces (serif), system sans |
| Deployment | Vercel |

---

## Running Locally

```bash
git clone https://github.com/DamonB2011/Website-UI-Development-With-Claude-May-10th-2026

cd Website-UI-Development-With-Claude-May-10th-2026

npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

---

## What I Learned

Building this pushed me to think about motion as a design material rather than decoration. The constraint of using spring physics exclusively — no linear easing — forces every animation to feel physically grounded. Getting the stagger timing right across sections and making sure every conditional render had proper AnimatePresence exit states required a lot of iteration. The magazine-style feature layout was the hardest part to get right: breaking out of identical card grids while keeping the layout coherent at different screen sizes.

---

## About

Built by Youbo (Damon) Bao, a student developer at Ridley College interested in mechanical engineering, aerospace, and building things at the intersection of physics and software.
