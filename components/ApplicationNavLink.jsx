import { Link } from "@/i18n/routing";

const ApplicationNavLink = ({children,link,func,active=false}) => {
  return (
    <li>
      <Link href={link} className={`rounded whitespace-nowrap font-bold ml-4 px-4 py-2
      ${active ? "bg-primary text-secondary" : "border border-transparent hover:border hover:border-primary hover:text-primary"}`} 
      onClick={func}
    >
        {children}    
    </Link></li>
  )
}

export default ApplicationNavLink