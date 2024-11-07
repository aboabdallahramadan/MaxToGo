import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const Faqs = () => {
  const t = useTranslations('FAQs');

  // Select a subset of FAQs to display on the home page
  const faqsList = [1, 2, 3]; // Example: Display the first three FAQs

  return (
    <div className="text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
            {t('title')}
          </h2>

          <div className="space-y-6">
            {faqsList.map((num) => (
              <div 
                key={num}
                className="bg-[#1A1A1A] rounded-lg p-6 transition-all duration-200 hover:bg-[#222222]"
              >
                <div className="flex gap-4">
                  <span className="text-primary font-bold">{num}.</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {t(`q${num}`)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(`a${num}`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/guest/faqs" className="text-primary font-bold hover:underline">
                {t('readMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;