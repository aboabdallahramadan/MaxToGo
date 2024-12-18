"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";
import SelectTaskType from "@/components/application/SelectTaskType";
import Moving from "@/components/tasksforms/Moving";

const page = () => {
  const t = useTranslations("GuestTasks");
  const [isLoading,setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    type: "transfer",
    taskName: "",
    dateTime: "",
    fromLocation: "",
    toLocation: "",
    apartmentType: "",
    fromFloorNumber: "",
    toFloorNumber: "",
    fromElevator: "notFound",
    toElevator: "notFound",
    fromLocationSize: "",
    toLocationSize: "",
    heavyThings: "no",
    fromDistanceForParking: "",
    toDistanceForParking: "",
    vehicleSize: "",
    isTimeFlexible: "yes",
    isWrapping: "no",
    taskType: "local",
    taskMasterName: "",
    taskMasterPhoneNumber: "",
    text: "",
    images: "",
    price: "",
    priceType: 'fixed'
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
          <SelectTaskType active="transfer"/>
          <Moving
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
