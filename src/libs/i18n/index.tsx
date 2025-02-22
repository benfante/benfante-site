import {
    sourceLanguageTag,
    availableLanguageTags,
    type AvailableLanguageTag,
} from "@libs/paraglide/runtime";

export const localizePath = (path: string, lang: AvailableLanguageTag) => {
    if (lang === sourceLanguageTag) {
        return path;
    }
    return `/${lang}${path}`;
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
