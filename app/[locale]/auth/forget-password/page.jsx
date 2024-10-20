import { FaEnvelope } from "react-icons/fa"
import AuthPageHeader from "@/components/AuthPageHeader"
import { useTranslations } from "next-intl";
import GoBackButton from "@/components/GoBackButton";
const page = () => {
    const t = useTranslations("Auth");
  return (
    <>
      <GoBackButton />
      <AuthPageHeader name={t("PasswordRecovery")} />
      <p className="text-foreground mt-14">{t("enterRecoveryEmail")}</p>
      <form className="flex flex-col justify-center items-center w-4/5 gap-6 mt-14">
        {/* Email input */}
        <div className="text-primary w-full flex flex-col gap-4 relative">
          <label htmlFor="email">{t("Email")}</label>
          <FaEnvelope className="absolute bottom-1 left-0" />
          <input
            className="w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <button className="bg-secondary text-foreground py-2 px-5 rounded-lg text-lg">
          {t("Continue")}
        </button>
      </form>
    </>
  )
}

export default page