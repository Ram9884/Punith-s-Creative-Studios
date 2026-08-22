"use client";

import React, { useState } from "react";
import { SERVICES, BRAND_INFO } from "@/data/content";
import { Check, MessageCircle, Sparkles } from "lucide-react";

export const BudgetCalculator = () => {
  const [selectedTitles, setSelectedTitles] = useState<string[]>([
    "Wedding Photography",
    "Wedding Videography",
  ]);

  const toggleService = (title: string) => {
    setSelectedTitles((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const selectedListString = selectedTitles.join(", ");

  const whatsappMessage = encodeURIComponent(
    `Hello ${BRAND_INFO.name}, I would like to discuss a custom shoot quote for the following services: ${selectedListString}. Please let me know your availability!`
  );

  return (
    <div className="p-8 sm:p-10 rounded-2xl bg-studio-card border border-studio-border space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-studio-gold text-xs uppercase tracking-widest font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Custom Shoot Requirement</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-studio-ivory">Tell Us About Your Shoot</h3>
          <p className="text-xs text-studio-muted font-light mt-1">Select the services you require for a personalized consultation with Punith.</p>
        </div>

        <div className="p-4 rounded-xl bg-studio-bg border border-studio-gold/40 text-left sm:text-right min-w-[200px]">
          <span className="text-[10px] uppercase tracking-widest text-studio-muted block">Selected Services</span>
          <span className="font-serif text-2xl text-studio-gold font-semibold">
            {selectedTitles.length} {selectedTitles.length === 1 ? "Service" : "Services"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SERVICES.map((srv) => {
          const isSelected = selectedTitles.includes(srv.title);
          return (
            <div
              key={srv.id}
              onClick={() => toggleService(srv.title)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                isSelected
                  ? "bg-studio-gold/10 border-studio-gold text-studio-ivory"
                  : "bg-studio-bg border-studio-border text-studio-muted hover:border-studio-border/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                    isSelected ? "bg-studio-gold border-studio-gold text-studio-bg" : "border-studio-border"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div>
                  <p className="text-xs font-medium text-studio-ivory">{srv.title}</p>
                  <span className="text-[10px] text-studio-muted font-light">{srv.tagline}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-studio-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-studio-muted max-w-md font-light">
          * Based in Bengaluru. Servicing Bangalore, Konanakunte, and nearby regional destinations.
        </p>
        <a
          href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-7 py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Discuss Details on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};