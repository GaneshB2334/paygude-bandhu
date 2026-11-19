import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/data";
import { MenuExplorer } from "@/components/MenuExplorer";
import { DubaiLuckyDrawBanner } from "@/components/DubaiLuckyDrawBanner";
import { FranchiseBanner } from "@/components/FranchiseBanner";

export const metadata: Metadata = {
  title: "Full Menu — Chaha, Breakfast & Maharashtrian Snacks",
  description:
    "Explore Paygude Bandhu's 100% Pure Vegetarian menu — Cutting Chaha, Kanda Pohe, Pune Vada Pav, Ghee Idli, Misal Pav, Sabudana Vada, Bun Maska, Masala Dosa & value combos.",
};

export default function MenuPage() {
  return (
    <main className="flex-1 bg-white">
      {/* MENU HERO HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF2] via-white to-white border-b border-amber-100/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF08A] px-3.5 py-1 text-xs font-extrabold text-[#111111]">
                Freshly Prepared All Day • 6:30 AM – 10:30 PM
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111] leading-[1.08]">
                Our Signature{" "}
                <span className="text-[#F5C518]">Chaha &amp; Snacks Menu</span>
              </h1>
              <div>
                <span className="marathi-brush font-[family-name:var(--font-devanagari)] text-lg sm:text-xl font-extrabold text-[#111111]">
                  {BRAND.tagline}
                </span>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                Every cup of cutting chaha is freshly brewed and every vada,
                pohe, and ghee idli is served piping hot with consistent taste
                across all 10 Paygude Bandhu outlets in Pune.
              </p>
            </div>

            <Link
              href="/branches"
              className="inline-flex items-center justify-center gap-2 self-start lg:self-end rounded-full bg-[#111111] px-6 py-3.5 text-sm font-extrabold text-white hover:bg-stone-800 transition-colors shadow-md shrink-0"
            >
              <MapPin className="w-4 h-4 text-[#FACC15]" />
              <span>Visit Nearest Branch</span>
              <ArrowRight className="w-4 h-4 text-[#FACC15]" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FILTERABLE MENU */}
      <MenuExplorer />

      {/* DUBAI LUCKY DRAW PROMO */}
      <DubaiLuckyDrawBanner />

      {/* FRANCHISE CTA */}
      <FranchiseBanner />
    </main>
  );
}
