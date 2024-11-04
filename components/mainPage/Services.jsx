import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import ServicesCard from "./ServicesCard";
import { FaClock,FaHandSparkles,FaBoxes,FaTruckMoving } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";

const Services = () => {
    const t = useTranslations("Services");
    return (
        <section id="services" >
            <SectionHeader name={t("Services")} />
            <div className="container py-4 flex items-center justify-center flex-col gap-4 md:justify-between md:flex-row md:flex-wrap">
                <ServicesCard Icon={BsArrowsMove} title={t("Service1")} text={t("Service1Info")}></ServicesCard>
                <ServicesCard Icon={FaClock} title={t("Service2")} text={t("Service2Info")}></ServicesCard>
                <ServicesCard Icon={FaHandSparkles} title={t("Service3")} text={t("Service3Info")}></ServicesCard>
                <ServicesCard Icon={FaBoxes} title={t("Service4")} text={t("Service4Info")}></ServicesCard>
                <ServicesCard Icon={FaTruckMoving} title={t("Service5")} text={t("Service5Info")}></ServicesCard>
                <ServicesCard Icon={FaTruckMoving} title={t("Service6")} text={t("Service6Info")}></ServicesCard>
            </div>
        </section>
    )
}

export default Services