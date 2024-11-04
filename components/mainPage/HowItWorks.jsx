import { useTranslations } from 'next-intl';

const HowItWorks = () => {
  const t = useTranslations('HowItWorks');
  
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            {t('title')}
          </h2>
          
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-primary">
                  <span className="text-primary font-bold">{step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {t(`step${step}.title`)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t(`step${step}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-center mt-8">
            {t('closing')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
