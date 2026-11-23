"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  ScrollText,
} from "lucide-react";
import { KITCHEN_GALLERY, type KitchenPhoto } from "@/lib/data";

const GALLERY_ITEMS: KitchenPhoto[] = [
  ...KITCHEN_GALLERY,
  {
    id: "gallery-storefront",
    title: "Paygude Bandhu Outlet",
    marathiTitle: "पायगुडे बंधू आउटलेट",
    subtitle: "Warm, clean & welcoming café atmosphere across 10 Pune branches",
    image: "/images/storefront.png",
    category: "Kitchen Special",
  },
];

const GALLERY_FILTERS = [
  "All",
  "Breakfast & Snacks",
  "Idli & Vada",
  "Dosa & Uttappa",
  "Kitchen Special",
] as const;

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos = useMemo(() => {
    if (activeFilter === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, visiblePhotos.length]);

  const activePhoto =
    lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {GALLERY_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  setLightboxIndex(null);
                }}
                className={`whitespace-nowrap rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FACC15] text-[#111111] shadow-xs"
                    : "bg-[#FAF8F2] text-stone-700 hover:bg-amber-100/80 border border-stone-200/70"
                }`}
              >
                {filter === "Kitchen Special" ? "Specials & Outlet" : filter}
              </button>
            );
          })}
        </div>

        <p className="text-xs sm:text-sm font-medium text-stone-500">
          {visiblePhotos.length} photo{visiblePhotos.length === 1 ? "" : "s"} •
          Tap any photo to view full size
        </p>
      </div>

      {/* Editorial Food Photography Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {visiblePhotos.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setLightboxIndex(idx)}
            className="group relative text-left overflow-hidden rounded-[22px] bg-[#181715] aspect-[4/5] shadow-sm hover:shadow-[0_14px_34px_rgba(24,23,21,0.16)] border border-stone-200/80 hover:border-[#FACC15] transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#FACC15]/40"
          >
            <Image
              src={photo.image}
              alt={`${photo.title} — ${photo.marathiTitle}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top-right Zoom Hint */}
            <div className="absolute right-3.5 top-3.5 w-9 h-9 rounded-full bg-black/55 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Expand className="w-4 h-4" />
            </div>

            {/* Bottom Caption Gradient */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-5 pt-16 text-white">
              <p className="text-xs sm:text-sm font-bold text-[#FACC15] font-[family-name:var(--font-devanagari)]">
                {photo.marathiTitle}
              </p>
              <h2 className="text-lg sm:text-xl font-extrabold leading-snug mt-0.5">
                {photo.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-200/90 mt-1 line-clamp-2 leading-relaxed">
                {photo.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#181715] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close photo viewer"
              className="absolute right-4 top-4 z-20 w-10 h-10 rounded-full bg-black/65 hover:bg-[#FACC15] text-white hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Image Canvas */}
              <div className="md:col-span-8 relative bg-black min-h-[340px] sm:min-h-[480px]">
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-contain"
                />

                {/* Prev / Next Arrows */}
                {visiblePhotos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex(
                          (lightboxIndex - 1 + visiblePhotos.length) %
                            visiblePhotos.length
                        )
                      }
                      aria-label="Previous photo"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FACC15] text-white hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex(
                          (lightboxIndex + 1) % visiblePhotos.length
                        )
                      }
                      aria-label="Next photo"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#FACC15] text-white hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Photo Details Sidebar */}
              <div className="md:col-span-4 p-6 flex flex-col justify-between gap-5 text-white">
                <div className="space-y-2.5 pt-2">
                  <span className="inline-block rounded-full bg-[#FACC15]/15 border border-[#FACC15]/40 px-3 py-1 text-[11px] font-bold text-[#FACC15]">
                    {activePhoto.category === "Kitchen Special"
                      ? "Paygude Bandhu Special"
                      : activePhoto.category}
                  </span>
                  <p className="text-base font-bold text-[#FACC15] font-[family-name:var(--font-devanagari)]">
                    {activePhoto.marathiTitle}
                  </p>
                  <h3 className="text-2xl font-black leading-tight">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {activePhoto.subtitle}
                  </p>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-4">
                  <p className="text-xs text-stone-400">
                    Photo {lightboxIndex + 1} of {visiblePhotos.length}
                  </p>
                  <Link
                    href="/menu"
                    onClick={() => setLightboxIndex(null)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] px-5 py-3 text-sm font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors"
                  >
                    <ScrollText className="w-4 h-4" />
                    <span>View Rate Card</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
