import { Expand } from "lucide-react";
import { album } from "@/data/album";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink } from "@/components/ui/Button";

export default function Album() {
  return (
    <Section id="album" {...sectionTitles.album}>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {album.map((photo, i) => (
          <li key={photo.src}>
            <Reveal delay={(i % 3) * 0.08}>
              <ExternalLink
                href={photo.src}
                aria-label={`Open photo: ${photo.caption}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-white/10"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  width={700}
                  height={525}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pt-12 pb-4">
                  <span className="mb-2 block h-0.5 w-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-orange transition-all duration-500 group-hover:w-16" />
                  <p className="text-sm leading-snug font-medium text-white">{photo.caption}</p>
                </div>
                <span className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <Expand className="size-4" />
                </span>
              </ExternalLink>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
