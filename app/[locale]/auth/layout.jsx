import Image from 'next/image';
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className="w-full h-full flex flex-col lg:w-1/2">
            <div className='h-16 flex justify-center items-center'>
                <Image src="/images/logo.png" style={{ width: "auto", height: "auto" }} width={100} height={35}  alt="logo" />
            </div>
            <div>
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