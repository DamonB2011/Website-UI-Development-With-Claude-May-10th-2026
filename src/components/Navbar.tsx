"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/40"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] rounded-[6px] bg-ink-950" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="url(#g)" strokeWidth="1.5" fill="none" />
                  <defs>
                    <linearGradient id="g" x1="2" y1="2" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a78bfa" />
                      <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-white">
              Luminary
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
                className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05] group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-4 right-4 h-px bg-gradient-to-r from-violet-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* CTA group */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
            className="hidden md:flex items-center gap-3"
          >
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors px-3 py-1.5"
            >
              Sign in
            </a>
            <GlowButton href="#" small>
              Get started free
            </GlowButton>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white/70 origin-center transition-colors group-hover:bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-px bg-white/70 origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white/70 origin-center transition-colors group-hover:bg-white"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.0, 0.0, 0.2, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-ink-950/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex flex-col gap-1 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              <a href="#" className="px-3 py-2.5 text-sm text-white/60 hover:text-white">Sign in</a>
              <GlowButton href="#">Get started free</GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  small?: boolean;
  className?: string;
}

export function GlowButton({ href, children, small, className }: GlowButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center justify-center font-medium rounded-xl overflow-hidden",
        "bg-gradient-to-r from-violet-600 to-violet-500",
        "text-white shadow-lg shadow-violet-900/40",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-500 before:to-cyan-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        small ? "text-sm px-4 py-2" : "text-base px-6 py-3",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
