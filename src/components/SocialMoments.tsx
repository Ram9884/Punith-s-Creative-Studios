import React from "react";
import Image from "next/image";
import { Instagram, Film, ArrowRight } from "lucide-react";
import { SOCIAL_MOMENTS, BRAND_INFO } from "@/data/content";

export const SocialMoments = () => {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-studio-gold block mb-1 font-medium">
            Behind The Frame
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-studio-ivory">
            Moments on Instagram
          </h2>
        </div>
        <a
          href={BRAND_INFO.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest text-studio-gold hover:underline inline-flex items-center gap-1.5 font-medium"
        >
          <Instagram className="w-4 h-4" />
          <span>Follow {BRAND_INFO.contact.instagram}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {SOCIAL_MOMENTS.map((moment) => (
          <a
            key={moment.id}
            href={BRAND_INFO.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-48 rounded-xl overflow-hidden bg-studio-card border border-studio-border hover:border-studio-gold/40 transition-colors"
          >
            <Image
              src={moment.image}
              alt={`${BRAND_INFO.name} Social Moment`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {moment.type === "reel" ? (
                <Film className="w-5 h-5 text-studio-gold" />
              ) : (
                <Instagram className="w-5 h-5 text-studio-ivory" />
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};