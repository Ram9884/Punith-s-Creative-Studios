import {
  PortfolioItem,
  ServiceItem,
  TestimonialItem,
  ExperienceStep,
} from "@/types";

export const BRAND_INFO = {
  name: "CLIQ Photography",
  heroTagline: "Framing Love in Every Cliq",
  heroDescription:
    "Premium wedding photography and videography capturing candid moments and timeless stories from your special day.",
  positioning: "Premium Wedding Filmer",
  heroCTA: {
    primary: "Book Your Shoot",
    secondary: "Explore Our Stories",
  },
  about: {
    heading: "Your Story. Our Cliq.",
    description:
      "We believe the most beautiful wedding memories are found in the little moments — a smile, a glance, a tear, or a celebration shared with the people you love. CLIQ Photography captures those authentic moments through timeless photography and cinematic films.",
  },
  contact: {
    location: "Chetpet, Chennai, Tamil Nadu",
    address:
      "New No. 4, Old No. 47, 3rd Floor, SK Enclave, Nowroji Road, Chetpet, Chennai, Tamil Nadu 600031",
    phone: "+91 98403 18800",
    phoneRaw: "9840318800",
    whatsappNumber: "919840318800",
    instagram: "@cliqphotography_",
    instagramUrl: "https://instagram.com/cliqphotography_",
  },
  footer: {
    brandName: "CLIQ Photography",
    tagline: "Framing Love in Every Cliq",
    subtext:
      "Premium Wedding Photography & Videography | Candid Moments | Pre & Post Wedding",
  },
};

export const STATS = [
  { value: "24.8K+", label: "Instagram Followers" },
  { value: "1,600+", label: "Posts" },
  { value: "4.4★", label: "Google Rating" },
  { value: "86", label: "Google Reviews" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Weddings",
    title: "Ananya & Siddharth",
    location: "Chetpet & ECR Estates, Chennai",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    description:
      "A rich South Indian traditional wedding framed with heritage silk nuances, candid laughter, and authentic ritual warmth.",
    quote:
      "Looking through our wedding photos felt like reliving every candid emotion of the day.",
    couple: "Ananya & Siddharth",
  },
  {
    id: 2,
    category: "Pre-Weddings",
    title: "Ritika & Rohan",
    location: "Mahabalipuram Coastal Shores",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description:
      "Golden hour romance captured against heritage temple carvings and ocean waves along the Coromandel coast.",
    quote: "They made us feel completely relaxed and natural in front of the lens.",
    couple: "Ritika & Rohan",
  },
  {
    id: 3,
    category: "Post-Weddings",
    title: "Sanjana & Vikram",
    location: "Pondicherry Heritage French Quarter",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    description:
      "Post-wedding cinematic couple portraits captured amidst pastel colonial lanes and quiet coastal breeze.",
    quote: "The frames captured our quiet moments in the most magical, timeless way.",
    couple: "Sanjana & Vikram",
  },
  {
    id: 4,
    category: "Bridal",
    title: "Kavya's Royal Bridal Elegance",
    location: "The Leela Palace, Chennai",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Editorial bridal portraiture emphasizing fine jewelry details, traditional silk drape, and serene poise.",
    quote: "Every detail of my bridal look was documented with such artistic grace.",
    couple: "Kavya S.",
  },
  {
    id: 5,
    category: "Couples",
    title: "Nikhil & Divya",
    location: "Besant Nagar Beach & Promenade",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sunset couple session filled with organic smiles, wind-blown hair, and relaxed togetherness.",
    couple: "Nikhil & Divya",
  },
  {
    id: 6,
    category: "Events",
    title: "Sangeet & Reception Celebration",
    location: "ITC Grand Chola, Chennai",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-energy sangeet performances and glamorous reception evening documentation with candid guest moments.",
    couple: "Nandini & Karan",
  },
];

export const WEDDING_FILMS = [
  {
    id: "film-1",
    title: "Eternal Vows — Ananya & Siddharth",
    location: "Chennai Heritage Mandap",
    duration: "3:45 Film",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "A cinematic motion film scored with soul-stirring classical strings and emotional vows.",
  },
  {
    id: "film-2",
    title: "Coastal Sunset Promises — Sneha & Vivek",
    location: "ECR Beachfront Resort, Chennai",
    duration: "2:30 Reel",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    description:
      "Vibrant coastal wedding teaser highlighting joyous sangeet dance movements and golden hour pheras.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography 📸",
    tagline: "Comprehensive documentary & editorial wedding photo coverage.",
    description:
      "Full-day coverage capturing traditional mandap rituals, unscripted emotions, family interactions, and high-resolution heirloom portraits.",
    deliverables: [
      "High-resolution color-graded photo gallery",
      "Online private proofing portal",
      "Fine-art handcrafted album curation",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "wedding-videography",
    title: "Wedding Videography 🎬",
    tagline: "Cinematic films, teasers, and full ceremony recordings.",
    description:
      "Cinematic motion pictures scored with custom sound design and narrative pacing that bring your wedding atmosphere to life.",
    deliverables: [
      "3-5 minute Cinematic Teaser",
      "Full Feature Documentary Wedding Film",
      "Social Media Vertical Reels (4K)",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "candid-photography",
    title: "Candid Photography 💍",
    tagline: "Authentic, unposed micro-moments of joy and emotion.",
    description:
      "Discreet photojournalism focusing on genuine smiles, heartfelt tears, stolen glances, and unscripted celebration moments.",
    deliverables: [
      "Dedicated candid lead photographer",
      "Unobtrusive documentary style",
      "Fast preview turnaround pack",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding Photography ❤️",
    tagline: "Romantic couple sessions, beach shoots & destination stories.",
    description:
      "Relaxed guided photo and film sessions at scenic coastal, heritage, or city locations before your big day.",
    deliverables: [
      "Location guidance & concept planning",
      "Multiple outfit & mood setups",
      "Save-the-date teaser graphics & photos",
    ],
    categoryFilter: "Pre-Weddings",
  },
  {
    id: "post-wedding",
    title: "Post-Wedding Photography ✨",
    tagline: "Quiet intimate portraits & creative post-ceremony sessions.",
    description:
      "Stress-free portraiture after the hectic wedding rituals, giving you space to express your love in dreamy settings.",
    deliverables: [
      "Unrushed post-ceremony shoot pacing",
      "Artistic lighting & aesthetic color grade",
      "Keepsake canvas prints",
    ],
    categoryFilter: "Post-Weddings",
  },
  {
    id: "event-photography",
    title: "Event Photography 🎉",
    tagline: "Sangeet, Haldi, Engagement & Reception celebrations.",
    description:
      "Vibrant coverage of pre-wedding ceremonies, high-energy sangeet performances, and reception galas.",
    deliverables: [
      "Guest & decor documentation",
      "Stage & dance floor high-action frames",
      "High-speed digital delivery",
    ],
    categoryFilter: "Events",
  },
  {
    id: "family-portraits",
    title: "Family Portraits 👨‍👩‍👧‍👦",
    tagline: "Heartfelt generational & group portraiture.",
    description:
      "Timeless portraits honoring elders, parents, extended families, and milestone togetherness during celebrations.",
    deliverables: [
      "Guided formal & candid family grouping",
      "Soft flattering studio & outdoor lighting",
      "High-res print-ready files",
    ],
    categoryFilter: "Couples",
  },
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: "01",
    title: "Say Hello",
    subtitle: "Inquire & Date Check",
    description:
      "Tell us about your wedding dates, venue, and vision. We verify date availability and schedule a call.",
  },
  {
    step: "02",
    title: "Let's Plan",
    subtitle: "Vision & Flow",
    description:
      "We understand your schedule, ritual timings, and key family moments to create a smooth shooting plan.",
  },
  {
    step: "03",
    title: "We Capture",
    subtitle: "Candid & Cinematic",
    description:
      "You enjoy your special day completely immersed in the moment while our team captures authentic emotions.",
  },
  {
    step: "04",
    title: "Relive It",
    subtitle: "Films & Fine Art",
    description:
      "Receive color-graded photo galleries and cinematic films that let you relive every feeling for years to come.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "CLIQ Photography captured our wedding so beautifully! The candid shots and the wedding film made our entire family relive every emotion. 4.4 stars on Google is well-deserved!",
    author: "Deepika & Ashwin",
    event: "Traditional Chennai Wedding",
    location: "Chetpet, Chennai",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "The pre-wedding shoot in Mahabalipuram was so comfortable and natural. They didn't push us into stiff poses — everything was effortless and candid.",
    author: "Ritika & Rohan",
    event: "Pre-Wedding Session",
    location: "Mahabalipuram",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "From the first consultation call to the final fine-art album, CLIQ Photography delivered sheer excellence. Highly recommend them for premium wedding coverage!",
    author: "Meera & Karthik",
    event: "Grand Reception & Wedding",
    location: "ITC Grand Chola, Chennai",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=600&auto=format&fit=crop",
    type: "reel",
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
    id: "candid_photo",
    name: "Candid Wedding Photography (Lead + Assistant)",
    price: 60000,
    category: "Photo",
  },
  {
    id: "traditional_photo",
    name: "Traditional Photography & Family Coverage",
    price: 35000,
    category: "Photo",
  },
  {
    id: "cinematic_film",
    name: "Cinematic Wedding Film & Teaser (4K)",
    price: 70000,
    category: "Film",
  },
  {
    id: "pre_wedding",
    name: "Pre-Wedding / Post-Wedding Shoot (1 Day)",
    price: 40000,
    category: "Shoot",
  },
  {
    id: "reels_pack",
    name: "Vertical Social Reels Fast-Delivery Pack (5 Reels)",
    price: 25000,
    category: "Addon",
  },
  {
    id: "luxury_album",
    name: "Handcrafted Fine-Art Leather Album",
    price: 20000,
    category: "Addon",
  },
];

