import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex justify-center items-center h-screen w-screen overflow-x-hidden'>
        <div className="w-full h-full flex flex-col lg:w-1/2  overflow-y-scroll max-h-screen pt-14">
            <div className='h-16 flex justify-center items-center'>
                <Link href="/" className="mb-4">
                    <Image src="/images/logo.png" style={{ width: "auto", height: "auto" }} width={100} height={35}  alt="logo" />
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center flex-1'>
                {children}
            </div>
        </div>
        <div className="w-1/2 h-full bg-secondary hidden items-center justify-center lg:flex">
            <Image src="/images/logo.png" style={{ width: "auto", height: "auto" }} width={250} height={150}  alt="logo" />
        </div>
    </div>
  )
}

export default layout