import { useTranslations } from "next-intl";
import TaskCardDetails from "@/components/application/TaskCardDetails";
import TitleGoldenBar from "@/components/application/TitleGoldenBar";
import Image from "next/image";
import { FaIdBadge } from "react-icons/fa";
import { BsPerson, BsPhone } from "react-icons/bs";
import PaymentInvoice from "@/components/application/PaymentInvoice";

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
    },
    invoice : {
        id: "2024-001",
        date: "2024-01-15",
        clientName: "Moving Express AB",
        clientAddress: "Storgatan 123, 11234 Stockholm",
        items: [
          {
            description: "Moving Service - Large Apartment",
            amount: 1,
            price: 1500,
            total: 1500
          },
          {
            description: "Packing Materials",
            amount: 3,
            price: 200,
            total: 600
          },
          {
            description: "Extra Helper",
            amount: 2,
            price: 400,
            total: 800
          },
          {
            description: "Storage Service (1 week)",
            amount: 1,
            price: 700,
            total: 700
          }
        ],
        subtotal: 3600,
        vat: 900,
        total: 4500,
        companyInfo: {
          name: "Max To Go AB",
          orgNumber: "556677-8899",
          address: "Kungsgatan 45, 11156 Stockholm",
          email: "billing@maxtogo.com",
          phone: "+46 70 123 45 67"
        }

}
};
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
            <div className="pt-12">
                <PaymentInvoice invoice={payment.invoice}/>
            </div>
        </div>
    </>

    
        

  )
}

export default page