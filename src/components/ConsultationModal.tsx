"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Video, CheckCircle2, Sparkles, User, Phone, ArrowRight, MessageCircle, Loader2 } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALL_TOPICS = [
  "15-Min Wedding Vision & Package Overview",
  "Pre-Wedding & Destination Shoot Planning",
  "Custom Package & Budget Discussion",
];

const TIME_SLOTS = [
  "11:00 AM",
  "02:30 PM",
  "05:00 PM",
  "07:30 PM",
  "09:00 PM",
];

// Generate next 6 days for booking
const getAvailableDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 1; i <= 6; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
      dateNum: d.getDate(),
      monthName: d.toLocaleDateString("en-US", { month: "short" }),
      fullString: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
    });
  }
  return dates;
};

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const dates = getAvailableDates();
  const [selectedTopic, setSelectedTopic] = useState(CALL_TOPICS[0]);
  const [selectedDate, setSelectedDate] = useState(dates[0].fullString);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          selectedTopic,
          selectedDate,
          selectedTime,
          source: "consultation_modal",
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Consultation submit error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Hello CLIQ Photography Team, I scheduled a consultation on your website for ${selectedDate} at ${selectedTime}.\nName: ${name}\nTopic: ${selectedTopic}`
  );

  const resetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-studio-card border border-studio-gold/40 rounded-3xl overflow-hidden shadow-2xl shadow-studio-gold/10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-studio-border bg-studio-bg/90">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-studio-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-studio-gold font-semibold">
              Book Your Shoot Consultation
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full border border-studio-border text-studio-muted hover:text-white hover:border-studio-gold transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Introduction Banner */}
              <div className="p-4 rounded-2xl bg-studio-bg border border-studio-border space-y-1">
                <div className="flex items-center gap-2 text-studio-ivory font-serif text-lg">
                  <Video className="w-4 h-4 text-studio-gold" />
                  <span>1-on-1 Creative Consultation</span>
                </div>
                <p className="text-xs text-studio-muted font-light">
                  Pick a convenient time to speak directly with our team about your wedding vision, dates, and customized packages.
                </p>
              </div>

              {/* Topic Selection */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-widest text-studio-muted font-medium">
                  1. Select Discussion Topic
                </label>
                <div className="space-y-2">
                  {CALL_TOPICS.map((topic) => (
                    <div
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                        selectedTopic === topic
                          ? "bg-studio-gold/15 border-studio-gold text-studio-ivory font-medium"
                          : "bg-studio-bg border-studio-border text-studio-muted hover:border-studio-border/80"
                      }`}
                    >
                      <span>{topic}</span>
                      {selectedTopic === topic && <Sparkles className="w-3.5 h-3.5 text-studio-gold" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-widest text-studio-muted font-medium">
                  2. Choose Consultation Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {dates.map((d) => {
                    const isSelected = selectedDate === d.fullString;
                    return (
                      <button
                        type="button"
                        key={d.fullString}
                        onClick={() => setSelectedDate(d.fullString)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          isSelected
                            ? "bg-studio-gold text-studio-bg border-studio-gold font-semibold shadow-md"
                            : "bg-studio-bg border-studio-border text-studio-muted hover:border-studio-gold/40"
                        }`}
                      >
                        <span className="text-[10px] uppercase block opacity-80">{d.dayName}</span>
                        <span className="text-base font-serif font-bold block leading-tight">{d.dateNum}</span>
                        <span className="text-[9px] uppercase block opacity-70">{d.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-widest text-studio-muted font-medium">
                  3. Select Preferred Time Slot
                </label>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`px-3 py-2 rounded-lg border text-xs flex items-center gap-1.5 transition-all ${
                          isSelected
                            ? "bg-studio-gold/20 border-studio-gold text-studio-gold font-medium"
                            : "bg-studio-bg border-studio-border text-studio-muted hover:border-studio-border/80"
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 pt-2 border-t border-studio-border">
                <label className="block text-[11px] uppercase tracking-widest text-studio-muted font-medium">
                  4. Your Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-3.5 h-3.5 absolute left-3 top-3.5 text-studio-muted" />
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-studio-bg border border-studio-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-studio-ivory focus:outline-none focus:border-studio-gold"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 absolute left-3 top-3.5 text-studio-muted" />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp / Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-studio-bg border border-studio-border rounded-xl pl-9 pr-3 py-2.5 text-xs text-studio-ivory focus:outline-none focus:border-studio-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Reserving Slot...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Call Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-studio-gold font-medium">Slot Reserved!</span>
                <h3 className="font-serif text-2xl text-studio-ivory font-medium">Consultation Scheduled</h3>
                <p className="text-xs text-studio-muted max-w-sm mx-auto font-light">
                  We look forward to speaking with you on <strong className="text-studio-gold">{selectedDate}</strong> at <strong className="text-studio-gold">{selectedTime}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-studio-bg border border-studio-border text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <p className="text-studio-ivory"><strong>Topic:</strong> {selectedTopic}</p>
                <p className="text-studio-ivory"><strong>Client Name:</strong> {name}</p>
                <p className="text-studio-muted text-[11px]">Invite & details will be sent to <strong>{phone}</strong>.</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-studio-border text-studio-muted text-xs uppercase tracking-wider hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

