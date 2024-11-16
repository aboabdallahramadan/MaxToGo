"use client";
import { useState } from 'react';
import { useTranslations } from "next-intl";
import { BsArrowDownUp, BsBuildingFill, BsCalendarDate, BsHouseFill, BsPeopleFill, BsTextCenter, BsType } from "react-icons/bs";
import { FaBoxes, FaChartArea, FaLocationArrow } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import PurchaseTask from "@/components/application/PurchaseTask";
import TaskCardDetails from "./TaskCardDetails";
import MakeOffer from "./MakeOffer";

const AvailableTaskCard = ({ task }) => {
  const t = useTranslations("Application.AvailableTasks");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='w-full sm:w-3/5 bg-gray-800 flex flex-col justify-start items-center gap-4 p-4 border-2 border-transparent border-b-foreground hover:border-2 hover:border-primary hover:bg-hoverPrimary/5 rounded-lg transition-all duration-300'>
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full cursor-pointer"
      >
        <TaskCardDetails task={task}/>
        
        {/* Expandable Details Section */}
        <div className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-primary/5 rounded-lg">
            {/* Transfer specific details */}
            {task.type === "transfer" && (
              <>
                <div className="flex items-center gap-2">
                  <FaLocationArrow className="text-primary"/>
                  <span className="font-semibold">{t("ToLocation")}: {task.toLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsArrowDownUp className="text-primary"/>
                  <span className="font-semibold">{t("floorNumberOne")}: {task.floorNumberOne}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsArrowDownUp className="text-primary"/>
                  <span className="font-semibold">{t("floorNumberTwo")}: {task.floorNumberTwo}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBoxes className="text-primary"/>
                  <span className="font-semibold">{t("isWrapping")}: {task.isWrapping}</span>
                </div>
              </>
            )}

            {/* Cleaning specific details */}
            {task.type === "cleaning" && (
              <>
                <div className="flex items-center gap-2">
                  <BsHouseFill className="text-primary"/>
                  <span className="font-semibold">{t("Balcony")}: {task.balcony}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsBuildingFill className="text-primary"/>
                  <span className="font-semibold">{t("apartmentType")}: {task.apartmentType}</span>
                </div>
              </>
            )}

            {/* Warehousing specific details */}
            {task.type === "warehousing" && (
              <>
                <div className="flex items-center gap-2">
                  <FaChartArea className="text-primary"/>
                  <span className="font-semibold">{t("area")}: {task.area}</span>
                </div>
              </>
            )}

            {/* Empty Car specific details */}
            {task.type === "emptyCar" && (
              <>
                <div className="flex items-center gap-2">
                  <BsPeopleFill className="text-primary"/>
                  <span className="font-semibold">{t("numberOfWorkers")}: {task.numberOfWorkers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiTruck className="text-primary"/>
                  <span className="font-semibold">{t("numberOfCars")}: {task.numberOfCars}</span>
                </div>
              </>
            )}

            {/* Common details for applicable types */}
            {(task.type === "transfer" || task.type === "emptyCar") && (
              <>
                <div className="flex items-center gap-2">
                  <BsCalendarDate className="text-primary"/>
                  <span className="font-semibold">{t("isTimeFlexible")}: {task.isTimeFlexible}</span>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <BsType className="text-primary"/>
                    <p className="font-bold">{t("isInternationalOrLocal")}:</p>
                    <p>{task.isInternationalOrLocal}</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <FiTruck className="text-primary"/>
                    <p className="font-bold">{t("vehicleSize")}:</p>
                    <p>{task.vehicleSize}</p>
                </div>
              </>
            )}

            {
                (task.type == "warehousing" || task.type == "emptyCar") && (
                <div className="flex justify-start items-center gap-2">
                    <BsCalendarDate className="text-primary"/>
                    <p className="font-bold">{t("startingDate")}:</p>
                    <p>{task.startingDate}</p>
                </div>
                )
            }
            {
                (task.type == "transfer" || task.type == "cleaning") && (
                <div className="flex justify-start items-center gap-2">
                    <BsBuildingFill className="text-primary"/>
                    <p className="font-bold">{t("apartmentType")}:</p>
                    <p>{task.apartmentType}</p>
                </div>
                )
            }
            <div className="flex items-start gap-2">
                <BsTextCenter className="text-primary mt-1"/>
                <p className="font-semibold">{task.text}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full px-2 mt-2">
        <button onClick={() => setIsExpanded(!isExpanded)} className="py-2 px-4 text-lg text-foreground border border-primary hover:text-secondary hover:bg-primary rounded-xl">{t("Details")}</button>
        { task.status === "sold" ? <span className="text-primary border border-primary rounded-xl px-2 py-1">{t("Sold")}</span> : (task.priceType === "fixed" ? (
          <PurchaseTask task={task}/>
        ) : (
          <MakeOffer task={task}/>
        ))}
      </div>
    </div>
  );
};

export default AvailableTaskCard;
