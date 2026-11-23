"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, Sparkles, X, Camera, ArrowRight } from "lucide-react";
import {
  BRAND,
  CATEGORY_MARATHI_LABELS,
  FULL_MENU,
  MENU_CATEGORIES,
  type MenuCategory,
} from "@/lib/data";

const BOARD_CATEGORIES: MenuCategory[] = [
  "Chaha & Coffee",
  "Breakfast & Snacks",
  "Idli & Vada",
  "Dosa & Uttappa",
  "Pav Bhaji & Extras",
];

export function MenuExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);

  const items = useMemo(() => {
    const q = search.trim().toLowerCase();
    return FULL_MENU.filter((item) => {
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }
      if (onlyBestsellers && !item.bestseller) {
        return false;
      }
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.marathiName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, search, onlyBestsellers]);

  const groupedForBoard = useMemo(() => {
    return BOARD_CATEGORIES.map((category) => ({
      category,
      marathiTitle: CATEGORY_MARATHI_LABELS[category],
      items: items.filter((item) => item.category === category),
    })).filter((group) => group.items.length > 0);
  }, [items]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Search & Bestseller Toggle Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
        <div className="relative flex-1 flex items-center bg-white rounded-full border border-stone-200 shadow-xs px-4 focus-within:border-[#FACC15] focus-within:ring-4 focus-within:ring-[#FACC15]/20 transition-all">
          <Search className="w-4 h-4 text-stone-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pohe, घी इडली, Cut Dosa, Vada Pav, Misal, Pav Bhaji..."
            aria-label="Search rate card in English or Marathi"
            className="w-full py-3 px-3 text-sm sm:text-base bg-transparent focus:outline-none text-[#181715] placeholder:text-stone-400"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear menu search"
              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOnlyBestsellers((prev) => !prev)}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-bold border transition-all cursor-pointer shrink-0 ${
            onlyBestsellers
              ? "bg-[#181715] text-[#FACC15] border-[#181715]"
              : "bg-[#FFFDF4] text-[#181715] border-amber-200 hover:bg-[#FEF3C7]"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Bestsellers Only</span>
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-5">
        {MENU_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? "bg-[#FACC15] text-[#111111] shadow-xs"
                  : "bg-[#FAF8F2] text-stone-700 hover:bg-amber-100/80 border border-stone-200/70"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Pure Veg Notice & Count */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-3.5 py-1.5">
          <span className="w-3.5 h-3.5 rounded-xs border-2 border-emerald-700 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
          </span>
          100% Pure Vegetarian • Official Abhiruchi &amp; Shastri Road Rate Card
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-medium">
          Showing {items.length} of {FULL_MENU.length} items
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl bg-[#FAF8F2] border border-amber-100 p-10 text-center space-y-3">
          <p className="text-lg font-bold text-[#181715]">
            No items matched your search
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("All");
              setSearch("");
              setOnlyBestsellers(false);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-5 py-2.5 text-sm font-bold text-[#111111] hover:bg-[#eab308] cursor-pointer"
          >
            Show Full Rate Card
          </button>
        </div>
      ) : (
        /* OFFICIAL BLACK & GOLD PAYGUDE BANDHU RATE CARD BOARD */
        <div className="rounded-[28px] bg-[#181715] text-white border-2 border-[#FACC15]/55 shadow-xl overflow-hidden">
          {/* Board Header */}
          <div className="px-6 sm:px-8 py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#1D1C1A] via-[#25211B] to-[#1D1C1A]">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Paygude Bandhu Emblem"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-black text-[#FACC15] font-[family-name:var(--font-devanagari)]">
                  {BRAND.marathiName} — अधिकृत दरपत्रक
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                  Official Rate Card • Abhiruchi Mall Samor, Shastri Road &amp;
                  Pune Branches
                </p>
              </div>
            </div>
            <span className="rounded-full bg-[#FACC15] px-4 py-1.5 text-xs font-extrabold text-[#111111] shrink-0">
              100% Pure Veg • All Rates in ₹
            </span>
          </div>

          {/* Rate Card Sections */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-9">
            {groupedForBoard.map((group) => (
              <div key={group.category} className="space-y-4">
                <div className="flex items-baseline justify-between gap-3 border-b border-[#FACC15]/40 pb-2.5">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#FACC15]">
                    {group.category}
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-amber-200/85 font-[family-name:var(--font-devanagari)]">
                    {group.marathiTitle}
                  </span>
                </div>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.id}
                      className="group flex items-baseline gap-2 text-sm sm:text-[15px]"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-2 shrink-0 max-w-[76%]">
                        <span className="font-bold text-[#FDE047] font-[family-name:var(--font-devanagari)] group-hover:text-white transition-colors">
                          {item.marathiName}
                        </span>
                        <span className="text-xs text-stone-300">
                          ({item.name})
                        </span>
                        {item.bestseller && (
                          <span className="inline-block rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 px-2 py-0.5 text-[10px] font-bold text-[#FACC15]">
                            Popular
                          </span>
                        )}
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-white/25 mx-1 mb-1 min-w-[20px]"
                      />
                      <span className="font-extrabold text-white shrink-0 tabular-nums">
                        ₹{item.price}/-
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Board Footer CTA to Gallery */}
          <div className="px-6 sm:px-8 py-4 bg-white/[0.03] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-stone-400 text-center sm:text-left">
              Want to see photos of our freshly plated dishes before you visit?
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-5 py-2 text-xs sm:text-sm font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors shrink-0"
            >
              <Camera className="w-4 h-4" />
              <span>View Food Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
