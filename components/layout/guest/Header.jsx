"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as Ilink } from "@/i18n/routing";
import NavLink from "@/components/NavLink";
import { useTranslations } from "next-intl";
import PrimaryLink from "@/components/PrimaryLink";
import { FaBars, FaGlobe } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const t = useTranslations("Header");

  let session = true;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);


  return (
    <header
      className={"fixed w-full z-50 transition-colors duration-300 bg-secondary"}
    >
      <div className="container h-12 flex justify-between py-2">
        <div className="h-100 w-40">
          <Ilink href={"/"}>
            <Image
              src="/images/logo.png"
              width={150}
              height={50}
              alt="logo"
              style={{ width: "auto", height: "100%" }}
              priority
            />
          </Ilink>
        </div>
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
            <PrimaryLink link={"/login"}>{t("Login")}</PrimaryLink>
          ) : (
            <PrimaryLink link={"/application"}>{t("GoApp")}</PrimaryLink>
          )}
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
            className="sm:hidden ml-4"
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
                    href="/en"
                    className="font-bold ml-4 px-4 py-2 border border-transparent hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded"
                  >
                    {t("English")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sv"
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
            className="absolute right-0 top-10 bg-secondary"
          >
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