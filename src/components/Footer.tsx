"use client";

const cols = [
  { heading: "Order", links: ["Browse chefs", "Cuisines", "Group orders", "Corporate"] },
  { heading: "Company", links: ["About", "Careers", "Press", "Blog"] },
  { heading: "Chefs", links: ["Partner with us", "Chef standards", "Kitchen support", "Stories"] },
  { heading: "Legal", links: ["Privacy", "Terms", "Allergens", "Cookies"] },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-amber-500/8 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500" />
                <span className="relative text-white text-sm font-display font-semibold leading-none">S</span>
              </div>
              <span className="font-display font-semibold text-[15px] text-white">Savour</span>
            </div>
            <p className="text-xs text-white/25 leading-relaxed max-w-[160px]">
              Chef-curated meals delivered in 30 minutes. No compromise.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/35 hover:text-white/65 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">© {new Date().getFullYear()} Savour Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Instagram", "Twitter", "TikTok"].map((s) => (
              <a key={s} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
