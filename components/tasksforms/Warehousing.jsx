import React from 'react';
import { AiOutlineFileText, AiOutlineCalendar, AiOutlinePhone, AiOutlineMail, AiOutlineFileImage } from 'react-icons/ai';
import { FaMoneyBill } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import Spinner from '@/components/Spinner';
const Warehousing = ({ formData, handleChange, handleSubmit, isLoading, t, isGuest }) => {
  return (
    <form onSubmit={handleSubmit}  className={`${!isGuest && "px-6" }`}>
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

            {/* how many months */}
            <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="months">
                <AiOutlineCalendar className="inline-block mr-2 text-primary" />
                {t("HowManyMonths")}
                </label>
                <input
                className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                type="number"
                id="months"
                name="months"
                value={formData.months}
                onChange={handleChange}
                required
                />
            </div>

            {/* how many years*/}
            <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="years">
                <AiOutlineCalendar className="inline-block mr-2 text-primary" />
                {t("HowManyYears")}
                </label>
                <input
                className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                type="number"
                id="years"
                name="years"
                value={formData.years}
                onChange={handleChange}
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
                placeholder={t("LocationPlaceholder")}
                required
                />
            </div>

            {/* area in square meters */}
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
                        {t("PricePerMonth")}
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

            {/* Image Upload */}
            <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
              <label htmlFor="image">
                <AiOutlineFileImage className="inline-block mr-2 text-primary" />
                {t("UploadImage")}
              </label>
              <input
                className="bg-transparent border-primary border focus:outline-none w-full "
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
              />
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
  );
};

export default Warehousing;