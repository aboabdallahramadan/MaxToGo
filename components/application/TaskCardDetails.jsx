import { BsTruckFlatbed } from "react-icons/bs";
import { FaHandSparkles, FaTruck, FaBoxes } from "react-icons/fa";
import { useTranslations } from "next-intl";
const TaskCardDetails = ({task}) => {
    const t = useTranslations("Application.AvailableTasks");
  return (
    <>
        {/* Task information display */}
      <div className='flex flex-col justify-start items-center gap-2'>
        {task.type == "transfer" && <FaTruck className="text-primary text-8xl" />}
        {task.type == "cleaning" && <FaHandSparkles className="text-primary text-8xl" />}
        {task.type == "emptyCar" && <BsTruckFlatbed className="text-primary text-8xl" />}
        {task.type == "warehousing" && <FaBoxes className="text-primary text-8xl" />}
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
              {task.type == "transfer" || task.type == "emptyCar" ? t("From") : t("Location")}: 
            </p>
            <p className="text-primary">{task.location}</p>
          </div>
          {(task.type == "transfer" || task.type == "emptyCar") && (
            <div className="flex items-center justify-center gap-1 w-full mb-1">
              <p className="font-bold text-nowrap">{t("To")}: </p>
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
          
            
            { task.priceType == "fixed" &&
            (
              <div className="flex items-center justify-center gap-1 w-full">
                <p className="font-bold text-nowrap">{t("Price")}: </p>
                <p className="text-primary">{task.price}€</p>
              </div>
            )
            }
          
        </div>
      </div>
    </>
  )
}

export default TaskCardDetails