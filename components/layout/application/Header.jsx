"use client";
import Link from "next/link";
import ApplicationNavLink from "@/components/ApplicationNavLink";
import { useTranslations } from "next-intl";
import { FaBars, FaGlobe, FaHome, FaPlus, FaRing } from "react-icons/fa";
import { useState } from "react";
import LogoutButton from "@/components/LogoutButton";
import { usePathname } from "next/navigation";
import AuthPageHeader from "@/components/AuthPageHeader";
import { BsBellFill, BsChatFill, BsPersonFill } from "react-icons/bs";

const Header = () => {
    const t = useTranslations("Application.Header");
    const pathname = usePathname();
    const languagePattern = /^\/[a-z]{2}/; // Matches language code like /en or /fr
    const strippedPathname = pathname.replace(languagePattern, "");

  let session = true;
  const userName = "mohammad ramadan"

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);


  return (
    <header
      className={"fixed w-full z-50 transition-colors duration-300 bg-secondary"}
    >
      <div className="container h-12 flex justify-between py-2">
        <div className="flex justify-center items-center gap-2">
            <div className="bg-[url(/images/profile.jpg)] bg-center bg-no-repeat bg-cover w-10 h-10 rounded-full">
            </div>
            <p className="text-primary font-bold">{userName}</p>
        </div>
        <nav className="flex justify-between items-center h-100">
          <ul className="items-center h-100 hidden lg:flex">
            <ApplicationNavLink link="/application" active={strippedPathname == "/application"}>{t("Home")}</ApplicationNavLink>
            <ApplicationNavLink link="/application/add-task/transform" active={strippedPathname == "/application/add-task/transform"}>{t("AddTask")}</ApplicationNavLink>
            <ApplicationNavLink link="/application/chats" active={strippedPathname == "/application/chats"}>{t("Chats")}</ApplicationNavLink>
            <ApplicationNavLink link="/application/notifications" active={strippedPathname == "/application/notifications"}>{t("Notifications")}</ApplicationNavLink>
            <ApplicationNavLink link="/application/profile" active={strippedPathname == "/application/profile"}>{t("Profile")}</ApplicationNavLink>
          </ul>
        </nav>

        <div className="flex justify-between items-center">
          <LogoutButton />
          <button
            type="button"
            id="language-dropdown-button"
            className="ml-4"
            aria-controls="language-menu"
            aria-expanded="false"
            onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
          >
            <FaGlobe className={"text-foreground"} />
          </button>
          <button
            type="button"
            id="mobile-dropdown-button"
            className="lg:hidden ml-4 z-[52]"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <FaBars className={"text-foreground" } />
          </button>
        </div>
        {isLanguageMenuOpen && (
          <div
            id="Language-menu"
            className="absolute right-0 top-10 bg-secondary"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              <ul className="flex flex-col justify-between items-center gap-4">
                <li>
                  <Link
                    href="/en/application"
                    className="font-bold ml-4 px-4 py-2 border border-transparent hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded"
                  >
                    {t("English")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sv/application"
                    className="font-bold ml-4 px-4 py-2 border border-transparent hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded"
                  >
                    {t("Swedish")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute right-0 top-0 z-[51] w-1/2 h-screen bg-black/90 border-l border-primary flex flex-col items-center justify-start gap-12"
            >
            <AuthPageHeader name={t("Categories")}/>
            <div className="space-y-1 px-2 pb-3 pt-2 w-full">
              <ul className="flex flex-col justify-between items-start gap-4 w-full">
              <ApplicationNavLink link="/application" func={()=> setIsMobileMenuOpen(false)}>
                <FaHome />{t("Home")}
              </ApplicationNavLink>
              <ApplicationNavLink link="/application/add-task/transform" func={()=> setIsMobileMenuOpen(false)}>
                <FaPlus />{t("AddTask")}
              </ApplicationNavLink>
              <ApplicationNavLink link="/application/chats" func={()=> setIsMobileMenuOpen(false)}>
                <BsChatFill />{t("Chats")}
              </ApplicationNavLink>
              <ApplicationNavLink link="/application/notifications" func={()=> setIsMobileMenuOpen(false)}>
                <BsBellFill />{t("Notifications")}
              </ApplicationNavLink>
              <ApplicationNavLink link="/application/profile" func={()=> setIsMobileMenuOpen(false)}>
                <BsPersonFill />{t("Profile")}
              </ApplicationNavLink>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header