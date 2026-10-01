import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/layout/ThemeToggle";

// Which nav item each home-page section belongs to.
const sectionToNav: Record<string, string> = {
  top: "/",
  about: "/#about",
  experience: "/#about",
  education: "/#about",
  skills: "/#about",
  album: "/#about",
  publications: "/#publications",
  contact: "/#contact",
};

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";
  const activeSection = useActiveSection(Object.keys(sectionToNav), onHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    onHome ? (activeSection ? sectionToNav[activeSection] : "/") === to : pathname === to;

  const linkClass = (to: string) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition ${
      isActive(to)
        ? "bg-zinc-900/5 text-zinc-900 dark:bg-white/10 dark:text-white"
        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-zinc-200/80 bg-zinc-50/75 backdrop-blur-lg dark:border-white/10 dark:bg-zinc-950/70"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link to="/" className="font-display text-lg font-semibold text-zinc-900 dark:text-white">
          <span className="text-brand-pink">&lt;</span> {profile.shortName}
          <span className="hidden sm:inline">
            {" "}
            {profile.name.split(" ").slice(1).join(" ")}
          </span>{" "}
          <span className="text-brand-pink">/&gt;</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
          <div className="ml-2 border-l border-zinc-200 pl-2 dark:border-white/10">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full text-zinc-700 hover:bg-zinc-900/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200/80 px-4 pb-4 md:hidden dark:border-white/10"
        >
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(link.to)}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
