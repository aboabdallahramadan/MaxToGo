"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import SelectTaskType from "@/components/application/SelectTaskType";
import { toast } from "react-toastify";

// Icons
import { AiOutlineFileText, AiOutlineCalendar, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";
import { FaMoneyBill } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Spinner from "@/components/Spinner";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";

const page = () => {
  const t = useTranslations("GuestTasks");
  const [isLoading,setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    taskType: "warehousing",
    priceType: 'fixed',
    price: "",
    taskName: "",
    startingDate: "",
    endingDate:"",
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
    <>
    <TitleGoldenBar name={t("EditTask")}/>
    <section className="pt-24">

        <div className="container">
            <form onSubmit={handleSubmit}  className="bg-secondary p-6 rounded-lg shadow-md">
            {/* Task Name */}
            <div className="relative flex flex-col items-start justify-between w-full gap-4">
                <label htmlFor="taskName">
                <AiOutlineFileText className="inline-block mr-2 text-primary" />
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
                <AiOutlineFileText className="inline-block mr-2 text-primary" />
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
                <AiOutlineCalendar className="inline-block mr-2 text-primary" />
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
                <AiOutlineCalendar className="inline-block mr-2 text-primary" />
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
                <FiArrowUpRight className="inline-block mr-2 text-primary" />
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
                <FiArrowUpRight className="inline-block mr-2 text-primary" />
                {t("Area")}
                </label>
                <input
                className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                type="number"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                />
            </div>

            {/* Price */}
            <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
                    <h4 className="text-xl text-center w-full">{t("PricePreference")}</h4>
                    <div className="flex justify-center items-center w-full">
                        <div className="flex justify-start items-center">
                            <input
                                className="accent-primary"
                                type="radio"
                                id="fixedPrice"
                                name="priceType"
                                value="fixed"
                                checked={formData.priceType === "fixed"}
                                onChange={handleChange}
                            />
                            <label htmlFor="fixedPrice" className="ml-2">{t("SetFixedPrice")}</label>
                        </div>
                        <div className="flex justify-start items-center ml-6">
                            <input
                                className="accent-primary"
                                type="radio"
                                id="offers"
                                name="priceType"
                                value="offers"
                                checked={formData.priceType === "offers"}
                                onChange={handleChange}
                            />
                            <label htmlFor="offers" className="ml-2">{t("GetPriceOffers")}</label>
                        </div>
                    </div>
            </div>
            {formData.priceType === 'fixed' && (
                <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                    <label htmlFor="price">
                        <FaMoneyBill className="inline-block mr-2 text-primary" />
                        {t("Price")}
                    </label>
                    <div>
                        <input
                            className="bg-transparent border-b-primary border-b focus:outline-none"
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required={formData.priceType === 'fixed'}
                        />
                        <span className="text-primary ml-2">€</span>
                    </div>
                </div>
            )}

            {/* Task Master */}
            <div className="w-full flex justify-between items-center flex-nowrap gap-4">
                <div className="relative flex flex-col items-start justify-between w-2/5 gap-4 mt-6">
                <label htmlFor="taskMaster">
                    <AiOutlineFileText className="inline-block mr-2 text-primary" />
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
                    <AiOutlinePhone className="inline-block mr-2 text-primary" />
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

            {/* text */}
            <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="text">
                <AiOutlineFileText className="inline-block mr-2 text-primary" />
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
                {isLoading ? <Spinner /> : t("Submit")}
                </button>
            </div>
            </form>
        </div>
    </section>
    </>
  );
};

export default page;
