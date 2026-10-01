import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { ExternalLink } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-zinc-900 dark:text-white">
            <span className="text-brand-pink">&lt;</span> {profile.name}{" "}
            <span className="text-brand-pink">/&gt;</span>
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.href}>
              <ExternalLink
                href={s.href}
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full text-xl text-zinc-600 transition hover:bg-zinc-900/5 hover:text-brand-pink dark:text-zinc-400 dark:hover:bg-white/10"
              >
                {s.icon}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
