import {
  PortfolioItem,
  ServiceItem,
  TestimonialItem,
  ExperienceStep,
} from "@/types";

export const BRAND_INFO = {
  name: "Punith's Creative Studio",
  handle: "@punithscreativestudio",
  ownerName: "Punith Kumar V B",
  positioning: "Professional Photography & Videography",
  tagline: "Weddings • Events • Portraits",
  coreMessage: "Capturing Emotions Beyond Frames ✨",
  heroTagline: "Capturing Emotions Beyond Frames.",
  heroDescription:
    "Professional photography and videography for weddings, events, portraits and the moments worth remembering.",
  isoClaim: "ISO Certified Photographer & Videographer",
  heroCTA: {
    primary: "Explore Our Work",
    secondary: "Book a Shoot",
    whatsapp: "WhatsApp Us",
  },
  about: {
    heading: "More Than Just a Photograph.",
    description:
      "Every photograph carries a feeling, a person and a story. Punith's Creative Studio focuses on capturing those moments naturally while creating photographs and films that remain meaningful long after the day is over.",
  },
  weddingSection: {
    heading: "Weddings, Told Honestly.",
    description:
      "From the anticipation before the ceremony to the laughter, rituals and celebrations that follow, we capture the emotions that make your wedding yours.",
    cta: "View Wedding Stories",
  },
  eventsSection: {
    heading: "Every Celebration Has a Moment.",
    description:
      "From family celebrations to important events, we document the atmosphere, people and moments that deserve to be remembered.",
    cta: "Explore Event Photography",
  },
  portraitsSection: {
    heading: "Portraits With Personality.",
    description:
      "Professional portraits should look like you—not like everyone else.",
  },
  videographySection: {
    heading: "Moments, In Motion.",
    description:
      "Photography preserves a moment. Film brings it back to life.",
    cta: "Watch Our Films",
  },
  contact: {
    location: "Bengaluru, Karnataka",
    shortLocation: "Konanakunte, Bengaluru",
    serviceArea: "Serving Bengaluru & nearby areas",
    address:
      "JSS School Rd, Ganapathipura, Konanakunte, Bengaluru, Karnataka 560078, India",
    secondaryAddress:
      "3/39, Next to Brindavan Residency, JC Industrial Layout, Yelachanahalli, Bengaluru, Karnataka 560062",
    phone: "+91 99451 75729",
    phoneRaw: "+919945175729",
    whatsappNumber: "919945175729",
    whatsappUrl: "https://wa.me/919945175729",
    secondaryPhone: "+91 98808 63515",
    secondaryPhoneRaw: "+919880863515",
    instagram: "@punithscreativestudio",
    instagramUrl: "https://www.instagram.com/punithscreativestudio/",
    youtubeUrl: "https://www.youtube.com/@PunithsPhotography",
    facebookUrl: "https://www.facebook.com/453334131204326",
    linktreeUrl: "https://linktr.ee/punithsphotography",
    portfolioUrl: "https://myprofessionalacc.myportfolio.com/",
    googleMapsUrl:
      "https://maps.google.com/?q=Punith's+Creative+Studio+Ganapathipura+Konanakunte+Bengaluru",
    followersCount: "1.8K+ followers",
  },
  footer: {
    brandName: "Punith's Creative Studio",
    photographer: "Punith Kumar V B",
    tagline: "Professional Photography & Videography",
    subtext:
      "Punith's Creative Studio | Professional photography, videography, photo frames, album design & printing in Bengaluru, Karnataka.",
  },
};

export const STATS = [
  { value: "5.0★", label: "Google Rating" },
  { value: "30", label: "Google Reviews" },
  { value: "2025", label: "Established" },
  { value: "Bengaluru", label: "Based In" },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Weddings",
    title: "Sacred South Indian Wedding Rituals",
    location: "Bengaluru, Karnataka",
    image: "/images/wedding-sample.jpg",
    description:
      "Capturing authentic wedding ceremonies, traditional jewelry, intricate silk details, and sincere emotional moments.",
    quote:
      "Highly recommend Punith for anyone looking for quality photography + album work.",
    couple: "Wedding Client",
  },
  {
    id: 2,
    category: "Weddings",
    title: "Vibrant Wedding Celebration & Mandap Moments",
    location: "Bengaluru, Karnataka",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    description:
      "Documenting sacred rituals, family joy, and timeless wedding memories with artistic detail.",
    quote: "Very good work and delivered in a timely efficient manner.",
    couple: "Wedding Story",
  },
  {
    id: 3,
    category: "Events",
    title: "Family Celebration & Cultural Event Coverage",
    location: "Konanakunte, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    description:
      "Preserving the atmosphere, laughter, and genuine moments of family functions and community celebrations.",
    quote: "I had a shoot session with Punith and I had a great experience.",
    couple: "Event Client",
  },
  {
    id: 4,
    category: "Portraits",
    title: "Editorial Studio Portraiture",
    location: "Punith's Creative Studio, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=1200&auto=format&fit=crop",
    description:
      "Thoughtful individual portraits crafted with precise lighting, character, and natural expression.",
    quote: "Highly recommended for professional portrait shoots.",
    couple: "Portrait Client",
  },
  {
    id: 5,
    category: "Couples",
    title: "Expressive Outdoor Couple Session",
    location: "Bengaluru Scenic Location",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description:
      "Natural and expressive photographs built around genuine connection and candid warmth.",
    quote: "Captured our connection effortlessly.",
    couple: "Couple Session",
  },
  {
    id: 6,
    category: "Videography",
    title: "Cinematic Wedding & Event Film Coverage",
    location: "Bengaluru, Karnataka",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/@PunithsPhotography",
    duration: "Cinematic Film",
    description:
      "Preserving the movement, voices, emotions and atmosphere of celebrations through beautifully crafted films.",
    quote: "Preserved our wedding memories in motion beautifully.",
    couple: "Videography Client",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    tagline: "Capture important moments, emotions & celebrations.",
    description:
      "From intimate emotions to grand celebrations, capture the moments that make your wedding uniquely yours.",
    deliverables: [
      "High-resolution color-corrected photo gallery",
      "Traditional & candid event coverage",
      "Custom wedding photo album curation",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "wedding-videography",
    title: "Wedding Videography",
    tagline: "Preserve movement, sound & emotion.",
    description:
      "Preserve the movement, voices, emotions and atmosphere of your celebration through beautifully crafted films.",
    deliverables: [
      "High-definition event film coverage",
      "Edited highlight reel & ceremony footage",
      "Digital delivery via drive or USB",
    ],
    categoryFilter: "Videography",
  },
  {
    id: "event-photography",
    title: "Event Photography",
    tagline: "Coverage for celebrations & functions.",
    description:
      "Professional coverage for celebrations, functions and important events across Bengaluru.",
    deliverables: [
      "Comprehensive event coverage",
      "High-resolution digital delivery",
      "Atmospheric group & candid shots",
    ],
    categoryFilter: "Events",
  },
  {
    id: "portrait-photography",
    title: "Portrait Photography",
    tagline: "Thoughtful portraits capturing character.",
    description:
      "Thoughtful portraits that capture personality, confidence and character in studio or outdoor lighting.",
    deliverables: [
      "Professional studio lighting setup",
      "High-definition retouching & finishing",
      "Print-ready high resolution files",
    ],
    categoryFilter: "Portraits",
  },
  {
    id: "couple-photography",
    title: "Couple Photography",
    tagline: "Natural expressive connection.",
    description:
      "Natural and expressive photographs built around connection and genuine moments.",
    deliverables: [
      "Guided outdoor or studio session",
      "Color-graded portrait gallery",
      "Framing & album options",
    ],
    categoryFilter: "Couples",
  },
  {
    id: "album-design",
    title: "Album Design",
    tagline: "Lasting visual story presentation.",
    description:
      "Thoughtfully arranged photographs presented as a lasting visual story and premium physical album.",
    deliverables: [
      "Custom layout curation",
      "High-durability photo binding",
      "Heirloom presentation finish",
    ],
    categoryFilter: "Weddings",
  },
  {
    id: "photo-editing",
    title: "Photo Editing",
    tagline: "Professional image enhancement.",
    description:
      "Professional image enhancement, color grading, and creative post-production.",
    deliverables: [
      "Skin retouching & tone balance",
      "Color correction & contrast enhancement",
      "High-clarity export for digital & print",
    ],
    categoryFilter: "Portraits",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    tagline: "Polished visual storytelling.",
    description:
      "Professional editing for polished and engaging visual stories and event films.",
    deliverables: [
      "Seamless audio-visual sync",
      "Cinematic color grading",
      "Export ready for social & archival",
    ],
    categoryFilter: "Videography",
  },
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    step: "01",
    title: "Connect & Consult",
    subtitle: "Share Your Vision",
    description:
      "Contact Punith's Creative Studio via WhatsApp (+91 99451 75729) or call us to discuss your wedding, event, or portrait session requirements.",
  },
  {
    step: "02",
    title: "Plan Your Shoot",
    subtitle: "Dates & Creative Details",
    description:
      "We plan timing, lighting, location, and key moments to ensure effortless and authentic coverage on your shoot day.",
  },
  {
    step: "03",
    title: "Capture & Record",
    subtitle: "Professional Execution",
    description:
      "Our team documents your special day with creative vision, focus on natural emotion, and professional equipment.",
  },
  {
    step: "04",
    title: "Edit & Deliver",
    subtitle: "Films, Prints & Albums",
    description:
      "Receive color-graded photo galleries, edited event films, custom album designs, or wall framing.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Highly recommend Punith for anyone looking for quality photography + album work.",
    author: "Manjunath V",
    event: "Photography & Album Service",
    location: "Bengaluru, Karnataka",
    rating: 5,
    image: "/images/wedding-sample.jpg",
  },
  {
    id: 2,
    quote: "Very good work and delivered in a timely efficient manner.",
    author: "Nandhini",
    event: "Event & Photography Service",
    location: "Bengaluru, Karnataka",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "I had a shoot session with Punith and I had a great experience.",
    author: "Vikas J.P",
    event: "Shoot Session",
    location: "Bengaluru, Karnataka",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=600&auto=format&fit=crop",
  },
];

export const SOCIAL_MOMENTS = [
  {
    id: 1,
    image: "/images/wedding-sample.jpg",
    type: "photo",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    type: "reel",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    type: "photo",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=600&auto=format&fit=crop",
    type: "reel",
  },
];
