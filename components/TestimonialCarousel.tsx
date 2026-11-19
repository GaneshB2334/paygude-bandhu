"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative rounded-2xl bg-[#FAF8F2] border border-amber-100/90 px-4 sm:px-6 py-6 sm:py-7 shadow-xs">
      <div className="flex items-center justify-between gap-3 sm:gap-5">
        {/* Previous Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous customer review"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-amber-100 flex items-center justify-center text-stone-600 hover:text-[#111111] transition-colors shrink-0 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Testimonial Body */}
        <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6">
          {/* Circular Avatar */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-[3px] border-[#FACC15] shadow-sm shrink-0">
            <Image
              src={current.avatar}
              alt={current.author}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          {/* Quote & Author */}
          <div className="flex-1 text-center md:text-left">
            <blockquote className="text-sm sm:text-base italic font-medium text-[#181715] leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <p className="mt-2.5 text-sm font-extrabold text-[#111111]">
              – {current.author}, {current.location}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              Visited: {current.branchVisited}
            </p>
          </div>

          {/* 5 Stars + Quote Watermark */}
          <div className="flex flex-col items-center md:items-end justify-between gap-2 shrink-0">
            <div
              className="flex items-center gap-0.5"
              aria-label={`${current.rating} out of 5 stars`}
            >
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FACC15] text-[#FACC15]"
                />
              ))}
            </div>
            <span
              aria-hidden="true"
              className="hidden md:block text-6xl font-serif leading-none text-stone-200 select-none -mb-4"
            >
              &rdquo;
            </span>
          </div>
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next customer review"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-amber-100 flex items-center justify-center text-stone-600 hover:text-[#111111] transition-colors shrink-0 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {TESTIMONIALS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View review by ${item.author}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              i === index
                ? "w-6 bg-[#FACC15]"
                : "w-2 bg-stone-300 hover:bg-stone-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
