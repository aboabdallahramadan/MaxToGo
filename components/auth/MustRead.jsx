"use client";
import { useRef,useState } from "react";


const MustRead = ({t, t0, name, formData, handleInputChange, errors}) => {
    const [hasReadTerms, setHasReadTerms] = useState(false);
    const termsRef = useRef(null);

    const handleTermsScroll = (e) => {
        const element = e.target;
        const isAtBottom = Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 1;
        
        if (isAtBottom) {
        setHasReadTerms(true);
        }
    };

  return (
    <div>
        <div>
        <h3 className="text-xl font-bold text-foreground mb-4">{t0('title')}</h3>
        <div 
            ref={termsRef}
            onScroll={handleTermsScroll}
            className="bg-[#1A1A1A] p-6 rounded-lg max-h-96 overflow-y-auto mb-4"
        >
            {Object.keys(t0.raw('sections')).map((section) => (
            <div key={section} className="mb-6">
                <h4 className="text-lg font-bold text-white mb-2">
                {t0(`sections.${section}.title`)}
                </h4>
                {Object.entries(t0.raw(`sections.${section}.content`)).map(([key, _]) => (
                <p key={key} className="text-gray-400 mb-2">
                    {t0(`sections.${section}.content.${key}`)}
                </p>
                ))}
            </div>
            ))}
        </div>
        </div>
        <div className="relative w-full mt-6 flex justify-start items-center gap-2">
        <input 
            name={name} 
            id={name} 
            className="bg-transparent accent-primary" 
            type="checkbox"                 
            checked={formData[name]}
            onChange={handleInputChange} 
            disabled={!hasReadTerms}
            required
        />
            <label htmlFor={name} className="text-primary text-center">{t("Agree")} {t0("object")} </label>
        </div >
        {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
        {!hasReadTerms && (
            <p className="text-sm text-primary mt-2">
            {t("PleaseReadTerms")}
            </p>
        )}
    </div>
  )
}

export default MustRead