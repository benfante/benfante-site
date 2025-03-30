import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { languageFromPath, localizePath, removeLanguageFromPath } from "@libs/i18n";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

type Context = {
    site: string;
    url: URL;
};

export async function GET(context: Context): Promise<Response> {
    const blog = await getCollection("blog");
    return rss({
        title: "Lucio Benfante’s Blog",
        description: "Personal Blog of Lucio Benfante",
        site: context.url.origin,
        stylesheet: `/rss/pretty-feed-v3.xsl`,
        items: blog.map((post) => {
            const lang = languageFromPath(post.id);
            const path = removeLanguageFromPath(post.id);
            const link = localizePath(`blog/${path}`, lang);
            return {
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                // Compute RSS link from post `id`
                // This example assumes all posts are rendered as `/blog/[id]` routes
                link: link,
                content: sanitizeHtml(parser.render(post.body!), {
                    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
                }),
                categories: post.data.tags,
                customData: `<language>${lang}</language>`,
                author: 'lucio@benfante.com',
                commentsUrl: `${link}#comments_section`,                
            };
        }),
    });
}
