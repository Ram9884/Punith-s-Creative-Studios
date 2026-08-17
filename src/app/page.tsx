"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, MapPin, Play, Star, Instagram, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_ITEMS, WEDDING_FILMS, STATS, SERVICES, BRAND_INFO } from "@/data/content";
import { ColorGradingSlider } from "@/components/ColorGradingSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SocialMoments } from "@/components/SocialMoments";
import { StoryModal } from "@/components/StoryModal";
import { DateAvailabilityChecker } from "@/components/DateAvailabilityChecker";
import { PortfolioItem } from "@/types";

export default function HomePage() {
  const [selectedStory, setSelectedStory] = useState<PortfolioItem | null>(null);
  const [activeFilm, setActiveFilm] = useState<typeof WEDDING_FILMS[0] | null>(null);

  return (
    <main className="min-h-screen bg-studio-bg text-studio-ivory">
      {/* 1. CINEMATIC WEDDING HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="CLIQ Photography Hero Background"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 filter contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-studio-gold/40 bg-studio-card/80 text-studio-gold text-xs tracking-wider font-medium shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{BRAND_INFO.positioning} • Chetpet, Chennai</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight">
            {BRAND_INFO.heroTagline}
          </h1>

          <p className="max-w-2xl mx-auto text-studio-muted text-sm sm:text-base font-light leading-relaxed">
            {BRAND_INFO.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/inquire"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-studio-gold/20"
            >
              <span>{BRAND_INFO.heroCTA.primary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-studio-border bg-studio-card/90 text-studio-ivory text-xs uppercase tracking-widest hover:border-studio-gold/60 transition-all flex items-center justify-center"
            >
              {BRAND_INFO.heroCTA.secondary}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STRONG PORTFOLIO */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-studio-gold block mb-2 font-medium">
              Curated Gallery
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl">Featured Stories & Frames</h2>
          </div>
          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-widest text-studio-gold hover:underline inline-flex items-center gap-1 font-medium"
          >
            Explore Full Portfolio Archive <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedStory(item)}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer bg-studio-card border border-studio-border hover:border-studio-gold/50 transition-all shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] tracking-widest uppercase text-studio-gold block mb-1 font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl text-white">{item.title}</h3>
                <p className="text-xs text-studio-muted flex items-center gap-1 mt-1 font-light">
                  <MapPin className="w-3 h-3 text-studio-gold" /> {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WEDDING FILMS */}
      <section className="py-20 bg-studio-card/40 border-y border-studio-border">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-studio-gold font-medium block">
                Motion & Cinema
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">
                Cinematic Wedding Films
              </h2>
              <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
                Motion pictures scored with customized sound design and narrative pacing that bring your wedding atmosphere to life.
              </p>
            </div>
            <Link
              href="/portfolio?category=Weddings"
              className="text-xs uppercase tracking-widest text-studio-gold hover:underline inline-flex items-center gap-1.5 font-medium"
            >
              <span>Watch More Films</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WEDDING_FILMS.map((film) => (
              <div
                key={film.id}
                className="group relative rounded-2xl overflow-hidden bg-studio-card border border-studio-border hover:border-studio-gold/50 transition-all shadow-xl space-y-4 p-4"
              >
                <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-black">
                  <Image
                    src={film.image}
                    alt={film.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() =>
                        setSelectedStory({
                          id: 999,
                          category: "Weddings",
                          title: film.title,
                          location: film.location,
                          image: film.image,
                          videoUrl: film.videoUrl,
                          duration: film.duration,
                          description: film.description,
                        })
                      }
                      className="w-16 h-16 rounded-full bg-studio-gold text-studio-bg flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                      aria-label="Play Film"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </button>
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 text-[10px] text-studio-gold uppercase tracking-widest font-semibold border border-studio-gold/30">
                    {film.duration}
                  </span>
                </div>

                <div className="px-2 pb-2 space-y-1">
                  <h3 className="font-serif text-2xl text-studio-ivory">{film.title}</h3>
                  <p className="text-xs text-studio-muted flex items-center gap-1 font-light">
                    <MapPin className="w-3.5 h-3.5 text-studio-gold" /> {film.location}
                  </p>
                  <p className="text-xs text-studio-muted/80 font-light pt-1 leading-relaxed">
                    {film.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION ("Your Story. Our Cliq.") */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-studio-border/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-studio-gold font-medium block">
              About CLIQ Photography
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory leading-tight">
              {BRAND_INFO.about.heading}
            </h2>
            <p className="text-sm sm:text-base text-studio-muted font-light leading-relaxed">
              {BRAND_INFO.about.description}
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/inquire"
                className="px-7 py-3 rounded-full bg-studio-gold text-studio-bg font-medium text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-studio-gold/20"
              >
                <span>Book Your Shoot</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-96 sm:h-[450px] rounded-3xl overflow-hidden border border-studio-border shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"
              alt="CLIQ Photography About Moment"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-studio-card/90 backdrop-blur-md border border-studio-border">
              <p className="font-serif text-lg text-studio-ivory italic">
                "Framing Love in Every Cliq"
              </p>
              <p className="text-[10px] uppercase tracking-widest text-studio-gold mt-1 font-medium">
                Chetpet, Chennai • Available Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR GRADING CRAFT */}
      <ColorGradingSlider />

      {/* 5. SERVICES OVERVIEW */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-studio-gold font-medium">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">Services & Craft</h2>
          <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
            Tailored photography and cinematic videography packages designed to preserve every dimension of your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-studio-card/60 border border-studio-border hover:border-studio-gold/40 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-studio-ivory group-hover:text-studio-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-studio-gold font-medium">
                  {service.tagline}
                </p>
                <p className="text-xs text-studio-muted font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-studio-border/60 space-y-2">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-studio-muted font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-studio-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-studio-gold text-studio-gold text-xs uppercase tracking-widest hover:bg-studio-gold hover:text-studio-bg transition-all font-medium"
          >
            <span>Customize Package & Estimate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 6. SOCIAL PROOF & STATS */}
      <section className="border-y border-studio-border bg-studio-card/40 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl text-studio-gold font-semibold">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-studio-muted font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM SOCIAL MOMENTS */}
      <SocialMoments />

      {/* 7. TESTIMONIALS / REVIEWS */}
      <TestimonialsSection />

      {/* 8. ENQUIRY CTA & DATE CHECKER */}
      <DateAvailabilityChecker />

      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-studio-card to-studio-bg border border-studio-gold/40 space-y-6 max-w-4xl mx-auto shadow-2xl">
          <span className="text-xs uppercase tracking-widest text-studio-gold font-medium">
            Reserve Your Wedding Date
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">
            Ready to Tell Your Story with CLIQ?
          </h2>
          <p className="text-xs sm:text-sm text-studio-muted max-w-lg mx-auto font-light leading-relaxed">
            We accept a limited number of commissions each season to ensure uncompromising artistic dedication for every couple.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/inquire"
              className="px-8 py-3.5 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20"
            >
              <span>{BRAND_INFO.heroCTA.primary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <StoryModal item={selectedStory} onClose={() => setSelectedStory(null)} />
    </main>
  );
}