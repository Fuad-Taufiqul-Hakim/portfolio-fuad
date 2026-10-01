import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { sectionTitles } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLink } from "@/components/ui/Button";
import { buttonStyles } from "@/components/ui/buttonStyles";

// Free form-to-email service; get a key at https://web3forms.com and set it in .env.local / Cloudflare.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const inputClass =
  "w-full rounded-xl border border-zinc-300 bg-white/80 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 transition focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/30 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white";

export default function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return; // honeypot filled → bot

    setStatus({ state: "sending" });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${data.name}`,
          from_name: "Portfolio contact form",
        }),
      });
      const json = (await res.json()) as { success: boolean; message?: string };
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error && err.message ? err.message : "Something went wrong.",
      });
    }
  }

  return (
    <Section id="contact" {...sectionTitles.contact}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="glass flex flex-col p-6 sm:p-8">
          <h3 className="text-xl font-semibold">{profile.name}</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Interested in collaborating on research, or just want to say hello? My inbox is open.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-pink/10 text-brand-pink">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-zinc-500">Email</span>
                  <span className="font-medium text-zinc-900 group-hover:text-brand-pink dark:text-white">
                    {profile.email}
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <MapPin className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-zinc-500">Location</span>
                <span className="font-medium text-zinc-900 dark:text-white">
                  {profile.location}
                </span>
              </span>
            </li>
          </ul>
          <div className="mt-auto flex gap-2 pt-8">
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

        <Reveal delay={0.1} className="glass p-6 sm:p-8">
          {status.state === "sent" ? (
            <div
              role="status"
              className="flex h-full flex-col items-center justify-center py-10 text-center"
            >
              <CheckCircle2 className="size-12 text-brand-teal" />
              <h3 className="mt-4 text-xl font-semibold">Message sent!</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus({ state: "idle" })}
                className={`${buttonStyles.ghost} mt-6`}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot: hidden from humans, bots tend to fill it. */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Name</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className={`${inputClass} resize-y`}
                  placeholder="How can I help?"
                />
              </label>

              {!WEB3FORMS_KEY && (
                <p className="rounded-xl bg-brand-orange/10 px-4 py-3 text-sm text-orange-800 dark:text-orange-200">
                  The contact form isn't configured yet — please email{" "}
                  <a className="underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>{" "}
                  directly.
                </p>
              )}
              {status.state === "error" && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300"
                >
                  Couldn't send your message ({status.message}). Please try again or email me
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={!WEB3FORMS_KEY || status.state === "sending"}
                className={`${buttonStyles.primary} w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto`}
              >
                {status.state === "sending" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send message
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
