import type { Metadata } from "next";
import Image from "next/image";
import {
  TrendingUp,
  Award,
  ChefHat,
  Megaphone,
  CheckCircle2,
  Phone,
  Clock,
  Store,
} from "lucide-react";
import { BRAND, FRANCHISE_MODELS } from "@/lib/data";
import { FranchiseForm } from "@/components/FranchiseForm";

export const metadata: Metadata = {
  title: "Open a Paygude Bandhu Franchise",
  description:
    "Partner with Pune's most loved Chaha & Snacks brand. Explore Paygude Bandhu franchise models, end-to-end kitchen training, standardized supply chain, and submit your franchise enquiry.",
};

const STATS = [
  { value: "10+", label: "Thriving Pune Outlets" },
  { value: "100%", label: "Standardized Taste & SOPs" },
  { value: "30 Days", label: "Fast Store Setup" },
  { value: "360°", label: "Training & Marketing Support" },
] as const;

const BENEFITS = [
  {
    icon: Award,
    title: "Trusted Pune Brand",
    desc: "Instant neighborhood trust backed by Punekars' love for our signature cutting chaha & authentic snacks.",
  },
  {
    icon: ChefHat,
    title: "Zero-Guesswork Kitchens",
    desc: "Centralized tea blends, spice mixes, and crisp recipe SOPs ensure identical taste without chef dependency.",
  },
  {
    icon: TrendingUp,
    title: "High Repeat Footfall",
    desc: "Morning pohe & idli, afternoon snacks, and all-day chaha drive steady revenue from 6:30 AM to 10:30 PM.",
  },
  {
    icon: Megaphone,
    title: "Launch & Promo Support",
    desc: "Storefront design, digital launch campaigns, festive promotions (like Dubai Lucky Draw), and ongoing guidance.",
  },
] as const;

const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "Submit Enquiry",
    desc: "Share your preferred city, area & space details via our franchise form.",
  },
  {
    step: "02",
    title: "Site Evaluation",
    desc: "Our expansion experts evaluate footfall, visibility & commercial viability.",
  },
  {
    step: "03",
    title: "Setup & Staff Training",
    desc: "We help build your warm Paygude Bandhu outlet and train your kitchen & counter team.",
  },
  {
    step: "04",
    title: "Grand Launch",
    desc: "Open doors with our signature supply chain, branding & hyperlocal launch campaign!",
  },
] as const;

export default function FranchisePage() {
  return (
    <main className="flex-1 bg-white">
      {/* FRANCHISE HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF2] via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-12 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF08A] px-3.5 py-1 text-xs font-extrabold text-[#111111]">
                Expanding Across Pune &amp; Maharashtra
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111] leading-[1.08]">
                Open a{" "}
                <span className="text-[#F5C518] block mt-1">
                  Paygude Bandhu Franchise
                </span>
              </h1>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-lg">
                Be a part of Pune&apos;s most loved Chaha &amp; Snacks brand.
                Built on authentic taste, spotless kitchens, and a proven daily
                footfall model. Grow together. Serve happiness.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#apply-franchise"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-extrabold text-white hover:bg-stone-800 transition-colors shadow-md"
                >
                  Apply for Franchise
                </a>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-6 py-3.5 text-sm font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-[28px] overflow-hidden shadow-xl border-4 border-[#FEF08A]">
                <Image
                  src="/images/storefront.png"
                  alt="Paygude Bandhu Signature Café Storefront"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Key Stats Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl warm-banner-gradient border border-amber-200/80 p-5 text-center"
              >
                <p className="text-3xl sm:text-4xl font-black text-[#111111]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-stone-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Why Partner With Paygude Bandhu
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-2xl bg-[#FAF8F2] border border-amber-100 p-6 space-y-3"
              >
                <div className="w-13 h-13 rounded-2xl bg-[#FACC15] text-[#111111] flex items-center justify-center">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-extrabold text-[#111111]">
                  {b.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FRANCHISE FORMATS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Franchise Models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FRANCHISE_MODELS.map((model, idx) => (
            <div
              key={model.name}
              className={`rounded-[26px] p-6 sm:p-8 border ${
                idx === 1
                  ? "warm-banner-gradient border-[#FACC15] shadow-md"
                  : "bg-[#FAF8F2] border-amber-100"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-block rounded-full bg-[#181715] text-[#FACC15] text-[11px] font-extrabold px-3 py-1 mb-2">
                    {idx === 1 ? "Most Popular" : "Quick Format"}
                  </span>
                  <h3 className="text-2xl font-black text-[#111111]">
                    {model.name}
                  </h3>
                </div>
                <Store className="w-8 h-8 text-amber-700 shrink-0" />
              </div>

              <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-bold text-[#181715] mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 border border-amber-200">
                  Area: {model.area}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 border border-amber-200">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  Launch: {model.setupTime}
                </span>
              </div>

              <p className="text-sm text-stone-700 mb-5">
                <strong>Ideal For:</strong> {model.idealFor}
              </p>

              <ul className="space-y-2.5">
                {model.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-stone-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4-STEP ROADMAP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            How to Get Started
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ONBOARDING_STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl bg-white border border-stone-200/80 p-5 space-y-2"
            >
              <span className="inline-block text-2xl font-black text-[#F5C518]">
                {s.step}
              </span>
              <h3 className="text-base font-extrabold text-[#111111]">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM SECTION */}
      <section
        id="apply-franchise"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14"
      >
        <FranchiseForm />
      </section>
    </main>
  );
}
