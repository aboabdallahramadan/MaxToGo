import PaymentsSection from '@/components/application/PaymentsSection';
import TitleGoldenBar from '@/components/application/TitleGoldenBar';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';


const page = () => {
    const t = useTranslations("Application.Profile");
    const payments = [
        { id: 1, amount: -250, description: "Moving Service Payment", date: "2024-01-15" },
        { id: 2, amount: 500, description: "Refund for Cancelled Service", date: "2024-01-10" },
        { id: 3, amount: -175, description: "Packing Service", date: "2024-01-05" },
        { id: 4, amount: -300, description: "Storage Service", date: "2023-12-28" },
      ]
  return (
    <>
    <TitleGoldenBar name={t("Invoices")} goBack={true}/>
    {/* balance */}
    <div className="container pt-28">
      {/* payments section */}
        <div className="p-4">
            <div className="flex flex-col gap-4">
                {payments.map((payment) => (
                    <div  key={payment.id}
                    className="flex justify-between gap-4 items-center p-4 rounded-lg border border-primary hover:border-primary transition-colors"
                    >
                        <div className='flex justify-start gap-4'>
                            <span className={`font-bold text-foreground py-2 px-2 rounded-lg ${payment.amount > 0 ? 'bg-[#01AB12B2]' : 'bg-[#FE0202B2]'}`}>
                                {payment.amount > 0 ? '+' : ''}{payment.amount} €
                            </span>
                            <div>
                                <p className="font-semibold text-foreground">{payment.description}</p>
                                <p className="text-sm text-foreground/60">{new Date(payment.date).toLocaleDateString()}</p>
                            </div>
                        </div>
                    
                        <Link href={`/application/profile/invoices/${payment.id}`} className='bg-primary text-secondary rounded-lg py-2 px-4'>{t("View")}</Link>
                    </div>

                ))}
            </div>
        </div>
    </div>
      
    </>
  )
}

export default page