import React from "react";
import { EXPERIENCE_STEPS } from "@/data/content";

export const ExperienceSection = () => {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase tracking-widest text-studio-gold">The Journey</span>
        <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">The Studio One Experience</h2>
        <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
          How we make your photographic journey effortless, warm, and completely stress-free from the first hello to delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {EXPERIENCE_STEPS.map((step) => (
          <div
            key={step.step}
            className="relative p-8 rounded-2xl bg-studio-card/50 border border-studio-border space-y-4 hover:border-studio-gold/40 transition-all group"
          >
            <span className="font-mono text-3xl text-studio-gold/40 group-hover:text-studio-gold transition-colors block">
              {step.step}
            </span>
            <div>
              <h3 className="font-serif text-2xl text-studio-ivory">{step.title}</h3>
              <p className="text-[11px] uppercase tracking-widest text-studio-gold mt-0.5">{step.subtitle}</p>
            </div>
            <p className="text-xs text-studio-muted font-light leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};