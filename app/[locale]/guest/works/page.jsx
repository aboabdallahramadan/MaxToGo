"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FormContainer from "@/components/FormContainer";
import SectionHeader from "@/components/mainPage/SectionHeader";
import {  BsHouseFill } from "react-icons/bs";
import { FaUser, FaEnvelope, FaFile, FaPhone } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";

const page = () => {
  const t = useTranslations("Works");
  const [isLoading, setIsLoading] = useState(false);
  

  // State for form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    cv: null, // File upload
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      // Create a FormData object to send files and form data
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      // Send form data to external backend
      const response = await fetch(`${apiUrl}/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`, // Use API key for authentication
        },
        body: form, // Send FormData
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
      <SectionHeader name={t("title")} />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4">
            <label htmlFor="name">{t("Name")}</label>
            <FaUser className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="email">{t("Email")}</label>
            <FaEnvelope className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="phone">{t("Phone")}</label>
            <FaPhone className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="address">{t("Address")}</label>
            <BsHouseFill className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Experience */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="experience">{t("Experience")}</label>
            <textarea
              className="bg-transparent border-primary border focus:outline-none w-full"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>

          {/* CV Upload */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="cv">{t("CV")}</label>
            <FaFile className="absolute bottom-2 left-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-serif
              file:bg-background file:text-primary file:cursor-pointer
              hover:file:bg-background"
              type="file"
              id="cv"
              name="cv"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="flex justify-end items-center w-full">
            <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded-lg mt-6">
              {isLoading ? <Spinner /> : t("Send")}
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default page;
