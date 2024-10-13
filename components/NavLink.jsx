import { Link } from "@/i18n/routing";
const NavLink = ({children,link}) => {
  return (
    <li><Link href={{link}} className="font-bold px-2 py-2 border border-transparent hover:border hover:border-primary hover:text-primary">
        {children}    
    </Link></li>
  )
}

export default NavLink