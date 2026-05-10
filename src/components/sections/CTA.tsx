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
        {/* Orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
          className="relative glass rounded-3xl p-12 md:p-20 border border-white/[0.08] overflow-hidden"
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55, ease: [0, 0, 0.2, 1] }}
            className="text-sm font-medium text-violet-400 tracking-wider uppercase mb-5"
          >
            Get started today
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.6, ease: [0, 0, 0.2, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Make your product
            <br />
            <span className="gradient-text-warm">feel alive</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.26, duration: 0.55, ease: [0, 0, 0.2, 1] }}
            className="text-white/45 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Join 12,000+ teams who ship motion that matters. Free forever for
            individuals, no credit card required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.34, duration: 0.55, ease: [0, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlowButton
              href="#"
              className="px-10 py-4 text-base shadow-2xl shadow-violet-900/50"
            >
              Start building for free
            </GlowButton>
            <a
              href="#"
              className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
            >
              Talk to sales
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-7 text-xs text-white/25"
          >
            No credit card · Free for individuals · Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
