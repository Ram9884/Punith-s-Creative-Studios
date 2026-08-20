import {
  PortfolioItem,
  ServiceItem,
  TestimonialItem,
  ExperienceStep,
} from "@/types";

export const BRAND_INFO = {
  name: "Photophactory Studios",
  heroTagline: "Crafting Timeless Celebrations With An Editorial Touch",
  heroDescription:
    "We specialize in Weddings, Pre-Weddings, Cultural & Corporate Events, as well as Commercial Photography and Video Production Services.",
  positioning: "PPS | Luxury Wedding Photography | India",
  heroCTA: {
    primary: "Book Your Shoot",
    secondary: "Explore Our Stories",
  },
  about: {
    heading: "Your Story. Photophactory Studios.",
    description:
      "Crafting timeless celebrations with an editorial touch. We specialize in Weddings, Pre-Weddings, Cultural & Corporate Events, as well as Commercial Photography and Video Production Services across Surat, India, and global destinations.",
  },
  contact: {
    location: "Vesu, Surat, Gujarat",
    address:
      "1st-44, 2 Floor, Atlanta Business Hub, Opp Ofira Posh Residence, Vesu, Surat",
    email: "photophactorystudios.in@gmail.com",
    phone: "+91 98403 18800",
    phoneRaw: "9840318800",
    whatsappNumber: "919840318800",
    instagram: "@photo_phactory_studios",
    instagramUrl: "https://instagram.com/photo_phactory_studios",
    instagramTitle: "PPS | Luxury Wedding Photography | India",
    instagramCategory: "Photography and videography",
    instagramBio: "Crafting timeless celebrations with an editorial touch ✨",
    instagramPosts: "446",
    instagramFollowers: "4,290",
    instagramFollowing: "905",
  },
  footer: {
    brandName: "Photophactory Studios",
    tagline: "PPS | Luxury Wedding Photography | India",
    subtext:
      "Crafting timeless celebrations with an editorial touch ✨ • Weddings | Pre-Weddings | Cultural & Corporate Events | Commercial Photography & Video Production Services",
  },
};

export const STATS = [
  { value: "4,290+", label: "Instagram Followers" },
  { value: "446+", label: "Posts & Stories" },
  { value: "4.9★", label: "Google Rating" },
  { value: "120+", label: "Client Reviews" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Weddings",
    title: "Ananya & Siddharth",
    location: "Vesu & Dumas Heritage, Surat",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    description:
      "A rich traditional wedding framed with heritage silk nuances, candid laughter, and authentic ritual warmth in Surat.",
    quote:
      "Looking through our wedding photos felt like reliving every candid emotion of the day.",
    couple: "Ananya & Siddharth",
  },
  {
    id: 2,
    category: "Pre-Weddings",
    title: "Ritika & Rohan",
    location: "Riverfront & Coastal Shores, Gujarat",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description:
      "Golden hour romance captured against scenic landscapes and quiet waters along the Gujarat coast.",
    quote: "They made us feel completely relaxed and natural in front of the lens.",
    couple: "Ritika & Rohan",
  },
  {
    id: 3,
    category: "Post-Weddings",
    title: "Sanjana & Vikram",
    location: "Atlanta Business Hub & Studio, Surat",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    description:
      "Post-wedding cinematic couple portraits captured amidst modern aesthetic architecture and soft lighting.",
    quote: "The frames captured our quiet moments in the most magical, timeless way.",
    couple: "Sanjana & Vikram",
  },
  {
    id: 4,
    category: "Bridal",
    title: "Kavya's Royal Bridal Elegance",
    location: "Vesu Luxury Estate, Surat",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    description:
      "Editorial bridal portraiture emphasizing fine jewelry details, traditional drape, and serene poise.",
    quote: "Every detail of my bridal look was documented with such artistic grace.",
    couple: "Kavya S.",
  },
  {
    id: 5,
    category: "Couples",
    title: "Nikhil & Divya",
    location: "Dumas Promenade, Surat",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sunset couple session filled with organic smiles, wind-blown hair, and relaxed togetherness.",
    couple: "Nikhil & Divya",
  },
  {
    id: 6,
    category: "Events",
    title: "Corporate & Cultural Gala Night",
    location: "Grand Convention Center, Surat",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-energy cultural performances and glamorous corporate gala evening documentation with professional precision.",
    couple: "Corporate Cultural Night",
  },
  {
    id: 7,
    category: "Commercial",
    title: "Luxury Brand Commercial Campaign",
    location: "Photophactory Studios, Surat",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    description:
      "High-end commercial product and brand identity photography with studio lighting and high dynamic range output.",
    couple: "Commercial Shoot",
  },
];

export const WEDDING_FILMS = [
  {
    id: "film-1",
    title: "Eternal Vows — Ananya & Siddharth",
    location: "Surat Grand Heritage Mandap",
    duration: "3:45 Film",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "A cinematic motion film scored with soul-stirring music and emotional vows.",
  },
  {
    id: "film-2",
    title: "Sunset Promises — Sneha & Vivek",
    location: "Vesu Beachfront Resort, Surat",
    duration: "2:30 Reel",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    description:
      "Vibrant wedding teaser highlighting joyous sangeet dance movements and golden hour rituals.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography 📸",
    tagline: "Comprehensive documentary & editorial wedding photo coverage.",
    description:
      "Full-day coverage capturing mandap rituals, unscripted emotions, family interactions, and high-resolution heirloom portraits.",
    deliverables: [
      "High-resolution color-graded photo gallery",
      "Online private proofing portal",
      "Fine-art handcrafted album curation",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "wedding-videography",
    title: "Video Production & Films 🎬",
    tagline: "Cinematic films, teasers, ad films & full ceremony recordings.",
    description:
      "Cinematic motion pictures scored with custom sound design and narrative pacing for weddings, events, and brand films.",
    deliverables: [
      "3-5 minute Cinematic Teaser",
      "Full Feature Documentary Film",
      "Social Media Vertical Reels (4K)",
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
    id: "cultural-corporate-events",
    title: "Cultural & Corporate Events 🎉",
    tagline: "Sangeet, Haldi, Galas, Corporate Conferences & Concerts.",
    description:
      "Vibrant coverage of cultural celebrations, corporate conventions, high-energy stage performances, and award nights.",
    deliverables: [
      "Guest & decor documentation",
      "Stage & keynote high-action frames",
      "High-speed digital delivery pack",
    ],
    categoryFilter: "Events",
  },
  {
    id: "commercial-photography",
    title: "Commercial Photography 💼",
    tagline: "Product shoots, brand campaigns & commercial portfolios.",
    description:
      "Studio and location commercial photography for brands, products, fashion lines, and corporate profiles.",
    deliverables: [
      "Studio lighting & high-res RAW editing",
      "Commercial license & retouched assets",
      "E-commerce & print-ready formats",
    ],
    categoryFilter: "Commercial",
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
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: "01",
    title: "Say Hello",
    subtitle: "Inquire & Date Check",
    description:
      "Tell us about your dates, venue, and project scope (Weddings, Events, or Commercial). We verify availability and schedule a call.",
  },
  {
    step: "02",
    title: "Let's Plan",
    subtitle: "Vision & Flow",
    description:
      "We understand your schedule, ritual timings, or campaign concept to create a smooth shooting plan.",
  },
  {
    step: "03",
    title: "We Capture",
    subtitle: "Candid & Cinematic",
    description:
      "You focus on enjoying your event or shoot while our team captures authentic emotions and stunning visual frames.",
  },
  {
    step: "04",
    title: "Relive It",
    subtitle: "Films & Master Assets",
    description:
      "Receive color-graded photo galleries, commercial assets, and cinematic films that deliver sheer visual excellence.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Photophactory Studios captured our wedding so beautifully! The candid shots and the wedding film made our entire family relive every emotion. Highly recommended in Surat!",
    author: "Deepika & Ashwin",
    event: "Traditional Surat Wedding",
    location: "Vesu, Surat",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "The pre-wedding shoot and our corporate product shoot were handled with pure professionalism. They made us feel relaxed and delivered stunning quality.",
    author: "Ritika & Rohan",
    event: "Pre-Wedding & Commercial Session",
    location: "Surat",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "From the initial consultation call at Atlanta Business Hub to the final fine-art album and commercial reel, Photophactory Studios delivered sheer perfection.",
    author: "Meera & Karthik",
    event: "Grand Reception & Corporate Gala",
    location: "Surat, Gujarat",
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
    id: "corporate_cultural_event",
    name: "Cultural & Corporate Event Coverage (1 Day)",
    price: 45000,
    category: "Events",
  },
  {
    id: "commercial_shoot",
    name: "Commercial Photography & Video Production Package",
    price: 55000,
    category: "Commercial",
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

