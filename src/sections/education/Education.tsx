import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export default function Education() {
  return (
    <Section id="education" {...sectionTitles.education}>
      <ol className="relative space-y-8 border-l border-zinc-300 pl-8 sm:ml-4 sm:pl-10 dark:border-white/10">
        {education.map((item) => (
          <li key={`${item.institution}-${item.date}`} className="relative">
            <span
              aria-hidden
              className="absolute top-6 -left-[calc(2rem+1.125rem)] grid size-9 place-items-center rounded-full border border-brand-pink/40 bg-zinc-50 text-brand-pink sm:-left-[calc(2.5rem+1.125rem)] dark:bg-zinc-950"
            >
              <GraduationCap className="size-4" />
            </span>
            <Reveal className="glass p-6">
              <p className="text-sm font-medium text-brand-orange">{item.date}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.institution}</h3>
              <p className="text-sm text-zinc-500">{item.location}</p>
              <p className="mt-3">
                {item.level && (
                  <span className="font-medium text-zinc-900 dark:text-white">{item.level} — </span>
                )}
                {item.department}
              </p>
              <p className="mt-2 inline-block rounded-lg bg-brand-teal/10 px-2.5 py-1 text-sm text-teal-800 dark:text-teal-200">
                {item.result}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
