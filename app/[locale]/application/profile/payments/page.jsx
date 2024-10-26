import PaymentsSection from '@/components/application/PaymentsSection';
import TitleGoldenBar from '@/components/application/TitleGoldenBar';
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations("Application.Profile");
  return (
    <>
    <TitleGoldenBar name={t("Payments")} goBack={true}/>
    {/* balance */}
    <div className="container pt-28">
      <div className=" text-primary w-full rounded-lg border border-primary py-4 px-4 flex justify-center items-center relative mb-12">
        <h1 className="text-xl font-bold">{t("TotalBalance")}: 1200$</h1>
      </div>
      {/* payments section */}
      <PaymentsSection />
    </div>
      
    </>
  )
}

export default page