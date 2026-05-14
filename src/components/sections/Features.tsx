"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/motion";

const features = [
  {
    icon: "📍",
    title: "Live GPS tracking",
    desc: "Watch your order move in real time — from the kitchen to your door. No more 'where is my food?' anxiety.",
    accent: "border-amber-500/20",
    color: "from-amber-500/8 to-amber-500/3",
    demo: <TrackingDemo />,
  },
  {
    icon: "👨‍🍳",
    title: "Chef-curated menus",
    desc: "Every dish designed by a named, vetted chef. Seasonal ingredients, restaurant plating, delivered to your table.",
    accent: "border-rose-500/20",
    color: "from-rose-500/8 to-rose-500/3",
    demo: <ChefDemo />,
  },
  {
    icon: "⚡",
    title: "30-minute guarantee",
    desc: "We don't just promise 30 minutes — we refund your delivery fee if we miss it. Every single time.",
    accent: "border-amber-500/20",
    color: "from-amber-500/8 to-rose-500/3",
    demo: <TimerDemo />,
  },
  {
    icon: "🌿",
    title: "Dietary filters",
    desc: "Vegan, gluten-free, halal, keto — filter once, and only see meals made for your lifestyle.",
    accent: "border-green-500/20",
    color: "from-green-500/8 to-green-500/3",
    demo: <DietDemo />,
  },
  {
    icon: "🔁",
    title: "Smart reorders",
    desc: "Savour learns your favourites. One tap to reorder your usual — exactly how you like it, every time.",
    accent: "border-amber-500/20",
    color: "from-amber-500/8 to-amber-500/3",
    demo: <ReorderDemo />,
  },
  {
    icon: "🎁",
    title: "Group orders",
    desc: "Everyone picks from the same kitchen. One delivery, one payment link, zero arguments about where to eat.",
    accent: "border-rose-500/20",
    color: "from-rose-500/8 to-rose-500/3",
    demo: <GroupDemo />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">What makes us different</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5">
            Built around the{" "}
            <span className="gradient-text italic">experience</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
            Not just delivery — the full restaurant experience, designed to
            travel.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group glass rounded-2xl p-6 border ${feature.accent} overflow-hidden cursor-default`}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center mb-4 text-xl">
          {feature.icon}
        </div>
        <h3 className="font-semibold text-white text-[17px] mb-2">{feature.title}</h3>
        <p className="text-white/45 text-sm leading-relaxed mb-5">{feature.desc}</p>
        <div className="rounded-xl bg-black/25 border border-white/[0.05] p-4 h-24 flex items-center justify-center overflow-hidden">
          {feature.demo}
        </div>
      </div>
    </motion.div>
  );
}

function TrackingDemo() {
  return (
    <div className="w-full relative h-full flex items-center">
      {/* Route line */}
      <div className="absolute left-4 right-4 h-px bg-white/[0.08]" />
      {/* Stops */}
      {[{ l: "8%", label: "Kitchen" }, { l: "48%", label: "" }, { l: "88%", label: "You" }].map((s, i) => (
        <div key={i} className="absolute flex flex-col items-center gap-1" style={{ left: s.l }}>
          <div className={`w-2 h-2 rounded-full ${i === 2 ? "bg-green-400" : "bg-white/20"}`} />
          {s.label && <span className="text-[9px] text-white/30 -mt-0.5">{s.label}</span>}
        </div>
      ))}
      {/* Rider dot */}
      <motion.div
        className="absolute flex flex-col items-center gap-1"
        animate={{ left: ["12%", "75%", "12%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-base">🛵</span>
      </motion.div>
    </div>
  );
}

function ChefDemo() {
  const chefs = ["Chef Luca", "Chef Amara", "Chef Yuki"];
  const [idx, setIdx] = useState(0);
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
        {chefs[idx][5]}
      </div>
      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.div key={idx}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => setTimeout(() => setIdx(p => (p + 1) % chefs.length), 1400)}
          >
            <p className="text-xs font-semibold text-white/70">{chefs[idx]}</p>
            <p className="text-[10px] text-white/30">★★★★★ Michelin trained</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function TimerDemo() {
  return (
    <div className="flex items-center justify-center gap-4">
      {["", "2", "8"].map((n, i) => (
        <div key={i} className="flex flex-col items-center">
          <motion.div
            animate={i === 2 ? { scale: [1, 1.08, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="text-2xl font-display font-semibold text-amber-400"
          >
            {n || "0"}
          </motion.div>
          <span className="text-[9px] text-white/25">{["hr", "min", "sec"][i]}</span>
        </div>
      ))}
    </div>
  );
}

function DietDemo() {
  const tags = ["Vegan", "GF", "Keto", "Halal"];
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-1.5 flex-wrap justify-center">
      {tags.map((t, i) => (
        <motion.button
          key={t}
          onClick={() => setActive(i)}
          animate={{ scale: active === i ? 1 : 0.95 }}
          className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-colors ${
            active === i
              ? "bg-green-500/20 text-green-300 border border-green-500/30"
              : "bg-white/[0.04] text-white/30 border border-white/[0.07]"
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
      onClick={() => { setOrdered(true); setTimeout(() => setOrdered(false), 2000); }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-amber-500/25 bg-amber-500/8 text-xs font-medium text-amber-300"
    >
      <AnimatePresence mode="wait">
        {ordered ? (
          <motion.span key="done" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            ✓ On its way!
          </motion.span>
        ) : (
          <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            🔁 Reorder usual
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function GroupDemo() {
  const avatars = ["D", "A", "M", "+2"];
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        {avatars.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
            className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-[10px] font-bold text-white border border-ink-900"
          >
            {a}
          </motion.div>
        ))}
      </div>
      <span className="text-[10px] text-white/40">Group order ready</span>
    </div>
  );
}
