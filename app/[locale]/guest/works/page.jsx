"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FormContainer from "@/components/FormContainer";
import SectionHeader from "@/components/mainPage/SectionHeader";
import { BsBuildingFill, BsHouseFill, BsMapFill, BsPersonWorkspace } from "react-icons/bs";
import { FaUser, FaEnvelope, FaUserGraduate, FaCertificate, FaBookReader, FaFile } from "react-icons/fa";
import { toast } from "react-toastify";

const page = () => {
  const t = useTranslations("Works");

  // State for form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    academicAchievement: "",
    courses: "",
    experienceCertificates: "",
    workType: "",
    skills: "",
    previousCompanies: "",
    nationality: "",
    maritalStatus: "single", // Radio button
    gender: "male", // Radio button
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

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const apiKey = process.env.API_KEY;

      // Create a FormData object to send files and form data
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      console.log(formData);
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

          {/* Academic Achievement */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="academic-achievement">{t("AcademicAchievement")}</label>
            <FaUserGraduate className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="academic-achievement"
              name="academicAchievement"
              value={formData.academicAchievement}
              onChange={handleChange}
              required
            />
          </div>

          {/* Courses */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="courses">{t("Courses")}</label>
            <FaCertificate className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="courses"
              name="courses"
              value={formData.courses}
              onChange={handleChange}
              required
            />
          </div>

          {/* Experience Certificates */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="experience-certificates">{t("ExperienceCertificates")}</label>
            <FaCertificate className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="experience-certificates"
              name="experienceCertificates"
              value={formData.experienceCertificates}
              onChange={handleChange}
              required
            />
          </div>

          {/* Work Type */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="work-type">{t("WorkType")}</label>
            <BsPersonWorkspace className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="work-type"
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              required
            />
          </div>

          {/* Skills */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="skills">{t("Skills")}</label>
            <FaBookReader className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>

          {/* Previous Companies */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="previous-companies">{t("PreviousCompanies")}</label>
            <BsBuildingFill className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="previous-companies"
              name="previousCompanies"
              value={formData.previousCompanies}
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

          {/* Nationality */}
          <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
            <label htmlFor="nationality">{t("Nationality")}</label>
            <BsMapFill className="absolute bottom-2" />
            <input
              className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6"
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            />
          </div>

          {/* Marital Status (Radio) */}
          <div className="relative flex items-start justify-start w-full gap-4 mt-8">
            <h4>{t("MaritalStatus")} : </h4>
            <div className="flex flex-col sm:flex-row">
              <div className="flex justify-start items-center">
                <input
                  type="radio"
                  id="single"
                  name="maritalStatus"
                  value="single"
                  checked={formData.maritalStatus === "single"}
                  onChange={handleChange}
                />
                <label htmlFor="single" className="ml-2"> {t("Single")} </label>
              </div>
              <div className="flex justify-start items-center ml-6">
                <input
                  type="radio"
                  id="married"
                  name="maritalStatus"
                  value="married"
                  checked={formData.maritalStatus === "married"}
                  onChange={handleChange}
                />
                <label htmlFor="married" className="ml-2"> {t("Married")} </label>
              </div>
            </div>
          </div>

          {/* Gender (Radio) */}
          <div className="relative flex items-start justify-start w-full gap-4 mt-8">
            <h4>{t("Gender")} : </h4>
            <div className="flex flex-col sm:flex-row">
              <div className="flex justify-start items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label htmlFor="male" className="ml-2"> {t("Male")} </label>
              </div>
              <div className="flex justify-start items-center ml-6">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label htmlFor="female" className="ml-2"> {t("Female")} </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center w-full">
            <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded-lg mt-6">
              {t("Send")}
            </button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
};

export default page;
