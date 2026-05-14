"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Choose your chef",
    desc: "Browse curated menus from vetted chefs in your area. Filter by cuisine, diet, or chef rating.",
    color: "text-amber-400",
    glow: "shadow-amber-500/20",
  },
  {
    num: "02",
    title: "Order in seconds",
    desc: "Add dishes, set your address, and pay — the whole flow takes under 60 seconds. No account required for your first order.",
    color: "text-rose-400",
    glow: "shadow-rose-500/20",
  },
  {
    num: "03",
    title: "Track live, eat well",
    desc: "Real-time GPS from kitchen to door. Your meal arrives hot, plated, and ready to enjoy.",
    color: "text-amber-300",
    glow: "shadow-amber-400/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-32 px-6">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-600/4 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">How it works</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white">
            From craving to{" "}
            <span className="gradient-text italic">table</span>
            <br />in three steps
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
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

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
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
      <div className={`w-14 h-14 rounded-2xl glass border border-white/[0.07] flex items-center justify-center text-xl font-display font-semibold mb-5 shadow-xl ${step.glow} ${step.color}`}>
        {step.num}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
      <div className="mt-5 w-full h-px bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-rose-500"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.9, ease: [0, 0, 0.2, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
