import { lazy, Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";
import { profile, focusAreas } from "@/data/profile";
import { socials } from "@/data/socials";
import { ButtonLink, ExternalLink } from "@/components/ui/Button";
import { buttonStyles } from "@/components/ui/buttonStyles";
import { Reveal } from "@/components/ui/Reveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const DnaHelix = lazy(() => import("@/components/three/DnaHelix"));

export default function Hero() {
  // Only pay for WebGL on large screens for users who haven't asked for reduced motion.
  const show3d = useMediaQuery("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-3 py-1 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span className="size-2 animate-pulse rounded-full bg-brand-teal" />
            {profile.greeting}
          </p>
          <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 h-9 font-display text-2xl font-medium text-zinc-800 sm:text-3xl dark:text-zinc-100">
            <TypeAnimation
              sequence={profile.roles.flatMap((role) => [role, 1500])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              aria-label={profile.roles.join(", ")}
            />
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink to="/#contact">
              Get in touch <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink to="/#publications" variant="ghost">
              Publications
            </ButtonLink>
            {socials.map((s) => (
              <ExternalLink
                key={s.href}
                href={s.href}
                aria-label={s.label}
                className={`${buttonStyles.ghost} size-11 !p-0 text-lg`}
              >
                {s.icon}
              </ExternalLink>
            ))}
          </div>
        </Reveal>

        <div aria-hidden className="relative hidden h-[30rem] lg:block">
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-brand-pink/25 via-brand-orange/10 to-brand-teal/25 blur-3xl" />
          {show3d && (
            <Suspense fallback={null}>
              <DnaHelix />
            </Suspense>
          )}
        </div>
      </div>

      <ul className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
        {focusAreas.map((area, i) => (
          <li key={area.title}>
            <Reveal delay={i * 0.1} className="glass group h-full overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={area.image}
                  alt=""
                  width={800}
                  height={450}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {area.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
