import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Studio One Productions | Bangalore Wedding Photographer & Cinematic Films",
  description: "Crafting timeless love stories, one frame at a time. Luxury wedding and destination photography based in Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} bg-studio-bg text-studio-ivory font-sans antialiased selection:bg-studio-gold/30 selection:text-white flex flex-col min-h-screen pb-14 sm:pb-0`}>
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <FloatingWhatsApp />
        <ExitIntentPopup />
      </body>
    </html>
  );
}