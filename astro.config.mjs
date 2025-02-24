// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import paraglide from "@inlang/paraglide-astro";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "it",
    fallback: {
      en: "it",
    },
    routing: {
      fallbackType: "rewrite",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), paraglide({
    project: "./project.inlang",
    outdir: "./src/libs/paraglide",
  }), icon()],
});