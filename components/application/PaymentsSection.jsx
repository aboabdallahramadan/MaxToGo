import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const PaymentsSection = () => {
    const t = useTranslations("Application.Profile");
  const payments = [
    { id: 1, amount: -250, description: "Moving Service Payment", date: "2024-01-15" },
    { id: 2, amount: 500, description: "Refund for Cancelled Service", date: "2024-01-10" },
    { id: 3, amount: -175, description: "Packing Service", date: "2024-01-05" },
    { id: 4, amount: -300, description: "Storage Service", date: "2023-12-28" },
  ]

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-6">{t("PaymentHistory")}</h2>
      <div className="flex flex-col gap-4">
        {payments.map((payment) => (
          <Link key={payment.id} href={`/application/profile/payments/${payment.id}`}>
            <div 
              className="flex justify-start gap-4 items-center p-4 rounded-lg border border-primary hover:border-primary transition-colors"
            >
              <span className={`font-bold text-foreground py-2 px-2 rounded-lg ${payment.amount > 0 ? 'bg-[#01AB12B2]' : 'bg-[#FE0202B2]'}`}>
                {payment.amount > 0 ? '+' : ''}{payment.amount} €
              </span>
              <div>
                <p className="font-semibold text-foreground">{payment.description}</p>
                <p className="text-sm text-foreground/60">{new Date(payment.date).toLocaleDateString()}</p>
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PaymentsSection
