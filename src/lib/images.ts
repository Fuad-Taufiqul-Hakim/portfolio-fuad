// Every optimized image under src/assets/images, keyed by its path without extension,
// e.g. img("skills/python") → hashed URL. Run `npm run optimize-images` to (re)generate them.
const images = import.meta.glob<string>("../assets/images/**/*.webp", {
  eager: true,
  import: "default",
});

export function img(path: string): string {
  const url = images[`../assets/images/${path}.webp`];
  if (!url) throw new Error(`Image not found: src/assets/images/${path}.webp`);
  return url;
}
