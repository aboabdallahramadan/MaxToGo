"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FormContainer from "@/components/FormContainer";
import SectionHeader from "@/components/mainPage/SectionHeader";
import { toast } from "react-toastify";

// Icons
import { AiOutlineFileText, AiOutlineCalendar, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";
import Spinner from "@/components/Spinner";

const page = () => {
  const t = useTranslations("GuestTasks");
  const [isLoading,setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    taskName: "",
    startingDate: "",
    endingDate:"",
    storageDuration: "",
    area: "",
    location: "",
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
    console.log(formData)
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
      <SectionHeader name={t("titlewarehousing")} />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {/* Task Name */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4">
            <label htmlFor="taskName">
              <AiOutlineFileText className="inline-block mr-2" />
              {t("TaskName")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="taskName"
              name="taskName"
              value={formData.taskName}
              onChange={handleChange}
              required
            />
          </div>

          {/* storage duration */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="storageDuration">
              <AiOutlineFileText className="inline-block mr-2" />
              {t("StorageDuration")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="storageDuration"
              name="storageDuration"
              value={formData.storageDuration}
              onChange={handleChange}
              required
            />
          </div>

          {/*Starting Date and Time */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="startingDate">
              <AiOutlineCalendar className="inline-block mr-2" />
              {t("StartingDateTime")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="date"
              id="startingDate"
              name="startingDate"
              value={formData.startingDate}
              onChange={handleChange}
              required
            />
          </div>

          {/*ending Date and Time */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="endingDate">
              <AiOutlineCalendar className="inline-block mr-2" />
              {t("EndingDate")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="date"
              id="endingDate"
              name="endingDate"
              value={formData.endingDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="location">
              <FiArrowUpRight className="inline-block mr-2" />
              {t("Location")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* area cubic in meters */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="area">
              <FiArrowUpRight className="inline-block mr-2" />
              {t("Area")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            />
          </div>

          {/* Task Master */}
          <div className="w-full flex justify-between items-center flex-nowrap gap-4">
            <div className="relative flex flex-col items-start justify-between w-2/5 gap-4 mt-6">
              <label htmlFor="taskMaster">
                <AiOutlineFileText className="inline-block mr-2" />
                {t("taskMaster")}
              </label>
              <input
                className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                type="text"
                id="taskMaster"
                name="taskMaster"
                value={formData.taskMaster}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="relative flex flex-col items-start justify-between w-2/5 gap-4 mt-6">
              <label htmlFor="phoneNumber">
                <AiOutlinePhone className="inline-block mr-2" />
                {t("phoneNumber")}
              </label>
              <input
                className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Storage Type */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="text">
              <AiOutlineFileText className="inline-block mr-2" />
              {t("StorageType")}
            </label>
            <textarea
              className="bg-transparent border-primary border focus:outline-none w-full"
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-end items-center w-full">
            <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded-lg mt-6">
              {isLoading ? <Spinner /> : t("Submit")}
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default page;
