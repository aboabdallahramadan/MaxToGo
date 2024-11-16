"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaHandshake, FaLeaf, FaUserShield, FaClock } from "react-icons/fa";

const WhyWe = () => {
    const t = useTranslations('whyWe');

    const fadeInUp = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5 }
    };

    return (
        <section className="w-full py-12 my-12">
            <div className="container">
                <div className="flex gap-10 flex-col md:flex-row">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/5 md:max-w-[152px] border-b-2 md:border-b-0 md:border-r-2 border-foreground pr-2"
                    >
                        <h1 className="text-primary text-3xl sm:text-5xl font-bold leading-relaxed text-center">{t("WhyWe")}</h1>
                    </motion.div>
                    <div className="flex-1">
                        <ul className="flex flex-col gap-5 text-xl">
                            <motion.li 
                                {...fadeInUp}
                                transition={{ delay: 0.2 }}
                                whileInView="animate"
                                initial="initial"
                                className="flex items-center gap-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                            >
                                <FaHandshake className="text-primary text-3xl flex-shrink-0" />
                                <div>
                                    <h3 className="text-primary">{t("title1")}</h3>
                                    <p>{t("title1Info")}</p>
                                </div>
                            </motion.li>

                            <motion.li 
                                {...fadeInUp}
                                transition={{ delay: 0.4 }}
                                whileInView="animate"
                                initial="initial"
                                className="flex items-center gap-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                            >
                                <FaLeaf className="text-primary text-3xl flex-shrink-0" />
                                <div>
                                    <h3 className="text-primary">{t("title2")}</h3>
                                    <p>{t("title2Info")}</p>
                                </div>
                            </motion.li>

                            <motion.li 
                                {...fadeInUp}
                                transition={{ delay: 0.6 }}
                                whileInView="animate"
                                initial="initial"
                                className="flex items-center gap-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                            >
                                <FaUserShield className="text-primary text-3xl flex-shrink-0" />
                                <div>
                                    <h3 className="text-primary">{t("title3")}</h3>
                                    <p>{t("title3Info")}</p>
                                </div>
                            </motion.li>

                            <motion.li 
                                {...fadeInUp}
                                transition={{ delay: 0.8 }}
                                whileInView="animate"
                                initial="initial"
                                className="flex items-center gap-4 hover:transform hover:translate-x-2 transition-transform duration-300"
                            >
                                <FaClock className="text-primary text-3xl flex-shrink-0" />
                                <div>
                                    <h3 className="text-primary">{t("title4")}</h3>
                                    <p>{t("title4Info")}</p>
                                </div>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWe;
