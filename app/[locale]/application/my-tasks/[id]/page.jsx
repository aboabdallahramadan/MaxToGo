"use client";
import { useState } from "react";
import TaskDetails from "@/components/application/TaskDetails";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import GoToTaskChat from "@/components/application/GoToTaskChat";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";

const TaskPage = () => {
        const router = useRouter();
        const t = useTranslations("Application.AvailableTasks")
        const [task, setTask] = useState(
        {   
            // for all tasks
            "id":2,
            "type": "warehousing",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "text": " task details",
            "location": "Gaza",
            "taskMaster": "hany alalmany",
            "phoneNumber": "+96398888888",

            //empty Car
            "numberOfWorkers":"9",
            "numberOfCars": "5",

            //cleaning
            "balcony": "no",

            // warehousing
            "storageDuration": "3 days",
            "area": "example",

            // transfer
            "floorNumberOne": "3",
            "floorNumberTwo": "4",
            "elevator": "no",
            "isWrapping": "no",

            //transfer and empty Car
            "isInternationalOrLocal": "local",
            "vehicleSize": "x large",
            "toLocation": "Aleppo",

            // empty Car and warehousing
            "startingDate": "12/10/2024",

            //transfer and cleaning
            "apartmentType": "villa",

            // empty Car and transfer and cleaning
            "isTimeFlexible": "yes",
            "chatId": "4"
        }
)

        const handleDelete = async () => {
            try {
                const response = await fetch(`/api/tasks/${task.id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    router.push('/application/my-tasks');
                }
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        };

        return (
            <>
                <TitleGoldenBar name={t("TaskDetails")} goBack={true}/>
                <div className="container mx-auto pb-8 pt-24">
                    <TaskDetails task={task} />
                    <div className="mt-6 flex justify-between gap-4">
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            {t("DeleteTask")}
                        </button>
                        <GoToTaskChat task={task}/>
                    </div>
                </div>
            </>
            
        )
}

export default TaskPage