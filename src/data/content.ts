import {
  PortfolioItem,
  ServiceItem,
  TestimonialItem,
  ExperienceStep,
} from "@/types";

export const BRAND_INFO = {
  name: "Sri Balaji Studios & Frames",
  handle: "@sribalaji_studios",
  photographerName: "Sri Balaji Studios & Frames",
  heroTagline: "Three Decades of Stories, Framed Forever.",
  heroDescription:
    "Since 1991, Sri Balaji Studios & Frames has been capturing portraits, celebrations and memories while providing professional photography, videography, printing and framing services in Neelankarai, Chennai.",
  positioning: "Photography Studio • Est. 1991",
  heroCTA: {
    primary: "Explore Our Work",
    secondary: "Book a Session",
  },
  about: {
    heading: "Three Decades of Stories, Framed Forever",
    description:
      "Sri Balaji Studios & Frames has been serving customers in Neelankarai, Chennai since 1991. Over the years, the studio has evolved with modern photography and videography while continuing to provide dependable studio and photo services for individuals, families and celebrations.",
  },
  contact: {
    location: "Neelankarai, Chennai",
    address:
      "Shop No. 4/110, Neelankarai ECR, Opposite Lenskart Opticals, Next to Indian Bank, East Coast Road, Neelankarai, Chennai – 600115, Tamil Nadu, India",
    phone: "+91 98844 79061",
    phoneRaw: "+919884479061",
    whatsappNumber: "919884479061",
    instagram: "Sri Balaji Studios & Frames",
    instagramUrl: "https://wa.me/919884479061",
    youtubeUrl: "https://wa.me/919884479061",
    youtubeShortUrl: "https://wa.me/919884479061",
    googleMapsUrl:
      "https://maps.google.com/?q=Sri+Balaji+Studios+%26+Frames+Neelankarai+Chennai",
  },
  footer: {
    brandName: "Sri Balaji Studios & Frames",
    photographer: "Sri Balaji Studios & Frames",
    tagline: "Photography • Videography • Printing • Scanning • Frames",
    subtext:
      "Sri Balaji Studios & Frames | Professional photography, videography, passport/visa photos, printing, scanning & custom frames in Neelankarai, Chennai since 1991.",
  },
};

const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 1991;

export const STATS = [
  { value: "1991", label: "Established" },
  { value: `${yearsOfExperience}+`, label: "Years of Experience" },
  { value: "4.4★", label: "Google Rating" },
  { value: "80+", label: "Google Reviews" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Weddings",
    title: "Grand Tamil Wedding Celebration",
    location: "Neelankarai, Chennai",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Comprehensive wedding photography capturing authentic mandap rituals, silk nuances, and joyful family celebrations.",
    quote:
      "Sri Balaji Studios & Frames captured our wedding beautifully. Every emotion and ritual was preserved with care.",
    couple: "Ananya & Siddharth",
  },
  {
    id: 2,
    category: "Candid",
    title: "Spontaneous Celebration Moments",
    location: "ECR Seaside Venue, Chennai",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    description:
      "Unscripted candid photography documenting natural smiles and organic joy throughout the festivities.",
    quote: "The candid photos felt so natural and filled with life.",
    couple: "Ritika & Rohan",
  },
  {
    id: 3,
    category: "Portraits",
    title: "Classic Indoor Studio Portraiture",
    location: "Sri Balaji Studio, Neelankarai",
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "Professional studio portraits with refined lighting and high-clarity finishing.",
    quote: "Superb studio & Quality's are best.",
    couple: "Individual Portrait Client",
  },
  {
    id: 4,
    category: "Maternity",
    title: "Maternity & Motherhood Portraits",
    location: "Mahabalipuram Coastal Sunrise",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description:
      "Beautiful maternity portraits designed to preserve this special stage of life.",
    quote: "Gentle and patient studio session. The final prints look stunning in our home.",
    couple: "Kavya S.",
  },
  {
    id: 5,
    category: "Newborn",
    title: "Newborn & Milestone Memories",
    location: "Sri Balaji Studio, Neelankarai",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Gentle and memorable photography for newborns and growing families.",
    quote: "Carefully handled and captured baby expressions beautifully.",
    couple: "Deepika & Ashwin",
  },
  {
    id: 6,
    category: "Photo Frames",
    title: "Custom Heirloom Wood & Acrylic Framing",
    location: "Sri Balaji Frames Workshop",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
    description:
      "Turn your favorite photographs into durable, elegantly framed wall art and desktop displays.",
    quote: "Superb framing quality and fast delivery. Very satisfied!",
    couple: "Framing Client",
  },
];

export const WEDDING_FILMS = [
  {
    id: "film-1",
    title: "Wedding Stories — Celebration Highlight",
    location: "Neelankarai, Chennai",
    duration: "4K Film",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "From intimate moments to grand celebrations, preserve the emotions, people and memories that make your wedding unforgettable.",
  },
  {
    id: "film-2",
    title: "Celebration & Reception Coverage",
    location: "ECR Beachfront Venue, Chennai",
    duration: "Full HD Video",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    description:
      "Professional videography documenting grand stage entries, musical events, and family gatherings.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography 📸",
    tagline: "Capture important moments, emotions & celebrations.",
    description:
      "Capture the important moments, emotions and celebrations of weddings with dependable photography and coverage.",
    deliverables: [
      "High-resolution color-corrected photo gallery",
      "Traditional & candid event coverage",
      "Custom wedding photo album curation",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "candid-photography",
    title: "Candid Photography ✨",
    tagline: "Natural and spontaneous moments captured effortlessly.",
    description:
      "Natural and spontaneous moments captured throughout your celebration without forced poses.",
    deliverables: [
      "Unscripted ceremony & reception moments",
      "High-resolution digital downloads",
      "Express selection turnaround",
    ],
    categoryFilter: "Candid",
  },
  {
    id: "portrait-photography",
    title: "Portrait Photography 👤",
    tagline: "Professional portraits for individuals & families.",
    description:
      "Professional portraits for individuals, families and special occasions in controlled studio lighting or scenic outdoor settings.",
    deliverables: [
      "Controlled studio studio lighting setup",
      "High-definition retouching & color grade",
      "Ready-to-print digital files",
    ],
    categoryFilter: "Portraits",
  },
  {
    id: "maternity-photography",
    title: "Maternity Photography 🤰",
    tagline: "Preserve life's most meaningful beginnings.",
    description:
      "Beautiful maternity portraits designed to preserve this special stage of life with comfort and elegance.",
    deliverables: [
      "Comfortable indoor studio or outdoor shoot",
      "Family & partner portrait inclusion",
      "Custom photo print options",
    ],
    categoryFilter: "Maternity",
  },
  {
    id: "newborn-photography",
    title: "Newborn Photography 👶",
    tagline: "Gentle and memorable photography for newborns.",
    description:
      "Gentle and memorable photography for newborns and growing families in a safe, peaceful environment.",
    deliverables: [
      "Warm & comfortable studio environment",
      "Gentle child-first session pacing",
      "High-resolution memory archive",
    ],
    categoryFilter: "Newborn",
  },
  {
    id: "studio-photography",
    title: "Studio Photography 🏢",
    tagline: "Professional indoor photography.",
    description:
      "Professional indoor photography for portraits, family photos, corporate profiles, and special requirements.",
    deliverables: [
      "State-of-the-art studio background options",
      "Instant review and selection",
      "Same-day or fast digital delivery",
    ],
    categoryFilter: "Studio",
  },
  {
    id: "videography",
    title: "Videography 🎬",
    tagline: "Professional video coverage for events.",
    description:
      "Professional video coverage for weddings, celebrations, corporate functions and special occasions.",
    deliverables: [
      "High-definition / 4K event recording",
      "Edited highlight reel & ceremony footage",
      "Digital delivery via drive or USB",
    ],
    categoryFilter: "Celebrations",
  },
  {
    id: "passport-visa-photos",
    title: "Passport & Visa Photos 🛂",
    tagline: "Quick professional passport and visa photographs.",
    description:
      "Quick professional passport and visa photographs adhering strictly to government and international embassy specifications.",
    deliverables: [
      "Biometric compliance for all countries",
      "Quick turnaround within 30 minutes",
      "Printed photo sheet + digital copy",
    ],
    categoryFilter: "Quick Photo Services",
  },
  {
    id: "photo-printing-scanning",
    title: "Photo Printing & Scanning 🖨️",
    tagline: "High-quality prints & digital restoration.",
    description:
      "Photo printing, high-resolution scanning, photo enlargement, and digital restoration studio services.",
    deliverables: [
      "Glossy, matte & luster photo papers",
      "High-resolution archival scanning",
      "Old photo digitizing & scratch repair",
    ],
    categoryFilter: "Quick Photo Services",
  },
  {
    id: "photo-frames",
    title: "Photo Frames 🖼️",
    tagline: "Preserve photographs with professional framing options.",
    description:
      "Preserve photographs with professional framing options, custom border mats, and durable wall mounts.",
    deliverables: [
      "Wide selection of wooden & modern frames",
      "Glass & acrylic protective face options",
      "Custom sizing & tabletop mounts",
    ],
    categoryFilter: "Photo Frames",
  },
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: "01",
    title: "Visit or Call Us",
    subtitle: "Inquire & Studio Visit",
    description:
      "Visit our studio at Neelankarai ECR or call +91 98844 79061 to discuss your requirements.",
  },
  {
    step: "02",
    title: "Plan Your Session",
    subtitle: "Schedule & Requirements",
    description:
      "We help choose the right service — whether it is event photography, studio portraits, visa photos, or framing.",
  },
  {
    step: "03",
    title: "Capture & Create",
    subtitle: "Professional Execution",
    description:
      "Our team provides patient studio sessions, quick photo processing, or comprehensive event coverage.",
  },
  {
    step: "04",
    title: "Deliver & Frame",
    subtitle: "Prints, Films & Frames",
    description:
      "Receive high-clarity photos, edited videos, quick prints, or beautifully framed heirloom memories.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Went for passport/visa photos got done within 30 minutes.",
    author: "Satisfied Customer",
    event: "Passport & Visa Photo Service",
    location: "Neelankarai, Chennai",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Superb studio & Quality's are best.",
    author: "Local Resident",
    event: "Studio Photography & Framing",
    location: "Neelankarai, Chennai",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "I visited for passport scan and visa photo. good service they provide.",
    author: "Verified Reviewer",
    event: "Photo Scanning & Visa Photos",
    location: "Neelankarai, Chennai",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
  },
];

export const SOCIAL_MOMENTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    type: "photo",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    type: "reel",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    type: "photo",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=600&auto=format&fit=crop",
    type: "photo",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    type: "photo",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    type: "photo",
  },
];

export const CALCULATOR_SERVICES = [
  {
    id: "wedding_coverage",
    name: "Wedding Photography & Video Coverage",
    price: 45000,
    category: "Wedding",
  },
  {
    id: "candid_photography",
    name: "Candid Celebration Photography",
    price: 25000,
    category: "Candid",
  },
  {
    id: "portrait_studio",
    name: "Indoor Studio Family / Individual Portrait",
    price: 5000,
    category: "Studio",
  },
  {
    id: "maternity_newborn",
    name: "Maternity / Newborn Photography Session",
    price: 15000,
    category: "Maternity",
  },
  {
    id: "passport_visa",
    name: "Passport & Visa Photos (Instant Print Set)",
    price: 250,
    category: "Studio Service",
  },
  {
    id: "custom_framing",
    name: "Custom Photo Framing & Enlargement Print",
    price: 3500,
    category: "Framing",
  },
];
