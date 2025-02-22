import { useState } from "react";
import * as m from "@paraglide/messages"
import { type AvailableLanguageTag, languageTag } from "@libs/paraglide/runtime";
import { localizePath } from "@libs/i18n";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const manuItems = [
    { label: m.blog(), path: localizePath("/blog", languageTag()) },
    { label: m.curriculum(), path: localizePath("/cv", languageTag()) },
  ];

  return (
    <>
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>

        <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
          {" "}
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            {manuItems.map((item) => (
              <li key={item.label} className="border-b border-gray-400 my-8">
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        {manuItems.map((item) => (
          <li key={item.label}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: var(--color-background);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
}
