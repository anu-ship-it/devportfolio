import type { SiteConfig } from "../types";

export const site: SiteConfig = {
  name: "Anoop Kumar",

  shortName: "Anoop",

  title: "Anoop Kumar | Software Engineer",

  description:
    "Software Engineer building AI products, developer tools and scalable backend systems.",

  url: "https://devportfolio-sepia-psi.vercel.app/",

  author: "Anoop Kumar",

  location: "India",

  email: "anup17508@email.com",

  seo: {
    title: "Anoop Kumar",

    description:
      "Building AI-powered products, developer tools and scalable software.",

    image: "/og-image.png",

    url: "https://devportfolio-sepia-psi.vercel.app/",

    keywords: [
      "Software Engineer",
      "AI Engineer",
      "Full Stack Developer",
      "Backend Engineer",
      "Java",
      "Spring Boot",
      "React",
      "Astro",
      "Developer Tools",
      "Chrome Extension",
      "TokenPulse"
    ]
  },

  navigation: [
    {
      label: "Projects",
      href: "/projects"
    },
    {
      label: "Writing",
      href: "/writing"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Now",
      href: "/now"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/anu-ship-it",
      icon: "github"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/anoop-kumar-a49815262",
      icon: "linkedin"
    },
    {
      label: "Email",
      href: "mailto:anup17508@email.com",
      icon: "mail"
    }
  ]
};

export default site;
