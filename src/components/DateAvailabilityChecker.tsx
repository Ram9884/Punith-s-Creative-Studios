"use client";

import React, { useState } from "react";
import { Calendar, MapPin, CheckCircle2, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

const LOCATIONS = [
  "Bengaluru / Bangalore",
  "Konanakunte",
  "Yelachanahalli",
  "Kanankapura Road",
  "Electronic City",
  "Whitefield",
  "Other Karnataka Location",
  "Destination Shoot",
];

const MONTHS = [
  "September 2026",
  "October 2026",
  "November 2026",
  "December 2026",
  "January 2027",
  "February 2027",
  "March 2027",
];

export const DateAvailabilityChecker = () => {
  const [selectedCity, setSelectedCity] = useState("Bengaluru / Bangalore");
  const [selectedMonth, setSelectedMonth] = useState("November 2026");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecked(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${BRAND_INFO.name}, I checked date availability on your website for ${selectedMonth} in ${selectedCity}. Please confirm if you are open for bookings on my target date!`
  );

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6">
      <div className="relative rounded-3xl bg-gradient-to-br from-studio-card via-studio-card/80 to-studio-bg border border-studio-gold/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-studio-gold/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-studio-gold/30 bg-studio-gold/10 text-studio-gold text-xs uppercase tracking-widest font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Date Request</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-ivory leading-tight">
              Check Your Date With Punith
            </h2>
            <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
              Planning a wedding, event, or portrait session? Select your target month and venue location to submit your date request directly to Punith&apos;s Creative Studio.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-studio-gold/90">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{BRAND_INFO.contact.serviceArea}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-studio-bg/90 p-6 sm:p-8 rounded-2xl border border-studio-border shadow-xl space-y-6">
            <form onSubmit={handleCheck} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-studio-muted mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 inline-block mr-1 text-studio-gold" />
                    Shoot Location
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => {
                      setSelectedCity(e.target.value);
                      setIsChecked(false);
                    }}
                    className="w-full bg-studio-card border border-studio-border rounded-xl px-4 py-3 text-xs text-studio-ivory focus:outline-none focus:border-studio-gold transition-colors"
                  >
                    {LOCATIONS.map((c) => (
                      <option key={c} value={c} className="bg-studio-card text-studio-ivory">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest text-studio-muted mb-2 font-medium">
                    <Calendar className="w-3.5 h-3.5 inline-block mr-1 text-studio-gold" />
                    Month & Year
                  </label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => {
                      setSelectedMonth(e.target.value);
                      setIsChecked(false);
                    }}
                    className="w-full bg-studio-card border border-studio-border rounded-xl px-4 py-3 text-xs text-studio-ivory focus:outline-none focus:border-studio-gold transition-colors"
                  >
                    {MONTHS.map((m) => (
                      <option key={m} value={m} className="bg-studio-card text-studio-ivory">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-studio-gold text-studio-bg font-medium text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/15"
              >
                <span>Check Date Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Date Inquiry Action Box */}
            <div
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isChecked
                  ? "bg-emerald-950/20 border-emerald-500/40 text-emerald-200"
                  : "bg-studio-card/60 border-studio-border/60 text-studio-muted"
              }`}
            >
              {isChecked ? (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Ready to Send Date Request ({selectedMonth})</span>
                    </div>
                  </div>
                  <p className="text-xs text-studio-ivory font-light leading-relaxed">
                    Submit your date inquiry for <strong className="text-studio-gold">{selectedMonth}</strong> in <strong className="text-studio-gold">{selectedCity}</strong> directly to Punith on WhatsApp for personal confirmation.
                  </p>
                  <div className="pt-1">
                    <a
                      href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Date Request via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs font-light">
                  <span>Select location & target month to prepare date request.</span>
                  <span className="text-studio-gold uppercase tracking-widest text-[10px] font-medium">
                    Ready
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
