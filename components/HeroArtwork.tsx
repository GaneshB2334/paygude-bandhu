import Image from "next/image";
import { BRAND } from "@/lib/data";

interface HeroArtworkProps {
  variant?: "food" | "branches";
}

export function HeroArtwork({ variant = "food" }: HeroArtworkProps) {
  if (variant === "branches") {
    return (
      <div className="relative w-full max-w-[520px] mx-auto pt-4 pb-2">
        {/* Soft Sun Glow behind Shaniwar Wada */}
        <div className="hero-sun-glow absolute inset-0 -top-4 rounded-full pointer-events-none" />

        {/* Handwritten Marathi Tagline */}
        <div className="absolute right-2 sm:right-4 top-0 sm:top-2 z-20 text-right -rotate-6 select-none">
          <p className="font-[family-name:var(--font-kalam)] text-lg sm:text-xl font-bold text-[#181715] leading-snug">
            आपलं पुणे
            <br />
            आपला चहा...
          </p>
          <span className="text-sm text-[#181715] mr-3">♡</span>
        </div>

        {/* Shaniwar Wada Illustration */}
        <div className="relative z-10 aspect-[4/3] w-full">
          <Image
            src="/images/shaniwar-wada-sketch.png"
            alt="Historic Shaniwar Wada Pune sketch"
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-contain mix-blend-multiply"
            priority
          />
        </div>

        {/* Prominent Yellow Teacup Map Pin Overlay matching Branches Screenshot */}
        <div className="absolute right-6 sm:right-12 bottom-4 sm:bottom-6 z-20 drop-shadow-lg">
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FACC15] border-[3px] border-white shadow-lg flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-9 h-9 sm:w-11 sm:h-11 text-[#181715]"
                aria-hidden="true"
              >
                <path
                  d="M9 19h18v5a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8v-5Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M27 21h3.5a3.5 3.5 0 0 1 0 7H26.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15 14c0-3 2.5-3 2.5-6M20.5 13c0-3.2 2.5-3.2 2.5-6.4"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M11 35h14"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="w-0 h-0 -mt-1 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[20px] border-t-[#FACC15]" />
            <div className="w-10 h-2 rounded-full bg-black/15 blur-[2px] mt-0.5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[560px] mx-auto pt-4 sm:pt-6">
      {/* Sun backdrop */}
      <div className="hero-sun-glow absolute right-2 top-0 w-72 h-72 sm:w-88 sm:h-88 rounded-full pointer-events-none" />

      {/* Background Shaniwar Wada Sketch */}
      <div className="relative ml-auto w-[78%] sm:w-[74%] aspect-[4/3] opacity-90 -mb-28 sm:-mb-36 mr-2 sm:mr-4 pointer-events-none">
        <Image
          src="/images/shaniwar-wada-sketch.png"
          alt="Pune Shaniwar Wada architectural illustration"
          fill
          sizes="(max-width: 768px) 80vw, 420px"
          className="object-contain mix-blend-multiply"
          priority
        />
      </div>

      {/* Handwritten Marathi Tagline */}
      <div className="absolute right-0 sm:right-2 top-2 sm:top-4 z-20 text-right -rotate-6 select-none">
        <p className="font-[family-name:var(--font-kalam)] text-lg sm:text-[21px] font-bold text-[#181715] leading-snug">
          आपलं पुणे
          <br />
          आपला चहा...
        </p>
        <span className="text-sm text-[#181715] mr-3">♡</span>
      </div>

      {/* Foreground Steaming Chaha & Crispy Vada Pav Hero Photo */}
      <div className="relative z-10 aspect-[4/3] w-full">
        <Image
          src="/images/hero-chai-vadapav.png"
          alt={`${BRAND.name} freshly brewed cutting chaha and crispy Pune vada pav`}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-contain drop-shadow-[0_18px_24px_rgba(24,23,21,0.14)]"
          priority
        />
      </div>
    </div>
  );
}
