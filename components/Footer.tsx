import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { BRAND } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-[#1D1C1A] text-white rounded-t-[28px] sm:rounded-t-[36px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-7">
        {/* Top Row matching reference mockup */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/12">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-3 group">
            <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Paygude Bandhu Logo"
                fill
                sizes="72px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Direct Contact Info Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-stone-200">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="inline-flex items-center gap-2.5 hover:text-[#FACC15] transition-colors"
            >
              <Phone className="w-4 h-4 text-white shrink-0" />
              <span className="font-medium">{BRAND.phone}</span>
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2.5 hover:text-[#FACC15] transition-colors"
            >
              <Mail className="w-4 h-4 text-white shrink-0" />
              <span className="font-medium">{BRAND.email}</span>
            </a>

            <Link
              href="/branches"
              className="inline-flex items-center gap-2.5 hover:text-[#FACC15] transition-colors"
            >
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span className="font-medium">{BRAND.location}</span>
            </Link>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center lg:items-start gap-2 lg:pl-7 lg:border-l lg:border-white/15 shrink-0">
            <span className="text-xs font-semibold tracking-wide text-stone-300">
              Follow Us
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paygude Bandhu on Instagram"
                className="w-8 h-8 rounded-full bg-white text-[#1D1C1A] flex items-center justify-center hover:bg-[#FACC15] transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paygude Bandhu on Facebook"
                className="w-8 h-8 rounded-full bg-white text-[#1D1C1A] flex items-center justify-center hover:bg-[#FACC15] transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paygude Bandhu on YouTube"
                className="w-8 h-8 rounded-full bg-white text-[#1D1C1A] flex items-center justify-center hover:bg-[#FACC15] transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Quick Links Bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 border-b border-white/10 text-xs text-stone-400">
          <Link href="/" className="hover:text-[#FACC15] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#FACC15] transition-colors">
            About Us
          </Link>
          <Link href="/menu" className="hover:text-[#FACC15] transition-colors">
            Full Menu
          </Link>
          <Link href="/branches" className="hover:text-[#FACC15] transition-colors">
            10 Branches in Pune
          </Link>
          <Link href="/franchise" className="hover:text-[#FACC15] transition-colors">
            Franchise Enquiry
          </Link>
          <Link href="/offers" className="hover:text-[#FACC15] transition-colors">
            Dubai Lucky Draw
          </Link>
          <Link href="/contact" className="hover:text-[#FACC15] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Bottom Copyright & Marathi Tagline Row */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-center gap-y-2 gap-x-5 text-xs text-stone-400 text-center">
          <span>© 2026 Paygude Bandhu. All Rights Reserved.</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>Pune&apos;s Favourite Chaha &amp; Snacks</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="inline-flex items-center gap-1.5 text-stone-200 font-[family-name:var(--font-devanagari)]">
            {BRAND.tagline}
            <Heart className="w-3.5 h-3.5 fill-white text-white inline" />
          </span>
        </div>
      </div>
    </footer>
  );
}
