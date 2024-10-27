"use client";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { useTranslations } from "next-intl";
import AvailableTaskCard from "./AvailableTaskCard";

const AvailableTasksSection = () => {
    const t = useTranslations("Application.AvailableTasks");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCity, setSelectedCity] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    
    // Add Swedish cities list
    const swedishCities = [
        "all",
        "Stockholm",
        "Göteborg",
        "Malmö",
        "Uppsala",
        "Västerås",
        "Örebro",
        "Linköping",
        "Helsingborg",
        "Jönköping",
        "Norrköping",
        "Lund",
        "Umeå",
        "Gävle",
        "Borås",
        "Södertälje"
    ];
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
            "type": "emptyCar",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "toLocation": "Aleppo"
        },
        {
            "id":3,
            "type": "transfer",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza",
            "toLocation": "Aleppo"
        },
        {
            "id":4,
            "type": "warehousing",
            "name": "clean my apartment",
            "completionDate": "8/9/2024",
            "price": "200",
            "location": "Gaza"
        }
    ]);

    const taskTypes = ["all", "cleaning", "emptyCar", "transfer", "warehousing"];

    const filteredTasks = tasks.filter(task => {
        const locationMatch = selectedCity === "all" || task.location === selectedCity;
        const typeMatch = selectedType === "all" || task.type === selectedType;
        return locationMatch && typeMatch;
    });


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("YOUR_API_ENDPOINT");
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            } finally {
                setIsLoading(false)
            }
        };
        // fetchTasks();
    }, []);

    return (
        <section className="mt-16">
            <div className="container">
                <div className="filters mb-8 flex flex-col sm:flex-row gap-4">
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="p-2 border rounded-md flex-1 bg-transparent text-primary"
                    >
                        {swedishCities.map((city) => (
                            <option key={city} value={city}>
                                {city === "all" ? t("All") : city}
                            </option>
                        ))}
                    </select>
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="p-2 border rounded-md w-full sm:w-48 bg-transparent text-primary"
                    >
                        {taskTypes.map((type) => (
                            <option key={type} value={type}>
                                {t(type.charAt(0).toUpperCase() + type.slice(1))}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="content flex flex-col justify-start items-center gap-4">
                    {isLoading ? (
                        <Spinner/>
                    ) : (
                        filteredTasks.length > 0 ? (
                            filteredTasks.map((task) => (
                                <AvailableTaskCard key={task.id} task={task}/>
                            ))
                        ) : (
                            <p className="w-full text-center mb-12">{t("NoTasks")}</p>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default AvailableTasksSection