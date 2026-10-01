import { useEffect } from "react";
import { certificateCategories } from "@/data/certificates";
import { sectionTitles } from "@/data/site";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink } from "@/components/ui/Button";

const total = certificateCategories.reduce((n, c) => n + c.certificates.length, 0);

export default function CertificatesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Certificates — Fuad Taufiqul Hakim";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
      <SectionHeading {...sectionTitles.certificates} />
      <p className="-mt-6 mb-8 text-zinc-600 dark:text-zinc-400">
        {total} certificates across {certificateCategories.length} areas.
      </p>

      <nav aria-label="Certificate categories" className="mb-12 flex flex-wrap gap-2">
        {certificateCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-full border border-zinc-300 px-3.5 py-1.5 text-sm transition hover:border-brand-pink hover:text-brand-pink dark:border-white/10"
          >
            {cat.title} <span className="text-zinc-400">{cat.certificates.length}</span>
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        {certificateCategories.map((cat) => (
          <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-title`}>
            <h2
              id={`${cat.id}-title`}
              className="mb-6 flex items-center gap-3 text-2xl font-semibold"
            >
              <span
                aria-hidden
                className="h-6 w-1 rounded-full bg-gradient-to-b from-brand-pink to-brand-orange"
              />
              {cat.title}
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.certificates.map((c, i) => (
                <li key={c.image}>
                  <Reveal delay={(i % 3) * 0.06} className="glass group h-full overflow-hidden">
                    <ExternalLink
                      href={c.image}
                      aria-label={`Open full-size certificate from ${c.organization}`}
                      className="block aspect-[4/3] bg-white p-3"
                    >
                      <img
                        src={c.image}
                        alt={`${cat.title} certificate from ${c.organization}`}
                        width={600}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-contain transition duration-500 group-hover:scale-[1.03]"
                      />
                    </ExternalLink>
                    <p className="px-4 py-3 text-sm">
                      <span className="text-zinc-500">Offered by </span>
                      <span className="font-medium text-zinc-900 dark:text-white">
                        {c.organization}
                      </span>
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
