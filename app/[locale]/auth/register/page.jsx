"use client";
import { useState } from "react";
import AuthPageHeader from "@/components/AuthPageHeader";
import GoBackButton from "@/components/GoBackButton";
import { useTranslations } from "next-intl";
import { FaBuilding, FaEnvelope, FaKey, FaMarker, FaPhone, FaEye, FaEyeSlash, FaUpload } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight, BsPersonFill } from "react-icons/bs";
import { Link } from "@/i18n/routing";

const page = () => {
  const validateFileType = (file, allowedTypes) => {
    if (!file) return true;
    return allowedTypes.includes(file.type);
  };
  const [pageNumber, setPageNumber] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    nameOfResponsiblePerson: '',
    address: '',
    typeOfCompany: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    phone: '',
    companyLogo: '',
    licensingInformation: '',
    insurance: '',
    policy: true
  });
  const [errors, setErrors] = useState({});
  const t = useTranslations("Auth");

  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    if (validateForm()) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
      
      // Define allowed types for each input
      const fileValidations = {
        companyLogo: ['image/jpeg', 'image/png', 'image/gif','image/jpg'],
        licensingInformation: ['application/pdf'],
        insurance: ['application/pdf']
      };
      
      if (!validateFileType(file, fileValidations[name])) {
        setErrors(prev => ({
          ...prev,
          [name]: name === 'companyLogo' 
            ? t("OnlyImagesAllowed") 
            : t("OnlyPDFAllowed")
        }));
        e.target.value = '';
        return;
      }
      
      setFormData({
        ...formData,
        [name]: file
      });
    } else if (name === 'phone') {
      // Only allow numbers and '+' symbol
      const sanitizedValue = value.replace(/[^\d+]/g, '');
      // Ensure '+' only appears at the start if present
      const formattedValue = sanitizedValue.startsWith('+') 
        ? sanitizedValue.replace(/\+/g, '').replace(/^/, '+')
        : sanitizedValue.replace(/\+/g, '');
      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value
      });
    }
    
    // Clear error when valid file is selected
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (pageNumber === 0) {
      if (!formData.companyName) newErrors.companyName = t("RequiredField");
      if (!formData.nameOfResponsiblePerson) newErrors.nameOfResponsiblePerson = t("RequiredField");
      if (!formData.address) newErrors.address = t("RequiredField");
      if (!formData.typeOfCompany) newErrors.typeOfCompany = t("RequiredField");
    } 
    else if (pageNumber === 1) {
      if (!formData.email) {
        newErrors.email = t("RequiredField");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = t("InvalidEmail");
      }
      if (!formData.password) {
        newErrors.password = t("RequiredField");
      }
      if (formData.password !== formData.passwordConfirmation) {
        newErrors.passwordConfirmation = t("PasswordsDoNotMatch");
      }
      if (!formData.phone) {
        newErrors.phone = t("RequiredField");
      } else if (!/^\+?\d+$/.test(formData.phone)) {
        newErrors.phone = t("InvalidPhoneFormat");
      }
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirmationVisibility = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };
  

  return (
    <>
      <GoBackButton />
      <AuthPageHeader name={t("CreateAccount")} />
      <div className="w-4/5">
        <div className={pageNumber == 0 ? "block" : "hidden"}>
          <h2 className="text-primary text-xl mb-4 mt-6">{t("HowDoesItWork")}</h2>
          <p className="text-foreground">{t("HowDoesItWorkInfo")}</p>
          <p className="text-foreground mb-6">{t("HowDoesItWorkInfo1")}</p>
        </div>
        <div className={pageNumber == 1 ? "block" : "hidden"}>
          <p className="text-foreground mt-6">{t("RegisterDocuments")}</p>
          <p className="text-foreground">{t("WeSendLoginInformation")}</p>
          <p className="text-foreground mb-6">{t("WeSendLoginInformationInfo")}</p>
        </div>
        <div className={pageNumber == 2 ? "block" : "hidden"}>
          <p className="text-foreground mt-6 mb-6">{t("OnceYourApplication")}</p>
        </div>
        <form>
          <div className={pageNumber == 0 ? "block" : "hidden"}>
            <div className="relative mt-6">
              <label htmlFor="companyName" className="text-primary mb-5">{t("CompanyName")}</label>
              <FaBuilding className="absolute bottom-2 left-0 text-primary" />
              <input
                name="companyName"
                id="companyName"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                type="text"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
            <div className="relative mt-6">
              <label htmlFor="nameOfResponsiblePerson" className="text-primary mb-5">{t("NameOfResponsiblePerson")}</label>
              <BsPersonFill className="absolute bo2tom-1 left-0 text-primary" />
              <input
                name="nameOfResponsiblePerson"
                id="nameOfResponsiblePerson"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                type="text"
                value={formData.nameOfResponsiblePerson}
                onChange={handleInputChange}
                required
              />
            </div>
              {errors.nameOfResponsiblePerson && <p className="text-red-500 text-sm">{errors.nameOfResponsiblePerson}</p>}
            <div className="relative mt-6">
              <label htmlFor="address" className="text-primary mb-5">{t("Address")}</label>
              <FaMarker className="absolute bottom-2 left-0 text-primary" />
              <input
                name="address"
                id="address"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            <div className="relative mt-6">
              <label htmlFor="typeOfCompany" className="text-primary mb-5">{t("TypeOfCompany")}</label>
              <select
                name="typeOfCompany"
                id="typeOfCompany"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                value={formData.typeOfCompany}
                onChange={handleInputChange}
                required
              >
                <option value="">{t("PleaseSelect")}</option>
                <option value="transfer">{t("Transfer")}</option>
                <option value="cleaning">{t("Cleaning")}</option>
                <option value="warehousing">{t("Warehousing")}</option>
                <option value="other">{t("Other")}</option>
              </select>
            </div>
              {errors.typeOfCompany && <p className="text-red-500 text-sm">{errors.typeOfCompany}</p>}
          </div>
          <div className={pageNumber == 1 ? "block" : "hidden"}>
            <div className="relative mt-6">
              <label htmlFor="email" className="text-primary mb-5">{t("Email")}</label>
              <FaEnvelope className="absolute bottom-2 left-0 text-primary" />
              <input
                name="email"
                id="email"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <div className="relative mt-6">
              <label htmlFor="password" className="text-primary mb-5">{t("Password")}</label>
              <FaKey className="absolute bo2tom-1 left-0 text-primary" />
              <input
                name="password"
                id="password"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div className="absolute bottom-1 right-0 cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <div className="relative mt-6">
              <label htmlFor="passwordConfirmation" className="text-primary mb-5">{t("PasswordConfirmation")}</label>
              <FaKey className="absolute bottom-2 left-0 text-primary" />
              <input
                name="passwordConfirmation"
                id="passwordConfirmation"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                type={showPasswordConfirmation ? "text" : "password"}
                value={formData.passwordConfirmation}
                onChange={handleInputChange}
                required
              />
              <div className="absolute bottom-1 right-0 cursor-pointer" onClick={togglePasswordConfirmationVisibility}>
                {showPasswordConfirmation ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
              {errors.passwordConfirmation && <p className="text-red-500 text-sm">{errors.passwordConfirmation}</p>}
            <div className="relative mt-6">
              <label htmlFor="phone" className="text-primary mb-5">{t("PhoneNumber")}</label>
              <FaPhone className="absolute bottom-2 left-0 text-primary" />
              <input
                name="phone"
                id="phone"
                className="text-primary w-full pl-6 bg-transparent border-b-primary border-b focus:outline-none"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className={pageNumber == 2 ? "block" : "hidden"}>
            <div className="relative mt-6">
              <label htmlFor="companyLogo" className="text-primary mb-5">{t("CompanyLogo")}</label>
              <FaUpload className="absolute bottom-2 left-0 text-primary" />
              <input
                name="companyLogo" id="companyLogo" className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-serif
                file:bg-background file:text-primary file:cursor-pointer
                hover:file:bg-background" type="file"
                onChange={handleInputChange}
                required
              />
            </div>
            {errors.companyLogo && <p className="text-red-500 text-sm">{errors.companyLogo}</p>}
            <div className="relative mt-6">
              <label htmlFor="licensingInformation" className="text-primary mb-5">{t("LicensingInformation")}</label>
              <FaUpload className="absolute bottom-2 left-0 text-primary"/>
              <input name="licensingInformation" id="licensingInformation" className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-serif
              file:bg-background file:text-primary file:cursor-pointer
              hover:file:bg-background" type="file"
              onChange={handleInputChange}
              required/>
            </div >
            {errors.licensingInformation && <p className="text-red-500 text-sm">{errors.licensingInformation}</p>}
            <div className="relative mt-6">
                <label htmlFor="insurance" className="text-primary mb-5">{t("CopyOfInsurance")}</label>
                <FaUpload className="absolute bottom-2 left-0 text-primary"/>
                <input name="insurance" id="insurance" className="bg-transparent border-b-primary border-b focus:outline-none w-full pl-6 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-serif
                file:bg-background file:text-primary file:cursor-pointer
                hover:file:bg-background" type="file"
                onChange={handleInputChange}
                required/>
            </div >
            {errors.insurance && <p className="text-red-500 text-sm">{errors.insurance}</p>}
            <div className="relative w-full mt-6 flex justify-start items-center gap-2">
                <input name="policy" id="policy" className="bg-transparent accent-primary" type="checkbox"                 
                checked={formData.policy}
                onChange={handleInputChange} required/>
                <label htmlFor="policy" className="text-primary text-center">{t("Agree")} <Link className="text-secondary" href="/auth/register/policy" target="_blank"> {t("Policy")}</Link></label>
            </div >
            
          </div>
          <div className="flex justify-end items-center gap-4 mt-4">
            <div className={`bg-primary py-2 px-4 rounded-lg cursor-pointer ${pageNumber > 0 ? "block" : "hidden"}`} onClick={handlePreviousPage}><BsArrowLeft className="text-secondary text-lg font-bold"/></div>
            <div className={`bg-primary py-2 px-4 rounded-lg cursor-pointer ${pageNumber < 2 ? "block" : "hidden"}`} onClick={handleNextPage}><BsArrowRight className="text-secondary text-lg font-bold"/></div>
            <button type="submit" className={`bg-primary text-secondary py-2 px-4 text-lg font-bold rounded-xl ${pageNumber == 2 ? "block" : "hidden"}`}>{t("Submit")}</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
