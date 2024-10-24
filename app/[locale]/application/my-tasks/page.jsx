import GoldenBar from "@/components/application/GoldenBar";
import MyTasksSection from "@/components/application/MyTasksSection";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const page = () => {
  const t = useTranslations("Application.AvailableTasks");
  return (
    <>
      <GoldenBar>
        <ul className="flex justify-around items-center gap-2">
          <li><Link href="/application" className="font-bold border-b-2 border-transparent hover:border-secondary py-1 text-sm sm:text-lg text-nowrap">{t("AvailableTasks")}</Link></li>
          <li><Link href="/application/my-tasks" className="font-bold border-b-2 border-secondary py-1 text-sm sm:text-lg text-nowrap">{t("MyTasks")}</Link></li>
          <li><Link href="/application/purchases" className="font-bold border-b-2 border-transparent hover:border-secondary py-1 text-sm sm:text-lg text-nowrap">{t("Purchases")}</Link></li>
        </ul>
      </GoldenBar>
      <MyTasksSection />

    </>
  )
}

export default page