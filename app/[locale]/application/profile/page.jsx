import React from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { BsPen, BsPeople, BsWallet } from 'react-icons/bs';

const page = () => {
  const t = useTranslations("Application.Profile")
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-primary">John Doe</h1>
          <p className="text-foreground">john.doe@example.com</p>
          <p className="text-foreground">+1 (555) 123-4567</p>
        </div>

        <div className="grid grid-cols-2 mb-8">
          <div className=" p-4 text-center border border-foreground border-l-transparent">
            <h3 className="font-semibold text-primary">{t("Wallet")}</h3>
            <p className="text-2xl font-bold text-primary">$1,234.56</p>
          </div>
          <div className=" p-4 text-center border border-foreground border-r-transparent">
            <h3 className="font-semibold text-primary">{t("TotalOrders")}</h3>
            <p className="text-2xl font-bold text-primary">24</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link 
            href="/application/profile/payments"
            className="flex justify-start gap-2 items-center text-lg w-full text-foreground border-2 border-transparent hover:text-primary hover:border-primary py-3 px-6 rounded-lg text-center font-semibold hover:bg-primary/90 transition-colors"
          >
            <BsWallet className='text-primary'/>
            {t("Payments")}
          </Link>
          <button 
            className="flex justify-start gap-2 items-center text-lg w-full text-foreground border-2 border-transparent hover:text-primary hover:border-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <BsPen className='text-primary'/>
            {t("EditInfo")}
          </button>
          <button 
            className="flex justify-start gap-2 items-center text-lg w-full text-foreground border-2 border-transparent hover:text-primary hover:border-primary py-3 px-6 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            <BsPeople className='text-primary'/>
            {t("ShareWithFriends")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default page