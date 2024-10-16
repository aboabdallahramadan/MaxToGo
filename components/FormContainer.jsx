
const FormContainer = ({children}) => {
  return (
    <div className="w-full mx-auto relative shadow-lg shadow-slate-700 border-2 border-primary bg-slate-900 text-primary px-5 sm:px-10 md:px-24 py-6 md:w-full lg:w-3/4">
        {children}
    </div>
  )
}

export default FormContainer