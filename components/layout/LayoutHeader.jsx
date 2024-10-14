"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import NavLink from "@/components/NavLink";
import { useTranslations } from "next-intl";
import PrimaryLink from "../PrimaryLink";
import {FaBars} from "react-icons/fa";
import { useState } from "react";


const LayoutHeader = () => {
    const t = useTranslations('Header');

    let session = true;

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="container fixed">
      <header className="h-12 flex justify-between pt-2">
          <div className="h-100 w-40">
          <Image src="/images/logo.png" width={150} height={50} alt="logo" style={{ width: "auto", height: "100%"}} priority/>
          </div>
          <nav className="flex justify-between items-center h-100">
          <ul className="items-center h-100 hidden sm:flex">
              <NavLink link="#">{t("Home")}</NavLink>
              <NavLink link="#about">{t("About")}</NavLink>
              <NavLink link="#services">{t("Services")}</NavLink>
              <NavLink link="#contact">{t("Contact")}</NavLink>
          </ul>
          </nav>
          <div className="flex justify-between items-center">
            {(session ? <PrimaryLink link={"/login"}>{t("Login")}</PrimaryLink> : <PrimaryLink link={"/app"}>{t("GoApp")}</PrimaryLink>)}
            <button
              type='button'
              id='mobile-dropdown-button'
              className='sm:hidden ml-4'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            ><FaBars className="text-secondary"/></button>
          </div>
          {
            isMobileMenuOpen && (
              <div id='mobile-menu' className="absolute right-0 top-10 bg-secondary">
                <div className='space-y-1 px-2 pb-3 pt-2'>
                  <ul className="flex flex-col justify-between items-center gap-4">
                    <NavLink link="#">{t("Home")}</NavLink>
                    <NavLink link="#about">{t("About")}</NavLink>
                    <NavLink link="#services">{t("Services")}</NavLink>
                    <NavLink link="#contact">{t("Contact")}</NavLink>
                  </ul>
                </div>
              </div>
            )
          }
      </header>
    </div>
  )
}

export default LayoutHeader