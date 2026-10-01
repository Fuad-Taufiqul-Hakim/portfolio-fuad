import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  // three.js (~240 kB gzip) is lazy-loaded on desktop only, so a larger limit is fine.
  build: { target: "es2022", chunkSizeWarningLimit: 1000 },
});
