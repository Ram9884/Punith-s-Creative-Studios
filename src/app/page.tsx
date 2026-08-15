"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, MapPin, Play } from "lucide-react";
import { PORTFOLIO_ITEMS, STATS } from "@/data/content";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ColorGradingSlider } from "@/components/ColorGradingSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SocialMoments } from "@/components/SocialMoments";
import { StoryModal } from "@/components/StoryModal";
import { DateAvailabilityChecker } from "@/components/DateAvailabilityChecker";
import { BehindTheLensCraft } from "@/components/BehindTheLensCraft";
import { PortfolioItem } from "@/types";

export default function HomePage() {
  const [selectedStory, setSelectedStory] = useState<PortfolioItem | null>(null);

  return (
    <main className="min-h-screen bg-studio-bg text-studio-ivory">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-25 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-studio-border bg-studio-card/80 text-studio-muted text-xs tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-studio-gold" />
            <span>Bangalore Wedding & Destination Visual Studio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight">
            Crafting timeless love stories, <br />
            <span className="italic text-studio-gold">one frame at a time.</span>
          </h1>

          <p className="max-w-xl mx-auto text-studio-muted text-sm sm:text-base font-light leading-relaxed">
            Editorial candid wedding photography and cinematic wedding films documented with genuine intimacy across India and destination venues.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/inquire"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-studio-gold text-studio-bg font-medium text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20"
            >
              <span>Let's Tell Your Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-7 py-3 rounded-full border border-studio-border bg-studio-card text-studio-ivory text-xs uppercase tracking-widest hover:border-studio-gold/60 transition-all flex items-center justify-center"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-studio-border bg-studio-card/40 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl text-studio-gold font-semibold">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-studio-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Date & Venue Availability Checker */}
      <DateAvailabilityChecker />

      {/* 2. Beautiful Work (Curated Selection) */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-studio-gold block mb-2">Visual Archive</span>
            <h2 className="font-serif text-3xl sm:text-5xl">Selected Stories & Films</h2>
          </div>
          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-widest text-studio-gold hover:underline inline-flex items-center gap-1"
          >
            View Full Portfolio Archive <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedStory(item)}
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer bg-studio-card border border-studio-border"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {item.category === "Films" && (
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-studio-gold text-studio-bg flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] tracking-widest uppercase text-studio-gold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl text-white">{item.title}</h3>
                <p className="text-xs text-studio-muted flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Color Grading Craft Slider */}
      <ColorGradingSlider />

      {/* 4. Behind the Lens Equipment & Craft Showcase */}
      <BehindTheLensCraft />

      {/* 5. The Studio One Experience */}
      <ExperienceSection />

      {/* 6. Kind Words / Testimonials */}
      <TestimonialsSection />

      {/* 7. Behind the Frame Social Moments */}
      <SocialMoments />

      {/* 8. Final Call to Action Strip */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-studio-card to-studio-bg border border-studio-gold/30 space-y-6 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-studio-gold">Reserve Your Date</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">Let's Document Your Story</h2>
          <p className="text-xs sm:text-sm text-studio-muted max-w-lg mx-auto font-light leading-relaxed">
            We accept a limited number of commissions each season to ensure uncompromising artistic dedication for every wedding.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/inquire"
              className="px-8 py-3.5 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20"
            >
              <span>Check Wedding Date Availability</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <StoryModal item={selectedStory} onClose={() => setSelectedStory(null)} />
    </main>
  );
}