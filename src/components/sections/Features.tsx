"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { spring } from "@/lib/motion";
import type { Variants } from "framer-motion";

// staggerChildren 0.08 as specified
const featureContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const featureItem: Variants = {
  hidden:  { opacity: 0, y: 8,  filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: spring.default },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">What makes us different</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5">
            Built around the{" "}
            <span className="text-amber-hi italic">experience</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
            Not just delivery. The full restaurant experience, designed to travel.
          </p>
        </ScrollReveal>

        {/* ── Magazine layout: no card is the same size ── */}
        <motion.div
          variants={featureContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4"
        >

          {/* ── Row 1: GPS tracking — full-width landscape ── */}
          <motion.div variants={featureItem} className="md:col-span-12">
            <BentoCard accent="amber" className="min-h-[200px]">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                {/* Left: text content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="w-9 h-9 rounded-xl card-surface-raised flex items-center justify-center text-base mb-4">📍</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Live GPS tracking</h3>
                  <p className="text-white/45 text-sm leading-relaxed max-w-md">
                    Watch your order move in real time, from the kitchen to your door.
                    No more wondering where your food is.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/35">Arriving in <span className="text-amber-400 font-semibold">8 min</span></span>
                  </div>
                </div>
                {/* Right third: tracking animation */}
                <div className="shrink-0 w-full md:w-72 md:border-l md:border-white/[0.05] md:pl-8 flex items-center">
                  <TrackingDemo />
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* ── Row 2: Chef (taller, 7 cols) + 30-min (shorter, 5 cols) ── */}
          <motion.div variants={featureItem} className="md:col-span-7">
            <BentoCard accent="rose" className="min-h-[400px]">
              <div className="flex flex-col h-full">
                <div className="w-9 h-9 rounded-xl card-surface-raised flex items-center justify-center text-base mb-4">👨‍🍳</div>
                <h3 className="text-xl font-semibold text-white mb-2">Chef-curated menus</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4 max-w-sm">
                  Every dish designed by a named, vetted chef. Seasonal ingredients,
                  restaurant plating, delivered to you.
                </p>
                {/* Photo stack replaces text demo */}
                <div className="mt-auto">
                  <PhotoStack />
                </div>
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={featureItem} className="md:col-span-5">
            <BentoCard accent="amber" className="min-h-[320px]">
              <div className="flex flex-col h-full">
                <div className="w-9 h-9 rounded-xl card-surface-raised flex items-center justify-center text-base mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">30-minute guarantee</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  We refund your delivery fee if we miss the 30-minute window. Every single time.
                </p>
                <div className="mt-auto">
                  <TimerDemo />
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* ── Row 3: Three equal smaller cards ── */}
          <motion.div variants={featureItem} className="md:col-span-4">
            <BentoCard accent="green" className="min-h-[220px]">
              <div className="flex flex-col h-full">
                <div className="w-9 h-9 rounded-xl card-surface-raised flex items-center justify-center text-base mb-4">🌿</div>
                <h3 className="text-lg font-semibold text-white mb-2">Dietary filters</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  Vegan, gluten-free, halal, keto. Filter once and only see meals made for you.
                </p>
                <div className="mt-auto">
                  <DietDemo />
                </div>
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={featureItem} className="md:col-span-4">
            <BentoCard accent="amber" className="min-h-[220px]">
              <div className="flex flex-col h-full">
                <div className="w-9 h-9 rounded-xl card-surface-raised flex items-center justify-center text-base mb-4">🔁</div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart reorders</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  Savour learns your favourites. One tap to reorder exactly how you like it.
                </p>
                <div className="mt-auto flex justify-center">
                  <ReorderDemo />
                </div>
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={featureItem} className="md:col-span-4">
            <BentoCard accent="rose" className="min-h-[220px]">
              <div className="flex flex-col h-full">
                <div className="w-9 h-9 rounded-xl card-surface-raised flex items-center justify-center text-base mb-4">🎁</div>
                <h3 className="text-lg font-semibold text-white mb-2">Group orders</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  Everyone picks from the same kitchen. One delivery, one payment link.
                </p>
                <div className="mt-auto">
                  <GroupDemo />
                </div>
              </div>
            </BentoCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// ─── Shared bento card shell ───────────────────────────────────────────
function BentoCard({
  children,
  accent,
  className = "",
}: {
  children: React.ReactNode;
  accent: "amber" | "rose" | "green";
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  const borderColor = {
    amber: "border-amber-500/18",
    rose:  "border-rose-500/18",
    green: "border-green-500/18",
  }[accent];

  const glowColor = {
    amber: "rgba(245,158,11,0.05)",
    rose:  "rgba(251,113,133,0.05)",
    green: "rgba(34,197,94,0.05)",
  }[accent];

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2 }}
      transition={spring.micro}
      className={`relative card-surface rounded-2xl p-6 border ${borderColor} overflow-hidden cursor-default h-full ${className}`}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ backgroundColor: hovered ? glowColor : "transparent" }}
        transition={spring.default}
      />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}

// ─── Photo stack for chef card ─────────────────────────────────────────
function PhotoStack() {
  const [hovered, setHovered] = useState(false);

  const stackPhotos = [
    { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&q=80", alt: "Truffle risotto" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", alt: "Fine dining plate" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80", alt: "Artisan plating" },
  ];

  const rotations = [-3, 0, 4];

  return (
    <motion.div
      className="relative h-44 mt-2"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {stackPhotos.map((photo, i) => (
        <motion.div
          key={i}
          className="absolute rounded-xl overflow-hidden shadow-2xl shadow-black/60"
          style={{
            width: 188,
            height: 120,
            left: i * 14,
            top: i * 8,
            zIndex: i,
          }}
          animate={{ rotate: hovered && i === 2 ? 6 : rotations[i] }}
          transition={spring.default}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Feature demos ─────────────────────────────────────────────────────
function TrackingDemo() {
  return (
    <div className="w-full">
      <div className="relative h-16 w-full flex items-center">
        <div className="absolute left-2 right-2 h-px bg-white/[0.06]" />
        {[{ pos: "6%", label: "Kitchen" }, { pos: "48%", label: "" }, { pos: "90%", label: "You" }].map((s, i) => (
          <div key={i} className="absolute flex flex-col items-center gap-1.5" style={{ left: s.pos }}>
            <div className={`w-2.5 h-2.5 rounded-full ${i === 2 ? "bg-green-400" : "bg-white/15"}`} />
            {s.label && <span className="text-[9px] text-white/25 whitespace-nowrap">{s.label}</span>}
          </div>
        ))}
        <motion.div
          className="absolute"
          animate={{ left: ["12%", "78%", "12%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-xl">🛵</div>
        </motion.div>
      </div>
    </div>
  );
}

function TimerDemo() {
  return (
    <div className="flex items-center gap-4 justify-center">
      {[{ n: "00", label: "hr" }, { n: "28", label: "min" }, { n: "42", label: "sec" }].map(({ n, label }, i) => (
        <div key={label} className="flex flex-col items-center">
          <motion.div
            animate={i === 2 ? { opacity: [1, 0.35, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="text-2xl font-display font-semibold text-amber-400 tabular-nums"
          >
            {n}
          </motion.div>
          <span className="text-[9px] text-white/25 mt-0.5">{label}</span>
        </div>
      ))}
    </div>
  );
}

function DietDemo() {
  const tags = ["Vegan", "GF", "Keto", "Halal"];
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((t, i) => (
        <motion.button
          key={t}
          onClick={() => setActive(i)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={spring.micro}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            active === i
              ? "bg-green-500/15 text-green-300 border-green-500/30"
              : "bg-white/[0.03] text-white/30 border-white/[0.07] hover:border-white/[0.14]"
          }`}
        >
          {t}
        </motion.button>
      ))}
    </div>
  );
}

function ReorderDemo() {
  const [ordered, setOrdered] = useState(false);

  return (
    <motion.button
      onClick={() => {
        setOrdered(true);
        setTimeout(() => setOrdered(false), 2200);
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={spring.micro}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-500/25 bg-amber-500/8 text-sm font-medium text-amber-300"
    >
      <AnimatePresence mode="wait">
        {ordered ? (
          <motion.span
            key="done"
            initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -4, filter: "blur(2px)" }}
            transition={spring.fast}
          >
            Placed
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(2px)" }}
            transition={spring.fast}
          >
            🔁 Reorder usual
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function GroupDemo() {
  const members = ["D", "A", "M", "J", "+2"];

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {members.map((m, i) => (
          <motion.div
            key={m}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring.default, delay: i * 0.06 }}
            className="w-8 h-8 rounded-full card-surface-raised border border-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-300"
          >
            {m}
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-white/35">5 people, 1 link</p>
    </div>
  );
}
