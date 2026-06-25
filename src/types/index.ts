export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SEO {
  title: string;
  description: string;
  image: string;
  url: string;
  keywords: string[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  author: string;
  location: string;
  email: string;

  seo: SEO;

  navigation: NavItem[];

  socials: SocialLink[];
}
