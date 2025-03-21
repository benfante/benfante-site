// @ts-check
import { defineConfig } from "astro/config";
import rehypeMermaid from "rehype-mermaid";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import paraglide from "@inlang/paraglide-astro";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'

// https://astro.build/config
export default defineConfig({
    site: "http://www.benfante.com",
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
    markdown: {
        syntaxHighlight: {
            type: "shiki",
            excludeLangs: ["mermaid", "math"],
        },
        rehypePlugins: [rehypeMermaid],
        // shikiConfig: {
        //     themes: {
        //         light: "github-light",
        //         dark: "github-dark",
        //     },
        //     wrap: true,
        //     transformers: []
        // },
    },
    integrations: [
        react(),
        paraglide({
            project: "./project.inlang",
            outdir: "./src/libs/paraglide",
        }),
        icon(),
        sitemap({
            i18n: {
                defaultLocale: "it",
                locales: {
                    it: "it-IT",
                    en: "en-US",
                },
            },
        }),
        expressiveCode({
            defaultProps: {
                // Enable word wrap by default
                wrap: true,
                // Disable wrapped line indentation for terminal languages
                overridesByLang: {
                    "bash,ps,sh": { preserveIndent: false },
                },                
            },
            themes: [ "github-dark", "github-light" ],
            themeCssSelector: (theme) => `[data-theme="${theme.name.split("-")[1]}"]`,
            useDarkModeMediaQuery: true,
            plugins: [pluginCollapsibleSections()],
        }),
    ],
});
