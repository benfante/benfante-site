import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pages = defineCollection({
    loader: file("src/data/ogPages.json"),
    schema: z.object({
        title: z.string().nonempty(),
        slug: z.string().nonempty(),
        description: z.string().nonempty(),
        date: z.date().optional(),
    }),
});

const blog = defineCollection({
    loader: glob({pattern: "**/*.(md|mdx)", base: "src/content/blog"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
        hreflang: z.array(z.record(z.string(), z.string())).optional(),
        discussionId: z.number().optional(),
    }),
});

export const collections = { pages, blog };
