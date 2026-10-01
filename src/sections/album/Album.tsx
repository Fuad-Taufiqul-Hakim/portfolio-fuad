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
            <Reveal delay={(i % 3) * 0.08} className="glass group h-full overflow-hidden">
              <ExternalLink
                href={photo.src}
                className="block aspect-[4/3] overflow-hidden"
                aria-label={`Open photo: ${photo.caption}`}
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
              </ExternalLink>
              <p className="p-4 text-sm leading-relaxed">{photo.caption}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
