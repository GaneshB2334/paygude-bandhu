import Link from "next/link";
import { ArrowRight, Gift, Plane } from "lucide-react";

export function DubaiLuckyDrawBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="relative overflow-hidden rounded-[22px] lucky-banner-gradient border border-amber-200/80 shadow-sm px-5 py-5 sm:px-7 sm:py-5">
        {/* Stylized Dubai Skyline + Burj Khalifa silhouette watermark on right */}
        <svg
          viewBox="0 0 360 110"
          fill="none"
          className="pointer-events-none select-none hidden sm:block absolute right-24 bottom-0 h-24 w-auto opacity-30"
          aria-hidden="true"
        >
          <path
            d="M15 110V86h16v24H15Zm22 0V70h14v40H37Zm20 0V78h18v32H57Zm26 0V52l5-6 5 6v58H83Zm22 0V64h16v46h-16Zm26 0V36l6-34 6 34v74h-12Zm24 0V66h18v44h-18Zm24 0V58h14v52h-14Zm22 0V76h20v34h-20Zm28 0V62l7-14 7 14v48h-14Zm24 0V78h18v32h-18Zm28 0V68h15v42h-15Z"
            fill="#C79F32"
          />
          <path
            d="M0 108h360"
            stroke="#C79F32"
            strokeWidth="3"
          />
        </svg>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          {/* Left: Gift Box + Title */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="relative w-14 h-14 rounded-2xl bg-[#181715] flex items-center justify-center shadow-md shrink-0">
              <Gift className="w-7 h-7 text-[#FACC15]" strokeWidth={2.2} />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FACC15] text-[#111111] text-[10px] font-black flex items-center justify-center shadow">
                20
              </span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight leading-tight">
                Dubai Lucky Draw
              </h2>
              <div className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-[#FACC15] text-xs sm:text-sm font-extrabold text-[#111111]">
                20 Lucky Winners
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px h-12 bg-amber-300/80 shrink-0" />

          {/* Center: Description + Plane accent */}
          <div className="flex items-center gap-3 flex-1">
            <p className="text-sm sm:text-[15px] font-medium text-stone-700 leading-snug max-w-sm">
              Enjoy your favourite snacks and get a chance to win a dream trip
              to Dubai!
            </p>
            <Plane className="hidden lg:block w-6 h-6 text-amber-700/60 -rotate-12 shrink-0" />
          </div>

          {/* Right: Know More Pill Button */}
          <Link
            href="/offers"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] px-6 py-3 text-sm font-extrabold text-[#111111] shadow-sm hover:bg-[#eab308] active:scale-[0.98] transition-all shrink-0"
          >
            Know More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
