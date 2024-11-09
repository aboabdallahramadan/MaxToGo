"use client";
import { useState } from "react";
import TaskDetails from "@/components/application/TaskDetails";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import GoToTaskChat from "@/components/application/GoToTaskChat";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";
import TaskOffers from "@/components/application/TaskOffers";
import ConfirmTaskButton from "@/components/application/ConfirmTaskButton";

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
            "status": "waiting confirmation",
            "priceType": "offer",
            "user": {
                "id": 1,
                "name": "hany alalmany",
                "image": "/images/profile.jpg",
                "phoneNumber": "+96398888888",
            },

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
            "chatId": "4",
            "offers": [
                {
                    "id": 123,
                    "user": {
                        "id": 1,
                        "name": "John Doe",
                        "avatar": "/images/profile.jpg",
                        "rating": 4.5
                    },
                    "price": 100,
                },
                {
                    "id": 23,
                    "user": {
                        "id": 1,
                        "name": "John Doe",
                        "avatar": "/images/profile.jpg",
                        "rating": 4.5
                    },
                    "price": 100,
                },
                {
                    "id": 13,
                    "user": {
                        "id": 1,
                        "name": "John Doe",
                        "avatar": "/images/profile.jpg",
                        "rating": 4.5
                    },
                    "price": 100,
                },
                {
                    "id": 12,
                    "user": {
                        "id": 1,
                        "name": "John Doe",
                        "avatar": "/images/profile.jpg",
                        "rating": 4.5
                    },
                    "price": 100,
                }
            ]
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
                    {
                        (task.priceType == "offer" && task.status == "not purchased") &&  (
                            <TaskOffers task={task}/>
                        )
                    }
                    <div className="mt-6 flex justify-between gap-4">
                        {
                            task.status == "not purchased" && (
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    {t("DeleteTask")}
                                </button>
                            )
                        }
                        {
                            (task.status != "not purchased" || task.status != "completed") && (
                                <GoToTaskChat task={task}/>
                            )
                        }
                        {
                            task.status == "waiting confirmation" && (
                                <ConfirmTaskButton task={task}/>
                            )
                        }
                    </div>
                </div>
            </>
            
        )
}

export default TaskPage