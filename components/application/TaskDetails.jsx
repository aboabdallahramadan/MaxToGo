import { useTranslations } from "next-intl";
import { AiOutlineApartment } from "react-icons/ai";
import { BsArrowDownUp, BsBuildingFill, BsCalendarDate, BsChatFill, BsHouseFill, BsPeopleFill, BsPerson, BsPersonFill, BsPhoneFill, BsTextCenter, BsType } from "react-icons/bs";
import { FaBoxes, FaCalendarTimes, FaChartArea, FaIdBadge, FaLocationArrow, FaMoneyBill } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

const TaskDetails = ({task}) => {
    const t = useTranslations("Application.AvailableTasks");
  return (
    <section className="w-full">
        <div className="flex flex-col items-start justify-center gap-8 w-full py-8 lg:text-xl lg:px-10">
            <div className="flex justify-center items-center gap-2">
                <FaIdBadge className="text-primary"/>
                <p className="font-bold text-primary">{t("TaskId")}:</p>
                <p>{task.id}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <BsType className="text-primary"/>
                <p className="font-bold text-primary">{t("Type")}:</p>
                <p>{task.type}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <BsChatFill className="text-primary"/>
                <p className="font-bold text-primary">{t("Name")}:</p>
                <p>{task.name}</p>
            </div>
            {
                (task.type == "storage" || task.type == "emptyTruck") && (
                <div className="flex justify-center items-center gap-2">
                    <BsCalendarDate className="text-primary"/>
                    <p className="font-bold text-primary">{t("startingDate")}:</p>
                    <p>{task.startingDate}</p>
                </div>
                )
            }
            <div className="flex justify-center items-center gap-2">
                <BsCalendarDate className="text-primary"/>
                <p className="font-bold text-primary">{t("CompletionDate")}:</p>
                <p>{task.completionDate}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <FaLocationArrow className="text-primary"/>
                <p className="font-bold text-primary">{t("Location")}:</p>
                <p>{task.location}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <FaMoneyBill className="text-primary"/>
                <p className="font-bold text-primary">{t("Price")}:</p>
                <p>{task.price}</p>€
            </div>
            <div className="flex justify-center items-center gap-2">
                <BsTextCenter className="text-primary"/>
                <p className="font-bold text-primary">{t("Details")}:</p>
                <p>{task.text}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <BsPersonFill className="text-primary"/>
                <p className="font-bold text-primary">{t("TaskMaster")}:</p>
                <p>{task.taskMaster}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <BsPhoneFill className="text-primary"/>
                <p className="font-bold text-primary">{t("PhoneNumber")}:</p>
                <p>{task.phoneNumber}</p>
            </div>
            {
                (task.type == "transfer" || task.type == "emptyTruck") && (
                    <>
                        <div className="flex justify-center items-center gap-2">
                            <FaLocationArrow className="text-primary"/>
                            <p className="font-bold text-primary">{t("ToLocation")}:</p>
                            <p>{task.toLocation}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <BsType className="text-primary"/>
                            <p className="font-bold text-primary">{t("isInternationalOrLocal")}:</p>
                            <p>{task.isInternationalOrLocal}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FiTruck className="text-primary"/>
                            <p className="font-bold text-primary">{t("vehicleSize")}:</p>
                            <p>{task.vehicleSize}</p>
                        </div>
                    </>
                )
            }

            {
                (task.type == "transfer" || task.type == "cleaning") && (
                <div className="flex justify-center items-center gap-2">
                    <BsBuildingFill className="text-primary"/>
                    <p className="font-bold text-primary">{t("apartmentType")}:</p>
                    <p>{task.apartmentType}</p>
                </div>
                )
            }
            {
                (task.type == "transfer") && (
                    <>
                        <div className="flex justify-center items-center gap-2">
                            <FaLocationArrow className="text-primary"/>
                            <p className="font-bold text-primary">{t("floorNumberOne")}:</p>
                            <p>{task.floorNumberOne}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaLocationArrow className="text-primary"/>
                            <p className="font-bold text-primary">{t("floorNumberTwo")}:</p>
                            <p>{task.floorNumberTwo}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <BsArrowDownUp className="text-primary"/>
                            <p className="font-bold text-primary">{t("elevator")}:</p>
                            <p>{task.elevator}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaBoxes className="text-primary"/>
                            <p className="font-bold text-primary">{t("isWrapping")}:</p>
                            <p>{task.isWrapping}</p>
                        </div>
                    </>
                )
            }
            {
                (task.type == "emptyTruck") && (
                    <>
                        <div className="flex justify-center items-center gap-2">
                            <BsPeopleFill className="text-primary"/>
                            <p className="font-bold text-primary">{t("numberOfWorkers")}:</p>
                            <p>{task.numberOfWorkers}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FiTruck className="text-primary"/>
                            <p className="font-bold text-primary">{t("numberOfCars")}:</p>
                            <p>{task.numberOfCars}</p>
                        </div>
                    </>
                )
            }
            {
                (task.type == "storage") && (
                    <>
                        <div className="flex justify-center items-center gap-2">
                            <FaCalendarTimes className="text-primary"/>
                            <p className="font-bold text-primary">{t("storageDuration")}:</p>
                            <p>{task.storageDuration}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaChartArea className="text-primary"/>
                            <p className="font-bold text-primary">{t("area")}:</p>
                            <p>{task.area}</p>
                        </div>
                    </>
                )
            }
            {
                (task.type == "cleaning") && (
                <div className="flex justify-center items-center gap-2">
                    <BsHouseFill className="text-primary"/>
                    <p className="font-bold text-primary">{t("Balcony")}:</p>
                    <p>{task.balcony}</p>
                </div>
                )
            }
            {
                (task.type != "storage") && (
                <div className="flex justify-center items-center gap-2">
                    <BsCalendarDate className="text-primary"/>
                    <p className="font-bold text-primary">{t("isTimeFlexible")}:</p>
                    <p>{task.isTimeFlexible}</p>
                </div>
                )
            }
        </div>
    </section>
  )
}

export default TaskDetails