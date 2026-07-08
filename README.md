# Savour: Premium Food Delivery Landing Page

> A motion-first marketing site for a premium food delivery brand.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![Next.js](https://img.shields.io/badge/next.js-14-black)
![Framer Motion](https://img.shields.io/badge/framer--motion-latest-purple)
![Tailwind](https://img.shields.io/badge/tailwind-4-38BDF8)

**Live site: [savour.vercel.app](https://website-ui-development-with-claude-may-10th-2026-omz3w8hdv.vercel.app)**

---
## What it is

Savour is a concept landing page for a premium food delivery app. Project focused on production-grade motion, editorial type, and a cohesive brand. It is built with Next.js 14, Framer Motion, and Tailwind CSS 4.

---

## Design system

### Typography

Fraunces serif for all display headlines. Secondary use of italics for editorial feel. High scale ratio to allow easy reading of information.

### Color

Deep charcoal backgorund, with amber and saffron as major accent tones. Rose for a minor accent. No pure black-only warm-ish neutrals.

### Motion

Everything utilizes spring physics; no linear easing. UseInView hook and stagger animation for section content on scroll. All interaction elements have both whileHover and whileTap states. Entry animations combine blurs and translations.

---

## Sections

- Hero: Heading with floating order card and chef attributions.
- Food Marquee: Continuous scrolling loop of food photos.
- Stats: Layout is slightly off; no typical metric system grid.
- Features: Magazine-style bento layout with varying card sizes.
- How It Works: Three steps illustrating process with food photos.
- Testimonials: Scrollable with mentions from media outlets.
- Pricing: Tiered pricing, switchable between monthly and annual options.
- CTA: Promo code section with double action button.

---

## Tech Stack

| Layer | Technology |
| :-------- | :------------------ |
| Framework | Next.js 14, TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Fonts | Fraunces serif |
| Deployment | Vercel |

---

## Deployment

Deploy on Vercel to have the site automatically updated every push. Fork this repo, connect with Vercel, use Next.js as the framework preset and then push.

---

## What I learned

When applied correctly, motion design's impact is at its greatest when applied in constraints. Every movement feels natural when relying solely on spring physics rather than arbitrary easing curves. I had a number of difficulties with optimizing the staggered timing across sections, which took more passes than anticipated to achieve correctly. The hardest task was breaking away from the cookie-cutter feature card grid for the magazine-style arrangement, which was quite difficult to balance with the varying screen sizes and coherence of design.

---

## About

Damon (Youbo) Bao is a student at Ridley College interested in engineering of all sorts (mechanical, aerospace), and in building things where physics and software meet. This is my first time attempting a more commercially-driven design, and I can envision myself building more of these types of projects in the future.
