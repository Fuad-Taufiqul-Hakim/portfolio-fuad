import { FlaskConical, Code2, Cpu } from "lucide-react";
import type { ReactNode } from "react";
import { programmingSkills, experimentalSkills, inSilicoSkills } from "@/data/skills";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";

export default function Skills() {
  return (
    <Section id="skills" {...sectionTitles.skills}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass p-6 sm:p-8 lg:col-span-2">
          <CardTitle icon={<Code2 className="size-5" />}>Programming Skills</CardTitle>
          <div className="grid gap-8 md:grid-cols-3">
            {programmingSkills.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  {group.title}
                </h4>
                <ul className="grid grid-cols-3 gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-white/70 p-3 text-center transition hover:-translate-y-0.5 hover:border-brand-pink/40 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <img
                        src={skill.image}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                        className="size-10 object-contain"
                      />
                      <span className="text-xs font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="glass p-6 sm:p-8">
          <CardTitle icon={<FlaskConical className="size-5" />}>Experimental Skills</CardTitle>
          <ul className="flex flex-wrap gap-2">
            {experimentalSkills.map((s) => (
              <li key={s}>
                <Chip tone="teal">{s}</Chip>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="glass p-6 sm:p-8">
          <CardTitle icon={<Cpu className="size-5" />}>In Silico Skills</CardTitle>
          <ul className="flex flex-wrap gap-2">
            {inSilicoSkills.map((s) => (
              <li key={s}>
                <Chip tone="pink">{s}</Chip>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

function CardTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold">
      <span className="grid size-9 place-items-center rounded-lg bg-brand-orange/10 text-brand-orange">
        {icon}
      </span>
      {children}
    </h3>
  );
}
