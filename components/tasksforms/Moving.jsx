import React from 'react';
import { FaRulerCombined, FaBuilding, FaTruck, FaMoneyBill} from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineCalendar, AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineFileImage } from 'react-icons/ai';
import { FiArrowUpRight, FiArrowDownRight} from 'react-icons/fi';
import Spinner from '@/components/Spinner';
import { BsPerson } from 'react-icons/bs';

const Moving = ({ formData, handleChange, handleSubmit, isLoading, t, isGuest }) => {
  return (
    <form onSubmit={handleSubmit} className={`${!isGuest && "px-6"}`}>


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

      {/* Date and Time */}
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
            {/* From */}
            <div className='mt-6'>
              <h2 className="text-xl text-center w-full">{t("From")}</h2>
              {/* Location */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="fromLocation">
                  <FiArrowDownRight className="inline-block mr-2 text-primary" />
                  {t("Location")}
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

            
              {/* Location Size */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="fromLocationSize">
                  <FaRulerCombined className="inline-block mr-2 text-primary" />
                  {t("HomeSize")}
                </label>
                <input
                  className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                  type="number"
                  id="fromLocationSize"
                  name="fromLocationSize"
                  value={formData.fromLocationSize}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Floor Number */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="fromFloorNumber">
                  <AiOutlineHome className="inline-block mr-2 text-primary" />
                  {t("FloorNumber")}
                </label>
                <input
                  className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                  type="number"
                  id="fromFloorNumber"
                  name="fromFloorNumber"
                  value={formData.fromFloorNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Elevator */}
              <div className="relative flex items-center justify-around flex-col sm:flex-row w-full gap-4 mt-8">
                <div>
                  <h4 className="text-xl text-center w-full">{t("Elevator")}</h4>
                  <div className="flex justify-center items-center  w-full gap-4">
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="fromElevatorNotFound"
                        name="fromElevator"
                        value="notFound"
                        checked={formData.fromElevator === "notFound"}
                        onChange={handleChange}
                      />
                      <label htmlFor="fromElevatorNotFound" className="ml-2"> {t("NotFound")} </label>
                    </div>
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="fromElevatorBig"
                        name="fromElevator"
                        value="big"
                        checked={formData.fromElevator === "big"}
                        onChange={handleChange}
                      />
                      <label htmlFor="fromElevatorBig" className="ml-2"> {t("Big")} </label>
                    </div>
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="fromElevatorMedium"
                        name="fromElevator"
                        value="medium"
                        checked={formData.fromElevator === "medium"}
                        onChange={handleChange}
                      />
                      <label htmlFor="fromElevatorMedium" className="ml-2"> {t("Medium")} </label>
                    </div>
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="fromElevatorSmall"
                        name="fromElevator"
                        value="small"
                        checked={formData.fromElevator === "small"}
                        onChange={handleChange}
                      />
                      <label htmlFor="fromElevatorSmall" className="ml-2"> {t("Small")} </label>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* Distance For Car Parking */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="fromDistanceForParking">
                  <FaBuilding className="inline-block mr-2 text-primary" />
                  {t("DistanceForParking")}
                </label>
                <input
                  className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                  type="number"
                  id="fromDistanceForParking"
                  name="fromDistanceForParking"
                  value={formData.fromDistanceForParking}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* To */}
            <div className='mt-6'>
              <h2 className="text-xl text-center w-full">{t("To")}</h2>
              {/* Location */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="toLocation">
                  <FiArrowDownRight className="inline-block mr-2 text-primary" />
                  {t("Location")}
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

            
              {/* Location Size */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="toLocationSize">
                  <FaRulerCombined className="inline-block mr-2 text-primary" />
                  {t("HomeSize")}
                </label>
                <input
                  className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                  type="number"
                  id="toLocationSize"
                  name="toLocationSize"
                  value={formData.toLocationSize}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Floor Number */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="toFloorNumber">
                  <AiOutlineHome className="inline-block mr-2 text-primary" />
                  {t("FloorNumber")}
                </label>
                <input
                  className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                  type="number"
                  id="toFloorNumber"
                  name="toFloorNumber"
                  value={formData.toFloorNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Elevator */}
              <div className="relative flex items-center justify-around flex-col sm:flex-row w-full gap-4 mt-8">
                <div>
                  <h4 className="text-xl text-center w-full">{t("Elevator")}</h4>
                  <div className="flex justify-center items-center  w-full gap-4">
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="toElevatorNotFound"
                        name="toElevator"
                        value="notFound"
                        checked={formData.toElevator === "notFound"}
                        onChange={handleChange}
                      />
                      <label htmlFor="toElevatorNotFound" className="ml-2"> {t("NotFound")} </label>
                    </div>
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="toElevatorBig"
                        name="toElevator"
                        value="big"
                        checked={formData.toElevator === "big"}
                        onChange={handleChange}
                      />
                      <label htmlFor="toElevatorBig" className="ml-2"> {t("Big")} </label>
                    </div>
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="toElevatorMedium"
                        name="toElevator"
                        value="medium"
                        checked={formData.toElevator === "medium"}
                        onChange={handleChange}
                      />
                      <label htmlFor="toElevatorMedium" className="ml-2"> {t("Medium")} </label>
                    </div>
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="toElevatorSmall"
                        name="toElevator"
                        value="small"
                        checked={formData.toElevator === "small"}
                        onChange={handleChange}
                      />
                      <label htmlFor="toElevatorSmall" className="ml-2"> {t("Small")} </label>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* Distance For Car Parking */}
              <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
                <label htmlFor="toDistanceForParking">
                  <FaBuilding className="inline-block mr-2 text-primary" />
                  {t("DistanceForParking")}
                </label>
                <input
                  className="bg-transparent border-b-primary border-b focus:outline-none w-full"
                  type="number"
                  id="toDistanceForParking"
                  name="toDistanceForParking"
                  value={formData.toDistanceForParking}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Vehicle Size */}
            {
              !isGuest && (
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
              )
            }
            

            {/* Price */}
            {!isGuest && (
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
            )}
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
            

            {/* Is Wrapping */}
            <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
              <h4 className="text-xl text-center w-full">{t("Packing")}</h4>
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

            {/* Moving out cleaning */}
            {
              isGuest && (
                <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
                  <h4 className="text-xl text-center w-full">{t("MovingOutCleaning")}</h4>
                  <div className="flex justify-center items-center  w-full">
                    <div className="flex justify-start items-center">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="isMovingOutCleaningYes"
                        name="isMovingOutCleaning"
                        value="yes"
                        checked={formData.isMovingOutCleaning === "yes"}
                        onChange={handleChange}
                      />
                      <label htmlFor="isMovingOutCleaningYes" className="ml-2"> {t("Yes")} </label>
                    </div>
                    <div className="flex justify-start items-center ml-6">
                      <input
                        className="accent-primary"
                        type="radio"
                        id="isMovingOutCleaningNo"
                        name="isMovingOutCleaning"
                        value="no"
                        checked={formData.isMovingOutCleaning === "no"}
                        onChange={handleChange}
                      />
                      <label htmlFor="isMovingOutCleaningNo" className="ml-2"> {t("No")} </label>
                    </div>
                  </div>
                </div>
              )
            }
            

            {/* Are There Heavy Things(More than 50KG) */}
            <div className="relative flex items-center justify-between flex-col w-full gap-4 mt-8">
              <h4 className="text-xl text-center w-full">{t("AreThereHeavyThings")}</h4>
              <div className="flex justify-center items-center  w-full">
                <div className="flex justify-start items-center">
                  <input
                    className="accent-primary"
                    type="radio"
                    id="heavyThingsYes"
                    name="heavyThings"
                    value="yes"
                    checked={formData.heavyThings === "yes"}
                    onChange={handleChange}
                  />
                  <label htmlFor="heavyThingsYes" className="ml-2"> {t("Yes")} </label>
                </div>
                <div className="flex justify-start items-center ml-6">
                  <input
                    className="accent-primary"
                    type="radio"
                    id="heavyThingsNo"
                    name="heavyThings"
                    value="no"
                    checked={formData.heavyThings === "no"}
                    onChange={handleChange}
                  />
                  <label htmlFor="heavyThingsNo" className="ml-2"> {t("No")} </label>
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

            {/* Image Upload */}
            <div className="relative flex flex-col items-start justify-between w-full gap-4 mt-6">
              <label htmlFor="images">
                <AiOutlineFileImage className="inline-block mr-2 text-primary" />
                {t("UploadImage")}
              </label>
              <input
                className="bg-transparent border-primary border focus:outline-none w-full "
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={handleChange}
                required
              />
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
                placeholder={t("MovingTextareaPlaceholder")}
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

export default Moving;