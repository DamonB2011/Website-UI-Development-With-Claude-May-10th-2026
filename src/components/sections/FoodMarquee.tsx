"use client";

// Curated Unsplash food photos — direct img tags as specified
const photos = [
  { id: "1414235077428-338989a2e8c0", alt: "Fine dining plate" },
  { id: "1476224203421-9ac39bcb3327", alt: "Truffle risotto" },
  { id: "1546833999-b9f581a1996d",   alt: "Wagyu beef" },
  { id: "1504674900247-0877df9cc836", alt: "Artisan plating" },
  { id: "1547592166-23ac45744acd",   alt: "Lobster bisque" },
  { id: "1565299624946-b28f40a0ae38", alt: "Italian cuisine" },
  { id: "1529692236671-f1f6cf9683ba", alt: "Beef tartare" },
  { id: "1565958011703-44f9829ba187", alt: "Complex plating" },
  { id: "1512621776951-a57141f2eefd", alt: "Fresh ingredients" },
  { id: "1559339352-11d035aa65de",   alt: "Elegant risotto" },
];

export default function FoodMarquee() {
  // Duplicate for seamless loop — CSS animation uses -50% translate
  const doubled = [...photos, ...photos];

  return (
    <div className="relative overflow-hidden py-10" aria-hidden>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0f0d0a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0f0d0a] to-transparent pointer-events-none" />

      <div className="animate-marquee flex gap-4" style={{ width: "max-content" }}>
        {doubled.map((photo, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[260px] h-[160px] rounded-2xl overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://images.unsplash.com/photo-${photo.id}?w=600&q=80`}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Subtle warm overlay for brand cohesion */}
            <div className="absolute inset-0 bg-amber-950/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
