"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { GlowButton } from "@/components/Navbar";
import { staggerContainer, staggerItem } from "@/lib/motion";

const badges = ["Free delivery", "30-min guarantee", "No minimum order"];

interface Dish {
  name: string;
  chef: string;
  time: string;
  emoji: string;
  top: string;
  left: string;
  delay: number;
}

const dishes: Dish[] = [
  { name: "Wagyu Tartare", chef: "Chef Amara", time: "28 min", emoji: "🥩", top: "12%", left: "6%", delay: 0 },
  { name: "Truffle Risotto", chef: "Chef Luca", time: "24 min", emoji: "🍄", top: "8%", left: "62%", delay: 0.12 },
  { name: "Miso Black Cod", chef: "Chef Yuki", time: "26 min", emoji: "🐟", top: "58%", left: "72%", delay: 0.24 },
  { name: "Lobster Bisque", chef: "Chef Pierre", time: "22 min", emoji: "🦞", top: "65%", left: "4%", delay: 0.36 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-600/8 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-rose-600/6 blur-[100px]" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,240,232,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Pill badge */}
        <motion.div variants={staggerItem} className="mb-7">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-amber-500/12 border border-amber-500/20 text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
            </span>
            Now delivering in 40+ cities
          </span>
        </motion.div>

        {/* Headline — serif + weight contrast */}
        <motion.h1 variants={staggerItem} className="mb-6">
          <span className="block font-display text-6xl md:text-7xl lg:text-[82px] font-light tracking-tight text-white/90 leading-[1.0] italic">
            Restaurant quality.
          </span>
          <span className="block font-display text-6xl md:text-7xl lg:text-[82px] font-semibold tracking-tight leading-[1.05]">
            <span className="gradient-text">Your door.</span>{" "}
            <span className="text-white/90">30 min.</span>
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p variants={staggerItem} className="text-lg md:text-xl text-white/45 max-w-xl leading-relaxed mb-10">
          Chef-curated dishes from the city's finest kitchens — prepared fresh,
          delivered fast, never compromised.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <GlowButton href="#" className="px-8 py-3.5 text-base shadow-xl shadow-amber-900/40">
            Order now — it's free →
          </GlowButton>
          <motion.a
            href="#how"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white/90 border border-white/[0.09] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
              <polygon points="6.5,5.5 11,8 6.5,10.5" fill="currentColor" />
            </svg>
            See how it works
          </motion.a>
        </motion.div>

        {/* Trust pills */}
        <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-2.5 mb-16">
          {badges.map((b) => (
            <span key={b} className="px-3 py-1 rounded-full text-xs font-medium text-white/35 border border-white/[0.07] bg-white/[0.02]">
              {b}
            </span>
          ))}
        </motion.div>

        {/* Live order card — the "mockup" */}
        <motion.div variants={staggerItem} className="relative w-full max-w-3xl">
          <div className="absolute inset-x-0 -top-10 h-48 bg-gradient-to-b from-amber-500/12 to-transparent blur-2xl pointer-events-none" />

          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative glass rounded-2xl overflow-hidden border border-white/[0.09] shadow-2xl shadow-black/70"
          >
            {/* App chrome */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-white/20 font-mono">savour.app — live orders near you</span>
              <div className="w-16" />
            </div>

            {/* Food cards canvas */}
            <div className="relative h-72 md:h-[380px] bg-ink-900 overflow-hidden">
              <FoodCanvas dishes={dishes} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-amber-500/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function FoodCanvas({ dishes }: { dishes: Dish[] }) {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Floating dish cards */}
      {dishes.map((d, i) => (
        <motion.div
          key={d.name}
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -7, 0],
          }}
          transition={{
            opacity: { delay: d.delay + 0.6, duration: 0.5, ease: [0, 0, 0.2, 1] },
            scale: { delay: d.delay + 0.6, duration: 0.5, ease: [0, 0, 0.2, 1] },
            y: { delay: d.delay + 1.2, duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute glass-warm rounded-2xl p-3.5 border border-amber-500/15 shadow-xl"
          style={{ top: d.top, left: d.left }}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{d.emoji}</span>
            <div>
              <p className="text-xs font-semibold text-white/80">{d.name}</p>
              <p className="text-[10px] text-white/35">{d.chef}</p>
            </div>
            <span className="ml-2 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
              {d.time}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Center: live tracking card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.65, ease: [0, 0, 0.2, 1] }}
        className="relative glass rounded-2xl p-5 w-60 border border-white/[0.1] shadow-2xl"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">Your order</p>
          <span className="flex items-center gap-1 text-[10px] text-green-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            On the way
          </span>
        </div>
        {/* Delivery progress bar */}
        <div className="relative h-1.5 bg-white/[0.07] rounded-full overflow-hidden mb-3">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500"
            initial={{ width: "0%" }}
            animate={{ width: "72%" }}
            transition={{ delay: 1.4, duration: 1.2, ease: [0, 0, 0.2, 1] }}
          />
        </div>
        <p className="text-[11px] text-white/35 mb-3">Arriving in <span className="text-amber-400 font-semibold">8 min</span></p>
        {[
          { label: "Truffle Risotto", price: "$24" },
          { label: "Wagyu Tartare", price: "$32" },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-white/60">{item.label}</span>
            <span className="text-[11px] text-white/40 font-mono">{item.price}</span>
          </div>
        ))}
        <div className="mt-2.5 pt-2.5 border-t border-white/[0.06] flex justify-between">
          <span className="text-xs font-semibold text-white/70">Total</span>
          <span className="text-xs font-semibold text-amber-400">$56.00</span>
        </div>
      </motion.div>
    </div>
  );
}
