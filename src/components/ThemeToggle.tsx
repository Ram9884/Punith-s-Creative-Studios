"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-studio-border bg-studio-card/90 text-studio-ivory hover:border-studio-gold/60 hover:text-studio-gold hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer ${className}`}
      aria-label={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      <div className="relative w-4 h-4 pointer-events-none">
        <Sun
          className={`absolute inset-0 w-4 h-4 transition-all duration-500 transform ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 text-amber-600"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-4 h-4 transition-all duration-500 transform ${
            isDark ? "rotate-0 scale-100 opacity-100 text-studio-gold" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}

