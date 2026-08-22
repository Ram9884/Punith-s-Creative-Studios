"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

const TOTAL_FRAMES = 120;
const INITIAL_PRELOAD_COUNT = 20;

export function HeroReel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(-1);
  const heroContentRef = useRef<HTMLDivElement>(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isInitialReady, setIsInitialReady] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Helper: resize canvas backing store to DPR (max 2)
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Redraw current frame on resize
      if (currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      }
    };

    // Object-cover draw function with nearest-loaded frame fallback
    const drawFrame = (requestedIndex: number) => {
      const images = imagesRef.current;
      if (images.length === 0) return;

      const canvasW = canvas.width;
      const canvasH = canvas.height;

      // Find nearest loaded frame if requested index is not ready yet
      let activeImg: HTMLImageElement | null = null;
      let targetIdx = Math.min(TOTAL_FRAMES - 1, Math.max(0, requestedIndex));

      if (images[targetIdx] && images[targetIdx].complete && images[targetIdx].naturalWidth > 0) {
        activeImg = images[targetIdx];
      } else {
        // Search outwards for nearest loaded frame
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          const prev = targetIdx - offset;
          const next = targetIdx + offset;
          if (prev >= 0 && images[prev] && images[prev].complete && images[prev].naturalWidth > 0) {
            activeImg = images[prev];
            break;
          }
          if (next < TOTAL_FRAMES && images[next] && images[next].complete && images[next].naturalWidth > 0) {
            activeImg = images[next];
            break;
          }
        }
      }

      if (!activeImg) return;

      const imgW = activeImg.naturalWidth;
      const imgH = activeImg.naturalHeight;

      // Object-cover math
      const scale = Math.max(canvasW / imgW, canvasH / imgH);
      const drawW = imgW * scale;
      const drawH = imgH * scale;

      const offsetX = (canvasW - drawW) / 2;
      const offsetY = (canvasH - drawH) / 2;

      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.drawImage(activeImg, offsetX, offsetY, drawW, drawH);

      currentFrameRef.current = targetIdx;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Preload frames
    const images: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const frameStr = String(i).padStart(3, "0");
      img.src = `/frames/frame_${frameStr}.webp`;

      const handleLoad = () => {
        count++;
        setLoadedCount(count);

        if (i === 1 && currentFrameRef.current === -1) {
          drawFrame(0);
        }

        if (count >= INITIAL_PRELOAD_COUNT) {
          setIsInitialReady(true);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;

      images.push(img);
    }
    imagesRef.current = images;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      drawFrame(0);
      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger setup
    const wrapperEl = wrapperRef.current;
    const pinEl = pinTargetRef.current;

    let triggerInstance: ScrollTrigger | null = null;

    if (wrapperEl && pinEl) {
      triggerInstance = ScrollTrigger.create({
        trigger: wrapperEl,
        pin: pinEl,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const maxIndex = TOTAL_FRAMES - 1;
          const frameIndex = Math.min(maxIndex, Math.max(0, Math.round(self.progress * maxIndex)));

          if (frameIndex !== currentFrameRef.current) {
            drawFrame(frameIndex);
          }

          if (heroContentRef.current) {
            const fadeProgress = Math.max(0, 1 - self.progress * 6);
            heroContentRef.current.style.opacity = String(fadeProgress);
            heroContentRef.current.style.transform = `translateY(${self.progress * -40}px)`;
          }
        },
      });
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      if (triggerInstance) {
        triggerInstance.kill();
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-[250vh] md:h-[400vh] bg-[#050505]"
    >
      {/* Pinned Canvas Viewport */}
      <div
        ref={pinTargetRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0 bg-[#050505]"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block bg-[#050505] pointer-events-none opacity-85"
        />

        {/* Bottom-anchored gradient scrim for text legibility */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        {/* Hero Overlay Copy */}
        <div
          ref={heroContentRef}
          className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-12 max-w-7xl mx-auto pointer-events-auto transition-opacity duration-300"
        >
          {/* Studio Header / Monogram */}
          <div className="pt-20 md:pt-24 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 rounded-full border border-studio-gold/60 bg-black p-1 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt={`${BRAND_INFO.name} Logo`}
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-serif text-base md:text-lg tracking-widest text-studio-ivory font-medium uppercase">
                {BRAND_INFO.name}
              </span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-studio-gold/30 bg-black/60 backdrop-blur-md text-xs text-studio-gold tracking-wider font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.contact.location}</span>
            </div>
          </div>

          {/* Hero Main Content */}
          <div className="space-y-6 max-w-3xl pb-16 md:pb-24">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-studio-gold/30 backdrop-blur-md">
              <span className="text-xs uppercase tracking-widest text-studio-gold font-semibold">
                {BRAND_INFO.tagline}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-studio-ivory text-balance">
              {BRAND_INFO.heroTagline}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-studio-muted font-light leading-relaxed max-w-2xl">
              {BRAND_INFO.heroDescription}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="px-8 py-3.5 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-xl shadow-studio-gold/20"
              >
                <span>{BRAND_INFO.heroCTA.primary}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/inquire"
                className="px-7 py-3.5 rounded-full border border-studio-border bg-studio-card/80 backdrop-blur-md text-studio-ivory font-medium text-xs uppercase tracking-widest hover:border-studio-gold hover:text-studio-gold transition-all"
              >
                <span>{BRAND_INFO.heroCTA.secondary}</span>
              </Link>
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-400 font-medium text-xs uppercase tracking-widest hover:bg-emerald-900/40 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{BRAND_INFO.heroCTA.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      {!isInitialReady && (
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-50 pointer-events-none">
          <div
            className="h-full bg-studio-gold transition-all duration-150 ease-out"
            style={{ width: `${Math.min(100, (loadedCount / TOTAL_FRAMES) * 100)}%` }}
          />
        </div>
      )}
    </div>
  );
}
