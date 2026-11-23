import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Camera } from "lucide-react";
import { BRAND, FULL_MENU, KITCHEN_GALLERY } from "@/lib/data";
import { MenuExplorer } from "@/components/MenuExplorer";
import { DubaiLuckyDrawBanner } from "@/components/DubaiLuckyDrawBanner";
import { FranchiseBanner } from "@/components/FranchiseBanner";

export const metadata: Metadata = {
  title: "Full Menu & Official Rate Card — Chaha, Idli, Dosa & Snacks",
  description:
    "Explore Paygude Bandhu's complete 40-item Pure Vegetarian menu & official Pune rate card — Chaha ₹15, Ghee Idli Sambar ₹15, Vada Pav ₹20, Pohe ₹25, Upma ₹25, Misal ₹65, Masala Dosa ₹75, Cut Dosa ₹90 & Pav Bhaji ₹120.",
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
                Our Signature{" "}
                <span className="text-[#F5C518]">Chaha &amp; Snacks Menu</span>
              </h1>
              <div>
                <span className="marathi-brush font-[family-name:var(--font-devanagari)] text-lg sm:text-xl font-extrabold text-[#111111]">
                  {BRAND.tagline}
                </span>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                From ₹15 Signature Chaha &amp; Ghee Idli Sambar to crispy Cut
                Dosa, Ghee Podi Thatte Idli, Pune Misal, Pohe &amp; sizzling Pav
                Bhaji — browse our visual menu or switch to the official
                black-and-gold Rate Card view.
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

      {/* INTERACTIVE FILTERABLE MENU & OFFICIAL RATE CARD BOARD */}
      <MenuExplorer />

      {/* REAL KITCHEN PHOTOSHOOT GALLERY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              <Camera className="w-3.5 h-3.5" />
              Real Dishes From Our Kitchen
            </p>
            <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              Freshly Served Every Day
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-medium max-w-xs">
            Authentic Maharashtrian &amp; South Indian plates served piping hot
            across Pune.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {KITCHEN_GALLERY.map((photo) => (
            <figure
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl bg-[#181715] aspect-[4/5] shadow-sm border border-stone-200/80"
            >
              <Image
                src={photo.image}
                alt={`${photo.title} — ${photo.marathiTitle}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 220px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5 pt-10 text-white">
                <p className="text-xs font-bold text-[#FACC15] font-[family-name:var(--font-devanagari)] leading-tight">
                  {photo.marathiTitle}
                </p>
                <p className="text-sm font-extrabold leading-snug mt-0.5">
                  {photo.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* DUBAI LUCKY DRAW PROMO */}
      <DubaiLuckyDrawBanner />

      {/* FRANCHISE CTA */}
      <FranchiseBanner />
    </main>
  );
}
