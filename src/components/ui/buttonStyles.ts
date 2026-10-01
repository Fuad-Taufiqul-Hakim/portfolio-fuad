const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition active:scale-[0.98]";

export const buttonStyles = {
  primary: `${base} bg-gradient-to-r from-brand-pink to-brand-orange text-white shadow-lg shadow-brand-pink/25 hover:shadow-brand-pink/40 hover:brightness-110`,
  ghost: `${base} border border-zinc-300 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-900/5 dark:border-white/15 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-white/5`,
};
