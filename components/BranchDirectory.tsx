"use client";

import { useMemo, useState } from "react";
import { MapPin, Search, Phone, Navigation, Clock, X } from "lucide-react";
import { BRANCHES } from "@/lib/data";

export function BranchDirectory() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredBranches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BRANCHES;
    return BRANCHES.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.area.toLowerCase().includes(q) ||
        b.landmark.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
      {/* Rounded Full Search Bar matching Screenshot 1 */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative flex items-center bg-white rounded-full border border-stone-200 shadow-[0_8px_28px_rgba(24,23,21,0.06)] p-1.5 sm:p-2 mb-10 focus-within:border-[#FACC15] focus-within:ring-4 focus-within:ring-[#FACC15]/20 transition-all"
      >
        <div className="pl-3.5 sm:pl-5 pr-2 text-[#111111] shrink-0">
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 fill-[#111111] text-white" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your nearest branch..."
          aria-label="Search your nearest Pune branch"
          className="w-full bg-transparent py-2.5 sm:py-3 px-2 text-sm sm:text-base text-[#181715] placeholder:text-stone-400 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="p-2 text-stone-400 hover:text-stone-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-5 sm:px-7 py-2.5 sm:py-3.5 text-sm sm:text-base font-extrabold text-[#111111] hover:bg-[#eab308] active:scale-[0.98] transition-all shrink-0 cursor-pointer shadow-sm"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
          <span>Find Branch</span>
        </button>
      </form>

      {/* Section Title + Result Counter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <h2 className="section-heading text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
          All Branches ({filteredBranches.length})
        </h2>
        <p className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600">
          <MapPin className="w-4 h-4 text-[#111111] fill-[#111111]/15 shrink-0" />
          {query.trim()
            ? `Showing ${filteredBranches.length} matching outlet${
                filteredBranches.length === 1 ? "" : "s"
              } in Pune`
            : `Showing all ${BRANCHES.length} outlets in Pune`}
        </p>
      </div>

      {/* 2-Column Branch Card Grid matching Screenshot 1 */}
      {filteredBranches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBranches.map((branch) => {
            const isExpanded = selectedId === branch.id;
            return (
              <div
                key={branch.id}
                className="group rounded-2xl bg-white border border-stone-100 shadow-[0_3px_16px_rgba(24,23,21,0.05)] hover:shadow-[0_8px_24px_rgba(250,204,21,0.18)] hover:border-amber-200 transition-all p-4 sm:p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  {/* Left: Pin Badge + Name + Pune */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedId(isExpanded ? null : branch.id)
                    }
                    className="flex items-center gap-3.5 text-left min-w-0 flex-1 cursor-pointer"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0 group-hover:bg-[#FACC15] transition-colors">
                      <MapPin className="w-5 h-5 text-[#111111]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-[17px] font-extrabold text-[#111111] truncate group-hover:text-amber-900">
                        {branch.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {branch.city} • {branch.timings}
                      </p>
                    </div>
                  </button>

                  {/* Right: Circular Call Button + Yellow Get Directions Pill */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                      aria-label={`Call ${branch.name} branch`}
                      className="w-10 h-10 rounded-full bg-[#181715] text-white flex items-center justify-center hover:bg-stone-800 active:scale-95 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-2.5 text-xs sm:text-sm font-extrabold text-[#111111] hover:bg-[#eab308] active:scale-95 transition-all shadow-xs"
                    >
                      <Navigation className="w-3.5 h-3.5 fill-[#111111]" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>

                {/* Expandable Branch Address & Bestseller Note */}
                {isExpanded && (
                  <div className="mt-3.5 pt-3.5 border-t border-amber-100 text-xs sm:text-sm text-stone-600 space-y-1.5">
                    <p className="font-medium text-stone-700">
                      {branch.address}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        Open Daily: {branch.timings}
                      </span>
                      <span className="text-amber-800 font-semibold">
                        Must Try: {branch.popularFor}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl bg-[#FAF8F2] border border-amber-100 p-10 text-center space-y-3">
          <p className="text-lg font-bold text-[#181715]">
            No Pune branch found matching &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm text-stone-500">
            Try searching for areas like Deccan, Karvenagar, Warje, Sinhagad
            Road, Katraj, Bibwewadi, or Dhanori.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-5 py-2.5 text-sm font-bold text-[#111111] hover:bg-[#eab308] cursor-pointer"
          >
            Show All 10 Branches
          </button>
        </div>
      )}
    </section>
  );
}
