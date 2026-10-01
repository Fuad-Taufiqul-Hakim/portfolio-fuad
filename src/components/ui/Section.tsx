import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/** Standard page section: consistent width, spacing and heading. */
export function Section({ id, eyebrow, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 ${className}`}>
      <Reveal>
        <SectionHeading eyebrow={eyebrow} title={title} />
      </Reveal>
      {children}
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="mb-10 lg:mb-14">
      <p className="mb-2 flex items-center gap-3 text-sm font-semibold tracking-widest text-brand-pink uppercase">
        <span aria-hidden className="h-px w-8 bg-gradient-to-r from-brand-pink to-brand-orange" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </header>
  );
}
