// One-time image pipeline: converts the original (huge) legacy images into
// web-sized WebP files under src/assets/images. Re-run after adding new
// originals to legacy/src/assets/img (or point SRC at a new folder).
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "legacy/src/assets/img");
const OUT = path.join(ROOT, "src/assets/images");

// Max width per top-level folder (px). Displayed sizes are roughly half of this (2x for retina).
const MAX_WIDTH = {
  banner: 1600,
  personal: 1400,
  publications: 1200,
  certificates: 1400,
  skills: 192,
};

const SKIP = new Set([
  "logo/FuadLogo.png",
  "personal/asfsadfsd.jpg",
  "personal/IMG-20230825-WA0022.jpg",
]);
const IMAGE_EXT = /\.(png|jpe?g)$/i;

const slug = (name) =>
  name
    .replace(IMAGE_EXT, "")
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (IMAGE_EXT.test(entry.name)) yield full;
  }
}

let before = 0;
let after = 0;
for await (const file of walk(SRC)) {
  const rel = path.relative(SRC, file);
  if (SKIP.has(rel)) continue;
  const [top] = rel.split(path.sep);
  const outDir = path.join(OUT, path.dirname(rel));
  const outFile = path.join(outDir, `${slug(path.basename(rel))}.webp`);
  await mkdir(outDir, { recursive: true });
  await sharp(file)
    .rotate() // respect EXIF orientation from phone cameras
    .resize({ width: MAX_WIDTH[top] ?? 1400, withoutEnlargement: true })
    .webp({ quality: top === "skills" ? 90 : 78, effort: 5 })
    .toFile(outFile);
  before += (await stat(file)).size;
  after += (await stat(outFile)).size;
  console.log(`✓ ${rel} → ${path.relative(ROOT, outFile)}`);
}
const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
console.log(`\nDone: ${mb(before)} → ${mb(after)}`);
