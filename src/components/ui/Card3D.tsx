"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // degrees of max tilt, default 14
  sheenOpacity?: number; // 0–1, default 0.12
}

export function Card3D({
  children,
  className,
  intensity = 14,
  sheenOpacity = 0.12,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-damped for physical feel — fast attack, smooth settle
  const springX = useSpring(rawX, { stiffness: 220, damping: 22 });
  const springY = useSpring(rawY, { stiffness: 220, damping: 22 });

  // Map normalised [-0.5, 0.5] cursor pos → rotation degrees
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);

  // Sheen radial gradient follows cursor
  const sheenXpct = useTransform(springX, [-0.5, 0.5], ["10%", "90%"]);
  const sheenYpct = useTransform(springY, [-0.5, 0.5], ["10%", "90%"]);
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenXpct} ${sheenYpct}, rgba(255,255,255,${sheenOpacity}) 0%, transparent 65%)`;

  // Scale up very slightly on hover for lift feeling
  const scale = useSpring(1, { stiffness: 260, damping: 22 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseEnter() {
    scale.set(1.025);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    scale.set(1);
  }

  return (
    <div style={{ perspective: "700px" }} className={className}>
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {children}
        {/* Specular sheen layer — sits on top, pointer-events none */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20"
          style={{ background: sheen }}
        />
      </motion.div>
    </div>
  );
}
