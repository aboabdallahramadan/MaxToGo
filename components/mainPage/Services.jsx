import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import ServicesCard from "./ServicesCard";
import { FaClock,FaHandSparkles,FaBoxes,FaTruckMoving } from "react-icons/fa";
import { BsArrowsMove } from "react-icons/bs";
import { Link } from "@/i18n/routing";

const Services = () => {
    const t = useTranslations("Services");
    return (
        <section id="services" >
            <SectionHeader name={t("Services")} />
            <div className="container py-4 flex items-center justify-center flex-col gap-4 md:justify-between md:flex-row md:flex-wrap">
                <Link href={"/guest/tasks/moving"}><ServicesCard Icon={BsArrowsMove} title={t("Service1")} text={t("Service1Info")}></ServicesCard></Link>
                <ServicesCard Icon={FaClock} title={t("Service2")} text={t("Service2Info")}></ServicesCard>
                <Link href={"/guest/tasks/cleaning"}><ServicesCard Icon={FaHandSparkles} title={t("Service3")} text={t("Service3Info")}></ServicesCard></Link>
                <Link href={"/guest/tasks/warehousing"}><ServicesCard Icon={FaBoxes} title={t("Service4")} text={t("Service4Info")}></ServicesCard></Link>
                <Link href={"/guest/tasks/empty-car"}><ServicesCard Icon={FaTruckMoving} title={t("Service5")} text={t("Service5Info")}></ServicesCard></Link>
                <ServicesCard Icon={FaTruckMoving} title={t("Service6")} text={t("Service6Info")}></ServicesCard>
            </div>
        </section>
    )
}

export default Services