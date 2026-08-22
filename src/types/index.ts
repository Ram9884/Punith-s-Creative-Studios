export type PortfolioCategory =
  | "Weddings"
  | "Events"
  | "Portraits"
  | "Couples"
  | "Videography";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
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
  rating?: number;
  image: string;
}

export interface ExperienceStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}