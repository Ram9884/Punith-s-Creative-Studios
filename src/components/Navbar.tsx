"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Menu, X, Camera } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";
import { BRAND_INFO } from "@/data/content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/inquire", label: "Contact" },
];

export function Navbar() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-studio-border/80 bg-studio-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Sri Balaji Studios & Frames home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-studio-gold/60 bg-studio-card text-studio-gold shadow-lg shadow-studio-gold/15">
              <Camera className="w-5 h-5" />
            </div>
            <div className="leading-none">
              <div className="font-serif text-lg sm:text-xl tracking-[0.04em] text-studio-ivory font-medium">
                Sri Balaji <span className="text-studio-gold font-light">Studios & Frames</span>
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-studio-gold font-medium">
                Neelankarai, Chennai • Est. 1991
              </div>
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

          {/* Right Action: Book a Session Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setConsultationOpen(true)}
              className="rounded-full border border-studio-gold bg-studio-gold text-studio-bg hover:brightness-110 px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-studio-gold/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Session</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={() => setConsultationOpen(true)}
              className="rounded-full border border-studio-gold bg-studio-gold/15 p-2 text-studio-gold"
              aria-label="Book a Session"
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
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setConsultationOpen(true);
                }}
                className="w-full py-3 rounded-full bg-studio-gold text-studio-bg font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-studio-gold/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Session</span>
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

