"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Set your tokens",
    desc: "Define your brand's duration, easing, and spring presets in the token editor. Every component inherits them instantly.",
    color: "text-violet-400",
    glow: "shadow-violet-500/20",
  },
  {
    num: "02",
    title: "Compose on canvas",
    desc: "Drag components onto the live canvas. Animate properties, chain sequences, and preview at real device speeds.",
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  {
    num: "03",
    title: "Export & ship",
    desc: "One click to export React + Framer Motion, CSS variables, or a hosted CDN snippet. Merge to main and you're done.",
    color: "text-pink-400",
    glow: "shadow-pink-500/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-32 px-6">
      {/* BG accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="text-sm font-medium text-violet-400 mb-4 tracking-wider uppercase">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            From token to
            <span className="gradient-text"> production</span>
            <br />
            in three steps
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.65, ease: [0, 0, 0.2, 1] }}
      className="flex flex-col items-start"
    >
      <div
        className={`w-14 h-14 rounded-2xl glass border border-white/[0.08] flex items-center justify-center text-xl font-bold mb-5 shadow-xl ${step.glow} ${step.color}`}
      >
        {step.num}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
      <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>

      {/* Animated progress bar */}
      <div className="mt-5 w-full h-0.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r from-violet-500 to-cyan-500`}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.8, ease: [0, 0, 0.2, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
