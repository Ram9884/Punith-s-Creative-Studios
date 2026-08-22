"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Play, ExternalLink } from "lucide-react";
import { PORTFOLIO_ITEMS, BRAND_INFO } from "@/data/content";
import { StoryModal } from "@/components/StoryModal";
import { PortfolioCategory, PortfolioItem } from "@/types";

const CATEGORIES: (PortfolioCategory | "All")[] = [
  "All",
  "Weddings",
  "Events",
  "Portraits",
  "Couples",
  "Videography",
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as PortfolioCategory) || "All";
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | "All">(initialCategory);
  const [selectedStory, setSelectedStory] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const param = searchParams.get("category") as PortfolioCategory;
    if (param) setSelectedCategory(param);
  }, [searchParams]);

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 sm:pt-14 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-studio-border/60 pb-8">
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-studio-gold font-medium">Visual Archive</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal">Portfolio Gallery</h1>
          <p className="text-sm text-studio-muted font-light leading-relaxed">
            Explore our curated gallery across South Indian wedding rituals, celebrations, portraits, and cinematic films by {BRAND_INFO.name}.
          </p>
        </div>

        <a
          href={BRAND_INFO.contact.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border border-studio-gold bg-studio-gold/10 text-studio-gold text-xs uppercase tracking-widest hover:bg-studio-gold hover:text-studio-bg transition-all inline-flex items-center gap-2 self-start md:self-auto font-medium shadow-md"
        >
          <span>External Portfolio</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all ${
              selectedCategory === cat
                ? "bg-studio-gold text-studio-bg font-semibold shadow-md"
                : "border border-studio-border bg-studio-card text-studio-muted hover:border-studio-gold/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {item.videoUrl && (
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-studio-gold text-studio-bg flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-studio-gold block mb-1 font-semibold">
                    {item.category} {item.duration ? `• ${item.duration}` : ""}
                  </span>
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                  <p className="text-xs text-studio-muted flex items-center gap-1 mt-1 font-light">
                    <MapPin className="w-3 h-3 text-studio-gold" /> {item.location}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-studio-gold/50 flex items-center justify-center text-studio-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <StoryModal item={selectedStory} onClose={() => setSelectedStory(null)} />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-16 text-center text-xs text-studio-muted">Loading archive...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}