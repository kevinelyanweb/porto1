export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kevin Elyan",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Experience",
      href: "/experience",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Experience",
      href: "/experience",
    },
  ],
  links: {
    github: "https://github.com/kevinelyanweb",
    docs: "https://nextui.org",
    projects: "/projects",
  },
};
