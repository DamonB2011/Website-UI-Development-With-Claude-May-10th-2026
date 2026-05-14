"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card3D } from "@/components/ui/Card3D";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface DishCardProps {
  name: string;
  chef: string;
  time: string;
  photoUrl: string;
  fallbackGradient: string;
  className?: string;
  style?: React.CSSProperties;
  floatDelay?: number;
}

export function DishCard({
  name,
  chef,
  time,
  photoUrl,
  fallbackGradient,
  className,
  style,
  floatDelay = 0,
}: DishCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 20, filter: "blur(4px)" }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
        filter: "blur(0px)",
      }}
      transition={{
        opacity: { ...spring.default, delay: floatDelay + 0.5 },
        scale:   { ...spring.default, delay: floatDelay + 0.5 },
        filter:  { ...spring.default, delay: floatDelay + 0.5 },
        y: {
          type: "spring",
          duration: 4 + floatDelay * 2,
          bounce: 0.25,
          repeat: Infinity,
          repeatType: "mirror",
          delay: floatDelay + 1.1,
        },
      }}
      className={cn("absolute", className)}
      style={style}
    >
      <Card3D intensity={12} sheenOpacity={0.14} className="w-full h-full">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/60 w-full h-full">
          {!imgError ? (
            <Image
              src={photoUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="240px"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: fallbackGradient }}
            />
          )}

          {/* Studio vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Delivery time badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500 text-ink-950 shadow-lg shadow-amber-900/40">
              {time}
            </span>
          </div>

          {/* Dish info */}
          <div className="absolute bottom-0 inset-x-0 p-3.5 z-10">
            <p className="text-[13px] font-semibold text-white leading-tight mb-0.5">{name}</p>
            <p className="text-[10px] text-white/50">{chef}</p>
          </div>
        </div>
      </Card3D>
    </motion.div>
  );
}
