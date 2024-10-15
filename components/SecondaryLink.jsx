import { Link } from "@/i18n/routing"

const SecondaryLink = ({children,link}) => {
  return (
    <Link href={link} className="bg-transparent text-primary border-2 border-primary flex justify-center items-center px-3 py-2 whitespace-nowrap rounded">
    {children}
    </Link>
  )
}

export default SecondaryLink