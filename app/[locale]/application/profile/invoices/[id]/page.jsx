"use client";
import Invoice from "@/components/application/Invoice";
import TitleGoldenBar from "@/components/application/TitleGoldenBar"
import { useTranslations } from "use-intl";

const page = () => {
    const invoice = {
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
      };
    const t = useTranslations("Application.Profile")
  return (
    <>
        <TitleGoldenBar name={t("Invoice")} goBack={true}/>
        <div className="pt-24">
            <Invoice invoice={invoice}/>
        </div>
    </>
  )
}

export default page