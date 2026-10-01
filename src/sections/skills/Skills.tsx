import { Code2, Cpu, FlaskConical } from "lucide-react";
import type { ReactNode } from "react";
import { experimentalSkills, inSilicoSkills, programmingSkills } from "@/data/skills";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <Section id="skills" {...sectionTitles.skills}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass p-6 sm:p-8 lg:col-span-2">
          <CardTitle icon={<Code2 className="size-5" />}>Programming Skills</CardTitle>
          <div className="grid gap-8 lg:grid-cols-3">
            {programmingSkills.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  {group.title}
                </h4>
                {/* Equal-width grid columns + fixed height → every tile is the same size. */}
                <ul className="grid grid-cols-3 gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/70 transition hover:-translate-y-0.5 hover:border-brand-pink/40 hover:shadow-lg hover:shadow-brand-pink/10 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <img
                        src={skill.image}
                        alt=""
                        width={36}
                        height={36}
                        loading="lazy"
                        className="size-9 object-contain"
                      />
                      <span className="text-xs font-medium whitespace-nowrap">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="glass p-6 sm:p-8">
          <CardTitle icon={<FlaskConical className="size-5" />} count={experimentalSkills.length}>
            Experimental Skills
          </CardTitle>
          <SkillList items={experimentalSkills} tone="teal" />
        </Reveal>

        <Reveal delay={0.1} className="glass p-6 sm:p-8">
          <CardTitle icon={<Cpu className="size-5" />} count={inSilicoSkills.length}>
            <em>In Silico</em> Skills
          </CardTitle>
          <SkillList items={inSilicoSkills} tone="pink" />
        </Reveal>
      </div>
    </Section>
  );
}

const listTones = {
  teal: {
    dot: "bg-brand-teal shadow-[0_0_10px] shadow-brand-teal/70",
    hover: "hover:border-brand-teal/50 hover:bg-brand-teal/5",
  },
  pink: {
    dot: "bg-brand-pink shadow-[0_0_10px] shadow-brand-pink/70",
    hover: "hover:border-brand-pink/50 hover:bg-brand-pink/5",
  },
};

function SkillList({ items, tone }: { items: string[]; tone: keyof typeof listTones }) {
  const t = listTones[tone];
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/60 px-3.5 py-2.5 text-sm transition dark:border-white/10 dark:bg-white/[0.03] ${t.hover}`}
        >
          <span aria-hidden className={`size-2 shrink-0 rounded-full ${t.dot}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CardTitle({
  icon,
  count,
  children,
}: {
  icon: ReactNode;
  count?: number;
  children: ReactNode;
}) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold">
      <span className="grid size-9 place-items-center rounded-lg bg-brand-orange/10 text-brand-orange">
        {icon}
      </span>
      {children}
      {count !== undefined && (
        <span className="ml-auto rounded-full bg-zinc-900/5 px-2.5 py-0.5 text-xs font-medium text-zinc-500 dark:bg-white/10 dark:text-zinc-400">
          {count}
        </span>
      )}
    </h3>
  );
}
