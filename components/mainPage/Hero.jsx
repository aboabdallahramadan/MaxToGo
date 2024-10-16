import { useTranslations } from "next-intl";
import SecondaryLink from "../SecondaryLink";

const Hero = () => {
    const t = useTranslations("Hero");
    return (
        <section
        className="relative bg-[url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat flex justify-center items-center"
        id="hero">
            <div
                className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/75 sm:to-black/25 sm:bg-gradient-to-r"
            ></div>
            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-center">
                    {t('info')}

                        <strong className="block font-extrabold text-primary"> Flytt-connect </strong>
                    </h1>

                    <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
                        <a
                        href=""
                        className="bg-primary text-secondary flex justify-center items-center px-3 py-2 whitespace-nowrap rounded"
                        >
                        {t("Downland")}
                        </a>

                        <SecondaryLink link={"/guest/works"}>
                            {t("Join")}
                        </SecondaryLink>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero