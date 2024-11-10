import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import Subscribe from "./Subscribe";

const Footer = () => {
    const t = useTranslations('footer');
    
    return (
        <footer className="bottom-0 bg-secondary w-full px-2">
            <div className="container py-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col gap-4">
                        <Image 
                            src="/images/logo.png" 
                            style={{ width: "150px", height: "auto" }} 
                            width={150} 
                            height={75}  
                            alt="logo"
                        />
                        <p className="text-base">{t("AboutUsInfo")}</p>
                        
                        <div className="flex gap-4 mt-1">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                                <FaLinkedin />
                            </a>
                        </div>
                        
                    </div>

                    {/* Explore Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-primary">{t("Explore")}</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/guest/works">{t("WorkWithUs")}</Link></li>
                            <li><Link href="/guest/about">{t("AboutUs")}</Link></li>
                            <li><Link href="/guest/faqs">{t("FAQs")}</Link></li>
                            <li><Link href="/#contact">{t("ContactUs")}</Link></li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-primary">{t("Services")}</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/application">{t("GoToTheApp")}</Link></li>
                            <li><Link href="/#services">{t("OurServices")}</Link></li>
                            <li><Link href="/#individual-tasks">{t("IndividualTasks")}</Link></li>
                            <li><Link href="/coming-soon" target="_blank">{t("OurMarket")}</Link></li>
                            <li><a href="https://movingab.com/se" target="_blank">{t("Movingab")}</a></li>
                            
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-primary">{t("Contact")}</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-xl" />
                                <a href="mailto:test@test.com">test@test.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhone className="text-xl" />
                                <a href="tel:004676-0003008">004676-000 30 08</a>
                            </div>
                            <p>{t("Location")}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <Subscribe />
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-600 mt-8 pt-4">
                    <div className="flex justify-center items-center flex-wrap">
                        <p className="text-sm">© {new Date().getFullYear()} {t("SiteTitle")}. {t("AllRightsReserved")}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
