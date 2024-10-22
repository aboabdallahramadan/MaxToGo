"use client";
import TaskDetails from "@/components/application/TaskDetails";
import TitleGoldenBar from "@/components/application/TitleGoldenBar"
import Spinner from "@/components/Spinner";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";

const page = () => {
    const t = useTranslations("Application.AvailableTasks");
    const {isLoading,setIsLoading} = useState(false);
    const taskId = useParams().id;
    const [task, setTask] = useState(
        {   
            "id":2,
            "type": "transfer",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "toLocation": "Aleppo"
        }
    )
  return (
    <>
        <TitleGoldenBar name={t("TaskDetails")} goBack={true}/>
        <div className="container pt-24">
        {
            isLoading ? <Spinner /> : (
                <TaskDetails task={task}/>
            )
        }
        </div>
        
    </>
  )
}

export default page