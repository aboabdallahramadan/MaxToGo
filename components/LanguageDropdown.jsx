"use client";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

const LanguageDropdown = () => {
  const t = useTranslations("Header");
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
        <button
            type="button"
            id="language-dropdown-button"
            className="ml-4"
            aria-controls="language-menu"
            aria-expanded="false"
            onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
          >
            <FaGlobe className="text-lg text-foreground" />
          </button>
          {isLanguageMenuOpen && (
          <div
            id="Language-menu"
            className="absolute right-0 top-10 bg-secondary"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <ul className="flex flex-col justify-between items-center gap-4">
                <li>
                  <Link
                    href={pathname}
                    locale="en"
                    className="font-bold ml-4 px-4 py-2 border border-transparent hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded"
                  >
                    {t("English")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={pathname}
                    locale="sv"
                    className="font-bold ml-4 px-4 py-2 border border-transparent hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded"
                  >
                    {t("Swedish")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
    </>
  )
}

export default LanguageDropdown
