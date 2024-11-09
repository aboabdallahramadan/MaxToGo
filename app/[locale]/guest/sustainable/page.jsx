import React from 'react';
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('Sustainable');

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-4xl font-bold text-primary mb-6">{t('Title')}</h1>
      <section className=" p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-foreground mb-4">{t('ContributionTitle')}</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="text-base text-gray-300 mb-2"><span className='text-primary font-bold'>{t('ReducedEmptyRuns')}</span>: {t('ReducedEmptyRunsDescription')}</li>
          <li className="text-base text-gray-300 mb-2"><span className='text-primary font-bold'>{t('EfficientResourceUse')}</span>: {t('EfficientResourceUseDescription')}</li>
          <li className="text-base text-gray-300 mb-2"><span className='text-primary font-bold'>{t('SupportForSmallBusinesses')}</span>: {t('SupportForSmallBusinessesDescription')}</li>
          <li className="text-base text-gray-300 mb-2"><span className='text-primary font-bold'>{t('DecreasedTrafficCongestion')}</span>: {t('DecreasedTrafficCongestionDescription')}</li>
          <li className="text-base text-gray-300 mb-2"><span className='text-primary font-bold'>{t('GreenerBusinessModels')}</span>: {t('GreenerBusinessModelsDescription')}</li>
          <li className="text-base text-gray-300 mb-2"><span className='text-primary font-bold'>{t('CarbonEmissionReduction')}</span>: {t('CarbonEmissionReductionDescription')}</li>
        </ul>
        <p className="text-base text-gray-300 leading-relaxed">{t('ContributionDescription')}</p>
      </section>
    </div>
  );
};

export default page;