import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import PurchaseTask from "@/components/application/PurchaseTask";
import TaskCardDetails from "./TaskCardDetails";
import MakeOffer from "./MakeOffer";

const AvailableTaskCard = ({ task }) => {
  const t = useTranslations("Application.AvailableTasks");

  return (
    <div className='flex flex-col justify-start items-center gap-4 py-4 border-2 border-transparent border-b-foreground hover:border-2 hover:border-primary hover:bg-hoverPrimary'>
      
      <TaskCardDetails task={task}/>
      <div className="flex justify-between items-center w-full px-2">
        <Link href={`/application/task/${task.id}`} className="py-2 px-4 text-lg text-foreground border border-primary hover:text-secondary hover:bg-primary rounded-xl">{t("Details")}</Link>
        {
          task.priceType == "fixed" ? (
            <PurchaseTask task={task}/>
          ) : (
            <MakeOffer task={task}/>
          )
        }
        
      </div>

      
    </div>
  );
};

export default AvailableTaskCard;
