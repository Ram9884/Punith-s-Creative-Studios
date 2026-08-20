"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Calendar } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Madhumitha K (chennaifemale_photographer), I'd like to check date availability for my upcoming shoot."
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full rounded-2xl bg-studio-card border border-studio-gold/30 p-8 text-center space-y-6 shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-studio-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-studio-gold/10 text-studio-gold flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-studio-gold font-medium">Before You Go</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-studio-ivory">Checking Dates for Your Special Day?</h3>
              <p className="text-xs text-studio-muted max-w-sm mx-auto font-light leading-relaxed">
                Popular dates book fast. Drop Madhumitha K a quick WhatsApp message to check date availability instantly.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Instant Check</span>
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-3 rounded-full border border-studio-border text-xs text-studio-muted hover:text-studio-ivory transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};