import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const LogoutButton = () => {
  const t = useTranslations("Auth");
  return (
    <Link className="bg-primary text-secondary py-2 px-4 font-bold rounded-xl" href="/">{t("Logout")}</Link>
  )
}

export default LogoutButton