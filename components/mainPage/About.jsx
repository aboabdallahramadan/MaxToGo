import { useTranslations } from "next-intl";


const About = () => {
    const t = useTranslations("About");
    return (
        <section id="about">
            <div className="container flex justify-center items-center gap-4 flex-col sm:flex-row sm:justify-between py-4">
                <div className="w-full sm:w-4/6 relative h-[63rem]">
                    <div className="bg-[url(/images/about1.jpg)] bg-center w-5/6 h-[50rem] absolute bottom-0 left-0 bg-cover rounded-xl">
                    </div>
                    <div className="absolute bg-[url(/images/about2.jpg)] w-3/6 top-0 right-0 h-[25rem] bg-center bg-clip-content bg-cover rounded-xl">
                    </div>
                </div>
                
                <div className="w-full sm:w-2/6 logoMark relative">
                    <h3 className="text-primary text-center text-4xl pb-9">{t("About")}</h3>
                    <p className="text-center text-xl leading-8">{t("AboutInfo")}</p>
                </div>
            </div>
        </section>
    )
}

export default About