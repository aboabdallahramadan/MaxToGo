'use client'
import { useState, useRef } from 'react'
import TitleGoldenBar from "@/components/application/TitleGoldenBar"
import { useTranslations } from "next-intl"
import Image from 'next/image'
import { BsCamera } from 'react-icons/bs'

const Page = () => {
  const t = useTranslations("Application.Profile")
  const fileInputRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState("/images/profile.jpg")
  const [imageFile, setImageFile] = useState(null)
  const [formData, setFormData] = useState({
    phoneNumber: '+46 123 456 789',
    companyName: 'Moving Company AB',
    responsiblePerson: 'John Doe',
    address: 'Kungsgatan 1, 11143 Stockholm'
  })

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const submitData = new FormData()
    submitData.append('profileImage', imageFile)
    
    // Append other form data
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key])
    })

    try {
      const response = await fetch('/api/profile/update', {
        method: 'POST',
        body: submitData,
      })
      
      if (response.ok) {
        // Handle success
        const data = await response.json()
        console.log('Profile updated:', data)
      }
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <div className="min-h-screen">
      <TitleGoldenBar name={t("EditProfileInfo")} goBack={true}/>
      <div className='container pt-28'>
        <div className="w-full p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-32 h-32">
              <Image
                src={selectedImage}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
              <button 
                type="button"
                onClick={handleImageClick}
                className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors"
              >
                <BsCamera size={20} />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

            {/* Form Fields */}
            <div className="space-y-4">
                <div>
                <label className="block text-foreground mb-2">
                    {t("PhoneNumber")}
                </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-primary bg-background focus:border-primary"
                />
                </div>

                <div>
                <label className="block text-foreground mb-2">
                    {t("CompanyName")}
                </label>
                <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-primary bg-background focus:border-primary"
                />
                </div>

                <div>
                <label className="block text-foreground mb-2">
                    {t("ResponsiblePerson")}
                </label>
                <input
                    type="text"
                    name="responsiblePerson"
                    value={formData.responsiblePerson}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg border border-primary bg-background focus:border-primary"
                />
                </div>

                <div>
                <label className="block text-foreground mb-2">
                    {t("Address")}
                </label>
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full p-3 rounded-lg border border-primary bg-background focus:border-primary"
                />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
                {t("SaveChanges")}
            </button>
            </form>
        </div>
      </div>
      
    </div>
  )
}

export default Page
