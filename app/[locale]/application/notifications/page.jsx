import Notifications from '@/components/application/notifications/Notifications';
import TitleGoldenBar from '@/components/application/TitleGoldenBar';
import { useTranslations } from 'next-intl';


const page = () => {
  const t = useTranslations("Application.Notifications");
  return (
    <>
      <TitleGoldenBar name={t("Notifications")}/>
      <div className="container pt-24">
        <Notifications />
      </div>
      
    </>
    
  )
}

export default page