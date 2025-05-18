"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function ActiveLink({
  targetPath,
  children,
  onClickFun = undefined
}: {
  targetPath: string;
  children: ReactNode;
  onClickFun?: () => void
}) {
  const currentPath = usePathname();
  const isActiveLink = currentPath === targetPath;

  return (
    <Link
      href={targetPath}
      onClick={onClickFun}
      className={`
        mx-8 text-nowrap
         
       
      border-transparent  
      transition-all 
      duration-300
        z-30    
        group 
       
        font-bold   
        
         ${isActiveLink &&
        "font-bold    "
        } `}
    >
      {children}
      <div className={`min-h-[3px]  w-0 transition-all duration-500 
          group-hover:w-11/10 pr-4  bg-main  ${isActiveLink &&
        "w-11/10 group-hover: " 
        }  `}></div>
    </Link>
  );
}

export default ActiveLink;
