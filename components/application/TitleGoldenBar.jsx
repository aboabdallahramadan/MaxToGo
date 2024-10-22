"use client";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation"

const TitleGoldenBar = ({name,goBack = false}) => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    }
    return (
      <div className="fixed top-10 w-full z-[49]">
          <div className="container ">
              <div className=" text-secondary bg-primary w-full rounded-lg pt-4 px-4 pb-2 flex justify-center items-center relative">
                {
                    goBack && (<BsArrowLeft className="text-secondary text-2xl absolute top-5 left-3 cursor-pointer" onClick={handleGoBack}/>)
                }
                <h1 className="text-xl font-bold">{name}</h1>
              </div>
          </div>
          
      </div>
    )
  }
  
  export default TitleGoldenBar