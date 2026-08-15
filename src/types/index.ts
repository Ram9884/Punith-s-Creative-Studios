export type PortfolioCategory =
  | "All"
  | "Weddings"
  | "Pre-Weddings"
  | "Films"
  | "Events"
  | "Family";

export interface PortfolioItem {
  id: number;
  category: "Weddings" | "Pre-Weddings" | "Films" | "Events" | "Family";
  title: string;
  location: string;
  image: string;
  videoUrl?: string;
  duration?: string;
  quote?: string;
  couple?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  categoryFilter: PortfolioCategory;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  event: string;
  location: string;
  image: string;
}

export interface ExperienceStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}