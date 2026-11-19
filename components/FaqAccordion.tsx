"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq.q}
            className="rounded-2xl bg-[#FAF8F2] border border-amber-100 overflow-hidden transition-all"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
            >
              <span className="text-sm sm:text-base font-bold text-[#111111]">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-amber-700 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm text-stone-600 leading-relaxed border-t border-amber-100/70 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
