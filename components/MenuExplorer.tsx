"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Search, Sparkles, Flame, Coffee, X } from "lucide-react";
import { FULL_MENU, MENU_CATEGORIES } from "@/lib/data";

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
        (item.marathiName && item.marathiName.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, search, onlyBestsellers]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Search & Bestseller Toggle Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-6">
        <div className="relative flex-1 flex items-center bg-white rounded-full border border-stone-200 shadow-xs px-4 focus-within:border-[#FACC15] focus-within:ring-4 focus-within:ring-[#FACC15]/20 transition-all">
          <Search className="w-4 h-4 text-stone-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pohe, Vada Pav, Misal, Ghee Idli, Chaha..."
            aria-label="Search menu items"
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
          className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold border transition-all cursor-pointer shrink-0 ${
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
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6">
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
          100% Pure Vegetarian Kitchen • Prepared Fresh Daily
        </div>
        <p className="text-xs sm:text-sm text-stone-500 font-medium">
          Showing {items.length} delicious item{items.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* Menu Grid */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#FAF8F2] border border-stone-100 hover:border-[#FACC15] hover:shadow-[0_10px_28px_rgba(250,204,21,0.18)] transition-all p-5"
            >
              <div>
                {/* Top row: Veg dot + Category / Tag + Price */}
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

                {/* Dish Visual (when available) over Brand Yellow Circle */}
                {item.image ? (
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
                ) : (
                  <div className="my-2 inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#FEF3C7] text-amber-800">
                    <Coffee className="w-5 h-5" />
                  </div>
                )}

                {/* Title & Marathi Name */}
                <div className="mt-2">
                  <h3 className="text-lg font-extrabold text-[#111111] leading-snug">
                    {item.name}
                  </h3>
                  {item.marathiName && (
                    <p className="text-xs font-bold text-amber-700 font-[family-name:var(--font-devanagari)] mt-0.5">
                      {item.marathiName}
                    </p>
                  )}
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Meta Row */}
              <div className="mt-4 pt-3 border-t border-amber-100/80 flex items-center justify-between text-xs text-stone-500">
                <span>{item.category}</span>
                {item.spicyLevel && (
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-800">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    {item.spicyLevel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
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
      )}
    </section>
  );
}
