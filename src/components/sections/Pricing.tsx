"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlowButton } from "@/components/Navbar";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    desc: "Perfect for indie designers & side projects.",
    features: [
      "3 projects",
      "20 animated components",
      "Community token library",
      "Framer Motion export",
    ],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 19,
    desc: "For professional designers who ship.",
    features: [
      "Unlimited projects",
      "Full component library (80+)",
      "AI choreographer",
      "All export formats",
      "Priority support",
    ],
    cta: "Start Pro trial",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Team",
    monthly: 79,
    yearly: 59,
    desc: "For design teams that move fast together.",
    features: [
      "Everything in Pro",
      "Real-time collaboration",
      "Shared token library",
      "Design system versioning",
      "SSO & audit logs",
    ],
    cta: "Start Team trial",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-medium text-violet-400 mb-4 tracking-wider uppercase">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Simple,{" "}
            <span className="gradient-text">honest pricing</span>
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto mb-8">
            Start free, scale as you grow. No seat fees, no feature paywalls.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-xl p-1 border border-white/[0.08]">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm transition-all duration-200",
                !yearly ? "bg-white/10 text-white font-medium" : "text-white/40 hover:text-white/70"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2",
                yearly ? "bg-white/10 text-white font-medium" : "text-white/40 hover:text-white/70"
              )}
            >
              Yearly
              <span className="text-[10px] font-semibold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">
                -35%
              </span>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] }}
              className={cn(
                "relative glass rounded-2xl p-6 border flex flex-col",
                plan.highlight
                  ? "border-violet-500/40 shadow-xl shadow-violet-900/30"
                  : "border-white/[0.08]"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}
              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-violet-600/8 to-transparent pointer-events-none" />
              )}

              <div className="mb-5">
                <p className="text-sm font-medium text-white/50 mb-1">{plan.name}</p>
                <div className="flex items-end gap-1 mb-1.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? "y" : "m"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-4xl font-bold text-white"
                    >
                      ${yearly ? plan.yearly : plan.monthly}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-white/30 mb-1.5">/mo</span>
                </div>
                <p className="text-sm text-white/40">{plan.desc}</p>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                    <svg className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <GlowButton href="#" className="w-full justify-center py-2.5">
                  {plan.cta}
                </GlowButton>
              ) : (
                <a
                  href="#"
                  className="block text-center py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                >
                  {plan.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
