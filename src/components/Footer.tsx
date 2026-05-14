"use client";

import { motion } from "framer-motion";

const cols = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Component library", "Templates", "Blog"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500" />
                <div className="absolute inset-[2px] rounded-[5px] bg-ink-950" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="url(#fg)" strokeWidth="1.5" fill="none" />
                    <defs>
                      <linearGradient id="fg" x1="2" y1="2" x2="14" y2="14" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#a78bfa" /><stop offset="1" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="font-semibold text-sm text-white">Luminary</span>
            </div>
            <p className="text-xs text-white/35 leading-relaxed max-w-[160px]">
              The design system platform built for the motion era.
            </p>
          </div>

          {/* Links */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/75 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Luminary, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "Discord"].map((s) => (
              <a key={s} href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
