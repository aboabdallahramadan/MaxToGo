import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import TaskCardDetails from "./TaskCardDetails";
import GoToTaskChat from "./GoToTaskChat";
import ConfirmTaskButton from "./ConfirmTaskButton";

const MyTaskCard = ({task}) => {
    const t = useTranslations("Application.AvailableTasks");
  return (
    <div className='flex flex-col justify-start items-center gap-4 px-2 py-4 border-2 border-transparent border-b-foreground hover:border-2 hover:border-primary hover:bg-hoverPrimary'>
      <div className="flex items-center justify-between w-full">
        <div>{task.publishDate}</div>
        <div>{t("Status")}: {task.status}</div>
      </div>
      <TaskCardDetails task={task}/>
      <div className="flex items-center justify-between w-full gap-2">
        {
          task.status === "pending" || task.status === "in progress" || task.status === "not purchased" ? (
            <Link href={`/application/my-tasks/edit/${task.type === "emptyCar" ? "empty-car" : task.type}/${task.id}`} className="bg-transparent text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-secondary">{t("Edit")}</Link>
          ) : (
            task.status === "waiting confirmation" && (
              <ConfirmTaskButton task={task}/>
            )
          )
        }
        <Link href={`/application/my-tasks/${task.id}`} className="bg-transparent text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-secondary">
          {t("View")}
        </Link>
      </div>
      
    </div>
  )
}

export default MyTaskCard