import Link from "next/link";
import Image from "next/image";
import { BRAND_INFO } from "@/data/content";
import { MapPin, Phone, MessageCircle, ExternalLink, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-studio-border bg-studio-card/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_1.1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-studio-gold/50 bg-black p-1 shadow-md shadow-studio-gold/15">
              <Image
                src="/images/logo.png"
                alt={`${BRAND_INFO.name} Logo`}
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl tracking-[0.03em] text-studio-ivory font-medium">
                Punith&apos;s <span className="text-studio-gold font-light">Creative Studio</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-studio-gold font-medium mt-0.5">
                {BRAND_INFO.tagline}
              </p>
            </div>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-studio-muted font-light">
            {BRAND_INFO.footer.subtext}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={BRAND_INFO.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-studio-border bg-studio-bg text-studio-muted hover:text-studio-gold hover:border-studio-gold transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.contact.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-studio-border bg-studio-bg text-studio-muted hover:text-studio-gold hover:border-studio-gold transition-colors"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-studio-border bg-studio-bg text-studio-muted hover:text-studio-gold hover:border-studio-gold transition-colors"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.contact.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full border border-studio-border bg-studio-bg text-[10px] uppercase tracking-wider text-studio-muted hover:text-studio-gold hover:border-studio-gold transition-colors inline-flex items-center gap-1"
            >
              <span>External Portfolio</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.28em] text-studio-gold font-semibold">
            Navigation
          </h3>
          <div className="space-y-2.5 text-xs text-studio-muted">
            <Link href="/" className="block hover:text-studio-gold transition-colors">
              Home
            </Link>
            <Link href="/#about" className="block hover:text-studio-gold transition-colors">
              About Studio
            </Link>
            <Link href="/services" className="block hover:text-studio-gold transition-colors">
              Services & Specialties
            </Link>
            <Link href="/portfolio" className="block hover:text-studio-gold transition-colors">
              Portfolio Gallery
            </Link>
            <Link href="/#weddings" className="block hover:text-studio-gold transition-colors">
              Weddings Section
            </Link>
            <Link href="/inquire" className="block hover:text-studio-gold transition-colors">
              Book a Shoot / Contact
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.28em] text-studio-gold font-semibold">
            Contact & Studio Location
          </h3>
          <div className="space-y-3 text-xs text-studio-muted font-light">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-studio-gold flex-shrink-0 mt-0.5" />
              <a
                href={BRAND_INFO.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-studio-gold transition-colors inline-flex items-start gap-1"
              >
                <span>{BRAND_INFO.contact.address}</span>
                <ExternalLink className="w-3 h-3 text-studio-gold flex-shrink-0 mt-0.5" />
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-studio-gold flex-shrink-0" />
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${BRAND_INFO.contact.phoneRaw}`}
                  className="hover:text-studio-gold transition-colors font-medium text-studio-ivory"
                >
                  {BRAND_INFO.contact.phone}
                </a>
                <span className="text-studio-border">|</span>
                <a
                  href={`tel:${BRAND_INFO.contact.secondaryPhoneRaw}`}
                  className="hover:text-studio-gold transition-colors text-studio-muted"
                >
                  {BRAND_INFO.contact.secondaryPhone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <a
                href={BRAND_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-studio-gold transition-colors font-medium text-emerald-400"
              >
                WhatsApp Us ({BRAND_INFO.contact.phone})
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-studio-border/80 bg-studio-bg/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-[10px] uppercase tracking-[0.22em] text-studio-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</span>
          <span>{BRAND_INFO.contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
