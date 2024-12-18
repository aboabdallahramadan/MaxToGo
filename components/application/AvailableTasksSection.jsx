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
  const [selectedCountry, setSelectedCountry] = useState("all");

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

  // Add European countries list
  const europeanCountries = [
    "all",
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "United Kingdom"
  ];

  const [tasks, setTasks] = useState([
    {
        "id":1,
        "status": "active",
        "type": "cleaning",
        "name": "clean my apartment",
        "completionDate": "8/9/2024",
        "price": "200",
        "location": "Gaza",
        "priceType": "fixed",
        
        
        "text": " task details",
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
        "elevatorNumberOne": "no",
        "elevatorNumberTwo": "no",
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
    },
    {
        "id":2,
        "status": "sold",
        "type": "emptyCar",
        "name": "clean my apartment",
        "completionDate": "8/9/2024",
        "price": "200",
        "location": "Gaza",
        "toLocation": "Aleppo",
        "priceType": "offer",
        "offer": {
            "price": "100"
        },
        
        "text": " task details",
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
        "elevatorNumberOne": "no",
        "elevatorNumberTwo": "no",
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
    },
    {
        "id":3,
        "status": "active",
        "type": "transfer",
        "name": "clean my apartment",
        "completionDate": "8/9/2024",
        "price": "200",
        "location": "Gaza",
        "toLocation": "Aleppo",
        "priceType": "fixed",
        
        
        "text": " task details",
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
        "elevatorNumberOne": "no",
        "elevatorNumberTwo": "no",
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
    },
    {
        "id":4,
        "status": "active",
        "type": "warehousing",
        "name": "clean my apartment",
        "completionDate": "8/9/2024",
        "price": "200",
        "location": "Gaza",
        "priceType": "offer",
        "offer": {
            "price": "100"
        },
        
        
        "text": " task details",
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
        "elevatorNumberOne": "no",
        "elevatorNumberTwo": "no",
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
]);

  const taskTypes = ["all", "cleaning", "emptyCar", "transfer", "warehousing"];

  const filteredTasks = tasks.filter(task => {
    const locationMatch = selectedCity === "all" || task.location === selectedCity;
    const typeMatch = selectedType === "all" || task.type === selectedType;
    const countryMatch = selectedCountry === "all" || task.country === selectedCountry;
    return locationMatch && typeMatch && countryMatch;
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
        setIsLoading(false);
      }
    };
    // fetchTasks();
  }, []);

  return (
    <section className="mt-16">
      <div className="container">
        <div className="filters mb-8 flex flex-col justify-around sm:flex-row gap-4">
            {/* Country Filter */}
        <div className="sm:w-48 flex flex-col gap-2 justify-start">
            <label htmlFor="country" className="text-primary">{t("country")}</label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="p-2 border rounded-md bg-transparent text-primary"
              name="country"
              id="country"
            >
              {europeanCountries.map((country) => (
                <option key={country} value={country}>
                  {country === "all" ? t("All") : country}
                </option>
              ))}
            </select>
          </div>

          {/* City Filter */}
          <div className="sm:w-48 flex flex-col gap-2 justify-start">
            <label htmlFor="city" className="text-primary">{t("city")}</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="p-2 border rounded-md bg-transparent text-primary"
              name="city"
              id="city"
            >
              {swedishCities.map((city) => (
                <option key={city} value={city}>
                  {city === "all" ? t("All") : city}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="sm:w-48 flex flex-col gap-2 justify-start">
            <label htmlFor="type" className="text-primary">{t("type")}</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="p-2 border rounded-md bg-transparent text-primary"
              name="type"
              id="type"
            >
              {taskTypes.map((type) => (
                <option key={type} value={type}>
                  {t(type.charAt(0).toUpperCase() + type.slice(1))}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="content flex flex-col justify-start items-center gap-4">
          {isLoading ? (
            <Spinner />
          ) : (
            filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <AvailableTaskCard key={task.id} task={task} />
              ))
            ) : (
              <p className="w-full text-center mb-12">{t("NoTasks")}</p>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AvailableTasksSection;