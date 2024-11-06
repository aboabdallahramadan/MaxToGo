"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const ChangingTitle = () => {
    const t = useTranslations("Hero");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const words = ["Moving", "Transport&Logistics", "Cleaning", "Sustainable"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => 
                    prevIndex === words.length - 1 ? 0 : prevIndex + 1
                );
                setFade(true);
            }, 500);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="block">
            <strong className={`text-xl min-[400px]:text-2xl
                        md:text-4xl font-extrabold text-primary flex w-full text-nowrap justify-center gap-2`}>
                <span>
                    {t("ProjectTitle")}
                </span>
                <span 
                    className={`
                        inline-block 
                        transition-opacity 
                        duration-500
                        text-nowrap
                        text-white
                        
                        min-w-[120px]
                        sm:min-w-[250px]
                        ${fade ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    {t(words[currentWordIndex])}
                </span>
            </strong>
        </div>
    );
};

export default ChangingTitle;
