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
  title: "Sri Balaji Studios & Frames | Photography Studio in Neelankarai, Chennai",
  description:
    "Sri Balaji Studios & Frames, established in 1991, offers wedding, candid, portrait, maternity, newborn photography, videography, passport photos, printing, scanning and framing services in Neelankarai, Chennai.",
  keywords: [
    "Sri Balaji Studios & Frames",
    "Photography Studio Neelankarai",
    "Wedding Photography Chennai",
    "Passport photos Neelankarai",
    "Visa photos Chennai",
    "Photo scanning Neelankarai",
    "Photo framing Chennai ECR",
    "Videography Neelankarai"
  ],
  openGraph: {
    title: "Sri Balaji Studios & Frames | Photography Studio in Neelankarai, Chennai",
    description:
      "Since 1991, capturing portraits, celebrations and memories while providing professional photography, videography, passport photos, printing, scanning and framing services in Neelankarai, Chennai.",
    type: "website",
    locale: "en_IN",
    siteName: "Sri Balaji Studios & Frames",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhotographyStudio",
  "name": "Sri Balaji Studios & Frames",
  "image": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
  "telephone": "+91 98844 79061",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 4/110, Neelankarai ECR, Opposite Lenskart Opticals, Next to Indian Bank, East Coast Road",
    "addressLocality": "Neelankarai, Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600115",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.4",
    "reviewCount": "80"
  },
  "foundingDate": "1991"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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