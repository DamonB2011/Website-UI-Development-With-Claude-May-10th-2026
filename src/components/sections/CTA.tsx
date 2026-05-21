"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowButton } from "@/components/Navbar";
import { spring, staggerContainer, staggerItem } from "@/lib/motion";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-600/7 blur-[110px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={spring.default}
          className="relative card-surface rounded-3xl p-12 md:p-20 border border-amber-500/12 overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={staggerItem}
              className="text-sm font-medium text-amber-400 tracking-wider uppercase mb-5"
            >
              Your first order is on us
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5 leading-[1.05]"
            >
              Great food deserves
              <br />
              <span className="text-cream italic">great delivery.</span>
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="text-white/40 text-lg max-w-lg mx-auto mb-10 leading-relaxed"
            >
              Use code{" "}
              <span className="text-amber-400 font-mono font-semibold">SAVOUR</span>{" "}
              for free delivery on your first three orders. No strings, no subscription required.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <GlowButton href="#" className="px-10 py-4 text-base shadow-2xl shadow-amber-900/40">
                Order now, eat in 30 min
              </GlowButton>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={spring.micro}
                className="text-sm text-white/40 hover:text-white/70 transition-colors underline underline-offset-4 decoration-white/15 hover:decoration-white/35"
              >
                Become a partner chef
              </motion.a>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-7 text-xs text-white/20"
            >
              No credit card · Free delivery on first 3 orders · Cancel Savour Pass anytime
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
