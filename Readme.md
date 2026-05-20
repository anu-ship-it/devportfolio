

# DevPortfolio Template

A modern, minimalist portfolio template built with Astro and Tailwind CSS. Perfect for developers looking to showcase their skills, experience, and projects in a clean, professional way.

This was completely rebuilt from the ground up from V1. This template was built to be entirely ready to go with a quick config edit (see below) but also provides the ability to easily extend in whatever way you want.

This template also comes with `CLAUDE.md` and `.cursor/rules` files for easy integration with your existing AI workflows.

> **📬 Connect & Share!**  
> For questions and updates, feel free to reach out on [**X (Twitter)**](https://x.com/Anoop670).
> If you've built and published your personal site with this template, I'd love to see it! Send me a DM 🚀

## Preview

To view a live preview of the site, [click here]().

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind  CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Updating the Template

### Configuration

The template is designed to be easily customizable through the `src/config.ts` file. This single file controls:

- **Personal Information**: Name, title, description
- **Accent Color**: Primary color theme (changing this will change the accent color site wide)
- **Social Links**: Email, LinkedIn, Twitter, GitHub (all optional)
- **About Section**: Personal bio/description
- **Skills**: List of technical skills
- **Projects**: Project showcase with descriptions and links
- **Experience**: Work history with bullet points
- **Education**: Educational background and achievements

If skills, projects, experience, or education are removed from the config, those sections will be hidden entirely.

### Example structures

Here's what the config data structure looks like for each section:

#### Basic Information
```typescript
name: "Your Name",
title: "Your Job Title",
description: "Brief site description",
accentColor: "#1d4ed8", // Hex color for theme
```

#### Social Links (all optional)
```typescript
social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    github: "https://github.com/yourusername",
}
```

#### About Section
```typescript
aboutMe: "A paragraph describing yourself, your background, interests, and what your're passionate about. This appears in the About section of your portfolio."
```

#### Skills
```typescript
skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"]
```

#### Projects

