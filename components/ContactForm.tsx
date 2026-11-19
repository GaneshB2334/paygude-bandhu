"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "General Enquiry",
    branch: "Any Pune Branch",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-[#FFFDF4] border-2 border-[#FACC15] p-8 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#FACC15] text-[#111111] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#111111]">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Thanks for reaching out,{" "}
          <strong className="text-[#181715]">{form.name}</strong>! Our Pune team
          has logged your{" "}
          <strong className="text-[#181715]">{form.topic}</strong> and will get
          back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              phone: "",
              email: "",
              topic: "General Enquiry",
              branch: "Any Pune Branch",
              message: "",
            });
          }}
          className="rounded-full bg-[#111111] px-6 py-2.5 text-sm font-bold text-white hover:bg-stone-800 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white border border-stone-200/80 shadow-[0_10px_32px_rgba(24,23,21,0.06)] p-6 sm:p-8 space-y-4"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111]">
          Send Us a Message
        </h3>
        <p className="text-sm text-stone-500 mt-1">
          Questions about bulk snack orders, catering, branches, or feedback?
          Write to us anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ct-name"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="ct-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          />
        </div>

        <div>
          <label
            htmlFor="ct-phone"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Phone Number *
          </label>
          <input
            id="ct-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 87XXX XXXXX"
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          />
        </div>

        <div>
          <label
            htmlFor="ct-email"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Email Address
          </label>
          <input
            id="ct-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          />
        </div>

        <div>
          <label
            htmlFor="ct-topic"
            className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
          >
            Enquiry Type
          </label>
          <select
            id="ct-topic"
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
          >
            <option>General Enquiry</option>
            <option>Bulk / Corporate Catering Order</option>
            <option>Franchise Partnership</option>
            <option>Dubai Lucky Draw Enquiry</option>
            <option>Outlet Feedback</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="ct-msg"
          className="block text-xs font-bold uppercase tracking-wide text-stone-600 mb-1.5"
        >
          Your Message *
        </label>
        <textarea
          id="ct-msg"
          rows={4}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="How can we help you today?"
          className="w-full rounded-xl border border-stone-200 bg-[#FAF8F2]/60 px-4 py-3 text-sm text-[#181715] focus:border-[#FACC15] focus:bg-white focus:outline-none focus:ring-3 focus:ring-[#FACC15]/25"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FACC15] px-7 py-3.5 text-sm font-extrabold text-[#111111] hover:bg-[#eab308] active:scale-[0.99] transition-all cursor-pointer shadow-sm"
      >
        <Send className="w-4 h-4" />
        Send Message
      </button>
    </form>
  );
}
