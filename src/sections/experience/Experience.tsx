import { Briefcase, MapPin, UserRound } from "lucide-react";
import { experience } from "@/data/experience";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export default function Experience() {
  return (
    <Section id="experience" {...sectionTitles.experience}>
      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((job, i) => (
          <Reveal
            key={job.organization}
            delay={i * 0.1}
            className="glass flex h-full flex-col p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-pink/10 text-brand-pink">
                <Briefcase className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{job.organization}</h3>
                <p className="font-medium text-brand-orange">{job.position}</p>
                <p className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-zinc-500">
                  <span>{job.duration}</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" /> {job.place}
                  </span>
                </p>
              </div>
            </div>
            <ul className="mt-6 flex-1 space-y-2.5 text-[0.95rem] leading-relaxed">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-teal"
                  />
                  {item}
                </li>
              ))}
            </ul>
            {job.researchAdvisor && (
              <p className="mt-6 inline-flex items-center gap-2 border-t border-zinc-200 pt-4 text-sm dark:border-white/10">
                <UserRound className="size-4 text-brand-pink" />
                <span className="text-zinc-500">Research Advisor:</span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {job.researchAdvisor}
                </span>
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
