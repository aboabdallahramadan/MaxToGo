import Header from "@/components/layout/application/Header";

const layout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default layout