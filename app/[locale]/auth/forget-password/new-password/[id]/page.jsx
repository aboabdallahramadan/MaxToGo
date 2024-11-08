"use client"
import { useState } from "react";
import { useParams } from "next/navigation"
import GoBackButton from "@/components/GoBackButton";
import AuthPageHeader from "@/components/AuthPageHeader";
import { useTranslations } from "next-intl";
import { FaKey,FaEye,FaEyeSlash } from "react-icons/fa";

const page = () => {
    const id = useParams().id;
    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // State to manage password confirmation visibility
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    // Toggle password Confirmation visibility
    const togglePasswordConfirmationVisibility = () => {
      setShowPasswordConfirmation(!showPasswordConfirmation);
    };
    const t = useTranslations("Auth");
  return (
    <>
      <GoBackButton />
      <AuthPageHeader name={t("SetNewPassword")} />
      <form className="flex flex-col justify-center items-center w-4/5 gap-6 mt-14">
        {/* first password input */}
        <div className="text-primary w-full flex flex-col gap-4 relative">
          <label htmlFor="password">{t("Password")}</label>
          <FaKey className="text-primary absolute bottom-1 left-0" />
          <input
            className="w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none flex items-center justify-between placeholder:text-foreground placeholder:tracking-wider "
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
          />
          <div
            className="absolute bottom-1 right-0 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* seconde password input */}
        <div className="text-primary w-full flex flex-col gap-4 relative">
          <label htmlFor="confirmPassword">{t("PasswordConfirmation")}</label>
          <FaKey className="text-primary absolute bottom-1 left-0" />
          <input
            className="w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none flex items-center justify-between placeholder:text-foreground placeholder:tracking-wider "
            type={showPasswordConfirmation ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            required
          />
          <div
            className="absolute bottom-1 right-0 cursor-pointer"
            onClick={togglePasswordConfirmationVisibility}
          >
            {showPasswordConfirmation ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button className="bg-secondary text-foreground py-2 px-5 rounded-lg text-lg">
          {t("Continue")}
        </button>
      </form>
    </>
  )
}

export default page