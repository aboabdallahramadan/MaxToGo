"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FormContainer from "@/components/FormContainer";
import SectionHeader from "@/components/mainPage/SectionHeader";
import { toast } from "react-toastify";
import EmptyCar from "@/components/tasksforms/EmptyCar";

const page = () => {
  const t = useTranslations("GuestTasks");
  const [isLoading,setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    taskName: "",
    startingDate: "",
    arrivalDate:"",
    numberOfWorkers:"",
    numberOfCars: "",
    fromLocation: "",
    toLocation: "",
    vehicleSize: "",
    isTimeFlexible: "yes",
    taskType: "local",
    taskMaster: "",
    phoneNumber: "",
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
    <div className="container">
      <SectionHeader name={t("titleTruck")} />
      <FormContainer>
        <EmptyCar
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            t={t}
            isGuest={true}
        />
      </FormContainer>
    </div>
  );
};

export default page;
