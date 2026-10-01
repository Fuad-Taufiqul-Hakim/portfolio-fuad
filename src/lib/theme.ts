export type Theme = "light" | "dark";

export const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Storage unavailable (private mode etc.) — theme still applies for this visit.
  }
}
