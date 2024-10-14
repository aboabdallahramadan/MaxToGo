import { Link } from "@/i18n/routing"
const PrimaryLink = ({children,link}) => {
  return (
    <Link href={link} className="bg-primary text-secondary flex justify-center items-center px-3 py-2 whitespace-nowrap rounded">
    {children}
    </Link>
  )
}

export default PrimaryLink