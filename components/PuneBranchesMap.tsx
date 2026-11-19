"use client";

import { useState } from "react";
import { Navigation, Clock, MapPin } from "lucide-react";
import { BRANCHES, type Branch } from "@/lib/data";

export function PuneBranchesMap() {
  const [activeBranch, setActiveBranch] = useState<Branch>(BRANCHES[3]); // Deccan center default

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="relative overflow-hidden rounded-[26px] warm-banner-gradient border border-amber-200/75 shadow-sm p-5 sm:p-7 lg:p-8">
        {/* Subtle decorative steaming teacup watermark on far right */}
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className="pointer-events-none select-none absolute right-5 top-5 w-24 h-24 sm:w-32 sm:h-32 text-amber-700/12"
          aria-hidden="true"
        >
          <path
            d="M24 54h54v14a22 22 0 0 1-22 22H46a22 22 0 0 1-22-22V54Z"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <path
            d="M78 60h10a10 10 0 0 1 0 20H76"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M38 40c0-8 7-8 7-16M54 38c0-9 7-9 7-18"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M20 96h64"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
          {/* Left: Stylized Illustrated Pune City Map with 10 Interactive Pins */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#FFFDF4]/75 rounded-2xl border border-amber-200/70 p-3 sm:p-4">
              <svg
                viewBox="0 0 360 270"
                className="w-full h-auto overflow-visible"
                role="img"
                aria-label="Interactive map of 10 Paygude Bandhu branches across Pune"
              >
                {/* Organic Hand-Drawn Pune City Boundary Outline */}
                <path
                  d="M74 96 C62 84, 72 62, 96 58 C118 54, 128 32, 160 32 C188 32, 205 22, 232 30 C256 38, 286 36, 304 58 C320 78, 314 108, 326 128 C338 148, 320 176, 300 186 C282 196, 276 226, 246 232 C218 238, 202 252, 174 246 C144 240, 122 248, 102 228 C82 208, 66 204, 58 182 C50 160, 44 132, 58 114 C64 106, 70 102, 74 96 Z"
                  fill="#FFFDF5"
                  stroke="#57534E"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                {/* Subtle Pune River / Road Network Dashed Connections */}
                <g
                  stroke="#B49B57"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  opacity="0.65"
                >
                  <line x1="84" y1="132" x2="126" y2="112" />
                  <line x1="126" y1="112" x2="180" y2="96" />
                  <line x1="180" y1="96" x2="274" y2="74" />
                  <line x1="180" y1="96" x2="196" y2="132" />
                  <line x1="126" y1="112" x2="112" y2="162" />
                  <line x1="112" y1="162" x2="142" y2="205" />
                  <line x1="142" y1="205" x2="192" y2="218" />
                  <line x1="192" y1="218" x2="230" y2="202" />
                  <line x1="230" y1="202" x2="266" y2="162" />
                  <line x1="196" y1="132" x2="266" y2="162" />
                  <line x1="196" y1="132" x2="192" y2="218" />
                </g>

                {/* Central PUNE Typography Watermark */}
                <text
                  x="166"
                  y="165"
                  textAnchor="middle"
                  className="fill-stone-600/80 font-extrabold tracking-[0.22em]"
                  style={{ fontSize: "13px" }}
                >
                  PUNE
                </text>

                {/* 10 Interactive Branch Teacup Pins */}
                {BRANCHES.map((branch) => {
                  const isActive = activeBranch.id === branch.id;
                  return (
                    <g
                      key={branch.id}
                      transform={`translate(${branch.mapX}, ${branch.mapY})`}
                      onClick={() => setActiveBranch(branch)}
                      onMouseEnter={() => setActiveBranch(branch)}
                      className="cursor-pointer transition-transform"
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${branch.name} branch`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveBranch(branch);
                        }
                      }}
                    >
                      {isActive && (
                        <circle
                          cx="0"
                          cy="-14"
                          r="17"
                          fill="#FACC15"
                          opacity="0.35"
                        />
                      )}
                      {/* Pin teardrop */}
                      <path
                        d="M0 0 C-7 -9, -11 -13, -11 -18 A11 11 0 1 1 11 -18 C11 -13, 7 -9, 0 0 Z"
                        fill={isActive ? "#181715" : "#FACC15"}
                        stroke={isActive ? "#FACC15" : "#181715"}
                        strokeWidth={isActive ? "2" : "1.3"}
                      />
                      {/* Tiny cup icon inside pin */}
                      <path
                        d="M-4.5 -20 h7 v3 a3.5 3.5 0 0 1 -7 0 Z"
                        fill={isActive ? "#FACC15" : "#181715"}
                      />
                      <path
                        d="M2.5 -19.2 h1.8 a1.2 1.2 0 0 1 0 2.4 h-1.8"
                        fill="none"
                        stroke={isActive ? "#FACC15" : "#181715"}
                        strokeWidth="1.1"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Active Branch Floating Pill Info */}
              <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-xl bg-white/95 border border-amber-200 px-3.5 py-2.5 shadow-sm">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <p className="text-sm font-extrabold text-[#111111] truncate">
                      {activeBranch.name}
                    </p>
                  </div>
                  <p className="text-xs text-stone-500 truncate mt-0.5 flex items-center gap-2">
                    <span>{activeBranch.landmark}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activeBranch.timings}
                    </span>
                  </p>
                </div>
                <a
                  href={activeBranch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#FACC15] px-3.5 py-1.5 text-xs font-extrabold text-[#111111] hover:bg-[#eab308] transition-colors shrink-0"
                >
                  <Navigation className="w-3 h-3" />
                  Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right: 10 Outlets Across Pune Callout */}
          <div className="lg:col-span-6 space-y-4 lg:pl-4 lg:border-l lg:border-amber-300/70">
            <div className="flex items-center gap-4">
              <span className="text-6xl sm:text-7xl font-black text-[#F5C518] drop-shadow-[0_2px_0_rgba(24,23,21,0.08)] leading-none">
                10
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#111111] leading-tight tracking-tight">
                Outlets
                <br />
                Across Pune
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-md">
              Bringing people together over refreshing Chaha &amp; delicious
              Snacks. Find a Paygude Bandhu near you and be a part of our
              growing family!
            </p>

            <p className="text-xs font-semibold text-amber-800/80">
              Tip: Hover or tap any pin on the Pune map to preview that
              outlet&apos;s landmark &amp; directions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
