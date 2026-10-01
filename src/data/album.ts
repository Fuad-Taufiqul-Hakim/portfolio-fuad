import { img } from "@/lib/images";
import type { Photo } from "@/types/content";

const photo = (file: string, caption: string): Photo => ({ src: img(`personal/${file}`), caption });

export const album: Photo[] = [
  photo(
    "img-20230825-wa0016",
    "Next Generation Sequencing Training at Child Health Research Foundation (CHRF)",
  ),
  photo(
    "fb-img-1572378339565",
    "Basic Industrial Laboratory Training at Bangladesh Council of Scientific and Industrial Research (BCSIR)",
  ),
  photo("dsc-0179", "Hands on Training at Bangladesh Sugarcrop Research Institute"),
  photo("img-20180424-114425", "Laboratory visit at Shahjalal University of Science & Technology"),
  photo("dsc-0750", '"SATT IT" - My First IT Workplace'),
  photo("fb-img-1581443105670", "Cancer Bioinformatics Training at BioTED"),
  photo(
    "fb-img-1581443315743",
    "Certificate Awarded Upon Successful Completion of Bioinformatics Training",
  ),
  photo("img-20230825-wa0026", "Successful Completion of Next Generation Sequencing Training"),
  photo(
    "img-20220924-175624",
    "Received Trainer Award for Conducting a 7-Day Long Bioinformatics Training",
  ),
];
