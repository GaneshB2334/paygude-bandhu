import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Camera } from "lucide-react";
import { BRAND, FULL_MENU } from "@/lib/data";
import { MenuExplorer } from "@/components/MenuExplorer";
import { DubaiLuckyDrawBanner } from "@/components/DubaiLuckyDrawBanner";
import { FranchiseBanner } from "@/components/FranchiseBanner";

export const metadata: Metadata = {
  title: "Official Rate Card & Menu — Chaha, Idli, Dosa & Snacks",
  description:
    "View Paygude Bandhu's official 40-item Pune Rate Card — Chaha ₹15, Ghee Idli Sambar ₹15, Vada Pav ₹20, Pohe ₹25, Upma ₹25, Misal ₹65, Masala Dosa ₹75, Cut Dosa ₹90 & Pav Bhaji ₹120.",
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
                {FULL_MENU.length} Fresh Items • Official Pune Rate Card • 6:30
                AM – 10:30 PM
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111] leading-[1.08]">
                Official{" "}
                <span className="text-[#F5C518]">Chaha &amp; Snacks</span> Rate
                Card
              </h1>
              <div>
                <span className="marathi-brush font-[family-name:var(--font-devanagari)] text-lg sm:text-xl font-extrabold text-[#111111]">
                  {BRAND.tagline}
                </span>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                Transparent, pocket-friendly Pune pricing across all 40 freshly
                prepared Pure Vegetarian items — from ₹15 Signature Chaha &amp;
                Ghee Idli Sambar to crispy Cut Dosa, Misal &amp; Pav Bhaji.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-end shrink-0">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] px-5 py-3.5 text-sm font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors shadow-xs"
              >
                <Camera className="w-4 h-4" />
                <span>Food Gallery</span>
              </Link>
              <Link
                href="/branches"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-extrabold text-white hover:bg-stone-800 transition-colors shadow-md"
              >
                <MapPin className="w-4 h-4 text-[#FACC15]" />
                <span>Find Branch</span>
                <ArrowRight className="w-4 h-4 text-[#FACC15]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL RATE CARD BOARD */}
      <MenuExplorer />

      {/* DUBAI LUCKY DRAW PROMO */}
      <DubaiLuckyDrawBanner />

      {/* FRANCHISE CTA */}
      <FranchiseBanner />
    </main>
  );
}
