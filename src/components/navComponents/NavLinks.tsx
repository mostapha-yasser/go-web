import { pages } from "@/consts/pages";
import ActiveLink from "./ActiveLink";

function NavLinks() {
    return (
        <div className="flex flex-col items-end gap-4 text-Text  ">
        

            <div className="
               lg:text-header-md  md:text-header-sm   text-header-md space-x-6 flex  md:space-x-4 text-shadow-secondary   "> 
               {pages.map((path) => (

                <ActiveLink key={path.title} targetPath={path.target}>{path.title} </ActiveLink>

            ))}  </div>
        </div>
    );
}

export default NavLinks;