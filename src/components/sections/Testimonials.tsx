"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "Luminary cut our animation handoff time by 70%. Engineers finally get production-ready Framer Motion code instead of vague 'make it feel alive' specs.",
    name: "Sarah Chen",
    title: "Head of Design, Vercel",
    avatar: "SC",
    color: "from-violet-500 to-cyan-500",
  },
  {
    quote:
      "The motion token system is a game-changer. We shipped a complete redesign with consistent animation across 200+ components in two weeks.",
    name: "Marcus Rivera",
    title: "Design Lead, Linear",
    avatar: "MR",
    color: "from-cyan-500 to-blue-500",
  },
  {
    quote:
      "I've tried every motion tool out there. Luminary is the first one that actually fits into a real design system workflow instead of replacing it.",
    name: "Priya Nair",
    title: "Staff Designer, Figma",
    avatar: "PN",
    color: "from-pink-500 to-violet-500",
  },
  {
    quote:
      "Our design–eng handoffs went from 12-page specs to a single Luminary link. The AI choreographer alone saves us hours every sprint.",
    name: "Tom Okafor",
    title: "Principal Engineer, Shopify",
    avatar: "TO",
    color: "from-violet-500 to-pink-500",
  },
];

const logos = [
  "Vercel", "Linear", "Figma", "Shopify", "Stripe", "Loom",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Logo bar */}
        <ScrollReveal className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-20">
          {logos.map((name) => (
            <span key={name} className="text-sm font-semibold text-white/20 tracking-wide">
              {name}
            </span>
          ))}
        </ScrollReveal>

        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Loved by the teams
            <br />
            <span className="gradient-text">building what's next</span>
          </h2>
        </ScrollReveal>

        {/* Testimonial carousel */}
        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
              className="glass rounded-2xl p-8 md:p-10 border border-white/[0.08] max-w-2xl mx-auto text-center"
            >
              <blockquote className="text-lg md:text-xl text-white/75 leading-relaxed mb-7 font-light">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {testimonials[active].avatar}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{testimonials[active].name}</p>
                  <p className="text-xs text-white/40">{testimonials[active].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === active ? 24 : 8 }}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <div className="absolute inset-0 bg-white/20" />
              {i === active && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500"
                  layoutId="dot"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
