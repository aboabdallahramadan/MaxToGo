import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { FaLeaf } from 'react-icons/fa';
import Image from 'next/image';

const SustainablePreview = () => {
  const t = useTranslations('Sustainable');

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:shadow-2xl">
      <div className="relative">
        <Image 
          src="/images/sustainable.jpg" 
          alt="Sustainable Image" 
          width={800}
          height={600}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
          <FaLeaf className="text-primary text-4xl" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-primary mb-3">{t('Title')}</h2>
        <p className="text-base text-white mb-4 leading-relaxed">{t('Preview')}</p>
        <Link href="/guest/sustainable">
          <button className="inline-block text-primary border border-primary hover:bg-primary hover:text-secondary py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300">
            {t('ReadMore')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SustainablePreview;