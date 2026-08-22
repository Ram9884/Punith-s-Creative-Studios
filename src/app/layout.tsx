import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { ThemeProvider } from "@/context/ThemeContext";
import { BRAND_INFO } from "@/data/content";

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
  title: "Punith's Creative Studio | Photography & Videography in Bangalore",
  description:
    "Punith's Creative Studio offers professional photography and videography for weddings, events, portraits and creative studio work in Bengaluru and nearby areas.",
  keywords: [
    "Punith's Creative Studio",
    "Punith Kumar V B",
    "Photography Studio Bengaluru",
    "Wedding Photography Bangalore",
    "Wedding Videography Konanakunte",
    "Event Photography Bengaluru",
    "Portrait Photography Bangalore",
    "Couple Photography Karnataka",
  ],
  openGraph: {
    title: "Punith's Creative Studio | Photography & Videography in Bangalore",
    description:
      "Capturing emotions beyond frames. Professional photography and videography for weddings, events, portraits and creative studio work in Bengaluru, Karnataka.",
    type: "website",
    locale: "en_IN",
    siteName: "Punith's Creative Studio",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/favicon.ico",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhotographyStudio",
  "name": BRAND_INFO.name,
  "image": "https://punithscreativestudio.com/images/logo.png",
  "telephone": BRAND_INFO.contact.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "JSS School Rd, Ganapathipura, Konanakunte",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560078",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "30"
  },
  "priceRange": "$$",
  "url": BRAND_INFO.contact.whatsappUrl
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
        className={`${fraunces.variable} ${inter.variable} bg-[#050505] text-[#f5f1ea] font-sans antialiased selection:bg-studio-gold/30 selection:text-white flex flex-col min-h-screen pb-14 sm:pb-0`}
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