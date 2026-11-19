import type { Metadata } from "next";
import { HeroArtwork } from "@/components/HeroArtwork";
import { BranchDirectory } from "@/components/BranchDirectory";
import { PuneBranchesMap } from "@/components/PuneBranchesMap";
import { FranchiseBanner } from "@/components/FranchiseBanner";

export const metadata: Metadata = {
  title: "Our Branches in Pune (10 Outlets)",
  description:
    "Visit any of our 10 Paygude Bandhu Chaha & Snacks outlets across Pune — Abhiruchi Mall Samor, Karvenagar, Dhayari, Deccan, Shastri Road, Ambegaon Pathar, Bharati Vidyapeeth, Bibwewadi, Warje, and Lohgaon – Dhanori Road.",
};

export default function BranchesPage() {
  return (
    <main className="flex-1 bg-white">
      {/* HERO SECTION matching Screenshot 1 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFEFA] via-white to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 sm:pt-10 sm:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-[#111111]">
                Our Branches
                <span className="block text-[#F5C518] mt-1">in Pune</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                Your favourite Chaha &amp; Snacks, now closer to you.
                <br />
                Visit any of our outlets across Pune and enjoy the same great
                taste and warm hospitality.
              </p>
            </div>

            <div className="lg:col-span-6">
              <HeroArtwork variant="branches" />
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SEARCH + ALL 10 BRANCHES GRID */}
      <BranchDirectory />

      {/* 10 OUTLETS ACROSS PUNE MAP BANNER */}
      <PuneBranchesMap />

      {/* FRANCHISE CTA BANNER */}
      <FranchiseBanner />
    </main>
  );
}
