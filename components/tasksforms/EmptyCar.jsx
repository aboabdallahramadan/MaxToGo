import React from 'react';
import { AiOutlineFileText, AiOutlineCalendar, AiOutlinePhone } from 'react-icons/ai';
import { FaTruck, FaMoneyBill, FaWeight } from 'react-icons/fa';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import Spinner from '@/components/Spinner';

const EmptyCar = ({ formData, handleChange, handleSubmit, isLoading, t, isGuest }) => {
  return (
    <form onSubmit={handleSubmit}  className={`${!isGuest && "px-6"}`}>

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
                <div className="relative flex flex-col items-start justify-between w-full gap-4">
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
                <div className="relative flex flex-col items-start justify-between w-full gap-4">
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

                    {/*Date and Time */}
                    <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                        <label htmlFor="dateTime">
                        <AiOutlineCalendar className="inline-block mr-2 text-primary" />
                        {t("MovingDateAndTime")}
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
                        <FiArrowUpRight className="inline-block mr-2 text-primary" />
                        {t("DriveFromLocation")}
                        </label>
                        <input
                        className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                        type="text"
                        id="fromLocation"
                        name="fromLocation"
                        value={formData.fromLocation}
                        onChange={handleChange}
                        placeholder={t("LocationPlaceholder")}
                        required
                        />
                    </div>

                    {/* To Location */}
                    <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                        <label htmlFor="toLocation">
                        <FiArrowDownRight className="inline-block mr-2 text-primary" />
                        {t("DriveToLocation")}
                        </label>
                        <input
                        className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                        type="text"
                        id="toLocation"
                        name="toLocation"
                        value={formData.toLocation}
                        onChange={handleChange}
                        placeholder={t("LocationPlaceholder")}
                        required
                        />
                    </div>


                    {/* Vehicle Size */}
                    <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                        <label htmlFor="vehicleSize">
                        <FaTruck className="inline-block mr-2 text-primary" />
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
                    
                    {/* Number of Cars */}
                    <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                        <label htmlFor="numberOfCars">
                        <FaTruck className="inline-block mr-2 text-primary" />
                        {t("NumberOfCars")}
                        </label>
                        <input
                        className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                        type="number"
                        id="numberOfCars"
                        name="numberOfCars"
                        value={formData.numberOfCars}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    {/* Available Weight */}
                    <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                        <label htmlFor="availableWeight">
                        <FaWeight className="inline-block mr-2 text-primary" />
                        {t("AvailableWeight")}
                        </label>
                        <input
                        className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                        type="number"
                        id="availableWeight"
                        name="availableWeight"
                        value={formData.availableWeight}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    {/* Number of Workers */}
                    <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                        <label htmlFor="numberOfWorkers">
                            <FaTruck className="inline-block mr-2 text-primary" />
                            {t("NumberOfWorkers")}
                        </label>
                        <input
                        className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                        type="number"
                        id="numberOfWorkers"
                        name="numberOfWorkers"
                        value={formData.numberOfWorkers}
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
                                <span className="text-primary ml-2">€</span>
                            </div>
                        </div>
                        )}
                        </>
                    )}
                    

                    
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

                    {/* Task Type */}
                    <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
                        <h4 className="text-xl text-center w-full">{t("TaskType")}</h4>
                        <div className="flex justify-center items-center gap-4 w-full">
                        <div className="flex justify-start items-center">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="local"
                            name="taskType"
                            value="local"
                            checked={formData.taskType === "local"}
                            onChange={handleChange}
                            />
                            <label htmlFor="local" className="ml-2"> {t("Local")} </label>
                        </div>
                        <div className="flex justify-start items-center">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="national"
                            name="taskType"
                            value="national"
                            checked={formData.taskType === "national"}
                            onChange={handleChange}
                            />
                            <label htmlFor="national" className="ml-2"> {t("National")} </label>
                        </div>
                        <div className="flex justify-start items-center">
                            <input
                            className="accent-primary"
                            type="radio"
                            id="international"
                            name="taskType"
                            value="international"
                            checked={formData.taskType === "international"}
                            onChange={handleChange}
                            />
                            <label htmlFor="international" className="ml-2"> {t("International")} </label>
                        </div>
                        
                        
                        </div>
                    </div>

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

                    <div className="flex justify-end items-center w-full">
                        <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded-lg mt-6">
                        {isLoading ? <Spinner /> : t("Submit")}
                        </button>
                    </div>
                </form>
  );
};

export default EmptyCar;