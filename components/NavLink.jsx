import { Link } from "@/i18n/routing";
const NavLink = ({children,link,func,className,isMobile = false}) => {
  return (
    <li className={className}>
      <Link href={link} className={`font-bold px-4 py-2 border border-transparent ${!isMobile && "hover:border hover:border-primary hover:text-primary"} whitespace-nowrap rounded`} 
      onClick={func}
    >
        {children}    
    </Link></li>
  )
}

export default NavLink