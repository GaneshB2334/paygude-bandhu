import type { Metadata } from "next";
import Link from "next/link";
import { Camera, ScrollText, MapPin, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/data";
import { GalleryGrid } from "@/components/GalleryGrid";
import { FranchiseBanner } from "@/components/FranchiseBanner";

export const metadata: Metadata = {
  title: "Food Gallery — Fresh From Our Kitchen",
  description:
    "Browse real photos of Paygude Bandhu's authentic Pune dishes — Misal Pav, Ghee Podi Thatte Idli, Signature Cut Dosa, Kanda Pohe, Ghee Idli Sambar, Vada Pav, Masala Dosa, Tomato Onion Uttappa & Rava Upma.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1 bg-white">
      {/* GALLERY HERO HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF2] via-white to-white border-b border-amber-100/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF08A] px-3.5 py-1 text-xs font-extrabold text-[#111111]">
                <Camera className="w-3.5 h-3.5" />
                Real Dishes From Our Pune Kitchen
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111] leading-[1.08]">
                Freshly Served{" "}
                <span className="text-[#F5C518]">Food Gallery</span>
              </h1>
              <div>
                <span className="marathi-brush font-[family-name:var(--font-devanagari)] text-lg sm:text-xl font-extrabold text-[#111111]">
                  {BRAND.tagline}
                </span>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                A closer look at our piping hot Maharashtrian &amp; South Indian
                plates served daily across all 10 Paygude Bandhu outlets in
                Pune.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-end shrink-0">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] px-5 py-3.5 text-sm font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors shadow-xs"
              >
                <ScrollText className="w-4 h-4" />
                <span>View Rate Card</span>
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

      {/* INTERACTIVE PHOTO GALLERY + LIGHTBOX */}
      <GalleryGrid />

      {/* FRANCHISE CTA */}
      <FranchiseBanner />
    </main>
  );
}
