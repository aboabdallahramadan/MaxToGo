import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('About');

  return (
    <div className=" text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            {t("SiteTitle")}
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {t('welcome')}
            </h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              {t('intro')}
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {t('collaboration.title')}
            </h3>
            <p className="text-gray-400 mb-4 text-lg leading-relaxed">
              {t('collaboration.description')}
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>{t('benefits.costs')}</li>
              <li>{t('benefits.revenue')}</li>
              <li>{t('benefits.utilization')}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {t('industries.title')}
            </h3>
            
            <div className="space-y-6">
              {/* Construction */}
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">
                  {t('industries.construction.title')}
                </h4>
                <p className="text-gray-400">
                  {t('industries.construction.description')}
                </p>
              </div>

              {/* Service */}
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">
                  {t('industries.service.title')}
                </h4>
                <p className="text-gray-400">
                  {t('industries.service.description')}
                </p>
              </div>

              {/* Retail */}
              <div className="bg-[#1A1A1A] p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">
                  {t('industries.retail.title')}
                </h4>
                <p className="text-gray-400">
                  {t('industries.retail.description')}
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {t('benefits.title')}
            </h3>
            <ul className="space-y-4">
              {['reduced', 'maximized', 'improved', 'sustainable'].map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span className="text-gray-400">{t(`benefits.${benefit}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="text-center text-gray-400 mt-12">
            <p className="text-lg">
              {t('closing')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
