import type { ReactNode } from "react";

export type SocialLink = { label: string; href: string; icon: ReactNode };

export type FocusArea = { title: string; description: string; image: string };

export type Experience = {
  organization: string;
  place: string;
  position: string;
  duration: string;
  responsibilities: string[];
  researchAdvisor?: string;
};

export type Education = {
  institution: string;
  location: string;
  date: string;
  level?: string;
  department: string;
  /** e.g. "CGPA: 4.0 out of 4.0; Position: 1st out of 21 students" */
  result: string;
};

export type Skill = { name: string; image: string };
export type SkillGroup = { title: string; skills: Skill[] };

export type Photo = { src: string; caption: string };

export type Publication = { title: string; citation: string; doi: string; image: string };

export type Certificate = { image: string; organization: string };
export type CertificateCategory = { id: string; title: string; certificates: Certificate[] };
