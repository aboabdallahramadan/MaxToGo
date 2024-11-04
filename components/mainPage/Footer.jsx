import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import Subscribe from "./Subscribe";

const Footer = () => {
    const t = useTranslations('footer');
  return (
    <footer className="bottom-0 bg-secondary w-full">
        <div className="container py-4">
            <div className="flex justify-center items-center flex-col gap-8 flex-wrap md:flex-row md:gap-4">
                <div className="">
                    <Image src="/images/logo.png" style={{ width: "150px", height: "auto" }} width={150} height={75}  alt="logo"/>
                </div>
                <div className="flex flex-col justify-around items-center w-full relative gap-6 sm:gap-1 md:flex-1 sm:flex-row md:w-auto">
                    <div className="flex justify-between items-center gap-4">
                        <FaEnvelope fontSize={30}/>
                        <div className="flex flex-col items-center justify-center">
                            <p className="whitespace-nowrap">{t("MainEmail")}: <a href="mailto: test@test.com">test@test.com</a></p>
                            <p className="whitespace-nowrap">{t("Info")}: <a href="mailto: test@test.com">test@test.com</a></p>
                        </div>
                    </div>
                    <div className="w-1 bg-foreground sm:h-16"></div>
                    <div className="flex justify-between items-center gap-4">
                        <FaPhone fontSize={30}/>
                        <div className="flex flex-col items-center justify-center">
                            <p className="whitespace-nowrap">{t("OfficePhone")}: <a href="tel:+999999999999">+999999999999</a></p>
                            <p className="whitespace-nowrap">{t("Mobile")}: <a href="tel:+999999999999">+999999999999</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center flex-col gap-8 mt-8 md:flex-wrap md:flex-row md:gap-0">
                <div>
                    <h3 className="text-center text-xl mb-2">{t("AboutUs")}</h3>
                    <p>{t("AboutUsInfo")}</p>
                    <p>{t("Location")}</p>
                </div>
                <div>
                    <h3 className="text-center text-xl mb-2">{t("Services")}</h3>
                    <ul className="flex justify-between items-start gap-1 flex-col">
                        <li>
                            <Link href={"/guest/works"}>{t("WorkWithUs")}</Link>
                        </li>
                        <li>
                            <Link href={"/application"}>{t("GoToTheApp")}</Link>
                        </li>
                        <li>
                            <Link href={"/guest/faqs"}>{t("FAQs")}</Link>
                        </li>
                    </ul>
                </div>
                <Subscribe />
            </div>
        </div>
    </footer>
  )
}

export default Footer