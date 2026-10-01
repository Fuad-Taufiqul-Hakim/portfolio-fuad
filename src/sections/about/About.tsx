import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  return (
    <Section id="about" {...sectionTitles.about}>
      <div className="grid items-start gap-10 md:grid-cols-[18rem_1fr] lg:gap-16">
        <Reveal className="relative mx-auto w-64 md:w-full">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-pink/40 to-brand-teal/40 blur-2xl"
          />
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={600}
            height={750}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-3xl border border-white/20 object-cover shadow-2xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="text-2xl font-semibold">{profile.name}</h3>
          <p className="mt-1 font-medium text-brand-orange">{profile.roles.join(" · ")}</p>
          <div className="mt-6 space-y-4 text-base leading-relaxed sm:text-lg">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-brand-pink" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 hover:text-brand-pink"
            >
              <Mail className="size-4 text-brand-pink" /> {profile.email}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
