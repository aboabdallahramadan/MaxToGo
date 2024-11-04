import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-center px-6 py-12 max-w-2xl mx-auto">
        <div className="mb-8">
          <Image
            src="/images/small-logo.png"
            alt="FlyttConnect Logo"
            width={200}
            height={60}
            className="mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Coming Soon
        </h1>
        
        <p className="text-xl text-gray-400 mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        
      </div>
    </main>
  )
}

export default page
