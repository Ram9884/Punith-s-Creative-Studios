import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/content";
import { Quote, Star } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-studio-card/30 border-y border-studio-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold text-[10px] uppercase tracking-widest font-semibold">
            <Star className="w-3 h-3 fill-current" />
            <span>4.4★ Rated on Google (86 Reviews)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-studio-ivory">
            Kind Words From Our Couples
          </h2>
          <p className="text-xs sm:text-sm text-studio-muted font-light leading-relaxed">
            Real experiences shared by couples who trusted CLIQ Photography with their special day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-studio-bg border border-studio-border space-y-6 flex flex-col justify-between hover:border-studio-gold/40 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-6 h-6 text-studio-gold/60" />
                  <div className="flex items-center gap-1 text-studio-gold">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-serif text-lg text-studio-ivory leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-studio-border/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-studio-gold/40">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-studio-ivory font-semibold">{t.author}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-studio-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};