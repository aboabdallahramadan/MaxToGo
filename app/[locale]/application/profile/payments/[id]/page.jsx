import { useTranslations } from "next-intl";
import TaskCardDetails from "@/components/application/TaskCardDetails";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";
import Image from "next/image";
import { FaIdBadge } from "react-icons/fa";
import { BsPerson, BsPhone } from "react-icons/bs";

const page = () => {
    const t = useTranslations("Application.AvailableTasks");
  const payment = { 
    id: 1, 
    amount: -250, 
    description: "Moving Service Payment", 
    date: "2024-01-15" ,
    task: {
        id: 1234,
        name: "task name",
        type: "emptyCar",
        location: "Gaza",
        priceType: "fixed",
        toLocation: "Gaza",
        taskMaster: "mohammad ramadan",
        phone: "099999999",
        completionDate: "2024/1/1",
        price: 200,
        user: {
            avatar: "/images/profile.jpg",
            name: "john doe"
        }

    }
};
    const task= payment.task
  return (
    <>
    <TitleGoldenBar name={t("payment")} goBack={true}/>
        <div className="container pt-24">
            <div
            className=" flex justify-start gap-4 items-center p-4 rounded-lg border border-primary hover:border-primary transition-colors"
            >
                <span className={`font-bold text-foreground py-2 px-2 rounded-lg ${payment.amount > 0 ? 'bg-[#01AB12B2]' : 'bg-[#FE0202B2]'}`}>
                {payment.amount > 0 ? '+' : ''}{payment.amount} €
                </span>
                <div>
                <p className="font-semibold text-foreground">{payment.description}</p>
                <p className="text-sm text-foreground/60">{new Date(payment.date).toLocaleDateString()}</p>
                </div>
            </div>

            <div className='mt-6 flex flex-col justify-start items-center gap-4 px-6 py-4 border-2 border-primary rounded-lg'>
                
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img 
                        src={task.user.avatar || '/images/default-avatar.png'} 
                        alt="User avatar" 
                        className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                        <h3 className="font-medium text-lg">{task.user.name}</h3>
                        </div>
                    </div>
                    <div className="h-20">
                        <Image
                        src="/images/small-logo.png"
                        width={150}
                        height={50}
                        alt="logo"
                        style={{ width: "auto", height: "100%" }}
                        priority
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4 w-full flex-wrap">
                    <div className="text-lg flex items-center justify-start gap-2 w-1/2 sm:w-1/3">
                        <FaIdBadge className="text-primary"/>
                        <p>{t("TaskId")}: {task.id}</p>
                    </div>
                    <div className="text-lg flex items-center justify-start gap-2 w-1/2 sm:w-1/3">
                        <BsPerson className="text-primary"/>
                        <p>{t("TaskMaster")}: {task.taskMaster}</p>
                    </div>
                    <div className="text-lg flex items-center justify-start gap-2 w-1/2 sm:w-1/3">
                        <BsPhone className="text-primary"/>
                        <p>{t("Phone")}: {task.phone}</p>
                    </div>
                </div>
                <TaskCardDetails task={task}/>
            </div>
        </div>
    </>

    
        

  )
}

export default page