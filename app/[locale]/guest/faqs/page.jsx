import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('FAQs');

  const faqsList = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary text-center">
            {t('title')}
          </h1>

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
        </div>
      </div>
    </div>
  );
};

export default page;
