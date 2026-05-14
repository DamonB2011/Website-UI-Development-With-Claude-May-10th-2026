"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

const links = [
  { label: "How it works", href: "#how" },
  { label: "Menu", href: "#features" },
  { label: "Reviews", href: "#testimonials" },
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
        initial={{ y: -72, opacity: 0, filter: "blur(4px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ ...spring.default, delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-ink-950/88 backdrop-blur-xl border-b border-amber-600/10 shadow-xl shadow-black/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={spring.micro}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white text-base font-display font-semibold leading-none select-none">S</span>
            </div>
            <span className="font-display font-semibold text-[17px] tracking-tight text-white">
              Savour
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ...spring.default, delay: 0.18 + i * 0.06 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-4 py-2 text-sm text-white/55 hover:text-white/90 transition-colors rounded-lg hover:bg-white/[0.04] group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-4 right-4 h-px bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* CTA group */}
          <motion.div
            initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ ...spring.default, delay: 0.4 }}
            className="hidden md:flex items-center gap-3"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={spring.micro}
              className="text-sm text-white/50 hover:text-white transition-colors px-3 py-1.5"
            >
              Sign in
            </motion.a>
            <GlowButton href="#">Order now</GlowButton>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMenuOpen((p) => !p)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={spring.micro}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={spring.fast}
              className="block w-5 h-px bg-white/70 origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={spring.fast}
              className="block w-5 h-px bg-white/70 origin-center"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={spring.fast}
              className="block w-5 h-px bg-white/70 origin-center"
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(2px)" }}
            transition={spring.fast}
            className="fixed top-16 left-0 right-0 z-40 bg-ink-950/96 backdrop-blur-xl border-b border-amber-600/10 px-6 py-4 flex flex-col gap-1 md:hidden"
          >
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={spring.micro}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm text-white/65 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              <a href="#" className="px-3 py-2.5 text-sm text-white/50 hover:text-white transition-colors">Sign in</a>
              <GlowButton href="#">Order now</GlowButton>
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
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={spring.micro}
      className={cn(
        "relative inline-flex items-center justify-center font-semibold rounded-xl overflow-hidden",
        "bg-amber-500 text-ink-950",
        "shadow-lg shadow-amber-900/30",
        "before:absolute before:inset-0 before:bg-amber-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200",
        small ? "text-sm px-4 py-2" : "text-sm px-5 py-2.5",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
