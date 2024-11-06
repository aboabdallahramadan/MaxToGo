"use client";
import Image from "next/image";
import { Link as Ilink } from "@/i18n/routing";
import NavLink from "@/components/NavLink";
import { useTranslations } from "next-intl";
import PrimaryLink from "@/components/PrimaryLink";
import { FaBars} from "react-icons/fa";
import { useState } from "react";
import AuthPageHeader from "@/components/AuthPageHeader";
import LanguageDropdown from "@/components/LanguageDropdown";

const Header = () => {
    const t = useTranslations("Header");

  let session = true;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header
      className={"fixed w-full z-50 transition-colors duration-300 bg-secondary"}
    >
      <div className="container h-12 flex justify-between py-2">
        <Ilink href={"/"} className="flex items-center justify-center gap-2">
          <Image
            src="/images/small-logo.png"
            width={150}
            height={50}
            alt="logo"
            style={{ width: "auto", height: "100%" }}
            priority
          />
          <span className="text-primary text-lg sm:text-3xl font-extrabold text-nowrap">{t("Title")}</span>
        </Ilink>
        <nav className="flex justify-between items-center h-100">
          <ul className="items-center h-100 hidden sm:flex">
            <NavLink link="/#hero">{t("Home")}</NavLink>
            <NavLink link="/#about">{t("About")}</NavLink>
            <NavLink link="/#services">{t("Services")}</NavLink>
            <NavLink link="/#contact">{t("Contact")}</NavLink>
          </ul>
        </nav>

        <div className="flex justify-between items-center">
          {session ? (
            <PrimaryLink link={"/auth/login"}>{t("Login")}</PrimaryLink>
          ) : (
            <PrimaryLink link={"/application"}>{t("GoApp")}</PrimaryLink>
          )}
          <LanguageDropdown />
          <button
            type="button"
            id="mobile-dropdown-button"
            className="sm:hidden ml-4 z-[52]"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <FaBars className={"text-foreground" } />
          </button>
        </div>
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute right-0 top-0 z-[51] w-1/2 h-screen bg-black/90 border-l border-primary flex flex-col items-center justify-start gap-12"
            >
            <AuthPageHeader name={t("Categories")}/>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <ul className="flex flex-col justify-between items-center gap-4">
              <NavLink link="/#" func={()=> setIsMobileMenuOpen(false)}>{t("Home")}</NavLink>
              <NavLink link="/#about" func={()=> setIsMobileMenuOpen(false)}>{t("About")}</NavLink>
              <NavLink link="/#services" func={()=> setIsMobileMenuOpen(false)}>{t("Services")}</NavLink>
              <NavLink link="/#contact" func={()=> setIsMobileMenuOpen(false)}>{t("Contact")}</NavLink>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header