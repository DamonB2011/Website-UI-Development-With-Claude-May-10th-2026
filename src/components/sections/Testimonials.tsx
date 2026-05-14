"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "I've tried every food app out there. Savour is the first one where I actually recognise the quality is different. The Wagyu tartare was restaurant-perfect.",
    name: "Olivia Park",
    title: "Food writer, The Cut",
    avatar: "OP",
    color: "from-amber-500 to-rose-500",
  },
  {
    quote: "30 minutes on the dot, every time. I order for the whole team on Fridays — Savour has never once let us down. The group order feature is genuinely brilliant.",
    name: "James Okafor",
    title: "Creative Director, Wieden+Kennedy",
    avatar: "JO",
    color: "from-rose-500 to-amber-500",
  },
  {
    quote: "As a chef I was sceptical about delivery. Savour's packaging and timing means my dishes actually arrive the way I designed them. That matters enormously to me.",
    name: "Chef Amara Diallo",
    title: "Executive Chef, partner since 2023",
    avatar: "AD",
    color: "from-amber-400 to-amber-600",
  },
  {
    quote: "The live tracking is addictive. I watch my food the whole way. But more importantly — it's always hot when it arrives. That's rare.",
    name: "Marcus Webb",
    title: "Tech founder, London",
    avatar: "MW",
    color: "from-rose-400 to-rose-600",
  },
];

const logos = ["The Guardian", "Bloomberg", "Vogue", "Time Out", "Eater", "Bon Appétit"];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/8 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-20">
          {logos.map((name) => (
            <span key={name} className="text-sm font-semibold text-white/15 tracking-wide">{name}</span>
          ))}
        </ScrollReveal>

        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Trusted by people who
            <br />
            <span className="gradient-text italic">know good food</span>
          </h2>
        </ScrollReveal>

        <div className="relative min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
              className="glass rounded-2xl p-8 md:p-10 border border-white/[0.07] max-w-2xl mx-auto text-center"
            >
              <blockquote className="font-display text-lg md:text-xl text-white/70 leading-relaxed mb-7 italic font-light">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-xs font-bold text-white`}>
                  {testimonials[active].avatar}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white/80">{testimonials[active].name}</p>
                  <p className="text-xs text-white/35">{testimonials[active].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === active ? 24 : 8 }}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <div className="absolute inset-0 bg-white/15" />
              {i === active && (
                <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500" layoutId="tdot" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
