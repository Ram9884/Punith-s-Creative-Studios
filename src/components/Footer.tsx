import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-studio-border bg-studio-card/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="font-serif text-3xl tracking-[0.08em] text-studio-ivory">Studio One</div>
          <p className="max-w-md text-sm leading-relaxed text-studio-muted">
            Luxury wedding photography and cinematic films for intimate celebrations, destination stories, and unforgettable family milestones.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.28em] text-studio-gold">Explore</h3>
          <div className="space-y-2 text-sm text-studio-muted">
            <Link href="/portfolio" className="block hover:text-studio-gold">Portfolio</Link>
            <Link href="/services" className="block hover:text-studio-gold">Services</Link>
            <Link href="/inquire" className="block hover:text-studio-gold">Inquire</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.28em] text-studio-gold">Connect</h3>
          <div className="space-y-2 text-sm text-studio-muted">
            <a href="mailto:hello@studiooneproductions.com" className="block hover:text-studio-gold">hello@studiooneproductions.com</a>
            <a href="tel:+919876543210" className="block hover:text-studio-gold">+91 98765 43210</a>
            <span className="block">Bangalore, India</span>
          </div>
        </div>
      </div>

      <div className="border-t border-studio-border/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-[10px] uppercase tracking-[0.22em] text-studio-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Studio One Productions</span>
          <span>Crafting stories that last</span>
        </div>
      </div>
    </footer>
  );
}
