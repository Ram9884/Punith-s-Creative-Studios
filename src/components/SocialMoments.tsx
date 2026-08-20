import React from "react";
import Image from "next/image";
import { Instagram, Film, ArrowRight, Sparkles } from "lucide-react";
import { SOCIAL_MOMENTS, BRAND_INFO } from "@/data/content";

export const SocialMoments = () => {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6">
      {/* Instagram Profile Card Header */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-studio-card/80 border border-studio-border/80 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Avatar & Profile Identity */}
          <div className="flex items-center gap-4">
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative border-2 border-studio-bg bg-studio-bg flex items-center justify-center">
                <span className="font-serif font-bold text-lg sm:text-xl text-studio-gold">PPS</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-sm sm:text-base font-semibold text-studio-ivory">
                  {BRAND_INFO.contact.instagram}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-studio-gold/10 border border-studio-gold/30 text-studio-gold text-[10px] font-medium uppercase tracking-wider">
                  Official
                </span>
              </div>
              <p className="font-serif text-base sm:text-lg text-studio-gold">
                {BRAND_INFO.contact.instagramTitle}
              </p>
              <p className="text-xs text-studio-muted font-light">
                {BRAND_INFO.contact.instagramCategory}
              </p>
            </div>
          </div>

          {/* Followers Stats Bar */}
          <div className="flex items-center gap-6 py-2 px-5 rounded-2xl bg-studio-bg border border-studio-border text-center self-stretch md:self-auto justify-around">
            <div>
              <p className="font-serif text-lg sm:text-xl font-bold text-studio-ivory">{BRAND_INFO.contact.instagramPosts}</p>
              <p className="text-[10px] uppercase tracking-wider text-studio-muted font-medium">Posts</p>
            </div>
            <div className="w-px h-8 bg-studio-border" />
            <div>
              <p className="font-serif text-lg sm:text-xl font-bold text-studio-gold">{BRAND_INFO.contact.instagramFollowers}</p>
              <p className="text-[10px] uppercase tracking-wider text-studio-muted font-medium">Followers</p>
            </div>
            <div className="w-px h-8 bg-studio-border" />
            <div>
              <p className="font-serif text-lg sm:text-xl font-bold text-studio-ivory">{BRAND_INFO.contact.instagramFollowing}</p>
              <p className="text-[10px] uppercase tracking-wider text-studio-muted font-medium">Following</p>
            </div>
          </div>

          {/* Follow CTA */}
          <a
            href={BRAND_INFO.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 via-purple-600 to-amber-600 text-white font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bio Tagline */}
        <div className="pt-4 border-t border-studio-border/60 flex items-center gap-2 text-xs text-studio-ivory/90 font-light italic">
          <Sparkles className="w-4 h-4 text-studio-gold flex-shrink-0" />
          <span>"{BRAND_INFO.contact.instagramBio}"</span>
        </div>
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
              alt="Photophactory Studios Social Moment"
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