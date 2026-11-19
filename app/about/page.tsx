import type { Metadata } from "next";
import Image from "next/image";
import {
  ThumbsUp,
  ShieldCheck,
  Star,
  Users,
  Heart,
  MapPin,
  Smile,
  ChevronRight,
} from "lucide-react";
import { BRAND } from "@/lib/data";
import { HeroArtwork } from "@/components/HeroArtwork";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { FranchiseBanner } from "@/components/FranchiseBanner";

export const metadata: Metadata = {
  title: "About Paygude Bandhu",
  description:
    "Discover the story, journey, and values of Paygude Bandhu — Pune's most loved Chaha & Snacks brand serving authentic Maharashtrian flavours across 10+ Pune outlets.",
};

const JOURNEY = [
  {
    step: 1,
    title: "The Beginning",
    description:
      "A small outlet with a big dream – to serve great chaha & snacks to Punekars.",
    image: "/images/journey-stall.png",
    imageStyle: "object-contain p-1",
  },
  {
    step: 2,
    title: "Grew Across Pune",
    description:
      "Your love and support helped us grow from one outlet to multiple locations across the city.",
    image: "/images/shaniwar-wada-sketch.png",
    imageStyle: "object-contain mix-blend-multiply p-2",
  },
  {
    step: 3,
    title: "10 Branches Today",
    description:
      "We are proud to serve you at 10+ branches in Pune and continue to grow together.",
    image: "/images/storefront.png",
    imageStyle: "object-cover",
  },
] as const;

const VALUES = [
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
    icon: Users,
    title: "Warm Service",
    description: "Friendly people, stronger bonds",
  },
] as const;

const PUNE_LOVES = [
  {
    icon: Users,
    label: "Authentic Maharashtrian Taste",
  },
  {
    icon: Heart,
    label: "Perfect Chaha & Snacks Combo",
  },
  {
    icon: MapPin,
    label: "Clean & Cozy Outlets",
  },
  {
    icon: Smile,
    label: "A Place for Good Conversations",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      {/* HERO SECTION matching Screenshot 3 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFEFA] via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-10 sm:pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6">
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-[#111111]">
                About
                <span className="block text-[#F5C518] mt-1">
                  Paygude Bandhu
                </span>
              </h1>

              <div className="pt-0.5">
                <span className="marathi-brush font-[family-name:var(--font-devanagari)] text-xl sm:text-2xl font-extrabold text-[#111111]">
                  {BRAND.tagline}
                </span>
              </div>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                Pune&apos;s most loved Chaha &amp; Snacks brand.
                <br />
                Good food, great people, stronger bonds.
                <br />
                A true Pune experience!
              </p>
            </div>

            <div className="lg:col-span-6">
              <HeroArtwork variant="food" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-6">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Our Story
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-6 rounded-[24px] bg-[#FAF8F2] border border-amber-100/90 p-6 sm:p-8 flex flex-col justify-center space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
            <p>
              <strong className="text-[#111111]">Paygude Bandhu</strong> started
              with a simple belief – great chaha and tasty snacks can bring
              people together. What began as a small outlet in Pune, has today
              become a beloved brand known for its authentic Maharashtrian
              flavours, warm atmosphere and consistent quality.
            </p>
            <p>
              From our signature cutting chai to crispy vada pav, every item is
              made with care, hygiene and a promise to serve happiness. At
              Paygude Bandhu, it&apos;s not just about food – it&apos;s about
              people, conversations and the special bonds that are brewed over a
              cup of chai.
            </p>
          </div>

          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] rounded-[24px] overflow-hidden shadow-md border border-amber-200/70">
            <Image
              src="/images/storefront.png"
              alt="Paygude Bandhu warm glowing storefront in Pune"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
            {/* Signature Marathi Wall Quote Badge matching Screenshot 3 */}
            <div className="absolute bottom-4 right-4 max-w-[190px] rounded-2xl bg-[#FFFDF4]/95 backdrop-blur-xs border border-[#FACC15] px-4 py-3 shadow-lg">
              <p className="font-[family-name:var(--font-devanagari)] text-xs sm:text-sm font-extrabold text-[#181715] leading-snug">
                चांगला चहा, चांगले लोक आणि छान क्षण... ♥
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {JOURNEY.map((item, idx) => (
            <div key={item.step} className="relative flex items-center">
              <div className="w-full h-full rounded-[24px] bg-[#FAF8F2] border border-amber-100/90 p-6 text-center flex flex-col items-center shadow-2xs">
                <div className="relative mb-5">
                  {/* Step Number Badge */}
                  <span className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#FACC15] border-2 border-white shadow text-[#111111] font-black text-sm flex items-center justify-center">
                    {item.step}
                  </span>

                  {/* Circular Illustration */}
                  <div className="relative w-32 h-32 rounded-full bg-[#FACC15] overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="128px"
                      className={item.imageStyle}
                    />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-[240px]">
                  {item.description}
                </p>
              </div>

              {/* Chevron Arrow between steps on desktop */}
              {idx < JOURNEY.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:flex absolute -right-5 z-20 w-8 h-8 rounded-full bg-white border border-amber-200 items-center justify-center text-[#111111] shadow-xs"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* OUR VALUES SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="rounded-2xl bg-white border border-stone-100 shadow-[0_3px_16px_rgba(24,23,21,0.04)] p-5 sm:p-6 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#FEF08A] flex items-center justify-center text-[#111111] mb-4">
                  <Icon className="w-7 h-7" strokeWidth={2.2} />
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#111111]">
                  {val.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-snug">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY PUNE LOVES US + TESTIMONIAL CAROUSEL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Why Pune Loves Us
          </h2>
        </div>

        {/* 4 Highlight Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-7">
          {PUNE_LOVES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl bg-[#FAF8F2] border border-amber-100 px-4 py-3.5"
              >
                <div className="w-11 h-11 rounded-full bg-[#FEF08A] flex items-center justify-center text-[#111111] shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <span className="text-sm font-bold text-[#181715] leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Interactive Testimonials Slider */}
        <TestimonialCarousel />
      </section>

      {/* FRANCHISE CTA BANNER */}
      <FranchiseBanner />
    </main>
  );
}
