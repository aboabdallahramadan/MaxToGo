"use client";
import { useRouter } from "next/navigation"
import { BsArrowLeftCircle } from "react-icons/bs";

const GoBackButton = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    }
  return (
    <BsArrowLeftCircle className="text-primary absolute top-10 left-4 cursor-pointer text-lg" onClick={handleGoBack}/>
  )
}

export default GoBackButton