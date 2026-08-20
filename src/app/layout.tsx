import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { ThemeProvider } from "@/context/ThemeContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Photophactory Studios | Weddings, Events & Commercial Production | Surat",
  description:
    "Photophactory Studios specializes in Weddings, Pre-Weddings, Cultural & Corporate Events, Commercial Photography, and Video Production Services in Vesu, Surat.",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} bg-[#0a0a0a] text-[#f5f1ea] font-sans antialiased selection:bg-[#d4a574]/30 selection:text-white flex flex-col min-h-screen pb-14 sm:pb-0`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
          <FloatingWhatsApp />
          <ExitIntentPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
