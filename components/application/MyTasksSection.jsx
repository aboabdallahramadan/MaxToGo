"use client";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useTranslations } from "next-intl";
import MyTaskCard from "./MyTaskCard";

const MyTasksSection = () => {
    const t = useTranslations("Application.AvailableTasks");
    const [isLoading,setIsLoading] = useState(false);
    const [tasks, setTasks] = useState([
        {
            "id":1,
            "type": "cleaning",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "receiptConfirmed": true,
            "chatId": 1,
            "publishDate": "1/1/2024",
            "status": "not purchased"
        },
        {
            "id":2,
            "type": "emptyCar",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "toLocation": "Aleppo",
            "receiptConfirmed": true,
            "chatId": 2,
            "publishDate": "1/1/2024",
            "status": "in progress"
        },
        {
            "id":3,
            "type": "transfer",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "toLocation": "Aleppo",
            "receiptConfirmed": false,
            "chatId": 3,
            "publishDate": "1/1/2024",
            "status": "finished"
        },
        {
            "id":4,
            "type": "warehousing",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "receiptConfirmed": false,
            "chatId": 4,
            "publishDate": "1/1/2024",
            "status": "pending"
        },
        {
          "id":5,
          "type": "warehousing",
          "name": "clean my apartment",
          "completionDate": "8/9/2024",
          "price": "200",
          "location": "Gaza",
          "receiptConfirmed": false,
          "chatId": 5,
          "publishDate": "1/1/2024",
          "status": "waiting confirmation"
      }
      ]);
      const [selectedStatuses, setSelectedStatuses] = useState([]);
      const statusOptions = ["not purchased", "in progress", "finished", "pending", "waiting confirmation"];

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

      const handleStatusChange = (status) => {
        if (status === 'all') {
          setSelectedStatuses(selectedStatuses.length === statusOptions.length ? [] : [...statusOptions]);
          return;
        }
        setSelectedStatuses(prev => {
          if (prev.includes(status)) {
            return prev.filter(s => s !== status);
          } else {
            return [...prev, status];
          }
        });
      };

      const filteredTasks = tasks.filter(task => 
        selectedStatuses.length === 0 || selectedStatuses.includes(task.status)
      );

  return (
    <section className="pt-24">
        <div className="content flex flex-col justify-start items-center gap-4 pt-4">
            <div className="flex flex-wrap gap-4 mb-4 px-4">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={selectedStatuses.length === statusOptions.length}
                        onChange={() => handleStatusChange('all')}
                        className="form-checkbox h-5 w-5 text-primary border-primary focus:ring-primary accent-primary"
                    />
                    <span className="text-primary">{t("All")}</span>
                </label>
                {statusOptions.map((status) => (
                    <label key={status} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectedStatuses.includes(status)}
                            onChange={() => handleStatusChange(status)}
                            className="form-checkbox h-5 w-5 text-primary border-primary focus:ring-primary accent-primary"
                        />
                        <span className="text-primary">{t(status)}</span>
                    </label>
                ))}
            </div>
            {isLoading ? (
                <Spinner/>
            ) : (
                filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <MyTaskCard key={task.id} task={task}/>
                    ))
                ) : (
                <p className="w-full text-center">{t("NoTasks")}</p>
                )
            )}
        </div>
    </section>

  )
}

export default MyTasksSection