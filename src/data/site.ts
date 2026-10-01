// Navigation and section titles. Hash links point at section ids on the home page.
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Certificates", to: "/certificates" },
  { label: "Publications", to: "/#publications" },
  { label: "Contact", to: "/#contact" },
] as const;

export const sectionTitles = {
  about: { eyebrow: "About", title: "Who I am" },
  experience: { eyebrow: "Career", title: "Work Experience" },
  education: { eyebrow: "Academics", title: "Educational History" },
  skills: { eyebrow: "Toolbox", title: "Skills" },
  album: { eyebrow: "Moments", title: "My Album" },
  publications: { eyebrow: "Research", title: "My Publications" },
  contact: { eyebrow: "Contact", title: "Let's get in touch" },
  certificates: { eyebrow: "Learning", title: "Certificates" },
};
