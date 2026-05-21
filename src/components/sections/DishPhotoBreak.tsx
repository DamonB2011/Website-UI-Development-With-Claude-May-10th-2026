"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { spring } from "@/lib/motion";

export default function DishPhotoBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
      {/* Full-bleed dramatic overhead food photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=85"
        alt="Chef-crafted artisan plate"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/62" />

      {/* Warm amber vignette at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_100%,rgba(120,53,15,0.35)_0%,transparent_65%)]" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ ...spring.default, delay: 0.1 }}
          className="text-xs font-semibold text-amber-400 tracking-widest uppercase mb-5"
        >
          Chef craftsmanship
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ ...spring.default, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-white italic leading-[1.05] max-w-3xl"
        >
          Every detail.
          <br />
          <span className="font-semibold not-italic text-white/90">Every dish.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ ...spring.default, delay: 0.32 }}
          className="mt-6 text-white/45 text-base max-w-md leading-relaxed"
        >
          Prepared to order. Plated with intention. Delivered in 30 minutes.
        </motion.p>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f0d0a] to-transparent" />
    </section>
  );
}
