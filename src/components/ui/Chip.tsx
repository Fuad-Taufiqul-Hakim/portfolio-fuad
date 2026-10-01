import type { ReactNode } from "react";

const tones = {
  teal: "border-brand-teal/30 bg-brand-teal/10 text-teal-800 dark:text-teal-200",
  pink: "border-brand-pink/30 bg-brand-pink/10 text-pink-800 dark:text-pink-200",
  neutral:
    "border-zinc-300 bg-white/60 text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300",
};

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
