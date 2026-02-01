export interface NavLink {
  name: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  isMain?: boolean;
}

export interface PillarProps {
  title: string;
  description: string;
  icon?: string;
}

export interface TestimonialProps {
  avatar: string;
  rating: number;
  quote: string;
  author: string;
  location: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}