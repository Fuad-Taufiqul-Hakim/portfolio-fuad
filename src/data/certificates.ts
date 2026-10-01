import { img } from "@/lib/images";
import type { Certificate, CertificateCategory } from "@/types/content";

// To add a certificate: drop the original into legacy/src/assets/img/certificates/<folder>/,
// run `npm run optimize-images`, then add a line below using the generated file name.
const cert = (folder: string, file: string, organization: string): Certificate => ({
  image: img(`certificates/${folder}/${file}`),
  organization,
});

const UMICH = "University of Michigan";
const JHU = "Johns Hopkins University";

export const certificateCategories: CertificateCategory[] = [
  {
    id: "biotech",
    title: "Biotech",
    certificates: [
      cert(
        "biotechnology",
        "basics-of-crispr-cas9-fuad-taufiqul-hakim-0",
        "The Jackson Laboratory",
      ),
      cert(
        "biotechnology",
        "certificate-for-training-fuad-taufiqul-hakim-0",
        "The Red Green Research Centre",
      ),
      cert("biotechnology", "coursera-hjluls9z7m9s-0", JHU),
      cert("biotechnology", "coursera-r4b433ckbbmu-0", JHU),
      cert("biotechnology", "coursera-tdkqlbum9969-0", JHU),
      cert("biotechnology", "coursera-vyx2mtln9vuz-0", JHU),
      cert("biotechnology", "coursera-w2b57ye9l3v6-0", JHU),
      cert("biotechnology", "coursera-ykvmtjkb7e8r-0", JHU),
      cert("biotechnology", "fuad-taufiqul-hakim-0", "Galaxy Training Network"),
      cert(
        "biotechnology",
        "linux-for-bioinformatics-certificate-of-achievement-1ote8l6-0",
        "Future Learn",
      ),
      cert("biotechnology", "uc-1b5o0kul-0", "Udemy"),
    ],
  },
  {
    id: "python",
    title: "Python",
    certificates: [
      cert("python", "coursera-4s987aljukzl-0", UMICH),
      cert("python", "coursera-6wdtvf339jg6-0", UMICH),
      cert("python", "coursera-a8hhqu6wsfjs-0", UMICH),
      cert("python", "coursera-b7rb89hp647y-0", UMICH),
      cert("python", "coursera-cbrf5aa82xst-0", UMICH),
      cert("python", "coursera-heac98rwmc2e-0", UMICH),
      cert("python", "coursera-p9abz588jysy-0", UMICH),
      cert("python", "coursera-sa8676shuxkw-0", UMICH),
      cert("python", "coursera-tzluhwk6ur8c-0", UMICH),
      cert("python", "coursera-xvbuz3j8rnt3-0", UMICH),
      cert("python", "coursera-ydra27g8swc9-0", UMICH),
      cert("python", "coursera-zvjfg6e7suar-0", UMICH),
      cert("python", "coursera-58f6s8vsug48-0", "Google"),
      cert("python", "coursera-ac6ykjm27cfy-0", "Google"),
      cert("python", "coursera-kbbujgb4dqfd-0", "Google"),
      cert("python", "coursera-wav4npmkm5xr-0", "Google"),
      cert("python", "google-it-automation-certificate-badge20220130-53-29ynjc-0", "Google"),
      cert("python", "coursera-p3lgpwt4yut4-0", "Google"),
      cert("python", "sololearnpython-0", "SoloLearn"),
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    certificates: [
      cert("dataAnalysis", "certificate-xri8yzuyo2og-1623268953-0", "Skilljar"),
      cert("dataAnalysis", "coursera-6lmtk2dlahue-0", "IBM"),
      cert("dataAnalysis", "coursera-c9lclb6k8tba-0", "Google"),
      cert("dataAnalysis", "coursera-gfmr6rf7kynb-0", "Google"),
      cert("dataAnalysis", "coursera-l8l68dzzzrha-0", "Google"),
      cert("dataAnalysis", "coursera-pnvm5zagwyjc-0", "Google"),
      cert("dataAnalysis", "coursera-ytdqlu8sy3ac-0", "Google"),
      cert("dataAnalysis", "coursera-rxheg9yb2fa3-0", "Google"),
      cert("dataAnalysis", "coursera-trpjxukulv48-0", "Google"),
      cert(
        "dataAnalysis",
        "google-data-analytics-professional-certificate-badge20220202-53-1oujvvj-0",
        "Google",
      ),
      cert("dataAnalysis", "coursera-3yw32jvdj463-0", "Google"),
    ],
  },
  {
    id: "it",
    title: "IT",
    certificates: [
      cert("it", "coursera-8k2qp9cyvkt8-0", UMICH),
      cert("it", "coursera-d4g6yrmtdn64-0", "Google"),
      cert("it", "coursera-ece47unrl4qy-0", "Google"),
      cert("it", "coursera-ffwe7rr8nahd-0", "Google"),
      cert("it", "coursera-jy7fa7vyjy8p-0", "Google"),
      cert("it", "coursera-l2y7rwcbh28f-0", "Google"),
      cert("it", "coursera-tc5zjz97ya4e-0", "Google"),
      cert("it", "google-it-support-certificate-badge20220308-53-twsedu-0", "Google"),
    ],
  },
  { id: "html", title: "HTML", certificates: [cert("html", "coursera-fbymvp6kj7vm-0", UMICH)] },
  {
    id: "css",
    title: "CSS",
    certificates: [
      cert("css", "coursera-rvnug6hj8jbg-0", UMICH),
      cert("css", "coursera-ymnad983b5tq-0", UMICH),
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    certificates: [cert("javascript", "coursera-sa3c3gx58nrg-0", UMICH)],
  },
  { id: "sql", title: "SQL", certificates: [cert("sql", "coursera-a28nwczsrshh-0", UMICH)] },
  { id: "php", title: "PHP", certificates: [cert("php", "coursera-ddny7rsfnhgw-0", UMICH)] },
  {
    id: "git",
    title: "Git & GitHub",
    certificates: [cert("gitGithub", "coursera-7q9czsjbsken-0", "Google")],
  },
  {
    id: "matlab",
    title: "MATLAB",
    certificates: [cert("matlab", "mayhlab-certificate-0", "MathWorks")],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    certificates: [
      cert("cyberSecurity", "coursera-azw2k2el8pfy-0", "IBM"),
      cert("cyberSecurity", "coursera-qnbmlefckjl4-0", "IBM"),
    ],
  },
];
