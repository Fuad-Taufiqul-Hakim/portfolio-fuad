import { ExternalLink as ExternalIcon } from "lucide-react";
import { publications } from "@/data/publications";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink } from "@/components/ui/Button";
import { buttonStyles } from "@/components/ui/buttonStyles";

export default function Publications() {
  return (
    <Section id="publications" {...sectionTitles.publications}>
      <ul className="space-y-6">
        {publications.map((pub) => (
          <li key={pub.doi}>
            <Reveal className="glass group grid overflow-hidden md:grid-cols-[18rem_1fr]">
              <div className="flex items-center justify-center overflow-hidden bg-white p-4">
                <img
                  src={pub.image}
                  alt={`Graphical abstract: ${pub.title}`}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="max-h-56 w-full object-contain transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <h3 className="text-lg leading-snug font-semibold">{pub.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium text-zinc-900 dark:text-zinc-200">To cite: </span>
                  {pub.citation}
                </p>
                <ExternalLink href={pub.doi} className={`${buttonStyles.ghost} mt-5 self-start`}>
                  Read paper <ExternalIcon className="size-4" />
                </ExternalLink>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
