"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FormContainer from "@/components/FormContainer";
import SectionHeader from "@/components/mainPage/SectionHeader";
import { toast } from "react-toastify";

// Icons
import { AiOutlineFileText, AiOutlineCalendar, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { FaBuilding, FaTruck } from "react-icons/fa";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

const page = () => {
  const t = useTranslations("GuestTasks");

  const [formData, setFormData] = useState({
    taskName: "",
    dateTime: "",
    fromLocation: "",
    toLocation: "",
    apartmentType: "",
    floorNumberOne: "",
    floorNumberTwo: "",
    elevator: "no",
    vehicleSize: "",
    isTimeFlexible: "yes",
    isWrapping: "no",
    isInternationalOrLocal: "local",
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
    console.log(formData);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const apiKey = process.env.API_KEY;

      const response = await fetch(`${apiUrl}/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
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
    }
  };

  return (
    <div className="container">
      <SectionHeader name={t("title")} />
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

          {/* Date and Time */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="dateTime">
              <AiOutlineCalendar className="inline-block mr-2" />
              {t("DateTime")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
            />
          </div>

          {/* From Location */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="fromLocation">
              <FiArrowUpRight className="inline-block mr-2" />
              {t("FromLocation")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="fromLocation"
              name="fromLocation"
              value={formData.fromLocation}
              onChange={handleChange}
              required
            />
          </div>

          {/* To Location */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="toLocation">
              <FiArrowDownRight className="inline-block mr-2" />
              {t("ToLocation")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="toLocation"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleChange}
              required
            />
          </div>

          {/* Apartment Type */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="apartmentType">
              <FaBuilding className="inline-block mr-2" />
              {t("ApartmentType")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="apartmentType"
              name="apartmentType"
              value={formData.apartmentType}
              onChange={handleChange}
              required
            />
          </div>

          {/* Floor Number One */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="floorNumberOne">
              <AiOutlineHome className="inline-block mr-2" />
              {t("FloorNumberOne")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="number"
              id="floorNumberOne"
              name="floorNumberOne"
              value={formData.floorNumberOne}
              onChange={handleChange}
              required
            />
          </div>

          {/* Floor Number Two */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="floorNumberTwo">
              <AiOutlineHome className="inline-block mr-2" />
              {t("FloorNumberTwo")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="number"
              id="floorNumberTwo"
              name="floorNumberTwo"
              value={formData.floorNumberTwo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Elevator (Radio) */}
          <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
            <h4 className="text-xl text-center w-full">{t("Elevator")}</h4>
            <div className="flex justify-center items-center  w-full">
              <div className="flex justify-start items-center">
                <input
                  className="accent-primary"
                  type="radio"
                  id="elevatorYes"
                  name="elevator"
                  value="yes"
                  checked={formData.elevator === "yes"}
                  onChange={handleChange}
                />
                <label htmlFor="elevatorYes" className="ml-2"> {t("Yes")} </label>
              </div>
              <div className="flex justify-start items-center ml-6">
                <input
                  className="accent-primary"
                  type="radio"
                  id="elevatorNo"
                  name="elevator"
                  value="no"
                  checked={formData.elevator === "no"}
                  onChange={handleChange}
                />
                <label htmlFor="elevatorNo" className="ml-2"> {t("No")} </label>
              </div>
            </div>
          </div>

          {/* Vehicle Size */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="vehicleSize">
              <FaTruck className="inline-block mr-2" />
              {t("VehicleSize")}
            </label>
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full"
              type="text"
              id="vehicleSize"
              name="vehicleSize"
              value={formData.vehicleSize}
              onChange={handleChange}
              required
            />
          </div>

          {/* Is Time flexible */}
          <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
            <h4 className="text-xl text-center w-full">{t("IsTimeFlexible")}</h4>
            <div className="flex justify-center items-center  w-full">
              <div className="flex justify-start items-center">
                <input
                  className="accent-primary"
                  type="radio"
                  id="isTimeFlexibleYes"
                  name="isTimeFlexible"
                  value="yes"
                  checked={formData.isTimeFlexible === "yes"}
                  onChange={handleChange}
                />
                <label htmlFor="isTimeFlexibleYes" className="ml-2"> {t("Yes")} </label>
              </div>
              <div className="flex justify-start items-center ml-6">
                <input
                  className="accent-primary"
                  type="radio"
                  id="isTimeFlexibleNo"
                  name="isTimeFlexible"
                  value="no"
                  checked={formData.isTimeFlexible === "no"}
                  onChange={handleChange}
                />
                <label htmlFor="isTimeFlexibleNo" className="ml-2"> {t("No")} </label>
              </div>
            </div>
          </div>

          {/* Is Wrapping */}
          <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
            <h4 className="text-xl text-center w-full">{t("IsWrapping")}</h4>
            <div className="flex justify-center items-center  w-full">
              <div className="flex justify-start items-center">
                <input
                  className="accent-primary"
                  type="radio"
                  id="isWrappingYes"
                  name="isWrapping"
                  value="yes"
                  checked={formData.isWrapping === "yes"}
                  onChange={handleChange}
                />
                <label htmlFor="isWrappingYes" className="ml-2"> {t("Yes")} </label>
              </div>
              <div className="flex justify-start items-center ml-6">
                <input
                  className="accent-primary"
                  type="radio"
                  id="isWrappingNo"
                  name="isWrapping"
                  value="no"
                  checked={formData.isWrapping === "no"}
                  onChange={handleChange}
                />
                <label htmlFor="isWrappingNo" className="ml-2"> {t("No")} </label>
              </div>
            </div>
          </div>

          {/* Is International Or Local */}
          <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
            <h4 className="text-xl text-center w-full">{t("TaskType")}</h4>
            <div className="flex justify-center items-center  w-full">
              <div className="flex justify-start items-center">
                <input
                  className="accent-primary"
                  type="radio"
                  id="international"
                  name="isInternationalOrLocal"
                  value="international"
                  checked={formData.isInternationalOrLocal === "international"}
                  onChange={handleChange}
                />
                <label htmlFor="international" className="ml-2"> {t("International")} </label>
              </div>
              <div className="flex justify-start items-center ml-6">
                <input
                  className="accent-primary"
                  type="radio"
                  id="local"
                  name="isInternationalOrLocal"
                  value="local"
                  checked={formData.isInternationalOrLocal === "local"}
                  onChange={handleChange}
                />
                <label htmlFor="local" className="ml-2"> {t("Local")} </label>
              </div>
            </div>
          </div>

          {/* Task Master */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
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
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
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

          {/* Text */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="text">
              <AiOutlineFileText className="inline-block mr-2" />
              {t("text")}
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
              {t("Submit")}
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default page;
