"use client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { AiOutlineFileText } from "react-icons/ai";
const SelectTaskType = ({active}) => {
    const t = useTranslations("GuestTasks");
    const router = useRouter();
    const handleOnchange = e => {
        router.replace(`/application/add-task/${e.target.value}`)
    }
  return (
    <div className='w-full flex justify-start items-center relative my-4'>
        <AiOutlineFileText className="text-primary text-lg absolute bottom-1 left-0"/>
        <select defaultValue={active} className="text-primary pl-6 bg-transparent border-b-primary border-b focus:outline-none cursor-pointer" onChange={handleOnchange} id="type" name="type">
            <option  value="transfer">
                {t("MovingHelp")}
            </option>
            <option  value="empty-car">
                {t("MovingOnTheWay")}
            </option>
            <option  value="cleaning">
                {t("Cleaning")}
            </option>
            <option  value="warehousing">
                {t("Storage")}
            </option>
            <option  value="empty-car">
                {t("RideShare")}
            </option>
        </select>
    </div>
  )
}

export default SelectTaskType