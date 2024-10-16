const ServicesCard = ({Icon,title,text}) => {
  return (
    <div className="logoMark p-7 w-[22rem] flex relative flex-col items-center justify-between gap-8 hover:shadow-2xl hover:shadow-primary border border-gray-400 rounded">
        <div className="flex items-center justify-center gap-2">
            <Icon className="text-primary text-3xl"/>
            <h3 className="text-1xl text-primary">{title}</h3>
        </div>
        <p className="text-center text-md leading-9">{text}</p>
    </div>
  )
}

export default ServicesCard