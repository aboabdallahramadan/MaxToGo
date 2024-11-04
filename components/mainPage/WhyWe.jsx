import { useTranslations } from "next-intl"

const WhyWe = () => {
    const t = useTranslations('whyWe');
  return (
    <section className="w-full py-12 my-12">
        <div className="container">
            <div className="flex gap-10 flex-col md:flex-row">
                <div className="w-full md:w-1/5 border-b-2 md:border-b-0 md:border-r-2 border-foreground">
                    <h1 className="text-primary text-5xl font-bold leading-relaxed">{t("WhyWe")}</h1>
                </div>
                <div className="flex-1">
                    <ul className="flex flex-col gap-5 text-xl">
                        <li className="flex gap-2">
                            <h3 className="text-primary">{t("title1")}</h3>
                            <p>{t("title1Info")}</p>
                        </li>
                        <li className="flex gap-2">
                            <h3 className="text-primary">{t("title2")}</h3>
                            <p>{t("title2Info")}</p>
                        </li>
                        <li className="flex gap-2">
                            <h3 className="text-primary">{t("title3")}</h3>
                            <p>{t("title3Info")}</p>
                        </li>
                        <li className="flex gap-2">
                            <h3 className="text-primary">{t("title4")}</h3>
                            <p>{t("title4Info")}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default WhyWe