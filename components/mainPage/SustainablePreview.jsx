import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { FaLeaf } from 'react-icons/fa';

const SustainablePreview = () => {
  const t = useTranslations('Sustainable');

  return (
    <div className="p-8 hover:shadow-2xl hover:shadow-primary/20 border border-gray-700 rounded-xl bg-gray-800 shadow-md">
      <div className='flex gap-2 justify-start items-center'>
        <FaLeaf className="text-primary text-4xl mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-4">{t('Title')}</h2>
      </div>
      <p className="text-base text-gray-300 leading-relaxed mb-6">{t('Preview')}</p>
      <Link href="/guest/sustainable">
        <button className="border border-primary text-white px-6 py-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
          {t('ReadMore')}
        </button>
      </Link>
    </div>
  );
};

export default SustainablePreview;