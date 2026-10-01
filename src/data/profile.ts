import { img } from "@/lib/images";
import type { FocusArea } from "@/types/content";

export const profile = {
  name: "Fuad Taufiqul Hakim",
  shortName: "Fuad",
  greeting: "Hello! It's me",
  roles: ["Neuroscience Researcher", "Biotechnologist", "Programmer"],
  tagline:
    "Graduate researcher at the Medical College of Wisconsin, studying immunity and regeneration in the living brain with see-through fish, live imaging and code.",
  photo: img("personal/img-20230823-110047"),
  bio: [
    "I'm a graduate student and research assistant in the Lam Lab at the Medical College of Wisconsin in Milwaukee. Our lab builds small-molecule and chemo-optogenetic tools and combines them with live imaging to study the immune system of the central nervous system. Most of my work uses zebrafish and Danionella cerebrum, a tiny fish that stays transparent as an adult, which lets us watch cells inside a living brain as it responds to injury and repairs itself.",
    "Before coming to the US, I completed my B.Sc. and M.Sc. in Genetic Engineering and Biotechnology at the University of Rajshahi in Bangladesh. I spent four years at The Red-Green Research Centre in Dhaka working on computer-aided drug and peptide design, molecular docking and molecular dynamics. Along the way I taught myself to program, and code is now a part of almost every project I work on.",
    "I enjoy working where wet-lab biology meets computation. I think the most useful answers to biological problems come from mixing disciplines, and I'm always happy to learn a new technique if it helps answer a question.",
  ],
  email: "fuadtaufiq98@gmail.com",
  location: "Milwaukee, Wisconsin, USA",
};

// Previously the home-page banner carousel.
export const focusAreas: FocusArea[] = [
  {
    title: "Genetic Engineering and Biotechnology",
    description:
      "The field I study. Which shape my goal to find out sustainable solution for biological problems.",
    image: img("banner/banner1"),
  },
  {
    title: "Programming",
    description: "I love coding to decode the hidden pattern of life.",
    image: img("banner/banner2"),
  },
  {
    title: "Research Experience",
    description:
      "Multidisciplinary research experience boosted my knowledge. Which will help me to deep dive into biological problems and find the solutions.",
    image: img("banner/banner3"),
  },
];
