"use client";
import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import ServicesCard from "./ServicesCard";
import { FaClock, FaHandSparkles, FaBoxes, FaTruckMoving, FaWarehouse, FaExchangeAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
    const t = useTranslations("Services");
    
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-secondary/5 to-transparent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <SectionHeader name={t("Services")} />
                <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                    {t("ServicesIntro")}
                </p>
            </motion.div>
            
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
            >
                <ServicesCard Icon={FaExchangeAlt} title={t("Service1")} text={t("Service1Info")} />
                <ServicesCard Icon={FaClock} title={t("Service2")} text={t("Service2Info")} />
                <ServicesCard Icon={FaHandSparkles} title={t("Service3")} text={t("Service3Info")} />
                <ServicesCard Icon={FaWarehouse} title={t("Service4")} text={t("Service4Info")} />
                <ServicesCard Icon={FaTruckMoving} title={t("Service5")} text={t("Service5Info")} />
                <ServicesCard Icon={FaBoxes} title={t("Service6")} text={t("Service6Info")} />
            </motion.div>
        </section>
    )
}

export default Services
