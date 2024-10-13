import { Link } from "@/i18n/routing";
const NavLink = ({children,link}) => {
  return (
    <li><Link href={{link}} className="font-bold py-2 hover:border hover:border-primary hover:text-primary">
        {children}    
    </Link></li>
  )
}

export default NavLink