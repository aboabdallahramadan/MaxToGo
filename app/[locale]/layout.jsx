import "@/public/css/globals.css";
import { getMessages } from 'next-intl/server';
import Image from "next/image";
import { Link } from "@/i18n/routing";
import NavLink from "@/components/NavLink";

export const metadata = {
  title: "Flyttconnect",
  description: "Get shipping and cleaning services easily",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const t = messages.layout;
  return (
    <html lang="en">
      <body>
        <div className="container">
        <header className="h-12 flex justify-between pt-2">
          <div className="h-100 w-40">
            <Image src="/images/logo.png" width={150} height={50} alt="logo" style={{ width: "auto", height: "100%"}} priority/>
          </div>
          <nav className="flex justify-between items-center h-100">
            <ul className="flex gap-10 items-center h-100">
              <NavLink link="#home">{t.Home}</NavLink>
              <NavLink link="#about">{t.About}</NavLink>
              <NavLink link="#services">{t.Services}</NavLink>
              <NavLink link="#contact">{t.Contact}</NavLink>
            </ul>
          </nav>
          <Link href={"/login"}>{t.Login}</Link>
        </header>
        </div>
        {children}
      </body>
    </html>
  );
}
