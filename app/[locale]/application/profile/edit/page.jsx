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
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let tempErrors = {}
    
    // Phone number validation (Swedish format)
    const phoneRegex = /^(\+46|0)[1-9]\d{8,}$/
    if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
      tempErrors.phoneNumber = t("InvalidPhoneNumber")
    }

    // Company name validation
    if (!formData.companyName || formData.companyName.length < 2) {
      tempErrors.companyName = t("CompanyNameRequired")
    }

    // Responsible person validation
    if (!formData.responsiblePerson || formData.responsiblePerson.length < 2) {
      tempErrors.responsiblePerson = t("ResponsiblePersonRequired")
    }

    // Address validation
    if (!formData.address || formData.address.length < 5) {
      tempErrors.address = t("AddressRequired")
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const validateImage = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!file) return true

    if (!validTypes.includes(file.type)) {
      setErrors(prev => ({
        ...prev,
        image: t("InvalidImageFormat")
      }))
      return false
    }

    if (file.size > maxSize) {
      setErrors(prev => ({
        ...prev,
        image: t("ImageTooLarge")
      }))
      return false
    }

    return true
  }

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && validateImage(file)) {
      setImageFile(file)
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
      setErrors(prev => ({ ...prev, image: null }))
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm() || !validateImage(imageFile)) {
      return
    }

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
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
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
                    className={`w-full p-3 rounded-lg border ${errors.phoneNumber ? 'border-red-500' : 'border-primary'} bg-background focus:border-primary`}
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
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
                    className={`w-full p-3 rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-primary'} bg-background focus:border-primary`}
                />
                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
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
                    className={`w-full p-3 rounded-lg border ${errors.responsiblePerson ? 'border-red-500' : 'border-primary'} bg-background focus:border-primary`}
                />
                {errors.responsiblePerson && <p className="text-red-500 text-sm mt-1">{errors.responsiblePerson}</p>}
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
                    className={`w-full p-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-primary'} bg-background focus:border-primary`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
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
