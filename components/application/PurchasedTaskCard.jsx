import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import TaskCardDetails from "./TaskCardDetails";
import { BsChatFill } from "react-icons/bs";
import GoToTaskChat from "./GoToTaskChat";

const PurchasedTaskCard = ({task}) => {
  const t = useTranslations("Application.AvailableTasks");

  return (
    <div className='flex flex-col justify-start items-center gap-4 px-2 py-4 border-2 border-transparent border-b-foreground hover:border-2 hover:border-primary hover:bg-hoverPrimary'>
      
      <TaskCardDetails task={task}/>
      <div className="flex items-center justify-between w-full">
        {
          task.receiptConfirmed ? (
            <div>{t("confirmed")}</div>
          ) : (
            <button className="border border-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-secondary">{t("ConfirmReceipt")}</button>
          )
        }
        
        <div className="flex items-center justify-center gap-4">
          <Link href={`/application/purchases/${task.id}`} className="border border-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-secondary">{t("Details")}</Link>
          <GoToTaskChat task={task}/>
        </div>
      </div>
      
    </div>
  );
}

export default PurchasedTaskCard