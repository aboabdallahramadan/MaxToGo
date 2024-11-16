import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const page = () => {
  const t = useTranslations('Sustainable');

  return (
    <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col-reverse justify-center items-center md:flex-row gap-8 md:items-start">
      <div className='w-full'>
      <h1 className="text-4xl font-bold text-primary mb-6 w-full text-center">{t('Title')}</h1>
      <section className="p-6 rounded-lg shadow-md w-full">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          <ul className="list-disc list-inside mb-6 w-full">
            <li className="text-base text-foreground mb-2"><span className='text-primary font-bold'>{t('ReducedEmptyRuns')}</span>: {t('ReducedEmptyRunsDescription')}</li>
            <li className="text-base text-foreground mb-2"><span className='text-primary font-bold'>{t('EfficientResourceUse')}</span>: {t('EfficientResourceUseDescription')}</li>
            <li className="text-base text-foreground mb-2"><span className='text-primary font-bold'>{t('SupportForSmallBusinesses')}</span>: {t('SupportForSmallBusinessesDescription')}</li>
            <li className="text-base text-foreground mb-2"><span className='text-primary font-bold'>{t('DecreasedTrafficCongestion')}</span>: {t('DecreasedTrafficCongestionDescription')}</li>
            <li className="text-base text-foreground mb-2"><span className='text-primary font-bold'>{t('GreenerBusinessModels')}</span>: {t('GreenerBusinessModelsDescription')}</li>
            <li className="text-base text-foreground mb-2"><span className='text-primary font-bold'>{t('CarbonEmissionReduction')}</span>: {t('CarbonEmissionReductionDescription')}</li>
          </ul>
          <div>
            <Image 
            src="/images/sustainable1.jpg" 
            alt="Sustainable Image" 
            width={1920}
            height={1080}
              className="object-contain rounded-lg mb-6"
            />
          </div>
        
        </div>
        
        <h2 className="text-2xl font-semibold text-primary mb-4">{t('ContributionTitle')}</h2>
        <p className="text-base text-foreground leading-relaxed">{t.rich('ContributionDescription', {br: () => <br />})}</p>
      </section>
      </div>
      
    </div>
  );
};

export default page;