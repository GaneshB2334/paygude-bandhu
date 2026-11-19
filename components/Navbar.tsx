"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MapPin, Phone, Gift, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/branches", label: "Branches" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-100/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
          aria-label="Paygude Bandhu Home"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full drop-shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Paygude Bandhu — सुप्रसिध्द चहा • स्नॅक्स"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden xs:flex sm:hidden lg:flex flex-col leading-tight">
            <span className="font-extrabold text-base text-[#181715] tracking-tight">
              Paygude Bandhu
            </span>
            <span className="text-[11px] font-semibold text-amber-600 font-[family-name:var(--font-devanagari)]">
              चहा • स्नॅक्स • पुणे
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[15px] transition-colors ${
                  isActive
                    ? "font-bold text-[#111111]"
                    : "font-medium text-stone-700 hover:text-[#111111]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[3.5px] rounded-full bg-[#FACC15]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Quick Drawer / Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/offers"
            className="hidden xl:inline-flex items-center gap-1.5 rounded-full bg-[#FFF8D6] border border-[#FACC15]/70 px-3.5 py-1.5 text-xs font-bold text-[#181715] hover:bg-[#FACC15] transition-colors"
          >
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            Dubai Lucky Draw
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#181715] hover:bg-amber-50 active:scale-95 transition-all cursor-pointer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      {/* Slide-down Drawer Menu (Mobile + Quick Actions on Desktop) */}
      {menuOpen && (
        <div className="border-t border-amber-100 bg-[#FFFCF2] shadow-xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 px-3 mb-1">
                  Explore Paygude Bandhu
                </p>
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[15px] transition-colors ${
                        isActive
                          ? "bg-[#FACC15] text-[#111111] font-bold"
                          : "text-stone-800 font-medium hover:bg-amber-100/70"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <Sparkles className="w-4 h-4" />}
                    </Link>
                  );
                })}
                <Link
                  href="/offers"
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-[15px] transition-colors ${
                    pathname.startsWith("/offers")
                      ? "bg-[#FACC15] text-[#111111] font-bold"
                      : "text-stone-800 font-medium hover:bg-amber-100/70"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-amber-600" />
                    Dubai Lucky Draw
                  </span>
                  <span className="text-[11px] font-bold bg-[#181715] text-[#FACC15] px-2 py-0.5 rounded-full">
                    20 Winners
                  </span>
                </Link>
              </div>

              <div className="rounded-2xl bg-white border border-amber-200/70 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Quick Connect
                  </span>
                  <span className="text-xs font-semibold text-stone-500">
                    10 Outlets in Pune
                  </span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Craving freshly brewed cutting chaha, crispy vada pav, or
                  piping hot kanda pohe? Visit your nearest Pune outlet today.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <Link
                    href="/branches"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FACC15] px-4 py-2 text-xs font-bold text-[#111111] hover:bg-[#eab308] transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Find Nearest Branch
                  </Link>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#181715] px-4 py-2 text-xs font-bold text-white hover:bg-stone-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                    {BRAND.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
