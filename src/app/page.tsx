"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2, ExternalLink, MessageCircle, Phone, Star } from "lucide-react";
import { PORTFOLIO_ITEMS, STATS, SERVICES, BRAND_INFO, TESTIMONIALS } from "@/data/content";
import { HeroReel } from "@/components/HeroReel";
import { ColorGradingSlider } from "@/components/ColorGradingSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SocialMoments } from "@/components/SocialMoments";
import { StoryModal } from "@/components/StoryModal";
import { DateAvailabilityChecker } from "@/components/DateAvailabilityChecker";
import { PortfolioItem, PortfolioCategory } from "@/types";

const CATEGORIES: PortfolioCategory[] = [
  "Weddings",
  "Events",
  "Portraits",
  "Couples",
  "Videography",
];

export default function HomePage() {
  const [selectedStory, setSelectedStory] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPortfolio =
    activeCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-studio-bg text-studio-ivory">
      {/* 1. SCROLL-SCRUBBED HERO REEL */}
      <HeroReel />

      {/* 2. TRUST & SOCIAL PROOF BAR */}
      <section className="border-y border-studio-border bg-studio-card/60 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl text-studio-gold font-semibold flex items-center justify-center gap-1">
                {stat.label.includes("Rating") && <Star className="w-5 h-5 fill-current text-studio-gold" />}
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-studio-muted font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PORTFOLIO */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-studio-gold block mb-2 font-medium">
              Selected Work
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl">Featured Portfolio</h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BRAND_INFO.contact.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-studio-gold hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>External Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/portfolio"
              className="text-xs uppercase tracking-widest text-studio-muted hover:text-studio-gold inline-flex items-center gap-1 font-medium"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
              activeCategory === "All"
                ? "bg-studio-gold text-studio-bg font-semibold shadow-md"
                : "bg-studio-card border border-studio-border text-studio-muted hover:border-studio-gold/40"
            }`}
          >
            All Work
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                activeCategory === cat
                  ? "bg-studio-gold text-studio-bg font-semibold shadow-md"
                  : "bg-studio-card border border-studio-border text-studio-muted hover:border-studio-gold/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPortfolio.slice(0, 6).map((item) => (
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

      {/* 4. WHAT WE CAPTURE (SERVICES GRID) */}
      <section className="py-16 sm:py-24 bg-studio-card/30 border-y border-studio-border relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-studio-gold font-medium">
              Our Specialties
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">What We Capture</h2>
            <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
              Professional photography, videography, photo editing, and album design tailored to preserve your special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-studio-bg border border-studio-border hover:border-studio-gold/40 transition-all flex flex-col justify-between space-y-4 group shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-studio-ivory group-hover:text-studio-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-studio-gold font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-studio-muted font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-studio-border/60 space-y-1.5">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-studio-muted font-light">
                      <CheckCircle2 className="w-3 h-3 text-studio-gold flex-shrink-0" />
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
              <span>Explore All Services & Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WEDDING STORY SPOTLIGHT */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-10" id="weddings">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-studio-gold font-medium block">
              Wedding Story Spotlight
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory leading-tight">
              {BRAND_INFO.weddingSection.heading}
            </h2>
            <p className="text-sm sm:text-base text-studio-muted font-light leading-relaxed">
              {BRAND_INFO.weddingSection.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio?category=Weddings"
                className="px-7 py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-studio-gold/20"
              >
                <span>View Wedding Stories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 text-xs font-medium uppercase tracking-widest hover:bg-emerald-900/40 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire for Weddings</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden border border-studio-border shadow-2xl">
            <Image
              src="/images/wedding-sample.jpg"
              alt="South Indian Wedding Sample by Punith's Creative Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-studio-card/90 backdrop-blur-md border border-studio-border">
              <p className="font-serif text-base text-studio-ivory italic">
                &ldquo;Capturing sacred wedding ceremonies, vivid traditions, and authentic emotion.&rdquo;
              </p>
              <p className="text-[10px] uppercase tracking-widest text-studio-gold mt-1 font-medium">
                Punith&apos;s Creative Studio • Bengaluru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT PUNITH'S CREATIVE STUDIO */}
      <section className="py-16 sm:py-24 bg-studio-card/20 border-t border-studio-border/60 relative z-10" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest text-studio-gold font-medium block">
                About Punith&apos;s Creative Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory leading-tight">
                {BRAND_INFO.about.heading}
              </h2>
              <p className="text-sm sm:text-base text-studio-muted font-light leading-relaxed">
                {BRAND_INFO.about.description}
              </p>
              <div className="p-4 rounded-xl bg-studio-card border border-studio-border space-y-2">
                <p className="text-xs text-studio-ivory font-medium">
                  <strong>Lead Photographer & Founder:</strong> {BRAND_INFO.ownerName}
                </p>
                <p className="text-xs text-studio-muted font-light">
                  <strong>Studio Location:</strong> {BRAND_INFO.contact.address}
                </p>
              </div>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/inquire"
                  className="px-7 py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-studio-gold/20"
                >
                  <span>Book a Shoot</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-2">
                <span className="text-xs uppercase tracking-wider text-studio-gold font-semibold">Weddings</span>
                <h3 className="font-serif text-lg text-studio-ivory">{BRAND_INFO.weddingSection.heading}</h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed">{BRAND_INFO.weddingSection.description}</p>
              </div>
              <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-2">
                <span className="text-xs uppercase tracking-wider text-studio-gold font-semibold">Events</span>
                <h3 className="font-serif text-lg text-studio-ivory">{BRAND_INFO.eventsSection.heading}</h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed">{BRAND_INFO.eventsSection.description}</p>
              </div>
              <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-2">
                <span className="text-xs uppercase tracking-wider text-studio-gold font-semibold">Portraits</span>
                <h3 className="font-serif text-lg text-studio-ivory">{BRAND_INFO.portraitsSection.heading}</h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed">{BRAND_INFO.portraitsSection.description}</p>
              </div>
              <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-2">
                <span className="text-xs uppercase tracking-wider text-studio-gold font-semibold">Videography</span>
                <h3 className="font-serif text-lg text-studio-ivory">{BRAND_INFO.videographySection.heading}</h3>
                <p className="text-xs text-studio-muted font-light leading-relaxed">{BRAND_INFO.videographySection.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COLOR GRADING CRAFT SLIDER */}
      <ColorGradingSlider />

      {/* 8. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 9. STUDIO LOCATION & STOREFRONT */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-studio-card border border-studio-gold/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-studio-gold/30 bg-studio-gold/10 text-studio-gold text-xs uppercase tracking-widest font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Physical Studio Location</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-ivory">
              Visit Our Studio in Bengaluru
            </h2>
            <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
              We welcome clients for in-person consultations, album design previews, and photography sessions at our Konanakunte studio.
            </p>
            <div className="space-y-3 pt-2 text-xs text-studio-ivory font-light">
              <p><strong>Address:</strong> {BRAND_INFO.contact.address}</p>
              <p className="text-studio-muted text-[11px]"><strong>Landmark / Secondary:</strong> {BRAND_INFO.contact.secondaryAddress}</p>
            </div>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all inline-flex items-center gap-2 shadow-md"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND_INFO.contact.phoneRaw}`}
                className="px-6 py-3 rounded-full border border-studio-border text-studio-ivory text-xs font-medium uppercase tracking-widest hover:border-studio-gold transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-studio-gold" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-studio-border shadow-xl">
            <Image
              src="/images/storefront.jpg"
              alt="Punith's Creative Studio Storefront in Bengaluru"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-sm border border-studio-border text-xs text-studio-ivory">
              <strong>Punith&apos;s Creative Studio</strong> • Ganapathipura, Konanakunte, Bengaluru
            </div>
          </div>
        </div>
      </section>

      {/* 10. INSTAGRAM SOCIAL MOMENTS */}
      <SocialMoments />

      {/* 11. ENQUIRY CTA & DATE CHECKER */}
      <DateAvailabilityChecker />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-studio-card to-studio-bg border border-studio-gold/40 space-y-6 max-w-4xl mx-auto shadow-2xl">
          <span className="text-xs uppercase tracking-widest text-studio-gold font-medium">
            Reserve Your Session
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">
            Let&apos;s Create Something Worth Remembering.
          </h2>
          <p className="text-xs sm:text-sm text-studio-muted max-w-lg mx-auto font-light leading-relaxed">
            Professional photography and videography based in Bengaluru, Karnataka. Reach out to Punith for wedding bookings, celebrations, and custom shoot inquiries.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={BRAND_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-widest transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct ({BRAND_INFO.contact.phone})</span>
            </a>
            <Link
              href="/inquire"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-studio-gold text-studio-gold font-semibold text-xs uppercase tracking-widest hover:bg-studio-gold hover:text-studio-bg transition-all inline-flex items-center justify-center gap-2"
            >
              <span>{BRAND_INFO.heroCTA.secondary}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <StoryModal item={selectedStory} onClose={() => setSelectedStory(null)} />
    </main>
  );
}