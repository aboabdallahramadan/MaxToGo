import LayoutHeader from "@/components/mainPage/LayoutHeader";

const layout = ({children}) => {
  return (
    <>
    <LayoutHeader />
    {children}
    </>
  )
}

export default layout