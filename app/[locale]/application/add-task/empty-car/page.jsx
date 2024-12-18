"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import EmptyCar from "@/components/tasksforms/EmptyCar";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";
import SelectTaskType from "@/components/application/SelectTaskType";

const page = () => {
  const t = useTranslations("GuestTasks");
  const [isLoading,setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    taskType: "emptyTruck",
    taskName: "",
    dateTime: "",
    numberOfWorkers:"",
    availableWeight: "",
    numberOfCars: "",
    fromLocation: "",
    toLocation: "",
    vehicleSize: "",
    priceType: 'fixed',
    price: "",
    isTimeFlexible: "yes",
    taskType: "local",
    taskMasterName: "",
    taskMasterPhoneNumber: "",
    images: "",
    text: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${apiUrl}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("SuccessMessage"));
      } else {
        toast.error(t("ErrorMessage"));
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(t("ErrorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    
        <TitleGoldenBar name={t("CreateTask")}/>
        <section className="pt-10 w-full">
                <SelectTaskType active="empty-car"/>
                <EmptyCar
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    t={t}
                    isGuest={false}
                />
        </section>
    </>
  );
};

export default page;
