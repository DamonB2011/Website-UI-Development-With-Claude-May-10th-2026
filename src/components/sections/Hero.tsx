"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { GlowButton } from "@/components/Navbar";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

const badges = ["AI-powered", "No-code", "Team ready"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated mesh background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
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
        <motion.div variants={staggerItem} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-violet-600/15 border border-violet-500/25 text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
            </span>
            Now in public beta — join 12,000+ teams
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={staggerItem}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">Design systems</span>
          <br />
          <span className="gradient-text">that move.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={staggerItem}
          className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
        >
          Luminary gives your team a living design system — animated components,
          real‑time tokens, and AI‑assisted motion so every product feels{" "}
          <em className="text-white/70 not-italic font-medium">alive</em>.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <GlowButton href="#" className="px-8 py-3.5 text-base shadow-xl shadow-violet-900/50">
            Start for free →
          </GlowButton>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
              <polygon points="6.5,5.5 11,8 6.5,10.5" fill="currentColor" />
            </svg>
            Watch the demo
          </motion.a>
        </motion.div>

        {/* Feature pills */}
        <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-2.5 mb-16">
          {badges.map((b) => (
            <span
              key={b}
              className="px-3 py-1 rounded-full text-xs font-medium text-white/40 border border-white/[0.07] bg-white/[0.03]"
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* Hero product mockup */}
        <motion.div
          variants={staggerItem}
          className="relative w-full max-w-4xl"
        >
          {/* Glow behind mockup */}
          <div className="absolute inset-x-0 -top-8 h-40 bg-gradient-to-b from-violet-600/20 to-transparent blur-2xl pointer-events-none" />

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative glass rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/60"
          >
            {/* Mock browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-white/[0.04] border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="flex-1 mx-4 bg-white/[0.06] rounded-lg text-center text-xs text-white/25 py-1">
                app.luminary.design
              </span>
            </div>

            {/* Canvas area */}
            <div className="relative h-80 md:h-[420px] bg-ink-900 p-6 overflow-hidden">
              <AnimatedCanvas />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/25 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function AnimatedCanvas() {
  const colors = [
    "from-violet-500/30 to-cyan-500/30",
    "from-pink-500/20 to-violet-500/20",
    "from-cyan-500/20 to-blue-500/20",
  ];

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Floating component cards */}
      {[
        { x: "10%", y: "15%", delay: 0 },
        { x: "60%", y: "10%", delay: 0.15 },
        { x: "75%", y: "55%", delay: 0.3 },
        { x: "5%", y: "60%", delay: 0.45 },
        { x: "35%", y: "70%", delay: 0.6 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { delay: pos.delay + 0.5, duration: 0.5 },
            scale: { delay: pos.delay + 0.5, duration: 0.5, ease: [0, 0, 0.2, 1] },
            y: { delay: pos.delay + 1, duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute glass rounded-xl border border-white/[0.08] p-3 bg-gradient-to-br ${colors[i % colors.length]}`}
          style={{ left: pos.x, top: pos.y }}
        >
          <div className="w-24 h-3 bg-white/20 rounded mb-2" />
          <div className="w-16 h-2 bg-white/10 rounded" />
        </motion.div>
      ))}

      {/* Center design token panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className="relative glass rounded-2xl p-5 w-56 border border-white/[0.12] shadow-2xl"
      >
        <p className="text-xs text-white/40 mb-3 font-medium tracking-wider uppercase">Motion tokens</p>
        {[
          { name: "ease-smooth", val: "cubic-bezier(0.25, 0.1...)", color: "bg-violet-400" },
          { name: "duration-md", val: "360ms", color: "bg-cyan-400" },
          { name: "spring-stiff", val: "stiffness: 300", color: "bg-pink-400" },
        ].map((t) => (
          <div key={t.name} className="flex items-center gap-2.5 mb-2.5">
            <span className={`w-2 h-2 rounded-full ${t.color} flex-shrink-0`} />
            <div className="min-w-0">
              <p className="text-[11px] text-white/70 font-mono">{t.name}</p>
              <p className="text-[10px] text-white/30 font-mono truncate">{t.val}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
