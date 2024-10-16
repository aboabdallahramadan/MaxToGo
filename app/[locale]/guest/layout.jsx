import Header from "@/components/layout/guest/Header";

const layout = ({children}) => {
  return (
    <>
    <Header />
    <div className="w-full h-12"></div>
    {children}
    </>
  )
}

export default layout