import {
  PortfolioItem,
  ServiceItem,
  TestimonialItem,
  ExperienceStep,
} from "@/types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Weddings",
    title: "Ananya & Siddharth",
    location: "Palace Grounds, Bangalore",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    description:
      "A royal South Indian traditional wedding framed with heritage gold nuances, candid laughter, and grand mandap rituals.",
    quote:
      "Looking through the photographs felt like reliving the exact warmth of that evening.",
    couple: "Ananya & Siddharth",
  },
  {
    id: 2,
    category: "Pre-Weddings",
    title: "Ritika & Rohan",
    location: "Gokarna Coastal Cliffs",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description:
      "Golden hour romance captured against rugged cliffside rocks and ocean mist along the Arabian Sea.",
    quote: "They made us feel so completely at home in front of the lens.",
    couple: "Ritika & Rohan",
  },
  {
    id: 3,
    category: "Films",
    title: "Forever Begins Now",
    location: "The Leela Palace, Chennai",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "0:45 Reel",
    description:
      "A cinematic motion teaser scored with traditional instrumentation and poignant vows.",
    couple: "Aditi & Varun",
  },
  {
    id: 4,
    category: "Family",
    title: "Pooja & Sameer's New Chapter",
    location: "Cubbon Park Green Canopy, Bangalore",
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "Gentle natural-light maternity and family session celebrating quiet intimacy.",
    quote: "No awkward posing, just pure organic moments of our family.",
    couple: "Pooja & Sameer",
  },
  {
    id: 5,
    category: "Films",
    title: "Coastal Sunset Promises",
    location: "Goa Seaside Heritage Estate",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    duration: "1:00 Reel",
    description:
      "Vibrant coastal celebration with sun-kissed pheras and ecstatic sangeet dances.",
    couple: "Sneha & Vivek",
  },
  {
    id: 6,
    category: "Events",
    title: "The Grand Sangeet & Reception",
    location: "Taj West End, Bangalore",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "Vibrant high-energy celebration packed with emotional speeches and celebratory night frames.",
    couple: "Nandini & Karan",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    tagline: "Candid + editorial wedding photography.",
    description:
      "Full-day documentary coverage that captures unstaged emotion, rich heritage rituals, and editorial portraits without interrupting your day's flow.",
    deliverables: [
      "High-res edited photo gallery",
      "Online private client proofing",
      "Fine art album curation",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "wedding-films",
    title: "Wedding Films",
    tagline: "Cinematic highlights and complete wedding films.",
    description:
      "Motion pictures scored with customized sound design and narrative pacing that bring your wedding atmosphere alive for generations.",
    deliverables: [
      "3-5 minute Cinematic Teaser",
      "Full-length Documentary Film",
      "Vertical Reels for Social",
    ],
    categoryFilter: "Films",
  },
  {
    id: "pre-wedding",
    title: "Pre-Weddings",
    tagline: "Couple portraits, destination shoots and cinematic sessions.",
    description:
      "A relaxed, guided photo and film experience at your favorite destination or serene landscapes to celebrate your connection.",
    deliverables: [
      "Destination shoot coverage",
      "Multiple outfit & mood setups",
      "Fast teaser delivery for invites",
    ],
    categoryFilter: "Pre-Weddings",
  },
  {
    id: "maternity-family",
    title: "Family & Maternity",
    tagline: "Intimate maternity, newborn and family portraits.",
    description:
      "Heartfelt, soft-lit portrait sessions documenting milestones, baby showers, and intimate family togetherness.",
    deliverables: [
      "In-studio or outdoor natural light",
      "Gentle, non-intrusive session pacing",
      "Curated keepsake prints",
    ],
    categoryFilter: "Family",
  },
  {
    id: "events",
    title: "Events",
    tagline: "Private celebrations, engagements, receptions and other events.",
    description:
      "Vibrant event photography covering sangeets, cocktail parties, intimate birthdays, and cultural gatherings.",
    deliverables: [
      "Candid guest coverage",
      "Decor & ambiance documentation",
      "Quick turnaround preview pack",
    ],
    categoryFilter: "Events",
  },
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: "01",
    title: "Say Hello",
    subtitle: "Inquire & Date Check",
    description:
      "Tell us about your celebration, your venues, and your timeline. We check calendar availability and schedule a short conversation.",
  },
  {
    step: "02",
    title: "Let's Plan",
    subtitle: "Vision & Flow",
    description:
      "We understand your vision, key family members, lighting timings, and the intimate moments that matter most to you.",
  },
  {
    step: "03",
    title: "We Document",
    subtitle: "Candid & Unobtrusive",
    description:
      "You enjoy your day completely immersed in the moment. We blend in effortlessly to capture the honest, unstaged beauty.",
  },
  {
    step: "04",
    title: "Relive It",
    subtitle: "Films & Fine Art",
    description:
      "Your color-graded photographs and cinematic films bring it all back with the exact emotions, laughter, and tears of the day.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "We completely forgot the cameras were there. Looking through the photographs felt like reliving the entire day with all its honesty and joy.",
    author: "Ananya & Siddharth",
    event: "Traditional South Indian Wedding",
    location: "Palace Grounds, Bangalore",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "The wedding film made my entire family cry. They didn't just capture how things looked, but exactly how every second felt.",
    author: "Ritika & Rohan",
    event: "Destination Coastal Wedding",
    location: "Gokarna, Karnataka",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "From the pre-wedding session to the final fine-art album, their patience and artistic eye were extraordinary. Truly priceless memories.",
    author: "Meera & Karthik",
    event: "Heritage Wedding",
    location: "The Leela Palace, Chennai",
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
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=600&auto=format&fit=crop",
    type: "reel",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    type: "photo",
  },
];

export const STATS = [
  { value: "180+", label: "Weddings" },
  { value: "12", label: "Cities" },
  { value: "4K", label: "Films" },
  { value: "100%", label: "Candid" },
];

export const CALCULATOR_SERVICES = [
  {
    id: "candid_photo",
    name: "Candid Wedding Photography (Lead + 2nd Shooter)",
    price: 65000,
    category: "Photo",
  },
  {
    id: "traditional_photo",
    name: "Traditional Photography & Family Portraits",
    price: 35000,
    category: "Photo",
  },
  {
    id: "cinematic_film",
    name: "Cinematic Wedding Film & Teaser (4K)",
    price: 75000,
    category: "Film",
  },
  {
    id: "pre_wedding",
    name: "Destination Pre-Wedding Shoot (1 Day)",
    price: 45000,
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
    name: "Handcrafted Italian Leather Fine-Art Album",
    price: 20000,
    category: "Addon",
  },
];
