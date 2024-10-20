import LogoutButton from '@/components/LogoutButton';
import { useTranslations } from 'next-intl';
import { BsCheckLg } from 'react-icons/bs';

const page = () => {
    const t = useTranslations("Auth");
  return (
    <>
    <BsCheckLg className='text-9xl text-primary'/>
    <h4 className='text-primary text-xl mt-6'>{t("CreatedSuccessfully")}</h4>
    <p className='text-foreground mt-4'>{t("WaitApproval")}</p>
    <LogoutButton />
    
    </>


  )
}

export default page