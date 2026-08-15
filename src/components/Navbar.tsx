"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/inquire", label: "Inquire" },
];

export function Navbar() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-studio-border/80 bg-studio-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Studio One Productions home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-studio-gold/50 bg-studio-card text-sm font-semibold tracking-[0.2em] text-studio-gold shadow-lg shadow-studio-gold/10">
              S1
            </div>
            <div className="leading-none">
              <div className="font-serif text-2xl tracking-[0.08em] text-studio-ivory">Studio One</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-studio-muted">Productions</div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.28em] text-studio-muted transition-colors hover:text-studio-gold font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action: Schedule Consultation Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setConsultationOpen(true)}
              className="rounded-full border border-studio-gold/60 bg-studio-gold/10 hover:bg-studio-gold px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-studio-gold hover:text-studio-bg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-studio-gold/10 hover:shadow-studio-gold/20 font-semibold"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setConsultationOpen(true)}
              className="rounded-full border border-studio-gold/60 bg-studio-gold/10 p-2 text-studio-gold"
              aria-label="Book Consultation"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-studio-ivory rounded-lg border border-studio-border bg-studio-card"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-studio-border bg-studio-card/95 backdrop-blur-xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] text-studio-ivory hover:text-studio-gold py-2 border-b border-studio-border/40 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationOpen(true);
                }}
                className="w-full py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 15-Min Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
