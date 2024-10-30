import { useTranslations } from "next-intl";
import { BsArrowDownUp, BsBuildingFill, BsCalendarDate, BsChatFill, BsHouseFill, BsPeopleFill, BsPersonFill, BsPhoneFill, BsTextCenter, BsType } from "react-icons/bs";
import { FaBoxes, FaCalendarTimes, FaChartArea, FaIdBadge, FaLocationArrow, FaMoneyBill } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";

const TaskDetails = ({task}) => {
    const t = useTranslations("Application.AvailableTasks");
    
    return (
        <section className="w-full rounded-lg shadow-lg">
            {/* Header with basic task info */}
            <div className="bg-primary/10 p-6 rounded-t-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                        <FaIdBadge className="text-primary text-xl"/>
                        <span className="font-bold">{t("TaskId")}: {task.id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsType className="text-primary text-xl"/>
                        <span className="font-bold">{t("Type")}: {task.type}</span>
                    </div>
                    
                    {
                        task.priceType == "fixed" && (
                            <div className="flex items-center gap-2">
                                <FaMoneyBill className="text-primary text-xl"/>
                                <span className="font-bold">{t("Price")} :{task.price}€
                                </span>
                            </div>
                        )
                    }
                        
                </div>
            </div>

            {/* Main content */}
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left column - Basic Information */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary border-b pb-2">{t("Basic Information")}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <BsChatFill className="text-primary"/>
                                <p className="font-semibold">{t("Name")}: {task.name}</p>
                            </div>
                            {
                                (task.type == "warehousing" || task.type == "emptyCar") && (
                                <div className="flex justify-start items-center gap-2">
                                    <BsCalendarDate className="text-primary"/>
                                    <p className="font-bold">{t("startingDate")}:</p>
                                    <p>{task.startingDate}</p>
                                </div>
                                )
                            }
                            <div className="flex items-center gap-2">
                                <BsCalendarDate className="text-primary"/>
                                <p className="font-semibold">{t("CompletionDate")}: {task.completionDate}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLocationArrow className="text-primary"/>
                                <p className="font-semibold">{t("Location")}: {task.location}</p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <h3 className="text-lg font-bold text-primary border-b pb-2 mt-6">{t("Contact Information")}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <BsPersonFill className="text-primary"/>
                                <p className="font-semibold">{t("TaskMaster")}: {task.taskMaster}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <BsPhoneFill className="text-primary"/>
                                <p className="font-semibold">{t("PhoneNumber")}: {task.phoneNumber}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Type Specific Details */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary border-b pb-2">{t("Task Details")}</h3>
                        <div className="space-y-3">
                        {
                            (task.type == "transfer" || task.type == "emptyCar") && (
                                <>
                                    <div className="flex justify-start items-center gap-2">
                                        <FaLocationArrow className="text-primary"/>
                                        <p className="font-bold">{t("ToLocation")}:</p>
                                        <p>{task.toLocation}</p>
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
                        {
                            (task.type == "transfer") && (
                                <>
                                    <div className="flex justify-start items-center gap-2">
                                        <FaLocationArrow className="text-primary"/>
                                        <p className="font-bold">{t("floorNumberOne")}:</p>
                                        <p>{task.floorNumberOne}</p>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <FaLocationArrow className="text-primary"/>
                                        <p className="font-bold">{t("floorNumberTwo")}:</p>
                                        <p>{task.floorNumberTwo}</p>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <BsArrowDownUp className="text-primary"/>
                                        <p className="font-bold">{t("elevatorNumberOne")}:</p>
                                        <p>{task.elevatorNumberOne}</p>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <BsArrowDownUp className="text-primary"/>
                                        <p className="font-bold">{t("elevatorNumberTwo")}:</p>
                                        <p>{task.elevatorNumberTwo}</p>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <FaBoxes className="text-primary"/>
                                        <p className="font-bold">{t("isWrapping")}:</p>
                                        <p>{task.isWrapping}</p>
                                    </div>
                                </>
                            )
                        }
                        {
                            (task.type == "emptyCar") && (
                                <>
                                    <div className="flex justify-start items-center gap-2">
                                        <BsPeopleFill className="text-primary"/>
                                        <p className="font-bold">{t("numberOfWorkers")}:</p>
                                        <p>{task.numberOfWorkers}</p>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <FiTruck className="text-primary"/>
                                        <p className="font-bold">{t("numberOfCars")}:</p>
                                        <p>{task.numberOfCars}</p>
                                    </div>
                                </>
                            )
                        }
                        {
                            (task.type == "warehousing") && (
                                <>
                                    <div className="flex justify-start items-center gap-2">
                                        <FaCalendarTimes className="text-primary"/>
                                        <p className="font-bold">{t("storageDuration")}:</p>
                                        <p>{task.storageDuration}</p>
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <FaChartArea className="text-primary"/>
                                        <p className="font-bold">{t("area")}:</p>
                                        <p>{task.area}</p>
                                    </div>
                                </>
                            )
                        }
                        {
                            (task.type == "cleaning") && (
                            <div className="flex justify-start items-center gap-2">
                                <BsHouseFill className="text-primary"/>
                                <p className="font-bold">{t("Balcony")}:</p>
                                <p>{task.balcony}</p>
                            </div>
                            )
                        }
                        {
                            (task.type != "warehousing") && (
                            <div className="flex justify-start items-center gap-2">
                                <BsCalendarDate className="text-primary"/>
                                <p className="font-bold">{t("isTimeFlexible")}:</p>
                                <p>{task.isTimeFlexible}</p>
                            </div>
                            )
                        }
                        </div>
                    </div>
                </div>

                {/* Description section - Full width */}
                <div className="mt-8 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-primary border-b pb-2">{t("Description")}</h3>
                    <div className="mt-3">
                        <div className="flex items-start gap-2">
                            <BsTextCenter className="text-primary mt-1"/>
                            <p className="font-semibold">{task.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaskDetails;
