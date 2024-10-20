"use client"
import { useParams } from "next/navigation"
import GoBackButton from "@/components/GoBackButton";
import AuthPageHeader from "@/components/AuthPageHeader";
import { useTranslations } from "next-intl";

const page = () => {
    const id = useParams().id;
    const t = useTranslations("Auth");
  return (
    <>
      <GoBackButton />
      <AuthPageHeader name={t("ConfirmationCode")} />
      <p className="text-foreground mt-14">{t("ConfirmationCodeMessage")}</p>
      <form className="flex flex-col justify-center items-center w-4/5 gap-6 mt-14">
        {/* Code input */}
        <div className="text-primary w-full flex flex-col gap-4 relative">
          <input
            className="w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none flex items-center justify-between placeholder:text-foreground placeholder:tracking-wider "
            type="text"
            id="code"
            name="code"
            placeholder="000000"
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