import AuthPageHeader from "@/components/AuthPageHeader";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Auth");
  return (
    <>
    <AuthPageHeader name={t("Login")}/>
    </>
  )
}

export default page