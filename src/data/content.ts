import {
  PortfolioItem,
  ServiceItem,
  TestimonialItem,
  ExperienceStep,
} from "@/types";

export const BRAND_INFO = {
  name: "chennaifemale_photographer",
  handle: "@chennaifemale_photographer",
  photographerName: "Madhumitha K",
  heroTagline: "Freeze your best moments 📸",
  heroDescription:
    "Bespoke Wedding, Babyshower, Kids, and Maternity photography & videography by Madhumitha K. Based in Chennai, available to travel worldwide. ஸ்ரீ ✨",
  positioning: "Photography & Videography | ஸ்ரீ ✨",
  heroCTA: {
    primary: "Book Your Shoot",
    secondary: "Explore Our Work",
  },
  about: {
    heading: "Freeze Your Best Moments",
    description:
      "Welcome to chennaifemale_photographer by Madhumitha K. We specialize in capturing life's most precious milestones — from grand Weddings and intimate Maternity sessions to joyful Babyshower and Kids photography. Every frame is crafted with heart, preserving authentic smiles and timeless emotions. Based in Chennai and open to travel worldwide. ஸ்ரீ ✨",
  },
  contact: {
    location: "Chennai • Open to Travel ✈️🌍",
    address: "Chennai, Tamil Nadu, India (Open to Travel Worldwide ✈️🌍)",
    phone: "+91 73973 31508",
    phoneRaw: "7397331508",
    whatsappNumber: "917397331508",
    instagram: "@chennaifemale_photographer",
    instagramUrl: "https://instagram.com/chennaifemale_photographer",
    youtubeUrl: "https://www.youtube.com/watch?v=wQjK71E5IXs&t=33s",
    youtubeShortUrl: "https://youtu.be/3x2V7l_kdNM",
    googleMapsUrl: "https://maps.app.goo.gl/dH1hQE42BtYJTpCw9?g_st=iw",
  },
  footer: {
    brandName: "chennaifemale_photographer",
    photographer: "Madhumitha K",
    tagline: "Freeze your best moments 📸 • ஸ்ரீ ✨",
    subtext:
      "Madhumitha K | Wedding, Babyshower, Kids & Maternity Photography & Videography | Open to Travel Worldwide ✈️🌍",
  },
};

export const STATS = [
  { value: "38.4K+", label: "Instagram Followers" },
  { value: "953", label: "Posts Shared" },
  { value: "1,578", label: "Following" },
  { value: "5.0★", label: "Google Rating" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Weddings",
    title: "Ananya & Siddharth — Wedding Story",
    location: "Chennai Heritage Mandap",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    description:
      "A rich South Indian wedding framed with traditional silk nuances, candid family laughter, and emotional rituals.",
    quote:
      "Madhumitha captured every tiny ritual and candid tear so beautifully. We relived the entire day watching our photos!",
    couple: "Ananya & Siddharth",
  },
  {
    id: 2,
    category: "Maternity",
    title: "Serene Motherhood — Kavya's Maternity Session",
    location: "Mahabalipuram Coastal Sunrise",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description:
      "Soft golden hour lighting emphasizing the beauty and anticipation of new motherhood by the ocean breeze.",
    quote:
      "Madhumitha made me feel so comfortable and radiant during my maternity shoot. The photos are pure art.",
    couple: "Kavya S.",
  },
  {
    id: 3,
    category: "Babyshower",
    title: "Joyous Seemantham — Divine Blessings",
    location: "Chennai Traditional Residence",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Vibrant traditional babyshower celebrations filled with jasmine garlands, glass bangles, and grandmotherly blessings.",
    quote:
      "Every smile and ritual detail was recorded with such heartwarming elegance.",
    couple: "Deepika & Ashwin",
  },
  {
    id: 4,
    category: "Kids",
    title: "First Milestone — Aarav's 1st Birthday",
    location: "ECR Lawn Venue, Chennai",
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "Unscripted childhood wonder, cake smash laughs, and playful family moments captured in natural light.",
    quote:
      "She has a magical way with kids! Aarav was laughing throughout the shoot.",
    couple: "Priya & Rajesh (Parents)",
  },
  {
    id: 5,
    category: "Pre-Weddings",
    title: "Ritika & Rohan — Romantic Promenade",
    location: "Pondicherry Heritage French Quarter",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    description:
      "Cinematic couple portraits framed amidst pastel colonial lanes and quiet seaside atmosphere.",
    quote: "Working with Madhumitha was completely relaxed and effortless.",
    couple: "Ritika & Rohan",
  },
  {
    id: 6,
    category: "Events",
    title: "Sangeet Night & Gala Reception",
    location: "ITC Grand Chola, Chennai",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-energy dance performances and colorful family celebration moments documented with crisp clarity.",
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
      "A cinematic motion film scored with emotional vows and classical strings by Madhumitha K.",
  },
  {
    id: "film-2",
    title: "Babyshower & Blessing Story",
    location: "ECR Beachfront Venue, Chennai",
    duration: "2:30 Reel",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    description:
      "Vibrant Seemantham highlight reel capturing flower showers, happy smiles, and family warmth.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography & Videography 📸🎬",
    tagline: "Documentary & editorial wedding coverage.",
    description:
      "Comprehensive coverage capturing authentic mandap rituals, unscripted emotions, family warmth, and high-resolution heirloom portraits.",
    deliverables: [
      "High-resolution color-graded photo gallery",
      "Cinematic Teaser & Full Wedding Film (4K)",
      "Fine-art handcrafted album curation",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "maternity-photography",
    title: "Maternity Photography 🤰✨",
    tagline: "Dreamy, elegant pregnancy portrait sessions.",
    description:
      "Celebrate the magic of new life with soft, aesthetic maternity portraiture tailored to make every expectant mother feel graceful and celebrated.",
    deliverables: [
      "Studio & scenic outdoor location setup",
      "Gown & styling guidance",
      "High-resolution retouched gallery pack",
    ],
    categoryFilter: "Maternity",
  },
  {
    id: "babyshower-photography",
    title: "Babyshower / Seemantham Coverage 🍼💛",
    tagline: "Traditional ritual & festive family celebration.",
    description:
      "Documenting bangles, floral rituals, elder blessings, and joyous family dining during your traditional babyshower ceremonies.",
    deliverables: [
      "Full event candid & group coverage",
      "Highlight video reel for social media",
      "Fast preview gallery turnaround",
    ],
    categoryFilter: "Babyshower",
  },
  {
    id: "kids-photography",
    title: "Kids & Baby Portraiture 👶🎉",
    tagline: "First birthdays, cake smashes & milestone memories.",
    description:
      "Patient, fun-filled photo sessions capturing your baby's innocent smiles, playful giggles, and milestone celebrations in a comfortable environment.",
    deliverables: [
      "Unrushed child-friendly shoot pace",
      "Creative theme setups & props guidance",
      "Digital high-res print files",
    ],
    categoryFilter: "Kids",
  },
  {
    id: "pre-wedding",
    title: "Pre-Wedding & Couple Sessions ❤️",
    tagline: "Romantic couple stories & destination shoots.",
    description:
      "Relaxed guided photo and reel sessions at scenic beach resorts, heritage streets, or outdoor spots before your big day.",
    deliverables: [
      "Concept & location planning",
      "Multiple outfit & mood setups",
      "Save-the-date graphics & reel pack",
    ],
    categoryFilter: "Pre-Weddings",
  },
  {
    id: "event-photography",
    title: "Events & Milestone Celebrations 🎉",
    tagline: "Sangeet, Haldi, Engagements & Receptions.",
    description:
      "High-energy coverage of family functions, engagement ring ceremonies, sangeet performances, and milestone gatherings.",
    deliverables: [
      "Guest & decor documentation",
      "High-speed digital delivery",
      "Print-ready full resolution files",
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
      "Contact Madhumitha via WhatsApp or our booking portal with your dates and event location.",
  },
  {
    step: "02",
    title: "Let's Plan",
    subtitle: "Vision & Concept",
    description:
      "We discuss your shoot style, outfit choices, ritual timings, and preferred aesthetics.",
  },
  {
    step: "03",
    title: "We Capture",
    subtitle: "Freeze The Moment",
    description:
      "Relax and enjoy your event while Madhumitha captures genuine smiles and organic emotions.",
  },
  {
    step: "04",
    title: "Relive It",
    subtitle: "Heirloom Galleries & Reels",
    description:
      "Receive your beautifully color-graded photo galleries, reels, and custom albums.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Madhumitha captured our wedding and seemantham so effortlessly! Her patience and eye for candid moments made our photos look like a dream. 5.0 stars well deserved!",
    author: "Deepika & Ashwin",
    event: "Wedding & Babyshower",
    location: "Chennai",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Our maternity shoot in Mahabalipuram was so comfortable and memorable. Madhumitha guided us gently through poses and captured pure magic.",
    author: "Kavya & Vikram",
    event: "Maternity Session",
    location: "Mahabalipuram",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "From my baby's 1st birthday shoot to our family function, chennaifemale_photographer is our go-to choice. Highly recommended!",
    author: "Priya & Rajesh",
    event: "Kids & Family Shoot",
    location: "Chennai",
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
    id: "wedding_coverage",
    name: "Full Wedding Photography & Cinematic Film",
    price: 65000,
    category: "Wedding",
  },
  {
    id: "maternity_shoot",
    name: "Maternity Photography Session (Indoor/Outdoor)",
    price: 25000,
    category: "Maternity",
  },
  {
    id: "babyshower_event",
    name: "Babyshower / Seemantham Event Coverage",
    price: 30000,
    category: "Babyshower",
  },
  {
    id: "kids_birthday",
    name: "Kids Birthday & Baby Milestone Shoot",
    price: 20000,
    category: "Kids",
  },
  {
    id: "reels_pack",
    name: "Vertical Instagram Reels Fast-Delivery Pack (3 Reels)",
    price: 15000,
    category: "Addon",
  },
  {
    id: "luxury_album",
    name: "Handcrafted Fine-Art Canvera/Leather Album",
    price: 18000,
    category: "Addon",
  },
];
