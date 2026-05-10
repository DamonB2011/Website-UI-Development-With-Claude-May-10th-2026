"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/motion";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L4 6V11C4 14.87 7.08 18.49 11 19.5C14.92 18.49 18 14.87 18 11V6L11 2Z" stroke="url(#f1)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="f1" x1="4" y1="2" x2="18" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" /><stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Motion tokens",
    desc: "Define duration, easing, and spring configs once as design tokens. Every animated component stays in sync automatically.",
    color: "from-violet-500/10 to-violet-500/5",
    accent: "border-violet-500/20",
    demo: <MotionTokenDemo />,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" stroke="url(#f2)" strokeWidth="1.5" fill="none" />
        <rect x="12" y="3" width="7" height="7" rx="2" stroke="url(#f2)" strokeWidth="1.5" fill="none" />
        <rect x="3" y="12" width="7" height="7" rx="2" stroke="url(#f2)" strokeWidth="1.5" fill="none" />
        <rect x="12" y="12" width="7" height="7" rx="2" stroke="url(#f2)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="f2" x1="3" y1="3" x2="19" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" /><stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Component library",
    desc: "80+ pre-built, animated components. Drag into your canvas, tweak tokens, export production-ready code.",
    color: "from-cyan-500/10 to-cyan-500/5",
    accent: "border-cyan-500/20",
    demo: <ComponentLibraryDemo />,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3V11L15 15" stroke="url(#f3)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="11" cy="11" r="8" stroke="url(#f3)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="f3" x1="3" y1="3" x2="19" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f9a8d4" /><stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Timeline editor",
    desc: "Sequence complex multi-step animations on a visual timeline. Fine-tune every keyframe without writing a line of code.",
    color: "from-pink-500/10 to-violet-500/5",
    accent: "border-pink-500/20",
    demo: <TimelineDemo />,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 11C3 7 7 4 11 4C15 4 19 7 19 11" stroke="url(#f4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M7 11C7 9 9 8 11 8C13 8 15 9 15 11" stroke="url(#f4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="11" cy="14" r="3" stroke="url(#f4)" strokeWidth="1.5" fill="none" />
        <defs>
          <linearGradient id="f4" x1="3" y1="4" x2="19" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" /><stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "AI choreographer",
    desc: "Describe what you want in plain English — 'slide in from left, then bounce'. The AI generates the exact spring physics.",
    color: "from-cyan-500/10 to-violet-500/5",
    accent: "border-cyan-500/20",
    demo: <AIDemo />,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6H18M4 11H14M4 16H10" stroke="url(#f5)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <defs>
          <linearGradient id="f5" x1="4" y1="6" x2="18" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" /><stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Code export",
    desc: "One-click export to React + Framer Motion, CSS keyframes, or GSAP. Your design system, your stack.",
    color: "from-violet-500/10 to-pink-500/5",
    accent: "border-violet-500/20",
    demo: <CodeExportDemo />,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="3" stroke="url(#f6)" strokeWidth="1.5" fill="none" />
        <circle cx="5" cy="16" r="2.5" stroke="url(#f6)" strokeWidth="1.5" fill="none" />
        <circle cx="17" cy="16" r="2.5" stroke="url(#f6)" strokeWidth="1.5" fill="none" />
        <path d="M8 7H5.5A2.5 2.5 0 003 9.5V13" stroke="url(#f6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 7H16.5A2.5 2.5 0 0119 9.5V13" stroke="url(#f6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <defs>
          <linearGradient id="f6" x1="3" y1="4" x2="19" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" /><stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Real-time collaboration",
    desc: "Multiple designers on one canvas. See cursors, selections, and timeline changes live — like Figma for motion.",
    color: "from-cyan-500/10 to-cyan-500/5",
    accent: "border-cyan-500/20",
    demo: <CollabDemo />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="text-sm font-medium text-violet-400 mb-4 tracking-wider uppercase">
            Everything you need
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Built for the
            <span className="gradient-text"> motion era</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            From tokens to timeline — every tool your team needs to ship
            animations that feel intentional and alive.
          </p>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group glass rounded-2xl p-6 border ${feature.accent} overflow-hidden cursor-default`}
    >
      {/* Background gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
          {feature.icon}
        </div>

        <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5">{feature.desc}</p>

        {/* Interactive demo */}
        <div className="rounded-xl bg-black/20 border border-white/[0.06] p-4 h-24 flex items-center justify-center overflow-hidden">
          {feature.demo}
        </div>
      </div>
    </motion.div>
  );
}

function MotionTokenDemo() {
  return (
    <div className="flex gap-3 items-center">
      {[0.2, 0.5, 1.0].map((stiffness, i) => (
        <motion.div
          key={i}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            repeat: Infinity,
            duration: 1.5 + i * 0.5,
            ease: i === 0 ? "easeInOut" : i === 1 ? "easeOut" : [0.34, 1.56, 0.64, 1],
          }}
          className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400"
          style={{ opacity: 0.5 + i * 0.25 }}
        />
      ))}
    </div>
  );
}

function ComponentLibraryDemo() {
  const items = ["Button", "Card", "Modal", "Toast"];
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {items.map((name, i) => (
        <motion.span
          key={name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 260, damping: 20 }}
          className="px-2 py-1 text-[10px] font-mono glass rounded border border-white/10 text-white/50"
        >
          {name}
        </motion.span>
      ))}
    </div>
  );
}

function TimelineDemo() {
  return (
    <div className="w-full space-y-1.5">
      {["opacity", "translateX", "scale"].map((prop, i) => (
        <div key={prop} className="flex items-center gap-2">
          <span className="text-[9px] text-white/30 w-16 font-mono">{prop}</span>
          <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 2 + i * 0.4, ease: "easeInOut", delay: i * 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AIDemo() {
  const [index, setIndex] = useState(0);
  const prompts = ["slide in from left…", "then spring bounce…", "fade on exit…"];
  return (
    <div className="flex items-center gap-2 w-full">
      <span className="text-[10px] text-violet-400">AI</span>
      <div className="flex-1 glass rounded-lg px-3 py-1.5 text-[11px] font-mono text-white/40 min-h-[2rem] flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() =>
              setTimeout(() => setIndex((p) => (p + 1) % prompts.length), 1200)
            }
          >
            {prompts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

function CodeExportDemo() {
  return (
    <div className="text-left w-full">
      <p className="text-[9px] font-mono text-violet-400/80 leading-relaxed">
        <span className="text-white/20">{"<"}</span>
        <span className="text-cyan-400">motion.div</span>
        <br />
        <span className="text-white/20 ml-2">animate=</span>
        <span className="text-pink-400">{"{"}</span>
        <span className="text-white/40">x: 0, opacity: 1</span>
        <span className="text-pink-400">{"}"}</span>
        <br />
        <span className="text-white/20 ml-2">transition=</span>
        <span className="text-pink-400">{"{"}</span>
        <span className="text-white/40">spring</span>
        <span className="text-pink-400">{"}"}</span>
        <span className="text-white/20">{" />"}</span>
      </p>
    </div>
  );
}

function CollabDemo() {
  const cursors = [
    { color: "#a78bfa", x: "20%", y: "30%", label: "Damon" },
    { color: "#22d3ee", x: "65%", y: "60%", label: "Alex" },
  ];
  return (
    <div className="relative w-full h-full">
      {cursors.map((c, i) => (
        <motion.div
          key={c.label}
          animate={{
            x: [0, i === 0 ? 10 : -8, 0],
            y: [0, i === 0 ? -8 : 6, 0],
          }}
          transition={{ repeat: Infinity, duration: 2 + i, ease: "easeInOut" }}
          className="absolute flex items-center gap-1"
          style={{ left: c.x, top: c.y }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill={c.color}>
            <path d="M1 1L10 5.5L5.5 6.5L4 11L1 1Z" />
          </svg>
          <span
            className="text-[9px] font-medium px-1.5 py-0.5 rounded"
            style={{ background: c.color + "30", color: c.color }}
          >
            {c.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
