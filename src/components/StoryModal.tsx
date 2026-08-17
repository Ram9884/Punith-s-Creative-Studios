"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ArrowRight, Play, Volume2, VolumeX } from "lucide-react";
import { PortfolioItem } from "@/types";

interface StoryModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const StoryModal = ({ item, onClose }: StoryModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-4xl w-full my-auto rounded-2xl overflow-hidden bg-studio-card border border-studio-border"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-studio-ivory hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Header */}
          <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black">
            {item.videoUrl ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  src={item.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <>
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 80vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-card via-black/30 to-transparent" />
              </>
            )}

            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <span className="text-xs uppercase tracking-widest text-studio-gold block mb-1">
                {item.category} {item.duration ? `• ${item.duration}` : ""}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white">{item.title}</h2>
              <p className="text-xs text-studio-muted flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-studio-gold" /> {item.location}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-studio-muted leading-relaxed font-light">
              {item.description || "Every photograph is preserved with deep emotional tone and cinematic attention to detail."}
            </p>

            {item.quote && (
              <div className="p-4 rounded-xl bg-studio-bg border-l-2 border-studio-gold italic text-xs text-studio-ivory">
                "{item.quote}" — {item.couple}
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-studio-border">
              <div className="text-xs text-studio-muted">
                Love this aesthetic? We customize every shoot to match your day.
              </div>
              <Link
                href="/inquire"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-studio-gold text-studio-bg font-medium text-xs uppercase tracking-widest hover:brightness-110 transition-all"
              >
                <span>Check Date for Similar Shoots</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};