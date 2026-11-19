import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FranchiseBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="relative overflow-hidden rounded-[26px] warm-banner-gradient border border-amber-200/70 shadow-sm">
        {/* Subtle decorative teacup line-art watermark on far right */}
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className="pointer-events-none select-none absolute right-4 top-3 w-28 h-28 sm:w-36 sm:h-36 text-amber-700/12"
          aria-hidden="true"
        >
          <path
            d="M24 54h54v14a22 22 0 0 1-22 22H46a22 22 0 0 1-22-22V54Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M78 60h10a10 10 0 0 1 0 20H76"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M38 40c0-8 7-8 7-16M54 38c0-9 7-9 7-18"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M20 96h64"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 p-5 sm:p-6 lg:p-7">
          {/* Left Storefront Image */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-md border-2 border-white/80">
              <Image
                src="/images/storefront.png"
                alt="Paygude Bandhu Franchise Storefront in Pune"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Copy + CTA */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col lg:flex-row lg:items-end justify-between gap-5 relative z-10">
            <div className="space-y-2 max-w-xl">
              <p className="text-lg sm:text-xl font-bold text-[#181715] leading-none">
                Open a
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#111111] leading-tight">
                Paygude Bandhu{" "}
                <span className="relative inline-block">
                  Franchise
                  <span className="absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-[#FACC15]" />
                </span>
              </h2>
              <p className="text-sm sm:text-[15px] text-stone-700 leading-relaxed pt-1">
                Be a part of Pune&apos;s most loved Chaha &amp; Snacks brand.
                Grow together. Serve happiness.
              </p>
            </div>

            <Link
              href="/franchise"
              className="inline-flex items-center justify-center gap-2 self-start lg:self-end shrink-0 rounded-full bg-[#111111] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-stone-800 active:scale-[0.98] transition-all"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4 text-[#FACC15]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
