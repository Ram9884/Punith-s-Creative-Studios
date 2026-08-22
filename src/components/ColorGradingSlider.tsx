"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

export const ColorGradingSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(pos);
  };

  return (
    <section className="py-12 sm:py-16 bg-studio-card/30 border-y border-studio-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-studio-border bg-studio-card text-studio-gold text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Color Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-studio-ivory">Raw Capture vs. Master Grade</h2>
          <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
            Drag the slider to experience how {BRAND_INFO.name} preserves natural skin tones while imbuing every frame with rich, timeless cinematic depth.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto h-72 sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-studio-border shadow-2xl"
          onMouseMove={handleSliderMove}
          onTouchMove={handleSliderMove}
        >
          {/* Graded Image (Background - Pristine Ultra High Clarity) */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop"
              alt={`${BRAND_INFO.name} Signature Grade`}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
              priority
            />
            <span className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-md bg-black/85 backdrop-blur-sm text-[10px] uppercase tracking-widest text-studio-gold font-semibold border border-studio-gold/30">
              Signature Master Grade
            </span>
          </div>

          {/* RAW Image (Clipped Overlay - Flat RAW Simulation) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop"
              alt="Raw Camera Capture"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover filter contrast-75 brightness-90 saturate-50"
              priority
            />
            <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-md bg-black/85 backdrop-blur-sm text-[10px] uppercase tracking-widest text-studio-muted font-semibold border border-studio-border">
              Flat RAW Capture
            </span>
          </div>

          {/* Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-studio-gold shadow-2xl z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-studio-gold text-studio-bg flex items-center justify-center font-bold text-xs shadow-2xl border-2 border-white">
              ↔
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};