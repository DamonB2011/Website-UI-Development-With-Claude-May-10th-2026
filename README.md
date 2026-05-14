# Savour: Premium Food Delivery Landing Page

> A motion-first marketing site for a premium food delivery brand.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![Next.js](https://img.shields.io/badge/next.js-14-black)
![Framer Motion](https://img.shields.io/badge/framer--motion-latest-purple)
![Tailwind](https://img.shields.io/badge/tailwind-4-38BDF8)

**Live site: [savour.vercel.app](https://website-ui-development-with-claude-may-10th-2026-omz3w8hdv.vercel.app)**

---

## What It Is

Savour is a concept landing page for a premium food delivery app. The project was a UI exercise focused on production-grade motion design, editorial typography, and a cohesive brand identity. Built with Next.js 14, Framer Motion, and Tailwind CSS 4. Deployed on Vercel.

---

## Design System

**Typography**
Fraunces serif for all display headings, with italic weight contrast for editorial feel. Heading sizes follow a high scale ratio so the hierarchy reads immediately.

**Color**
Deep charcoal background. Amber and saffron carry the dominant accent weight. Rose appears sparingly as a secondary accent. No pure black anywhere; every neutral tilts warm.

**Motion**
Spring physics throughout. No linear easing. Scroll-triggered reveals use useInView with staggered children. Every interactive element has whileHover and whileTap states. Enter animations combine blur and translate for a polished feel.

---

## Sections

- Hero: headline with floating order card and chef attribution
- Food Marquee: infinite scrolling strip of food photography
- Stats: asymmetric pull quote layout, no standard metric grid
- Features: magazine-style bento layout with varied card sizes
- How It Works: three-step flow with food photography
- Testimonials: carousel with press mentions
- Pricing: three-tier with monthly and yearly toggle
- CTA: promo code section with dual action

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14, TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Fonts | Fraunces serif |
| Deployment | Vercel |

---

## Deployment

The site is deployed on Vercel and updates automatically on every push to main. To deploy your own version, fork the repo, connect it to Vercel, set the framework preset to Next.js, and push.

---

## What I Learned

Motion works best when it has constraints. Using spring physics exclusively forces every animation to feel physically grounded rather than arbitrary. Getting the stagger timing right across sections took iteration. The magazine-style feature layout was the hardest part: breaking out of identical card grids while keeping things coherent at different screen sizes took more passes than expected.

---

## About

Built by Youbo (Damon) Bao, a student developer at Ridley College interested in mechanical engineering, aerospace, and building things at the intersection of physics and software. This is my first project that was business oriented, I plan on making things close to this in the future.
