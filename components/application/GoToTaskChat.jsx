import {BsChatFill} from "react-icons/bs"
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const GoToTaskChat = ({task}) => {
    const t = useTranslations("Application.AvailableTasks");
    
  return (
    <Link href={`/application/chat/${task.chatId}`} className="border border-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-secondary flex items-center justify-center gap-2"><BsChatFill /> {t("Chat")}</Link>
  )
}

export default GoToTaskChat