"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

export function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    model: "Signature Café Outlet (400–800 sq. ft.)",
    budget: "₹8L – ₹15L",
    spaceStatus: "Own Commercial Space",
    notes: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-[#FFFDF4] border-2 border-[#FACC15] p-8 text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#FACC15] text-[#111111] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#111111]">
          Thank You, {formData.fullName}!
        </h3>
        <p className="text-sm sm:text-base text-stone-600 max-w-md mx-auto leading-relaxed">
          Your Paygude Bandhu Franchise enquiry for{" "}
          <strong className="text-[#181715]">{formData.city || "Pune"}</strong>{" "}
          has been received. Our franchise partnership team will contact you on{" "}
          <strong className="text-[#181715]">{formData.phone}</strong> within 24
          hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={`tel:${BRAND.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-bold text-white hover:bg-stone-800 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FACC15]" />
            Call {BRAND.phone}
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                city: "",
                model: "Signature Café Outlet (400–800 sq. ft.)",
                budget: "₹8L – ₹15L",
                spaceStatus: "Own Commercial Space",
                notes: "",
              });
            }}
            className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-bold text-stone-700 hover:bg-stone-100 cursor-pointer"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white border border-stone-200/80 shadow-[0_12px_36px_rgba(24,23,21,0.06)] p-6 sm:p-8 space-y-5"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111]">
          Franchise Application Form
        </h3>
        <p className="text-sm text-stone-500 mt-1">
          Share your location details and our expansion team will share the full
          franchise deck &amp; ROI projections.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fr-name"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="fr-name"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="e.g. Rohit Kulkarni"
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          />
        </div>

        <div>
          <label
            htmlFor="fr-phone"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Phone / WhatsApp *
          </label>
          <input
            id="fr-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+91 98XXX XXXXX"
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          />
        </div>

        <div>
          <label
            htmlFor="fr-email"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="fr-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@example.com"
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          />
        </div>

        <div>
          <label
            htmlFor="fr-city"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Preferred City / Pune Area *
          </label>
          <input
            id="fr-city"
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Wakad, Hinjewadi, Kothrud, Nashik"
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          />
        </div>

        <div>
          <label
            htmlFor="fr-model"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Preferred Format
          </label>
          <select
            id="fr-model"
            value={formData.model}
            onChange={(e) =>
              setFormData({ ...formData, model: e.target.value })
            }
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          >
            <option>Express Chaha Kiosk (150–250 sq. ft.)</option>
            <option>Signature Café Outlet (400–800 sq. ft.)</option>
            <option>Multi-Unit / Area Partner</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="fr-space"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Commercial Space Status
          </label>
          <select
            id="fr-space"
            value={formData.spaceStatus}
            onChange={(e) =>
              setFormData({ ...formData, spaceStatus: e.target.value })
            }
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          >
            <option>Own Commercial Space</option>
            <option>Rented / Shortlisted Shop</option>
            <option>Looking for Location Guidance</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="fr-notes"
          className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
        >
          Additional Details (Optional)
        </label>
        <textarea
          id="fr-notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Tell us about the carpet area, frontage, nearby landmark or timeline..."
          className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3.5 text-sm font-extrabold text-white hover:bg-stone-800 active:scale-[0.99] transition-all cursor-pointer shadow-md"
        >
          <span>Submit Franchise Enquiry</span>
          <ArrowRight className="w-4 h-4 text-[#FACC15]" />
        </button>

        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] px-6 py-3.5 text-sm font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Chat on WhatsApp
        </a>
      </div>
    </form>
  );
}
