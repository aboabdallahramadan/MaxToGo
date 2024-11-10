"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const ChangingTitle = () => {
    const t = useTranslations("Hero");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [rotate, setRotate] = useState(true);

    const words = ["Moving", "Transport&Logistics", "Cleaning", "Sustainable"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotate(false);
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => 
                    prevIndex === words.length - 1 ? 0 : prevIndex + 1
                );
                setRotate(true);
            }, 500);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="block">
            <strong className="text-xl flex flex-col min-[400px]:text-2xl md:text-4xl font-extrabold text-primary w-full text-nowrap justify-center gap-2">
                <span>
                    {t("ProjectTitle")}
                </span>
                <span 
                    className={`
                        inline-block 
                        transition-transform 
                        duration-500
                        text-nowrap
                        text-white
                        min-w-[120px]
                        sm:min-w-[250px]
                        ${rotate ? 'rotate-0' : 'rotate-180'}
                    `}
                >
                    {t(words[currentWordIndex])}
                </span>
            </strong>
        </div>
    );
};

export default ChangingTitle;