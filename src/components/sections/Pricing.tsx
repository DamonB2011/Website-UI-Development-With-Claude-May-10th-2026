"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlowButton } from "@/components/Navbar";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Pay as you go",
    monthly: 0,
    yearly: 0,
    desc: "No commitment. Order when you want.",
    features: [
      "£2.99 delivery per order",
      "Access to all chefs",
      "Live GPS tracking",
      "Group orders",
    ],
    cta: "Start ordering",
    highlight: false,
  },
  {
    name: "Savour Pass",
    monthly: 9,
    yearly: 7,
    desc: "For people who eat well, often.",
    features: [
      "Free unlimited delivery",
      "Priority kitchen access",
      "Early access to new chefs",
      "10% off every order",
      "24/7 concierge support",
    ],
    cta: "Try free for 30 days",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Corporate",
    monthly: 49,
    yearly: 39,
    desc: "Feed your team, every day.",
    features: [
      "Everything in Savour Pass",
      "Up to 50 team members",
      "Monthly billing & invoices",
      "Dedicated account manager",
      "Custom dietary policies",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-medium text-amber-400 mb-4 tracking-wider uppercase">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Eat well for{" "}
            <span className="gradient-text italic">less</span>
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto mb-8">
            One flat pass. Unlimited deliveries. Cancel anytime.
          </p>

          <div className="inline-flex items-center gap-1 glass rounded-xl p-1 border border-white/[0.07]">
            <button onClick={() => setYearly(false)}
              className={cn("px-4 py-1.5 rounded-lg text-sm transition-all duration-200",
                !yearly ? "bg-white/10 text-white font-medium" : "text-white/35 hover:text-white/60")}>
              Monthly
            </button>
            <button onClick={() => setYearly(true)}
              className={cn("px-4 py-1.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2",
                yearly ? "bg-white/10 text-white font-medium" : "text-white/35 hover:text-white/60")}>
              Yearly
              <span className="text-[10px] font-semibold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">Save 22%</span>
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
                plan.highlight ? "border-amber-500/30 shadow-xl shadow-amber-900/20" : "border-white/[0.07]"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg">
                    {(plan as { badge?: string }).badge}
                  </span>
                </div>
              )}
              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-amber-500/6 to-transparent pointer-events-none" />
              )}

              <div className="mb-5">
                <p className="text-sm font-medium text-white/45 mb-1">{plan.name}</p>
                <div className="flex items-end gap-1 mb-1.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={yearly ? "y" : "m"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-4xl font-display font-semibold text-white"
                    >
                      £{yearly ? plan.yearly : plan.monthly}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-white/25 mb-1.5">/mo</span>
                </div>
                <p className="text-sm text-white/35">{plan.desc}</p>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                    <svg className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.highlight ? (
                <GlowButton href="#" className="w-full justify-center py-2.5">{plan.cta}</GlowButton>
              ) : (
                <a href="#" className="block text-center py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white border border-white/[0.09] hover:border-white/[0.16] hover:bg-white/[0.03] transition-all duration-200">
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
