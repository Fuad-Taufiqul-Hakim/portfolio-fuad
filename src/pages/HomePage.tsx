import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Experience from "@/sections/experience/Experience";
import Education from "@/sections/education/Education";
import Skills from "@/sections/skills/Skills";
import Album from "@/sections/album/Album";
import Publications from "@/sections/publications/Publications";
import Contact from "@/sections/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Album />
      <Publications />
      <Contact />
    </>
  );
}
