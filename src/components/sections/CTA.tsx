"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowButton } from "@/components/Navbar";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-600/8 blur-[110px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="relative glass rounded-3xl p-12 md:p-20 border border-amber-500/12 overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55, ease: [0, 0, 0.2, 1] }}
            className="text-sm font-medium text-amber-400 tracking-wider uppercase mb-5">
            Your first order is on us
          </motion.p>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.6, ease: [0, 0, 0.2, 1] }}
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.05]">
            Great food deserves
            <br />
            <span className="gradient-text-cream italic">great delivery.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.26, duration: 0.55, ease: [0, 0, 0.2, 1] }}
            className="text-white/40 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Use code <span className="text-amber-400 font-mono font-semibold">SAVOUR</span> for free delivery
            on your first three orders. No strings, no subscription required.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.34, duration: 0.55, ease: [0, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton href="#" className="px-10 py-4 text-base shadow-2xl shadow-amber-900/40">
              Order now, eat in 30 min
            </GlowButton>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/15 hover:decoration-white/35">
              Become a partner chef
            </a>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-7 text-xs text-white/20">
            No credit card · Free delivery on first 3 orders · Cancel Savour Pass anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
