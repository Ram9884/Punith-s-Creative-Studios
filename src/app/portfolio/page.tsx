"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Play } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/data/content";
import { StoryModal } from "@/components/StoryModal";
import { PortfolioCategory, PortfolioItem } from "@/types";

function PortfolioContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as PortfolioCategory) || "All";
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>(initialCategory);
  const [selectedStory, setSelectedStory] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const param = searchParams.get("category") as PortfolioCategory;
    if (param) setSelectedCategory(param);
  }, [searchParams]);

  const categories: PortfolioCategory[] = [
    "All",
    "Weddings",
    "Candid",
    "Portraits",
    "Families",
    "Maternity",
    "Newborn",
    "Studio",
    "Celebrations",
    "Quick Photo Services",
    "Photo Frames",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-10 sm:pt-14 pb-16">
      <div className="space-y-4 max-w-3xl mb-12">
        <span className="text-xs uppercase tracking-widest text-studio-gold">Visual Archive</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-normal">Our Portfolio & Films</h1>
        <p className="text-sm text-studio-muted font-light leading-relaxed">
          Explore our visual journeys across celebrations, cinematic wedding films, couple portraits, and intimate family milestones. Click any project to open the story or film experience.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-studio-gold text-studio-bg font-semibold"
                  : "border border-studio-border text-studio-muted hover:border-studio-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
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
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer bg-studio-card border border-studio-border"
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
                  <span className="text-[10px] tracking-widest uppercase text-studio-gold block mb-1">
                    {item.category} {item.duration ? `• ${item.duration}` : ""}
                  </span>
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                  <p className="text-xs text-studio-muted flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {item.location}
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