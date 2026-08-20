import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/content";
import { BudgetCalculator } from "@/components/BudgetCalculator";

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 sm:pt-14 pb-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-studio-gold">What Can You Hire Us For</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-normal">Services & Offerings</h1>
        <p className="text-sm text-studio-muted font-light leading-relaxed">
          We specialize in Weddings, Pre-Weddings, Cultural & Corporate Events, Commercial Photography, and Video Production Services. Every package is tailored to match the scale, location, and vision of your shoot or event.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-8">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className="p-8 sm:p-12 rounded-2xl bg-studio-card/60 border border-studio-border hover:border-studio-gold/40 transition-all flex flex-col md:flex-row justify-between gap-8"
          >
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-mono text-studio-gold">0{index + 1} / SERVICE</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-studio-ivory">{service.title}</h2>
              <p className="text-xs font-medium text-studio-gold uppercase tracking-wider">{service.tagline}</p>
              <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs uppercase tracking-widest text-studio-ivory font-semibold">What is included:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-studio-muted">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-studio-gold flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3 min-w-[200px]">
              <Link
                href={`/portfolio?category=${encodeURIComponent(service.categoryFilter)}`}
                className="w-full py-3 rounded-full border border-studio-border text-xs uppercase tracking-widest text-center hover:border-studio-gold hover:text-studio-gold transition-colors"
              >
                View Work →
              </Link>
              <Link
                href="/inquire"
                className="w-full py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest text-center hover:brightness-110 transition-all"
              >
                Inquire →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Package Calculator */}
      <BudgetCalculator />
    </main>
  );
}