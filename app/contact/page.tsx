import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FranchiseBanner } from "@/components/FranchiseBanner";

export const metadata: Metadata = {
  title: "Contact Us — Pune Chaha & Snacks",
  description:
    "Get in touch with Paygude Bandhu for branch details, bulk corporate snack & chaha catering orders, franchise enquiries, or customer feedback in Pune.",
};

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Call Us Directly",
    value: BRAND.phone,
    sub: "Quick support & bulk orders",
    href: `tel:${BRAND.phoneRaw}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    value: BRAND.email,
    sub: "Franchise & corporate enquiries",
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    title: "Pune Network",
    value: "10 Outlets Across Pune",
    sub: "Sinhagad Rd, Deccan, Karvenagar & more",
    href: "/branches",
  },
  {
    icon: Clock,
    title: "Serving Hours",
    value: "6:30 AM – 10:30 PM",
    sub: "Open all 7 days of the week",
    href: "/branches",
  },
] as const;

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#FFFDF2] via-white to-white border-b border-amber-100/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-10">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block rounded-full bg-[#FEF08A] px-3.5 py-1 text-xs font-extrabold text-[#111111]">
              We&apos;d Love to Hear From You
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#111111] leading-[1.08]">
              Contact{" "}
              <span className="text-[#F5C518]">Paygude Bandhu</span>
            </h1>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Have a question, want freshly packed Pohe, Vada Pav &amp; Chaha
              for your Pune office or family gathering, or want to share
              feedback? Reach out to our team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            const isInternal = card.href.startsWith("/");
            const inner = (
              <div className="h-full rounded-2xl bg-[#FAF8F2] border border-amber-100 hover:border-[#FACC15] hover:shadow-md transition-all p-5 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#FACC15] text-[#111111] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-stone-500">
                    {card.title}
                  </p>
                  <p className="mt-1 text-base font-extrabold text-[#111111] break-words">
                    {card.value}
                  </p>
                </div>
                <p className="mt-2 text-xs text-stone-600">{card.sub}</p>
              </div>
            );

            return isInternal ? (
              <Link key={card.title} href={card.href}>
                {inner}
              </Link>
            ) : (
              <a key={card.title} href={card.href}>
                {inner}
              </a>
            );
          })}
        </div>
      </section>

      {/* FORM + FAQ SPLIT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="section-heading text-2xl font-extrabold text-[#111111] tracking-tight mb-5">
                Frequently Asked Questions
              </h2>
              <FaqAccordion />
            </div>

            <div className="rounded-2xl warm-banner-gradient border border-amber-200 p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold text-[#111111]">
                  Looking for an outlet right now?
                </p>
                <p className="text-xs text-stone-700 mt-0.5">
                  Find directions to all 10 Pune branches.
                </p>
              </div>
              <Link
                href="/branches"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 shrink-0"
              >
                Branches
                <ArrowRight className="w-3.5 h-3.5 text-[#FACC15]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FranchiseBanner />
    </main>
  );
}
