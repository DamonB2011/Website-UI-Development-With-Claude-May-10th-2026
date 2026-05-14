import type { Variants, Transition } from "framer-motion";

// ─── Core spring tokens ────────────────────────────────────────────────
// bounce: 0 gives an ease-out-quart feel — no overshoot, no elastic
export const spring = {
  default:   { type: "spring", duration: 0.45, bounce: 0 } as Transition,
  fast:      { type: "spring", duration: 0.25, bounce: 0 } as Transition,
  slow:      { type: "spring", duration: 0.65, bounce: 0 } as Transition,
  // Hover / tap micro-interactions
  micro:     { type: "spring", duration: 0.18, bounce: 0 } as Transition,
  // For continuous physics (card tilt, parallax)
  physical:  { type: "spring", stiffness: 300, damping: 20 }  as Transition,
} as const;

// ─── Page-load enter recipe ────────────────────────────────────────────
// initial → animate. Matches brief exactly.
export const enterInitial = {
  opacity: 0,
  y: 8,
  filter: "blur(4px)",
} as const;

export const enterAnimate = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
} as const;

// ─── Variants ─────────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring.default,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: spring.default,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: spring.default,
  },
};

// ─── Stagger containers ────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0 },
  },
};

// Each child inside staggerContainer
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring.default,
  },
};

// ─── Exit (subtler than enter — smaller translate) ─────────────────────
export const exitDown: Variants = {
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  hidden:  { opacity: 0, y: 4, filter: "blur(2px)", transition: spring.fast },
};
