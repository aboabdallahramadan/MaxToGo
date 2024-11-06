import { useTranslations } from "next-intl";
import SecondaryLink from "../SecondaryLink";
import { Link } from "@/i18n/routing";
import ChangingTitle from "./hero/ChangingTitle";
import DownloadAppButton from "./hero/DownloadAppButton";

const Hero = () => {
    const t = useTranslations("Hero");
    return (
        <section
        className="relative bg-[url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat flex justify-center items-center"
        id="hero">
            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-center">
                        <ChangingTitle />
                        <p className="mt-4 text-2xl">{t('info')}</p>

                    </h1>

                    <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                        <DownloadAppButton />
                        <a
                            href="https://www.movingab.com/se"
                            className="bg-primary text-secondary flex justify-center items-center px-3 py-2 whitespace-nowrap rounded"
                            target="_blank"
                        >
                            {t("Movingab")}
                        </a>
                        <Link
                            href="/coming-soon"
                            className="bg-primary text-secondary flex justify-center items-center px-3 py-2 whitespace-nowrap rounded"
                            target="_blank"
                        >
                            {t("OurMarket")}
                        </Link>
                        <SecondaryLink link={"/auth/login"}>
                            {t("Join")}
                        </SecondaryLink>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero