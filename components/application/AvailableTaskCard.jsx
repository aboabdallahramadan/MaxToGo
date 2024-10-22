import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { BsInfoCircle, BsPerson, BsPhone, BsTruckFlatbed } from "react-icons/bs";
import { FaHandSparkles, FaTruck, FaBoxes } from "react-icons/fa";
import PurchaseTask from "@/components/application/PurchaseTask";

const AvailableTaskCard = ({ task }) => {
  const t = useTranslations("Application.AvailableTasks");

  return (
    <div className='flex flex-col justify-start items-center gap-4 py-4 border-2 border-transparent border-b-foreground hover:border-2 hover:border-primary hover:bg-hoverPrimary'>
      {/* Task information display */}
      <div className='flex flex-col justify-start items-center gap-2'>
        <p className="text-lg">
          <span className="font-bold">{t("Type")}: </span> {task.type}
        </p>
        {task.type == "transfer" && <FaTruck className="text-primary text-3xl" />}
        {task.type == "cleaning" && <FaHandSparkles className="text-primary text-3xl" />}
        {task.type == "truck" && <BsTruckFlatbed className="text-primary text-3xl" />}
        {task.type == "storage" && <FaBoxes className="text-primary text-3xl" />}
      </div>

      {/* Task details */}
      <div className="w-full flex justify-between items-center flex-wrap">
        <div className="w-full text-center flex flex-col items-center justify-center sm:w-1/2">
          <div className="flex items-center justify-center gap-1 w-full">
            <p className="font-bold text-nowrap">{t("TaskName")}: </p>
            <p className="text-primary">{task.name}</p>
          </div>
        </div>

        {/* Location details */}
        <div className="w-full text-center flex flex-col items-center justify-center gap-1 sm:w-1/2">
          <div className="flex items-center justify-center gap-1 w-full">
            <p className="font-bold text-nowrap">
              {task.type == "transfer" || task.type == "truck" ? t("Location") : t("FromLocation")}: 
            </p>
            <p className="text-primary">{task.location}</p>
          </div>
          {(task.type == "transfer" || task.type == "truck") && (
            <div className="flex items-center justify-center gap-1 w-full">
              <p className="font-bold text-nowrap">{t("ToLocation")}: </p>
              <p className="text-primary">{task.toLocation}</p>
            </div>
          )}
        </div>

        {/* Completion Date and Price */}
        <div className="w-full text-center flex flex-col items-center justify-center sm:w-1/2">
          <div className="flex items-center justify-center gap-1 w-full">
            <p className="font-bold text-nowrap">{t("CompletionDate")}: </p>
            <p className="text-primary">{task.completionDate}</p>
          </div>
        </div>
        <div className="w-full text-center flex flex-col items-center justify-center sm:w-1/2">
          <div className="flex items-center justify-center gap-1 w-full">
            <p className="font-bold text-nowrap">{t("Price")}: </p>
            <p className="text-primary">{task.price}€</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-2">
        <Link href={`/application/task/${task.id}`} className="py-2 px-4 text-lg text-foreground border border-primary hover:text-secondary hover:bg-primary rounded-xl">{t("Details")}</Link>
        <PurchaseTask task={task}/>
      </div>

      
    </div>
  );
};

export default AvailableTaskCard;
