import ChatsSection from "@/components/application/chat/ChatsSection";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { BsArrowLeftCircle, BsArrowRight, BsChat } from "react-icons/bs";

const page = () => {
    const t = useTranslations("Application.Chat");
    return (
    <>
        <TitleGoldenBar name={t("Chats")}/>
        <div className="container pt-24">
          <Link href={"/application/chats/admin"}>
            <div className="w-full py-2 px-4 border border-primary rounded-lg text-primary my-6">
              <div className="flex items-center justify-start gap-2">
                <BsChat />
                <p>{t("TalkToTheAdmin")}</p>
                <BsArrowRight />
              </div>
            </div>
          </Link>
          
          <ChatsSection/>
        </div>

    </>
    )
}

export default page