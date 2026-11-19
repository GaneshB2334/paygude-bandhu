import type { Metadata } from "next";
import Link from "next/link";
import {
  Gift,
  Plane,
  MapPin,
  Ticket,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Utensils,
} from "lucide-react";
import { BRANCHES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dubai Lucky Draw — 20 Lucky Winners",
  description:
    "Enjoy your favourite Chaha & Snacks at any Paygude Bandhu Pune branch and stand a chance to be one of 20 Lucky Winners to win a dream trip to Dubai!",
};

const STEPS = [
  {
    step: "1",
    icon: MapPin,
    title: "Visit Any Pune Branch",
    desc: "Drop by any of our 10 Paygude Bandhu outlets across Pune — from Deccan to Sinhagad Road.",
  },
  {
    step: "2",
    icon: Utensils,
    title: "Enjoy Your Favourite Snacks",
    desc: "Order piping hot Cutting Chaha, Vada Pav, Kanda Pohe, Ghee Idli, or any delicious combo.",
  },
  {
    step: "3",
    icon: Ticket,
    title: "Drop Your Lucky Draw Coupon",
    desc: "Fill out your official Lucky Draw coupon at the billing counter to enter the 20 Lucky Winners draw!",
  },
] as const;

export default function OffersPage() {
  return (
    <main className="flex-1 bg-white">
      {/* HERO CAMPAIGN BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="relative overflow-hidden rounded-[30px] warm-banner-gradient border-2 border-[#FACC15] p-7 sm:p-10 lg:p-12 shadow-md">
          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#111111] text-[#FACC15] px-4 py-1.5 text-xs sm:text-sm font-extrabold">
              <Gift className="w-4 h-4" />
              Paygude Bandhu Special Festival Offer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#111111] leading-[1.06]">
              Dubai Lucky Draw
              <span className="block mt-2">
                <span className="inline-block rounded-xl bg-[#FACC15] px-4 py-1 text-2xl sm:text-3xl lg:text-4xl shadow-xs">
                  20 Lucky Winners!
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-800 leading-relaxed max-w-xl font-medium">
              Enjoy your favourite Maharashtrian snacks and freshly brewed
              cutting chaha at any of our 10 Pune outlets — and stand a chance
              to win an unforgettable dream trip to Dubai!
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/branches"
                className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-extrabold text-white hover:bg-stone-800 transition-colors shadow-md"
              >
                <MapPin className="w-4 h-4 text-[#FACC15]" />
                <span>Find Participating Branch</span>
                <ArrowRight className="w-4 h-4 text-[#FACC15]" />
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-amber-300 px-6 py-3.5 text-sm font-extrabold text-[#111111] hover:bg-[#FFFDF4] transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Decorative Plane + Skyline Graphic */}
          <div
            aria-hidden="true"
            className="hidden lg:flex flex-col items-end justify-center absolute right-10 top-1/2 -translate-y-1/2 opacity-90"
          >
            <div className="w-36 h-36 rounded-full bg-white/75 border-2 border-[#FACC15] flex flex-col items-center justify-center shadow-lg text-center p-4">
              <Plane className="w-10 h-10 text-[#111111] -rotate-12 mb-1" />
              <span className="text-2xl font-black text-[#111111]">20</span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                Dubai Trips
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO PARTICIPATE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-7">
          <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            How to Participate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="rounded-2xl bg-[#FAF8F2] border border-amber-100 p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FACC15] text-[#111111] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-amber-300">
                    0{item.step}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PARTICIPATING OUTLETS & TERMS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl bg-[#FAF8F2] border border-amber-100 p-6 sm:p-7">
            <h2 className="text-xl font-extrabold text-[#111111] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              Valid Across All 10 Pune Outlets
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {BRANCHES.map((branch) => (
                <Link
                  key={branch.id}
                  href="/branches"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white border border-stone-200 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#181715] hover:border-[#FACC15] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  {branch.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-white border border-stone-200 p-6 sm:p-7 space-y-3">
            <h2 className="text-xl font-extrabold text-[#111111]">
              Offer Highlights
            </h2>
            <ul className="space-y-2.5 text-sm text-stone-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Open to all dine-in &amp; takeaway customers across Pune.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Ask for your Lucky Draw coupon at the billing counter on
                  eligible orders.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  20 Lucky Winners will be announced officially on our social
                  media channels &amp; in-store displays.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
