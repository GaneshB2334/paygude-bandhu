import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  MapPin,
  ArrowRight,
  ThumbsUp,
  ShieldCheck,
  Star,
  Bike,
} from "lucide-react";
import { BESTSELLERS, BRANCHES, BRAND, KITCHEN_GALLERY } from "@/lib/data";
import { HeroArtwork } from "@/components/HeroArtwork";
import { DubaiLuckyDrawBanner } from "@/components/DubaiLuckyDrawBanner";
import { FranchiseBanner } from "@/components/FranchiseBanner";

const WHY_LOVE_US = [
  {
    icon: ThumbsUp,
    title: "Great Taste",
    description: "Authentic flavours loved by Punekars",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description: "Clean kitchen, healthy food",
  },
  {
    icon: Star,
    title: "Consistent Quality",
    description: "Same great taste every time",
  },
  {
    icon: Bike,
    title: "Quick Service",
    description: "Freshly prepared, served with a smile",
  },
] as const;

const HOME_KITCHEN_SPOTLIGHT = KITCHEN_GALLERY.slice(0, 6);

export default function HomePage() {
  return (
    <main className="flex-1 bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFEFA] via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-10 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-[#111111]">
                Pune&apos;s Favourite
                <span className="block text-[#F5C518] mt-1">
                  Chaha &amp; Snacks
                </span>
              </h1>

              {/* Marathi Brushstroke Highlight Banner */}
              <div className="pt-0.5">
                <span className="marathi-brush font-[family-name:var(--font-devanagari)] text-xl sm:text-2xl font-extrabold text-[#111111]">
                  {BRAND.tagline}
                </span>
              </div>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                Hot breakfast. Tasty snacks.
                <br />
                Freshly brewed chaha.
                <br />
                A true Pune experience!
              </p>

              {/* CTA Pill Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#FACC15] px-6 sm:px-7 py-3.5 text-sm sm:text-base font-extrabold text-[#111111] shadow-[0_6px_20px_rgba(250,204,21,0.4)] hover:bg-[#eab308] active:scale-[0.98] transition-all"
                >
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/branches"
                  className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-stone-200 px-6 sm:px-7 py-3.5 text-sm sm:text-base font-bold text-[#181715] hover:border-[#FACC15] hover:bg-[#FFFDF4] active:scale-[0.98] transition-all shadow-xs"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 fill-[#111111] text-white" />
                  <span>Find Branch</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6">
              <HeroArtwork variant="food" />
            </div>
          </div>
        </div>
      </section>

      {/* DUBAI LUCKY DRAW PROMO BANNER */}
      <DubaiLuckyDrawBanner />

      {/* OUR BESTSELLERS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Our Bestsellers
          </h2>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#181715] hover:text-amber-600 transition-colors"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {BESTSELLERS.map((item) => (
            <Link
              key={item.id}
              href="/menu"
              className="group relative rounded-[22px] bg-[#FAF8F2] border border-stone-100/90 hover:border-[#FACC15] hover:shadow-[0_12px_28px_rgba(250,204,21,0.2)] transition-all p-4 sm:p-5 text-center flex flex-col items-center"
            >
              <span className="absolute right-3 top-3 rounded-full bg-white border border-amber-200 px-2.5 py-0.5 text-xs font-extrabold text-[#111111]">
                ₹{item.price}
              </span>

              {/* Yellow Circular Halo + Transparent Dish Cutout */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-3 mt-1">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#FACC15] transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 p-1">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 160px, 240px"
                    className="object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.16)] transition-transform duration-300 group-hover:-translate-y-1.5"
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-[#111111]">
                {item.name}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-snug max-w-[190px]">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* REAL KITCHEN SPECIALITIES SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              Fresh From Our Kitchen
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#181715] hover:text-amber-600 transition-colors"
          >
            <span>See Official Rate Card</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {HOME_KITCHEN_SPOTLIGHT.map((dish) => (
            <Link
              key={dish.id}
              href="/menu"
              className="group relative overflow-hidden rounded-2xl bg-[#181715] aspect-[4/5] shadow-xs border border-stone-200/70"
            >
              <Image
                src={dish.image}
                alt={`${dish.title} (${dish.marathiTitle})`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 190px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3 pt-9">
                <p className="text-[11px] font-bold text-[#FACC15] font-[family-name:var(--font-devanagari)] leading-tight">
                  {dish.marathiTitle}
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-white leading-snug mt-0.5">
                  {dish.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY PEOPLE LOVE US SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-8">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Why People Love Us
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-stone-200/80 rounded-2xl bg-white border border-stone-100 shadow-[0_2px_18px_rgba(24,23,21,0.03)] py-6">
          {WHY_LOVE_US.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center px-4 sm:px-6 py-4 lg:py-2"
              >
                <div className="w-16 h-16 rounded-full bg-[#FEF08A] flex items-center justify-center text-[#111111] mb-4 shadow-xs">
                  <Icon className="w-7 h-7" strokeWidth={2.2} />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-snug max-w-[180px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OUR BRANCHES PREVIEW SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Our Branches
          </h2>
          <Link
            href="/branches"
            className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#181715] hover:text-amber-600 transition-colors"
          >
            <MapPin className="w-4 h-4 fill-[#111111] text-white" />
            <span>Find Nearest Branch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="rounded-[22px] bg-[#FAF8F2] border border-amber-100/80 p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3">
            {BRANCHES.map((branch) => (
              <Link
                key={branch.id}
                href="/branches"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-stone-200/80 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#181715] shadow-2xs hover:border-[#FACC15] hover:bg-[#FFFDF4] hover:-translate-y-0.5 transition-all"
              >
                <span className="w-6 h-6 rounded-full bg-[#FEF08A] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#111111]" />
                </span>
                <span>{branch.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN A FRANCHISE CTA BANNER */}
      <FranchiseBanner />
    </main>
  );
}
