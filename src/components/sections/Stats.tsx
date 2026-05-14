"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { spring } from "@/lib/motion";

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "oklch(12% 0.01 60)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/12 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center">

          {/* Left: large pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={spring.default}
            className="flex-1"
          >
            <p className="font-display text-3xl md:text-4xl lg:text-[2.6rem] font-light italic text-white/80 leading-[1.2] tracking-tight">
              &ldquo;Over{" "}
              <span className="text-amber-hi font-semibold not-italic">two million meals</span>{" "}
              delivered across 40 cities.&rdquo;
            </p>
          </motion.div>

          {/* Right: two smaller supporting facts */}
          <motion.div
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ ...spring.default, delay: 0.12 }}
            className="shrink-0 flex flex-col gap-8 md:border-l md:border-white/[0.07] md:pl-16"
          >
            <div>
              <p className="text-2xl font-display font-semibold text-white/80 mb-1">
                30 min
              </p>
              <p className="text-sm text-white/35 leading-relaxed">
                Average delivery time,
                <br />guaranteed or refunded.
              </p>
            </div>

            <div>
              <p className="text-2xl font-display font-semibold text-white/80 mb-1">
                ★ 4.9 &middot; 340+ chefs
              </p>
              <p className="text-sm text-white/35 leading-relaxed">
                Named, vetted partners.
                <br />Every city, every cuisine.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
