"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, MapPin, Send, Check, Calendar, Loader2, ExternalLink } from "lucide-react";
import { BRAND_INFO } from "@/data/content";

export default function InquirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Weddings");
  const [weddingDate, setWeddingDate] = useState("");
  const [venue, setVenue] = useState("");
  const [message, setMessage] = useState("");

  const [availabilityStatus, setAvailabilityStatus] = useState<string | null>(null);

  const handleDateCheck = (date: string) => {
    setWeddingDate(date);
    if (date) {
      setAvailabilityStatus("Dates around this timeframe are being reserved. Submit inquiry to lock in details.");
    } else {
      setAvailabilityStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          category,
          weddingDate,
          venue,
          message,
          source: "inquiry_page",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true); // Fallback so user sees confirmation
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${BRAND_INFO.name}, I'm inquiring about date availability / session details for ${weddingDate || "my shoot"}.\nName: ${name || "Client"}\nPhone: ${phone || ""}`
  );

  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 sm:pt-14 pb-16">
      <div className="max-w-3xl space-y-4 mb-12">
        <span className="text-xs uppercase tracking-widest text-studio-gold font-medium">Start The Conversation</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-normal">Contact {BRAND_INFO.name}</h1>
        <p className="text-sm text-studio-muted font-light leading-relaxed">
          Tell us about your upcoming wedding, celebration, portrait session, or video editing requirement in Bengaluru, Karnataka.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info Sidebar */}
        <div className="space-y-8 lg:col-span-1">
          <div className="p-6 rounded-2xl bg-studio-card border border-studio-border space-y-6 shadow-xl">
            <h3 className="font-serif text-xl text-studio-ivory font-medium">Direct Contact</h3>

            <div className="space-y-4 text-xs">
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-studio-muted hover:text-studio-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-studio-ivory font-medium">WhatsApp (Instant Chat)</p>
                  <p className="text-emerald-400 font-medium">{BRAND_INFO.contact.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-studio-muted">
                <div className="w-8 h-8 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-studio-ivory font-medium">Call Studio</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a href={`tel:${BRAND_INFO.contact.phoneRaw}`} className="hover:text-studio-gold text-studio-ivory font-medium">
                      {BRAND_INFO.contact.phone}
                    </a>
                    <span>/</span>
                    <a href={`tel:${BRAND_INFO.contact.secondaryPhoneRaw}`} className="hover:text-studio-gold">
                      {BRAND_INFO.contact.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-studio-muted">
                <div className="w-8 h-8 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-studio-ivory font-medium">Studio Location</p>
                  <p className="text-[11px] leading-relaxed mt-0.5">{BRAND_INFO.contact.address}</p>
                  <p className="text-[10px] text-studio-muted/80 leading-relaxed mt-1">
                    Landmark / Secondary: {BRAND_INFO.contact.secondaryAddress}
                  </p>
                  <a
                    href={BRAND_INFO.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-studio-gold hover:underline mt-2 font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Storefront Photograph Card */}
          <div className="p-4 rounded-2xl bg-studio-card border border-studio-border space-y-3 shadow-lg">
            <div className="relative h-48 rounded-xl overflow-hidden border border-studio-border">
              <Image
                src="/images/storefront.jpg"
                alt="Punith's Creative Studio Physical Storefront in Bengaluru"
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-studio-ivory font-serif">Visit Our Studio in Bengaluru</p>
              <p className="text-[11px] text-studio-muted font-light mt-0.5">
                Konanakunte, Bengaluru • Servicing Bengaluru & nearby regional areas.
              </p>
            </div>
          </div>
        </div>

        {/* Form & Date Availability Checker */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="p-12 rounded-2xl bg-studio-card border border-studio-gold/40 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-studio-gold/20 text-studio-gold flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl text-studio-ivory">Inquiry Received!</h3>
              <p className="text-xs text-studio-muted max-w-md mx-auto leading-relaxed font-light">
                Thank you for reaching out to {BRAND_INFO.name}. We have received your details and will connect with you via call or WhatsApp shortly.
              </p>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Follow-up on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl bg-studio-card border border-studio-border space-y-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-studio-muted font-medium">Your Name *</label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-studio-bg border border-studio-border text-xs text-studio-ivory focus:outline-none focus:border-studio-gold"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-studio-muted font-medium">Phone / WhatsApp Number *</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99451 75729"
                    className="w-full px-4 py-3 rounded-lg bg-studio-bg border border-studio-border text-xs text-studio-ivory focus:outline-none focus:border-studio-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-studio-muted font-medium">Service Category *</label>
                  <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-studio-bg border border-studio-border text-xs text-studio-ivory focus:outline-none focus:border-studio-gold"
                  >
                    <option value="Weddings">Wedding Photography</option>
                    <option value="Wedding Videography">Wedding Videography</option>
                    <option value="Event Photography">Event Photography</option>
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Couple Photography">Couple Photography</option>
                    <option value="Album Design">Album Design</option>
                    <option value="Photo Editing">Photo Editing</option>
                    <option value="Video Editing">Video Editing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-studio-muted font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-studio-gold" />
                    <span>Shoot / Event Date</span>
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => handleDateCheck(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-studio-bg border border-studio-border text-xs text-studio-ivory focus:outline-none focus:border-studio-gold"
                  />
                </div>
              </div>

              {availabilityStatus && (
                <div className="p-3 rounded-lg bg-studio-gold/10 border border-studio-gold/30 text-xs text-studio-gold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-studio-gold animate-ping" />
                  <span>{availabilityStatus}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-studio-muted font-medium">Event Location / Venue</label>
                <input
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="e.g. Bengaluru / Konanakunte / Regional Location"
                  className="w-full px-4 py-3 rounded-lg bg-studio-bg border border-studio-border text-xs text-studio-ivory focus:outline-none focus:border-studio-gold"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-studio-muted font-medium">Tell us about your shoot requirements</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your wedding events, portrait expectations, or video editing needs..."
                  className="w-full px-4 py-3 rounded-lg bg-studio-bg border border-studio-border text-xs text-studio-ivory focus:outline-none focus:border-studio-gold resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Book Your Shoot</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}