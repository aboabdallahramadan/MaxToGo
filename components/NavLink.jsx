import { Link } from "@/i18n/routing";
const NavLink = ({children,link}) => {
  return (
    <li><Link href={link} className="font-bold ml-4 px-4 py-2 border border-transparent hover:border hover:border-primary hover:text-primary whitespace-nowrap rounded">
        {children}    
    </Link></li>
  )
}

export default NavLink