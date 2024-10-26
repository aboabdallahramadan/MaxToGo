import AuthPageHeader from "@/components/AuthPageHeader";
import GoBackButton from "@/components/GoBackButton";
import { useTranslations } from "next-intl";

const Page = () => {
    const t = useTranslations("AboutS");
    
    return (
        <div className="container mx-auto px-4 py-8  overflow-x-hidden ">
            <GoBackButton />
            <AuthPageHeader name={t("MainTitle")}/>
            
            <div className="prose max-w-none mt-6 space-y-8 ">
                <section>
                    <p className="text-foreground">{t("Introduction")}</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary">{t("CollaborationTitle")}</h2>
                    <p className="text-foreground">{t("CollaborationIntro")}</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary">{t("Benefits.Title")}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>{t("Benefits.Point1")}</li>
                        <li>{t("Benefits.Point2")}</li>
                        <li>{t("Benefits.Point3")}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-primary">{t("HowItWorks.Title")}</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">1. {t("HowItWorks.Step1")}</p>
                        </div>
                        <div>
                            <p className="font-semibold">2. {t("HowItWorks.Step2")}</p>
                        </div>
                        <div>
                            <p className="font-semibold">3. {t("HowItWorks.Step3")}</p>
                        </div>
                        <div>
                            <p className="font-semibold">4. {t("HowItWorks.Step4")}</p>
                        </div>
                        <div>
                            <p className="font-semibold">5. {t("HowItWorks.Step5")}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
