"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

export const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello CLIQ Photography, I'm inquiring about your wedding dates and availability."
  )}`;

  return (
    <>
      {/* Desktop Subtle Pill (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-studio-card/90 backdrop-blur-md border border-studio-border/80 hover:border-emerald-500/50 shadow-2xl text-xs text-studio-ivory transition-all duration-300 hover:shadow-emerald-500/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="font-medium tracking-wide">WhatsApp</span>
          <span className="text-[10px] text-studio-muted group-hover:text-emerald-400 transition-colors">Quick Reply</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-studio-bg/95 backdrop-blur-lg border-t border-studio-border p-3 flex gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-emerald-600/90 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
        <a
          href="/inquire"
          className="flex-1 py-3 px-4 rounded-xl bg-studio-card border border-studio-border text-studio-ivory font-medium text-xs flex items-center justify-center gap-1"
        >
          <span>Book Shoot</span>
          <ArrowRight className="w-3.5 h-3.5 text-studio-gold" />
        </a>
      </div>
    </>
  );
};