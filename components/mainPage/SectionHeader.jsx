
const SectionHeader = ({name}) => {
  return (
    <div className="w-full flex items-center justify-between my-4">
        <div className="bg-primary h-1 flex-1"></div>
        <h3 className="text-primary text-4xl text-center px-3">{name}</h3>
        <div className="bg-primary h-1 flex-1"></div>
    </div>
  )
}

export default SectionHeader