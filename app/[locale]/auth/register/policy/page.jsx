import AuthPageHeader from "@/components/AuthPageHeader";
import GoBackButton from "@/components/GoBackButton";
import { useTranslations } from "next-intl";

const page = () => {
    const t = useTranslations("Auth");
  return (
    <>
    <GoBackButton />
    <AuthPageHeader name={t("PrivacyPolicy")}/>
    <p className="text-foreground mt-6 w-4/5">{t("PrivacyPolicyInfo")}</p>
    </>
  )
}

export default page