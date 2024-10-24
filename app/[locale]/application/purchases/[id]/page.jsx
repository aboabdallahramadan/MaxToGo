"use client";
import TaskDetails from "@/components/application/TaskDetails";
import TitleGoldenBar from "@/components/application/TitleGoldenBar"
import Spinner from "@/components/Spinner";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import GoToTaskChat from "@/components/application/GoToTaskChat";

const page = () => {
            const t = useTranslations("Application.AvailableTasks");
            const [isLoading,setIsLoading] = useState(false);
            const [isButtonLoading,setIsButtonLoading] = useState(false);
            const taskId = useParams().id;
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
                }
            )

            const handleDeleteTask = async () => {
                try {
                  setIsButtonLoading(true);
                    const response = await fetch(`/api/tasks/${taskId}`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        window.location.href = '/application/purchases';
                    }
                } catch (error) {
                    console.error('Error deleting task:', error);
                } finally {
                  setIsButtonLoading(false);
                }
            };

          return (
            <>
                <TitleGoldenBar name={t("TaskDetails")} goBack={true}/>
                <div className="container pt-24">
                {
                    isLoading ? <Spinner /> : (
                        <>
                            <TaskDetails task={task}/>
                            <div className="w-full flex items-center justify-between pb-8">
                              
                                <button
                                    onClick={handleDeleteTask}
                                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
                                >
                                  {
                                isButtonLoading ? (<Spinner/>) : (
                                  t("DeleteTask")
                                )
                              }
                                    
                                </button>
                                <GoToTaskChat task={task}/>
                            </div>
                        </>
                    )
                }
                </div>
            </>
          )
}
export default page