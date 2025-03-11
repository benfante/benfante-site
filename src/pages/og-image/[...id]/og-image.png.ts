import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import OgImage from "@components/OgImage";
import { getCollection } from "astro:content";

const robotoData = await fs.readFile(
    "node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"
);
const robotoBoldData = await fs.readFile(
    "node_modules/@fontsource/roboto/files/roboto-latin-700-normal.woff"
);

export const GET: APIRoute = async function get({ params, props, request }) {
    const element = await OgImage({
        title: props.data.title,
        description: props.data.description,
    });

    const svg = await satori(element, {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: "Roboto",
                data: robotoData,
            },
            {
                name: "Roboto Bold",
                data: robotoBoldData,
            },
        ],
    });

    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    return new Response(png, {
        headers: {
            "Content-Type": "image/png",
        },
    });
};

export async function getStaticPaths() {
    const pages = await getCollection("pages");
    const pagesPaths = pages.map((page) => {
        return {
            params: { id: page.id },
            props: page,
        };
    });

    const blog = await getCollection("blog");
    const blogPaths = blog.map((post) => {
        const parts = post.id.split("/");
        parts.splice(1, 0, "blog");
        return {
            params: { id: parts.join("/") },
            props: post,
        };
    });

    console.log([...pagesPaths, ...blogPaths]);

    return [...pagesPaths, ...blogPaths];
}
