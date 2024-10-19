"use client";
import AuthPageHeader from "@/components/AuthPageHeader";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const page = () => {
  const t = useTranslations("Auth");

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <AuthPageHeader name={t("Login")} />
      <form className="flex flex-col justify-center items-center w-4/5 gap-6 mt-14">
        {/* Email input */}
        <div className="text-primary w-full flex flex-col gap-4 relative">
          <label htmlFor="email">{t("Email")}</label>
          <FaEnvelope className="absolute bottom-1 left-0" />
          <input
            className="w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
            type="email"
            id="email"
            name="email"
          />
        </div>

        {/* Password input with eye icon */}
        <div className="text-primary w-full flex flex-col gap-4 relative">
          <label htmlFor="password">{t("Password")}</label>
          <FaKey className="absolute bottom-1 left-0" />
          <input
            className="w-full pl-6 pr-10 bg-transparent border-b-primary border-b focus:outline-none"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
          />
          <div
            className="absolute bottom-1 right-0 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <div className="flex justify-start items-center w-full">
          <Link href="/auth/forget-password" className="text-foreground">
            {t("ForgetPassword")}
          </Link>
        </div>

        <button className="bg-secondary text-foreground py-2 px-5 rounded-lg text-lg">
          {t("Login")}
        </button>

        <div className="flex justify-start items-center w-full gap-2">
          <p className="text-foreground">{t("noAccount")}</p>
          <Link href="/auth/register" className="text-primary">
            {t("NewRegistration")}
          </Link>
        </div>
      </form>
    </>
  );
};

export default page;
