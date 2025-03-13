import {
    EnglishFlagIcon,
    ItalianFlagIcon,
    OkIcon,
    OpenMenuIcon,
    WorldIcon,
} from "@libs/icons";
import {
    availableLanguageTags,
    type AvailableLanguageTag,
    languageTag,
    sourceLanguageTag,
} from "@paraglide/runtime.js";
import * as m from "@paraglide/messages";
import { getRouteFromUrl, localizePath, type Hreflang } from "@libs/i18n";

interface LanguageMenuProps {
    url: URL;
    hreflang?: Hreflang[];
    originalTag?: string;
}

const LanguageMenu: React.FunctionComponent<LanguageMenuProps> = ({ url, hreflang, originalTag }) => {
    const currentRoute = getRouteFromUrl(url);

    const flags = {
        it: <ItalianFlagIcon className="w-8 h-8 mr-2" />,
        en: <EnglishFlagIcon className="w-8 h-8 mr-2" />,
    };

    return (
        <>
            <div className="relative inline-block text-left dropdown">
                <span>
                    <button
                        className="inline-flex justify-center w-full px-2 py-2 font-medium leading-5 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-controls="headlessui-menu-items-117"
                    >
                        <WorldIcon className="w-5 h-5" />
                        <OpenMenuIcon className="w-5 h-5 ml-2 -mr-1" />
                    </button>
                </span>
                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div
                        className="absolute right-0 mt-2 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-950 divide-y divide-gray-100 rounded-md shadow-lg dark:shadow-gray-400 outline-none"
                        aria-labelledby="headlessui-menu-button-1"
                        id="headlessui-menu-items-117"
                        role="menu"
                    >
                        <div className="py-1">
                            {availableLanguageTags.map(
                                (language: AvailableLanguageTag) => (
                                    <a
                                        href={localizePath(
                                            currentRoute,
                                            language,
                                            hreflang,
                                            originalTag
                                        )}
                                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                        role="menuitem"
                                        key={language}
                                        aria-label={language}
                                    >
                                        <div className="flex justify-between items-center w-full">
                                            <span className="flex items-center">
                                                {flags[language]}
                                                {m[`${language}_lang`]()}
                                            </span>
                                            <span>
                                                {language === languageTag() ? (
                                                    <OkIcon className="w-4 h-4 text-green-600" />
                                                ) : (
                                                    " "
                                                )}
                                            </span>
                                        </div>
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .dropdown:focus-within .dropdown-menu {
            opacity:1;
            transform: translate(0) scale(1);
            visibility: visible;
        }
    `}</style>
        </>
    );
};

export default LanguageMenu;
