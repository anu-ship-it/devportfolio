export interface Product {

  slug: string;

  name: string;

  category: string;

  tagline: string;

  description: string;

  status: "Live" | "Building" | "Private";

  featured: boolean;

  technologies: string[];

  href: string;

}

export const products: Product[] = [

  {
    slug: "tokenpulse",

    name: "TokenPulse",

    category: "Developer Intelligence",

    tagline:
      "Understand AI usage before it becomes expensive.",

    description:
      "Chrome extension that monitors token usage, model consumption and real-time AI costs across modern LLM platforms.",

    status: "Live",

    featured: true,

    href: "/systems/tokenpulse",

    technologies: [
      "React",
      "TypeScript",
      "Chrome Extension",
      "Firebase",
      "AI"
    ]
  },

  {
    slug: "alpha-pulse",

    name: "AlphaPulse",

    category: "Financial Intelligence",

    tagline:
      "AI-assisted market intelligence.",

    description:
      "Analyzes historical trends, company fundamentals, technical indicators and market news to rank high-potential opportunities using a confidence scoring engine.",

    status: "Private",

    featured: false,

    href: "/systems/alphapulse",

    technologies: [
      "Python",
      "AI",
      "Scraping",
      "Finance",
      "Analytics"
    ]
  },

  {
    slug: "ai-dev-weekly",

    name: "AI Dev Weekly",

    category: "Knowledge Intelligence",

    tagline:
      "The AI projects worth your attention.",

    description:
      "Automatically discovers, evaluates and ranks AI repositories before delivering only the highest-quality projects directly to subscribers every week.",

    status: "Building",

    featured: false,

    href: "/systems/ai-dev-weekly",

    technologies: [
      "Automation",
      "AI",
      "GitHub",
      "Email",
      "Scraping"
    ]
  },

  {
    slug: "velra",

    name: "Velra",

    category: "Productivity Intelligence",

    tagline:
      "Building the next generation AI workspace.",

    description:
      "An AI-first productivity platform focused on intelligent workflows, automation and execution.",

    status: "Building",

    featured: false,

    href: "/systems/velra",

    technologies: [
      "AI",
      "Automation",
      "React",
      "Backend"
    ]
  }

];

export default products;
