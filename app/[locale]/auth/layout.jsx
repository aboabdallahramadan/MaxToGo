import LayoutHeader from "@/components/mainPage/LayoutHeader";

const layout = ({children}) => {
  return (
    <div className="w-full min-h-screen h-full bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
        <LayoutHeader />
        <div className="w-full h-12"></div>
        <div className="container">
            <div className="w-full h-full flex justify-center items-center">
                <div className="bg-blue-600/50 rounded-lg py-4 lg:p-10 w-full lg:w-3/4 flex flex-col gap-4 items-center">
                    {children}
                </div>
            </div>  
        </div>
    </div>
  )
}

export default layout