import {
    sourceLanguageTag,
    availableLanguageTags,
    type AvailableLanguageTag,
} from "@libs/paraglide/runtime";

import * as m from "@paraglide/messages";

export const mt = m as {
    [key: string]: (
        params: any,
        options?: { languageTag?: AvailableLanguageTag }
    ) => string;
};

export type Hreflang = Partial<{
    [key in AvailableLanguageTag]: string;
}>;

export const localizePath = (
    path: string,
    lang: AvailableLanguageTag,
    hreflang?: Hreflang[],
    originalTag?: string
): string => {
    if (originalTag) {
        // it's a blog tag page
        return `/${lang}/blog/tags/${resolveTag(originalTag, lang)}`;
    }
    if (hreflang) {
        // usually a blog post
        const href = hreflang.find((item) => Object.keys(item).includes(lang));
        if (href) {
            if (!href[lang]!.startsWith("/")) {
                return `/${href[lang]}`;
            }
            return href[lang]!;
        }
    }
    if (path.startsWith("/")) {
        path = path.slice(1);
    }
    const parts = path.split("/");
    if (lang === sourceLanguageTag && parts[0] !== "blog") {
        return `/${path}`;
    }
    return `/${lang}/${path}`;
};

export const languageFromPath = (path: string): AvailableLanguageTag => {
    if (path.startsWith("/")) {
        path = path.slice(1);
    }
    const parts = path.split("/");
    if (availableLanguageTags.includes(parts[0] as AvailableLanguageTag)) {
        return parts[0] as AvailableLanguageTag;
    }
    return sourceLanguageTag;
};

export const removeLanguageFromPath = (path: string): string => {
    if (path.startsWith("/")) {
        path = path.slice(1);
    }
    const parts = path.split("/");
    if (availableLanguageTags.includes(parts[0] as AvailableLanguageTag)) {
        parts.splice(0, 1);
    }
    return parts.join("/");
};

export function getRouteFromUrl(url: URL): string {
    const pathname = new URL(url).pathname;
    const parts = pathname?.split("/");
    parts.shift();

    if (parts.length === 0) {
        return "/";
    }

    if (availableLanguageTags.includes(parts[0] as AvailableLanguageTag)) {
        parts.shift();
    }

    return "/" + parts.join("/");
}

export function resolveTag(
    tag: string,
    languageTag: AvailableLanguageTag
): string {
    return mt[`tags_${tag}`] ? mt[`tags_${tag}`](null, { languageTag }) : tag;
}
