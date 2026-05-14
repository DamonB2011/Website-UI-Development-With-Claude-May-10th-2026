"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2400000, suffix: "+", label: "Meals delivered", prefix: "" },
  { value: 30, suffix: " min", label: "Average delivery", prefix: "" },
  { value: 4.9, suffix: "", label: "Average rating", prefix: "★ " },
  { value: 340, suffix: "+", label: "Partner chefs", prefix: "" },
];

function AnimatedNumber({ value, suffix, prefix, inView }: {
  value: number; suffix: string; prefix: string; inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(current);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = value >= 1000000
    ? (display / 1000000).toFixed(1) + "M"
    : value % 1 !== 0
    ? display.toFixed(1)
    : Math.round(display).toLocaleString();

  return <span>{prefix}{formatted}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/15 to-transparent" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-1.5">
                <AnimatedNumber {...stat} inView={inView} />
              </div>
              <p className="text-sm text-white/35">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
