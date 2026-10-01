import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { SocialLink } from "@/types/content";

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Fuad-Taufiqul-Hakim", icon: <FiGithub /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fuad-taufiqul-hakim",
    icon: <FiLinkedin />,
  },
];
