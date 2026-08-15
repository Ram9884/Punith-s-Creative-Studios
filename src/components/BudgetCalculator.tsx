"use client";

import React, { useState } from "react";
import { CALCULATOR_SERVICES } from "@/data/content";
import { Check, MessageCircle, Calculator, Sparkles } from "lucide-react";

export const BudgetCalculator = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "candid_photo",
    "cinematic_film"
  ]);

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalEstimate = selectedIds.reduce((sum, id) => {
    const item = CALCULATOR_SERVICES.find((s) => s.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const selectedNames = selectedIds
    .map((id) => CALCULATOR_SERVICES.find((s) => s.id === id)?.name)
    .filter(Boolean)
    .join(", ");

  const whatsappMessage = encodeURIComponent(
    `Hello Studio One, I customized a package estimate on your website for ₹${totalEstimate.toLocaleString("en-IN")}. Services: ${selectedNames}. Are our wedding dates available?`
  );

  return (
    <div className="p-8 sm:p-10 rounded-2xl bg-studio-card border border-studio-border space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-studio-gold text-xs uppercase tracking-widest font-semibold mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimate Builder</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-studio-ivory">Customize Your Wedding Package</h3>
          <p className="text-xs text-studio-muted font-light mt-1">Select the services you need for transparent ballpark pricing.</p>
        </div>

        <div className="p-4 rounded-xl bg-studio-bg border border-studio-gold/40 text-right min-w-[200px]">
          <span className="text-[10px] uppercase tracking-widest text-studio-muted block">Estimated Investment</span>
          <span className="font-serif text-3xl text-studio-gold font-semibold">
            ₹{totalEstimate.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {CALCULATOR_SERVICES.map((srv) => {
          const isSelected = selectedIds.includes(srv.id);
          return (
            <div
              key={srv.id}
              onClick={() => toggleService(srv.id)}
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
                  <p className="text-xs font-medium text-studio-ivory">{srv.name}</p>
                  <span className="text-[10px] text-studio-muted uppercase tracking-wider">{srv.category}</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-studio-gold">₹{srv.price.toLocaleString("en-IN")}</span>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-studio-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-studio-muted max-w-md font-light">
          * Travel and multi-city stay logistics are customized separately for destination weddings.
        </p>
        <a
          href={`https://wa.me/918217521582?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Lock In This Package on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};