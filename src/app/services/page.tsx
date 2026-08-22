import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { SERVICES, BRAND_INFO } from "@/data/content";
import { BudgetCalculator } from "@/components/BudgetCalculator";

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 sm:pt-14 pb-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-studio-gold font-medium">What We Capture</span>
        <h1 className="font-serif text-4xl sm:text-6xl font-normal">Services & Craft</h1>
        <p className="text-sm text-studio-muted font-light leading-relaxed">
          From wedding ceremonies, videography, and event coverage to studio portraits, album design, photo editing, and video editing — {BRAND_INFO.name} offers comprehensive visual services in Bengaluru, Karnataka.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-8">
        {SERVICES.map((service, index) => {
          const serviceWhatsappMsg = encodeURIComponent(
            `Hello ${BRAND_INFO.name}, I am interested in inquiring about ${service.title}. Please share availability and details!`
          );

          return (
            <div
              key={service.id}
              className="p-8 sm:p-12 rounded-2xl bg-studio-card/60 border border-studio-border hover:border-studio-gold/40 transition-all flex flex-col md:flex-row justify-between gap-8 shadow-xl"
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

              <div className="flex flex-col justify-end gap-3 min-w-[220px]">
                <a
                  href={`https://wa.me/${BRAND_INFO.contact.whatsappNumber}?text=${serviceWhatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </a>
                <Link
                  href={`/portfolio?category=${encodeURIComponent(service.categoryFilter)}`}
                  className="w-full py-3 rounded-full border border-studio-border text-xs uppercase tracking-widest text-center hover:border-studio-gold hover:text-studio-gold transition-colors flex items-center justify-center gap-1.5 text-studio-muted font-medium"
                >
                  <span>View Category Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-studio-gold" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Custom Shoot Calculator */}
      <BudgetCalculator />
    </main>
  );
}