import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { FaLeaf } from 'react-icons/fa';
import Image from 'next/image';
const SustainablePreview = () => {
  const t = useTranslations('Sustainable');

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row p-8 hover:shadow-2xl hover:shadow-primary/20 border border-gray-700 rounded-xl bg-gray-800 shadow-md">
      
      <div className='md:w-3/4'>
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
      <Image 
        src="/images/sustainable.jpg" 
        alt="Sustainable Image" 
        width={800}
        height={600}
        className="h-48 object-cover rounded-xl mb-4"
      />
    </div>
  );
};

export default SustainablePreview;