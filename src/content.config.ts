import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const pages = defineCollection({
    loader: file('src/data/ogPages.json'),
    schema: z.object({
        title: z.string().nonempty(),
        slug: z.string().nonempty(),
        description: z.string().nonempty(),
        date: z.date().optional(),
    }),
});

export const collections = { pages };
