"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Search,
  Sparkles,
  Flame,
  Coffee,
  X,
  LayoutGrid,
  ScrollText,
} from "lucide-react";
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
  const [viewMode, setViewMode] = useState<"cards" | "board">("cards");

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
      {/* Search, Bestseller Toggle & Card/Board View Switcher */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 mb-5">
        <div className="relative flex-1 flex items-center bg-white rounded-full border border-stone-200 shadow-xs px-4 focus-within:border-[#FACC15] focus-within:ring-4 focus-within:ring-[#FACC15]/20 transition-all">
          <Search className="w-4 h-4 text-stone-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pohe, घी इडली, Cut Dosa, Vada Pav, Misal, Pav Bhaji..."
            aria-label="Search menu items in English or Marathi"
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

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setOnlyBestsellers((prev) => !prev)}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold border transition-all cursor-pointer shrink-0 ${
              onlyBestsellers
                ? "bg-[#181715] text-[#FACC15] border-[#181715]"
                : "bg-[#FFFDF4] text-[#181715] border-amber-200 hover:bg-[#FEF3C7]"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Bestsellers</span>
          </button>

          {/* View Switcher: Visual Cards vs Official Menu Board */}
          <div
            role="group"
            aria-label="Menu view mode"
            className="inline-flex rounded-full bg-[#FAF8F2] border border-stone-200 p-1"
          >
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === "cards"
                  ? "bg-[#FACC15] text-[#111111] shadow-2xs"
                  : "text-stone-600 hover:text-[#111111]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Photo Menu</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("board")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === "board"
                  ? "bg-[#181715] text-[#FACC15] shadow-2xs"
                  : "text-stone-600 hover:text-[#111111]"
              }`}
            >
              <ScrollText className="w-3.5 h-3.5" />
              <span>Rate Card</span>
            </button>
          </div>
        </div>
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
          100% Pure Vegetarian • Standardized Abhiruchi &amp; Shastri Road Rate
          Card
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-medium">
          Showing {items.length} of {FULL_MENU.length} menu items
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl bg-[#FAF8F2] border border-amber-100 p-10 text-center space-y-3">
          <p className="text-lg font-bold text-[#181715]">
            No menu items matched your filters
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
            Reset Filters
          </button>
        </div>
      ) : viewMode === "board" ? (
        /* OFFICIAL BLACK & GOLD PAYGUDE BANDHU MENU BOARD VIEW */
        <div className="rounded-[28px] bg-[#181715] text-white border-2 border-[#FACC15]/50 shadow-xl overflow-hidden">
          {/* Board Header */}
          <div className="px-6 sm:px-8 py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#1D1C1A] via-[#23201B] to-[#1D1C1A]">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Paygude Bandhu Emblem"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#FACC15] font-[family-name:var(--font-devanagari)]">
                  {BRAND.marathiName} — अधिकृत मेन्यू कार्ड
                </h2>
                <p className="text-xs sm:text-sm text-stone-300">
                  Official Outlet Rate Card • Abhiruchi Mall Samor, Shastri Road
                  &amp; Pune Branches
                </p>
              </div>
            </div>
            <span className="rounded-full bg-[#FACC15] px-4 py-1.5 text-xs font-extrabold text-[#111111]">
              100% Pure Veg • All Rates in ₹
            </span>
          </div>

          {/* Board Columns */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
            {groupedForBoard.map((group) => (
              <div key={group.category} className="space-y-3.5">
                <div className="flex items-baseline justify-between border-b border-[#FACC15]/35 pb-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#FACC15]">
                    {group.category}
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-amber-200/80 font-[family-name:var(--font-devanagari)]">
                    {group.marathiTitle}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-baseline gap-2 text-sm sm:text-[15px]"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-2 shrink-0 max-w-[72%]">
                        <span className="font-bold text-[#FDE047] font-[family-name:var(--font-devanagari)]">
                          {item.marathiName}
                        </span>
                        <span className="text-xs text-stone-300">
                          ({item.name})
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted border-white/25 mx-1 mb-1"
                      />
                      <span className="font-extrabold text-white shrink-0 tabular-nums">
                        {item.price}/-
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* VISUAL PHOTO MENU CARDS VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const isPhoto = item.image && item.imageStyle === "photo";
            const isCutout = item.image && item.imageStyle === "cutout";

            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#FAF8F2] border border-stone-100 hover:border-[#FACC15] hover:shadow-[0_12px_30px_rgba(250,204,21,0.2)] transition-all"
              >
                <div>
                  {/* Full-bleed Real Kitchen Photography Header */}
                  {isPhoto && item.image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                      <Image
                        src={item.image}
                        alt={`${item.name} (${item.marathiName})`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Top Overlay Badges */}
                      <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <span
                            title="Pure Vegetarian"
                            className="w-5 h-5 rounded-[4px] border-2 border-emerald-700 flex items-center justify-center bg-white/95 shadow-xs shrink-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-700" />
                          </span>
                          {item.tag && (
                            <span className="rounded-full bg-[#FACC15] px-2.5 py-0.5 text-[11px] font-extrabold text-[#111111] shadow-xs">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <span className="rounded-full bg-[#181715]/90 backdrop-blur-xs px-3 py-1 text-sm font-black text-[#FACC15] shadow-md">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <div className="p-5">
                    {/* Header Row when NOT full-bleed photo */}
                    {!isPhoto && (
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            title="Pure Vegetarian"
                            className="w-4 h-4 rounded-[3px] border-2 border-emerald-700 flex items-center justify-center bg-white shrink-0"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-700" />
                          </span>
                          {item.tag ? (
                            <span className="rounded-full bg-[#FEF08A] px-2.5 py-0.5 text-[11px] font-extrabold text-[#181715]">
                              {item.tag}
                            </span>
                          ) : (
                            <span className="text-[11px] font-semibold text-stone-500">
                              {item.category}
                            </span>
                          )}
                        </div>
                        <span className="text-lg font-black text-[#111111]">
                          ₹{item.price}
                        </span>
                      </div>
                    )}

                    {/* Cutout Dish Visual (e.g. Chaha glass) */}
                    {isCutout && item.image ? (
                      <div className="relative mx-auto my-2 w-40 h-32 flex items-center justify-center">
                        <div className="w-28 h-28 rounded-full bg-[#FACC15] transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="160px"
                            className="object-contain drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                          />
                        </div>
                      </div>
                    ) : !isPhoto ? (
                      <div className="my-1.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FEF3C7] text-amber-800">
                        <Coffee className="w-5 h-5" />
                      </div>
                    ) : null}

                    {/* Dish Title & Marathi Name */}
                    <div className={isPhoto ? "" : "mt-2"}>
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="text-lg font-extrabold text-[#111111] leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-amber-700 font-[family-name:var(--font-devanagari)] mt-0.5">
                        {item.marathiName}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Meta Row */}
                <div className="px-5 pb-4 pt-3 border-t border-amber-100/80 flex items-center justify-between text-xs text-stone-500">
                  <span>{item.category}</span>
                  {item.spicyLevel && (
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-800">
                      <Flame className="w-3.5 h-3.5 text-orange-500" />
                      {item.spicyLevel}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
