"use client";
import Image from "next/image";
import { Link as Ilink } from "@/i18n/routing";
import NavLink from "@/components/NavLink";
import { useTranslations } from "next-intl";
import PrimaryLink from "../PrimaryLink";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import AuthPageHeader from "../AuthPageHeader";
import LanguageDropdown from "../LanguageDropdown";
import MovingabModal from "../MovingabModal";

const LayoutHeader = () => {
  const t = useTranslations("Header");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  let session = true;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        hasScrolled ? "bg-secondary" : "bg-transparent"
      }`}
    >
      <div className="container h-14 sm:h-12 flex justify-between py-2">
        <Ilink href={"/"} className="flex items-center justify-center gap-2">
          <Image
            src="/images/small-logo.png"
            width={150}
            height={50}
            alt="logo"
            style={{ width: "auto", height: "100%" }}
            priority
          />
          <span className="text-primary text-lg sm:text-3xl font-bold italic text-nowrap">
            {t("Title")}
          </span>
        </Ilink>
        <nav className="flex justify-between items-center h-100">
          <ul className="px-6 items-center gap-2 h-100 hidden text-base xl:text-xl lg:flex">
            <NavLink link="/#hero">{t("Home")}</NavLink>
            <NavLink link="/#about">{t("About")}</NavLink>
            <li>
              <div className="relative group">
                <ul>
                  <NavLink link="/#company-services">{t("Services")}</NavLink>
                </ul>
                <div className="absolute hidden group-hover:block bg-background shadow-lg rounded-md">
                  <ul className="py-2 flex flex-col gap-2">
                    <NavLink link="/#company-services">
                      {t("CompanyServices")}
                    </NavLink>
                    <NavLink link="/#individual-services">
                      {t("IndividualServices")}
                    </NavLink>
                  </ul>
                </div>
              </div>
            </li>
            <NavLink link="/coming-soon">{t("OurMarket")}</NavLink>
            <NavLink link="/#contact">{t("Contact")}</NavLink>
            <li
              className="cursor-pointer font-bold px-4 py-2 border border-transparent hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded"
              onClick={handleModalOpen}
            >
              {t("Movingab")}
            </li>
          </ul>
        </nav>

        <div className="flex justify-between items-center text-xs sm:text-base">
          {session ? (
            <PrimaryLink link={"/auth/login"}>{t("Login")}</PrimaryLink>
          ) : (
            <PrimaryLink link={"/application"}>{t("GoApp")}</PrimaryLink>
          )}
          <LanguageDropdown />
          <button
            type="button"
            id="mobile-dropdown-button"
            className="lg:hidden ml-4 z-[52]"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <FaBars
              className={`text-lg ${
                hasScrolled ? "text-foreground" : "text-secondary"
              }`}
            />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="px-4 absolute right-0 top-0 z-[51] w-1/2 lg:w-1/2 h-screen bg-black/90 border-l border-primary flex flex-col items-center justify-start gap-12"
          >
            <div className="space-y-1 mt-12 px-2 pb-3 pt-2 w-full text-center">
              <ul className="flex flex-col justify-between items-center gap-4 w-full">
                <NavLink
                  isMobile={true}
                  className="w-full border-b border-b-primary"
                  link="/#"
                  func={() => setIsMobileMenuOpen(false)}
                >
                  {t("Home")}
                </NavLink>
                <NavLink
                  isMobile={true}
                  className="w-full border-b border-b-primary"
                  link="/#about"
                  func={() => setIsMobileMenuOpen(false)}
                >
                  {t("About")}
                </NavLink>
                <li className="w-full">
                  <div className="relative group flex flex-col justify-center items-center gap-2 w-full">
                    <ul className="w-full">
                      <NavLink
                        isMobile={true}
                        className="w-full border-b border-b-primary"
                        link="/#company-services"
                      >
                        {t("Services")}
                      </NavLink>
                    </ul>
                    <div className="hidden group-hover:block bg-background shadow-lg rounded-md">
                      <ul className="py-2 flex flex-col gap-2">
                        <NavLink
                          link="/#company-services"
                          func={() => setIsMobileMenuOpen(false)}
                        >
                          {t("CompanyServices")}
                        </NavLink>
                        <NavLink
                          link="/#individual-services"
                          func={() => setIsMobileMenuOpen(false)}
                        >
                          {t("IndividualServices")}
                        </NavLink>
                      </ul>
                    </div>
                  </div>
                </li>
                <NavLink
                  isMobile={true}
                  className="w-full border-b border-b-primary"
                  link="/coming-soon"
                  func={() => setIsMobileMenuOpen(false)}
                >
                  {t("OurMarket")}
                </NavLink>
                <NavLink
                  isMobile={true}
                  className="w-full border-b border-b-primary"
                  link="/#contact"
                  func={() => setIsMobileMenuOpen(false)}
                >
                  {t("Contact")}
                </NavLink>
                <li
                  className="w-full border-b border-b-primary cursor-pointer font-bold px-4 py-2 hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleModalOpen();
                  }}
                >
                  {t("Movingab")}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <MovingabModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        content={t.rich("MovingabModal" , {br: () => <br/>})}
        buttonText={t("LearnMore")}
        buttonLink="https://movingab.com/"
      />
    </header>
  );
};

export default LayoutHeader;