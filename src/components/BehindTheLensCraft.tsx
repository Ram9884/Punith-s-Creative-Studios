"use client";

import React, { useState } from "react";
import { Camera, Film, Aperture, Sliders, Sparkles, Award } from "lucide-react";
import Image from "next/image";
import { BRAND_INFO } from "@/data/content";

const CRAFT_TABS = [
  {
    id: "cinema",
    title: "4K Cinema Optics",
    icon: Camera,
    headline: "RED & Sony Full-Frame Cinema Cameras",
    description: "We utilize high dynamic range digital cinema cameras paired with prime lenses to deliver true filmic texture, rich skin tones, and incredible low-light depth.",
    stats: ["12-bit RAW Color", "60fps Slow Motion", "Dual ISO Low-Light"],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "grading",
    title: "Master Color Science",
    icon: Sliders,
    headline: "Custom Color Grading & Film Emulation",
    description: "Every frame undergoes bespoke color grading in DaVinci Resolve. We blend authentic skin tones with rich heritage gold hues for a timeless aesthetic.",
    stats: ["35mm Film Grain", "Custom LUT Pipeline", "Skin Tone Preservation"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "aerial",
    title: "Aerial Cinematography",
    icon: Film,
    headline: "Licensed 4K Drone Perspectives",
    description: "Capture the epic grandeur of coastal beach resorts, heritage estates, and lush outdoor mandaps from breathtaking high-angle aerial views.",
    stats: ["4K HDR Aerial", "Smooth Stabilized Orbit", "Fully Licensed Operators"],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "philosophy",
    title: "Candid Philosophy",
    icon: Aperture,
    headline: "Unobtrusive Documentary Storytelling",
    description: "No forced smiles or staged poses. CLIQ Photography moves quietly in the background, allowing real tears, spontaneous laughter, and authentic ritual energy to unfold naturally.",
    stats: ["Zero Staged Interruption", "Pure Natural Light", "Intimate Portraiture"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
  }
];

export const BehindTheLensCraft = () => {
  const [activeTab, setActiveTab] = useState(CRAFT_TABS[0].id);

  const current = CRAFT_TABS.find((t) => t.id === activeTab) || CRAFT_TABS[0];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-studio-border/60">
      <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-studio-gold font-medium block">
          Behind The Lens
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">
          Artistry & Technical Craft
        </h2>
        <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
          How CLIQ Photography combines cinema technology with documentary sensitivity to produce heirloom visual art.
        </p>
      </div>

      {/* Tabs selector */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {CRAFT_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all flex items-center gap-2 border ${
                isActive
                  ? "bg-studio-gold text-studio-bg border-studio-gold shadow-lg shadow-studio-gold/20"
                  : "bg-studio-card border-studio-border text-studio-muted hover:border-studio-gold/50 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-studio-card border border-studio-border rounded-3xl p-6 sm:p-10 overflow-hidden shadow-xl">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-studio-gold/30 bg-studio-gold/10 text-studio-gold text-[11px] uppercase tracking-wider font-medium">
            <Sparkles className="w-3 h-3" />
            <span>{current.title}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-studio-ivory leading-tight">
            {current.headline}
          </h3>

          <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {current.stats.map((st, i) => (
              <div key={i} className="p-3 rounded-xl bg-studio-bg border border-studio-border text-center">
                <Award className="w-4 h-4 text-studio-gold mx-auto mb-1" />
                <span className="text-[11px] font-medium text-studio-ivory block">{st}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-studio-border/80">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-cover transition-all duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

