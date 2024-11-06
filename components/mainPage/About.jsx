"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaAward, FaHandshake } from "react-icons/fa";

const About = () => {
    const t = useTranslations("About");
    
    const stats = [
        { number: "1500+", label: t("MovesCompleted") },
        { number: "98%", label: t("SatisfiedClients") },
        { number: "10+", label: t("YearsExperience") },
        { number: "50+", label: t("ExpertMovers") }
    ];
    
    return (
        <section id="about" className="py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-transparent">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-semibold text-lg">{t("About")}</span>
                    <h2 className="text-5xl font-bold text-gray-800 dark:text-white mt-4 mb-6">
                        {t("SiteTitle")}
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        {t("welcome")}
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <motion.h3 
                                className="text-4xl font-bold text-primary mb-2"
                                whileHover={{ scale: 1.1 }}
                            >
                                {stat.number}
                            </motion.h3>
                            <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                            {t("WhyChooseUs")}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t("AboutInfo")}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold 
                            hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30 
                            flex items-center gap-2"
                        >
                            <Link href="/guest/about" className="flex items-center gap-2">
                                {t("ReadMore")}
                            </Link>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img 
                            src="/images/about1.jpg" 
                            alt={t("About")} 
                            className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
                            <FaAward className="text-primary text-4xl mb-3" />
                            <h4 className="font-bold text-lg mb-2">{t("CertifiedMovers")}</h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                {t("LicensedAndInsured")}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
