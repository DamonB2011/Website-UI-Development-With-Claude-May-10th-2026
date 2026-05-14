"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlowButton } from "@/components/Navbar";
import { Card3D } from "@/components/ui/Card3D";
import { staggerContainer, staggerItem, spring } from "@/lib/motion";

const badges = ["Free delivery", "30-min guarantee", "No minimum order"];

// Curated Unsplash food photos — publicly accessible, no auth required
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY        = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgY       = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity    = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Parallax background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none bg-mesh" aria-hidden>
        {/* Radial gradient behind the left text column */}
        <div
          className="absolute top-0 left-0 w-[55%] h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 70% at 30% 50%, rgba(180,120,40,0.08) 0%, transparent 70%)" }}
        />
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-amber-600/8 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-rose-600/6 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,240,232,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity, scale: contentScale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center min-h-[calc(100vh-5rem)]">

          {/* ── Left: editorial copy + CTA ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Live badge */}
            <motion.div variants={staggerItem} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-amber-500/12 border border-amber-500/20 text-amber-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                Now delivering in 40+ cities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={staggerItem} className="mb-7">
              <span className="block font-display text-[clamp(2.75rem,5.5vw,4.75rem)] font-light tracking-tight text-white/90 leading-[1.0] italic">
                Restaurant quality.
              </span>
              <span className="block font-display text-[clamp(2.75rem,5.5vw,4.75rem)] font-semibold tracking-tight leading-[1.05]">
                <span className="text-saffron">Your door.</span>{" "}
                <span className="text-white/90">30 min.</span>
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p variants={staggerItem} className="text-lg text-white/45 max-w-md leading-relaxed mb-10">
              Chef-curated dishes from the city's finest kitchens, prepared fresh
              and delivered without compromise.
            </motion.p>

            {/* Single primary CTA */}
            <motion.div variants={staggerItem} className="mb-10">
              <GlowButton href="#" className="px-8 py-4 text-base shadow-xl shadow-amber-900/40">
                Order now, it's free to start
              </GlowButton>
            </motion.div>

            {/* Trust pills */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span key={b} className="px-3 py-1 rounded-full text-xs font-medium text-white/35 border border-white/[0.07] bg-white/[0.02]">
                  {b}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: food photo with CSS 3D tilt + parallax + floating cards ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ ...spring.slow, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Ambient glow */}
            <div className="absolute w-[480px] h-[480px] rounded-full bg-amber-500/7 blur-[90px] pointer-events-none" />

            {/* 3D-tilt circular photo frame */}
            <Card3D intensity={7} sheenOpacity={0.1} className="relative w-[460px] h-[460px]">
              {/* Parallax image inside */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <motion.div
                  style={{ y: imgY }}
                  className="absolute inset-0 scale-110"
                >
                  <Image
                    src={HERO_PHOTO}
                    alt="Chef-curated truffle risotto"
                    fill
                    priority
                    className="object-cover"
                    sizes="460px"
                  />
                </motion.div>
                {/* Studio vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_42%,rgba(0,0,0,0.45)_100%)]" />
                {/* Warm grade */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-transparent" />
              </div>

              {/* Rim highlight */}
              <div className="absolute inset-0 rounded-full border border-amber-500/20 pointer-events-none" />
              {/* Inner shadow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />

              {/* ── Floating order card ── */}
              <motion.div
                initial={{ opacity: 0, x: 32, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ ...spring.default, delay: 1.3 }}
                className="absolute -right-10 top-[22%] card-surface rounded-2xl p-4 w-52 shadow-dish-sm"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Your order</p>
                  <span className="flex items-center gap-1 text-[10px] text-green-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    On the way
                  </span>
                </div>
                <div className="relative h-1 bg-white/[0.07] rounded-full overflow-hidden mb-2.5">
                  <motion.div
                    className="h-full rounded-full bg-amber-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "72%" }}
                    transition={{ ...spring.slow, delay: 1.9 }}
                  />
                </div>
                <p className="text-[11px] text-white/35 mb-3">
                  Arriving in <span className="text-amber-400 font-semibold">8 min</span>
                </p>
                <p className="text-sm font-semibold text-white/80">Truffle Risotto</p>
                <p className="text-[10px] text-white/35 mt-0.5">Chef Luca Ferrante</p>
              </motion.div>

              {/* ── Floating fee badge ── */}
              <motion.div
                initial={{ opacity: 0, x: -28, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ ...spring.default, delay: 1.5 }}
                className="absolute -left-6 bottom-[30%] card-surface-raised rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/40"
              >
                <p className="text-[10px] text-white/35 mb-0.5">Delivery fee</p>
                <p className="text-sm font-semibold text-amber-400">Free today</p>
              </motion.div>

              {/* ── Floating chef badge ── */}
              <motion.div
                initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ...spring.default, delay: 1.6 }}
                className="absolute left-[18%] -bottom-6 card-surface rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/40 flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-xs font-bold text-amber-400">
                  L
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/70">Chef Luca</p>
                  <p className="text-[10px] text-white/30">Michelin trained</p>
                </div>
              </motion.div>
            </Card3D>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...spring.slow, delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-amber-500/30 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
