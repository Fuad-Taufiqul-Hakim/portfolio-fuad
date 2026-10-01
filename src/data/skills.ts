import { img } from "@/lib/images";
import type { SkillGroup } from "@/types/content";

const skill = (name: string, file: string) => ({ name, image: img(`skills/${file}`) });

export const programmingSkills: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      skill("Python", "python"),
      skill("R", "r"),
      skill("MATLAB", "matlab"),
      skill("JavaScript", "javascript"),
      skill("TypeScript", "typescript"),
      skill("SQL", "sql"),
    ],
  },
  {
    title: "Web",
    skills: [
      skill("HTML", "html"),
      skill("CSS", "css3"),
      skill("Tailwind CSS", "tailwind"),
      skill("React", "react"),
    ],
  },
  {
    title: "Tools & Data",
    skills: [skill("Linux", "linux"), skill("Tableau", "tableau")],
  },
];

export const experimentalSkills = [
  "PCR, qPCR",
  "Gel electrophoresis",
  "Bacterial cell culture",
  "Fungal cell culture",
  "DNA and RNA extraction",
  "Extract preparation",
  "Anti-microbial activity assay",
  "Pesticidal activity assay",
  "Tissue culture",
];

export const inSilicoSkills = [
  "Cheminformatics (QSAR)",
  "Quantum Calculation (Gaussian)",
  "Molecular Dynamic Simulation (Desmond, YASARA)",
  "Phylogenetic tree construction",
  "Gene expression data analysis",
  "Mutation analysis (SNP)",
  "Phytochemical properties analysis",
  "Sequencing data analysis",
];
