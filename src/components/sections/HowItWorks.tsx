"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { spring } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Choose your chef",
    desc: "Browse curated menus from vetted chefs in your area. Filter by cuisine, diet, or chef rating.",
    color: "text-amber-400",
    barColor: "bg-amber-500",
    photo: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=200&q=80",
    photoAlt: "Chef's curated menu spread",
  },
  {
    num: "02",
    title: "Order in seconds",
    desc: "Add dishes, set your address, and pay. The whole flow takes under 60 seconds. No account required for your first order.",
    color: "text-rose-400",
    barColor: "bg-rose-500",
    photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80",
    photoAlt: "Mobile payment tap",
  },
  {
    num: "03",
    title: "Track live, eat well",
    desc: "Real-time GPS from kitchen to door. Your meal arrives hot, plated, and ready to enjoy.",
    color: "text-amber-300",
    barColor: "bg-amber-400",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&q=80",
    photoAlt: "Food arriving at door",
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
            <span className="text-amber-hi italic">table</span>
            <br />in three steps
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-px bg-white/[0.05]" />
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
      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ ...spring.default, delay: index * 0.12 }}
      className="flex flex-col items-start"
    >
      {/* Small 80x80 food photo above step number */}
      <div className="w-20 h-20 rounded-xl overflow-hidden mb-4 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={step.photo}
          alt={step.photoAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Step number */}
      <div className={`w-14 h-14 rounded-2xl card-surface border border-white/[0.07] flex items-center justify-center text-xl font-display font-semibold mb-5 ${step.color}`}>
        {step.num}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>

      <div className="mt-5 w-full h-px bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${step.barColor}`}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ ...spring.slow, delay: index * 0.12 + 0.35 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
