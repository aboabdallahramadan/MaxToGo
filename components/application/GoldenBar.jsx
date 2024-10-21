
const GoldenBar = ({children}) => {
  return (
    <div className="fixed top-10 w-full">
        <div className="container">
            <div className=" text-secondary bg-primary w-full rounded-lg pt-4 px-4 pb-2">
                {children}
            </div>
        </div>
        
    </div>
  )
}

export default GoldenBar