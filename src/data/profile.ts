import { img } from "@/lib/images";
import type { FocusArea } from "@/types/content";

export const profile = {
  name: "Fuad Taufiqul Hakim",
  shortName: "Fuad",
  greeting: "Hello! It's me",
  roles: ["Biotechnologist", "Programmer", "Researcher"],
  tagline:
    "Biotechnologist and self-taught programmer working where biology meets computation — drug & peptide design, molecular dynamics and bioinformatics.",
  photo: img("personal/img-20230823-110047"),
  bio: [
    "I am a biotechnologist and self-taught programmer hailing from Bangladesh, where I completed my B. Sc. and M. Sc. in Biotechnology at the University of Rajshahi. In parallel with my biotech studies, I ventured into programming, recognizing its potential to amplify my research capabilities in the biotech realm.",
    "My professional interests span the realms of biology and computation, and I firmly believe that multidisciplinary knowledge is the key to unlocking sustainable solutions. Consequently, I am actively expanding my expertise in areas such as drug design, computational chemistry, and programming, driven by an unwavering enthusiasm for continuous learning and a deep commitment to contributing meaningfully to the betterment of humanity on a global scale.",
  ],
  email: "fuadtaufiq98@gmail.com",
  location: "Dinajpur, Bangladesh",
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
