import { useTranslations } from "next-intl";
import { BsCalendarDate, BsChatFill, BsType } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

const TaskDetails = ({task}) => {
    const t = useTranslations("Application.AvailableTasks");
  return (
    <section className="w-full">
        <div className="flex flex-col items-start justify-center gap-4 w-full py-4 lg:text-xl lg:px-10">
            <div className="flex justify-center items-center gap-2">
                <BsType className="text-primary"/>
                <p className="font-bold text-primary">{t("Type")}:</p>
                <p>{task.type}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <BsChatFill className="text-primary"/>
                <p className="font-bold text-primary">{t("Name")}:</p>
                <p>{task.name}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <BsCalendarDate className="text-primary"/>
                <p className="font-bold text-primary">{t("CompletionDate")}:</p>
                <p>{task.completionDate}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <FaLocationArrow className="text-primary"/>
                <p className="font-bold text-primary">{t("Location")}:</p>
                <p>{task.location}</p>
            </div>
            {
                (task.type == "transfer" || task.type == "truck") && (
                <div className="flex justify-center items-center gap-2">
                    <FaLocationArrow className="text-primary"/>
                    <p className="font-bold text-primary">{t("ToLocation")}:</p>
                    <p>{task.toLocation}</p>
                </div>
                )
            }
        </div>
    </section>
  )
}

export default TaskDetails