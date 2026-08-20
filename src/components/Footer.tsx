import Link from "next/link";
import { BRAND_INFO } from "@/data/content";
import { MapPin, Phone, Instagram, Youtube, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-studio-border bg-studio-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div className="space-y-4">
          <div>
            <div className="font-serif text-2xl sm:text-3xl tracking-[0.04em] text-studio-ivory font-medium">
              chennaifemale<span className="text-studio-gold font-light">_photographer</span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-studio-gold font-medium mt-1">
              Madhumitha K • {BRAND_INFO.heroTagline}
            </p>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-studio-muted font-light">
            {BRAND_INFO.footer.subtext}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.28em] text-studio-gold font-semibold">
            Explore
          </h3>
          <div className="space-y-2.5 text-xs text-studio-muted">
            <Link href="/" className="block hover:text-studio-gold transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="block hover:text-studio-gold transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="block hover:text-studio-gold transition-colors">
              Services
            </Link>
            <Link href="/inquire" className="block hover:text-studio-gold transition-colors">
              Book Your Shoot
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.28em] text-studio-gold font-semibold">
            Contact & Location
          </h3>
          <div className="space-y-3 text-xs text-studio-muted font-light">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-studio-gold flex-shrink-0 mt-0.5" />
              <a
                href={BRAND_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-studio-gold transition-colors inline-flex items-center gap-1"
              >
                <span>{BRAND_INFO.contact.address}</span>
                <ExternalLink className="w-3 h-3 text-studio-gold" />
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-studio-gold flex-shrink-0" />
              <a
                href={`tel:${BRAND_INFO.contact.phoneRaw}`}
                className="hover:text-studio-gold transition-colors font-medium text-studio-ivory"
              >
                {BRAND_INFO.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Instagram className="w-4 h-4 text-studio-gold flex-shrink-0" />
              <a
                href={BRAND_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-studio-gold transition-colors font-medium text-studio-gold"
              >
                {BRAND_INFO.contact.instagram}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Youtube className="w-4 h-4 text-red-500 flex-shrink-0" />
              <a
                href={BRAND_INFO.contact.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-studio-gold transition-colors font-medium text-studio-ivory"
              >
                Watch Films on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-studio-border/80 bg-studio-bg/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-[10px] uppercase tracking-[0.22em] text-studio-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} chennaifemale_photographer (Madhumitha K). All rights reserved.</span>
          <span>{BRAND_INFO.heroTagline}</span>
        </div>
      </div>
    </footer>
  );
}
