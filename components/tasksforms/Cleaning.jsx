import React from 'react';
import { AiOutlineFileText, AiOutlineCalendar, AiOutlinePhone, AiOutlineMail, AiOutlineFileImage } from 'react-icons/ai';
import { FaBuilding, FaMoneyBill } from 'react-icons/fa';
import { FiArrowDownRight } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import Spinner from '@/components/Spinner';
import FileUpload from '@/components/FileUpload';

const Cleaning = ({ formData, handleChange, handleSubmit, isLoading, t, isGuest }) => {
  return (
    <form onSubmit={handleSubmit} className={`${!isGuest && "px-6" }`}>

                {
                    isGuest && (
                    <>
                        {/* Name */}
                        <div className="relative flex flex-col items-start justify-between w-full gap-4">
                            <label htmlFor="name">
                            <BsPerson className="inline-block mr-2 text-primary" />
                            {t("Name")}
                            </label>
                            <input
                            className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        {/* Email */}
                        <div className="mt-6 relative flex flex-col items-start justify-between w-full gap-4">
                            <label htmlFor="email">
                            <AiOutlineMail className="inline-block mr-2 text-primary" />
                            {t("Email")}
                            </label>
                            <input
                            className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        {/* Phone Number */}
                        <div className="mt-6 relative flex flex-col items-start justify-between w-full gap-4">
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
                            />
                        </div>

                    </>
                    )
                }
      
                {/* Task Master */}
                {
                    !isGuest && (
                        <div className="w-full flex justify-between items-center flex-nowrap gap-4">
                            <div className="relative flex flex-col items-start justify-between w-2/5 gap-4 mt-6">
                            <label htmlFor="taskMasterName">
                                <AiOutlineFileText className="inline-block mr-2 text-primary" />
                                {t("taskMaster")}
                            </label>
                            <input
                                className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                                type="text"
                                id="taskMasterName"
                                name="taskMasterName"
                                value={formData.taskMasterName}
                                onChange={handleChange}
                                required
                            />
                            </div>

                            {/* Phone Number */}
                            <div className="relative flex flex-col items-start justify-between w-2/5 gap-4 mt-6">
                            <label htmlFor="taskMasterPhoneNumber">
                                <AiOutlinePhone className="inline-block mr-2 text-primary" />
                                {t("phoneNumber")}
                            </label>
                            <input
                                className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                                type="text"
                                id="taskMasterPhoneNumber"
                                name="taskMasterPhoneNumber"
                                value={formData.taskMasterPhoneNumber}
                                onChange={handleChange}
                            />
                            </div>
                        </div>
                    )
                }
                
                {/* Task Name */}
                <div className="mt-6 relative flex flex-col items-start justify-between w-full gap-4">
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

                
                {/* Location */}
                <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                    <label htmlFor="location">
                    <FiArrowDownRight className="inline-block mr-2 text-primary" />
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

                {/* Apartment Type */}
                <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                    <label htmlFor="apartmentType">
                    <FaBuilding className="inline-block mr-2 text-primary" />
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

                {/* Balcony */}
                <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
                    <h4 className="text-xl text-center w-full">{t("Balcony")}</h4>
                    <div className="flex justify-center items-center  w-full">
                    <div className="flex justify-start items-center">
                        <input
                        className="accent-primary"
                        type="radio"
                        id="balconyYes"
                        name="balcony"
                        value="yes"
                        checked={formData.balcony === "yes"}
                        onChange={handleChange}
                        />
                        <label htmlFor="balconyYes" className="ml-2"> {t("Yes")} </label>
                    </div>
                    <div className="flex justify-start items-center ml-6">
                        <input
                        className="accent-primary"
                        type="radio"
                        id="balconyNo"
                        name="balcony"
                        value="no"
                        checked={formData.balcony === "no"}
                        onChange={handleChange}
                        />
                        <label htmlFor="balconyNo" className="ml-2"> {t("No")} </label>
                    </div>
                    </div>
                </div>

                {/* Apartment Size */}
                <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                    <label htmlFor="apartmentSize">
                    <FaBuilding className="inline-block mr-2 text-primary" />
                    {t("ApartmentSize")}
                    </label>
                    <input
                    className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                    type="number"
                    id="apartmentSize"
                    name="apartmentSize"
                    value={formData.apartmentSize}
                    onChange={handleChange}
                    required
                    />
                </div>

                {/* Do you have Rut*/}
                {
                    isGuest && (
                        <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
                            <h4 className="text-xl text-center w-full">{t("DoYouHaveRut")}</h4>
                            <div className="flex justify-center items-center  w-full">
                                <div className="flex justify-start items-center">
                                <input
                                    className="accent-primary"
                                    type="radio"
                                    id="haveRutYes"
                                    name="haveRut"
                                    value="yes"
                                    checked={formData.haveRut === "yes"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="haveRutYes" className="ml-2"> {t("Yes")} </label>
                                </div>
                                <div className="flex justify-start items-center ml-6">
                                <input
                                    className="accent-primary"
                                    type="radio"
                                    id="haveRutNo"
                                    name="haveRut"
                                    value="no"
                                    checked={formData.haveRut === "no"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="haveRutNo" className="ml-2"> {t("No")} </label>
                                </div>
                            </div>
                        </div>
                    )
                }
            

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

                {/* Cleaning Type */}
                <div className="relative flex items-center justify-between flex-col w-full gap-4 my-8">
                    <h4 className="text-xl text-center w-full">{t("CleaningType")}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4 w-full text-nowrap">
                        <div className="flex justify-center items-center ml-6">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="cleaningTypeMoreOut"
                            name="cleaningType"
                            value="moreOut"
                            checked={formData.cleaningType === "moreOut"}
                            onChange={handleChange}
                            />
                            <label htmlFor="cleaningTypeMoreOut" className="ml-2"> {t("MoreOutCleaning")} </label>
                        </div>
                        <div className="flex justify-center items-center ml-6">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="cleaningTypeOffice"
                            name="cleaningType"
                            value="office"
                            checked={formData.cleaningType === "office"}
                            onChange={handleChange}
                            />
                            <label htmlFor="cleaningTypeOffice" className="ml-2"> {t("OfficeCleaning")} </label>
                        </div>
                        <div className="flex justify-center items-center ml-6">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="cleaningTypeHouse"
                            name="cleaningType"
                            value="house"
                            checked={formData.cleaningType === "house"}
                            onChange={handleChange}
                            />
                            <label htmlFor="cleaningTypeHouse" className="ml-2"> {t("HouseCleaning")} </label>
                        </div>
                        <div className="flex justify-center items-center ml-6">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="cleaningTypeWindow"
                            name="cleaningType"
                            value="window"
                            checked={formData.cleaningType === "window"}
                            onChange={handleChange}
                            />
                            <label htmlFor="cleaningTypeWindow" className="ml-2"> {t("WindowCleaning")} </label>
                        </div>
                        <div className="flex justify-center items-center ml-6">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="cleaningTypeOther"
                            name="cleaningType"
                            value="other"
                            checked={formData.cleaningType === "other"}
                            onChange={handleChange}
                            />
                            <label htmlFor="cleaningTypeOther" className="ml-2"> {t("Other")} </label>
                        </div>
                    </div>
                </div>

                {/* Date and Time */}
                <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                    <label htmlFor="dateTime">
                    <AiOutlineCalendar className="inline-block mr-2 text-primary" />
                    {t("DateTime")}
                    </label>
                    <input
                    className="bg-transparent border-b-primary border-b focus:outline-none w-full :"
                    type="datetime-local"
                    id="dateTime"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleChange}
                    required
                    />
                </div>

                {/* Price */}
                {!isGuest && (
                    <>
                    
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
                            <span className="text-primary ml-2">kr</span>
                        </div>
                    </div>
                )}
                    </>
                )}

                {/* Text */}
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

                {/* Images */}
                <FileUpload onFileSelect={handleChange} multiple={true} fileType="image" name="images" />

                <div className="flex justify-end items-center w-full">
                    <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded-lg mt-6">
                    {isLoading ? <Spinner /> : t("Submit")}
                    </button>
                </div>
            </form>
    );
};

export default Cleaning;