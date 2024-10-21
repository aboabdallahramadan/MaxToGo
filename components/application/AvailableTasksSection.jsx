"use client";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { useTranslations } from "next-intl";
import AvailableTaskCard from "./AvailableTaskCard";
const AvailableTasksSection = () => {
    const t = useTranslations("Application.AvailableTasks")
    const [isLoading, setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([
        {
            "id":1,
            "type": "cleaning",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza"
        },
        {
            "id":2,
            "type": "cleaning",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza"
        },
        {
            "id":3,
            "type": "cleaning",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza"
        },
        {
            "id":4,
            "type": "cleaning",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza"
        }
      ]);
      useEffect(() => {
        const fetchTasks = async () => {
          try {
            setIsLoading(true);
            const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your API endpoint
            const data = await response.json();
            setTasks(data); // Assuming the data is an array of objects with {imagePath, link}
          } catch (error) {
            console.error("Error fetching ads:", error);
          } finally {
            setIsLoading(false)
          }
        };
    
        // fetchTasks(); // Uncomment this line to fetch real data from your API
      }, []);
  return (
    <section className="mt-16">
        <div className="container">
            <div className="content flex flex-col justify-start items-center gap-4">
                {isLoading ? (
                    <Spinner/>
                ) : (
                    tasks.length > 0 ? (
                        tasks.map((task) => (
                            <AvailableTaskCard key={task.id} task={task}/>
                        ))
                    ) : (
                    <p className="w-full text-center">{t("NoTasks")}</p>
                    )
                )}
            </div>
        </div>
    </section>
  )
}

export default AvailableTasksSection