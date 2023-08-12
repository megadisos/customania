"use client"
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import Menu from "./menu";


const LOGO_PATH='/images/logo/customLogo.png'
export default function Header(){
    const pathname = usePathname()
    const menuSy = 'hover:animate-wiggle hover:text-xl'
    const [showMenu,setShowMenu] = useState(false)
    return (
        <div className="flex flex-row  h-14 bg-gradient-to-l from-red-900 via-amber-400 to-cyan-900  ">
            <div className="flex flex-row w-3/6 items-center ">
            <img src="/images/logo/Logo_largo_color_trazo_negro.png" className="w-1/3  ml-2 "/>
            </div>
            {/* Menu horizontal */}
            <div className="flex flex-row w-3/6  justify-end float-right items-center animate-fade-down  invisible sm:visible md:visible">
               <Menu direction="row"/>
            </div>
            {/* Boton Menu */}
            <div className="flex flex-row w-3/6 justify-end mr-10 float-right items-center animate-fade-down  sm:hidden">
              <FontAwesomeIcon icon={faBars} size={'2xl'} style={{'cursor':'pointer'}} onClick={()=>setShowMenu(!showMenu)}/>
            </div>
            {/* Menu Vertical */}
             {showMenu && <div className="flex flex-row w-fit  p-5 bg-gradient-to-r from-amber-400 to-cyan-900 absolute top-14 z-20 bg right-1 justify-end float-right items-center animate-fade-down  sm:hidden">
               <Menu direction="column"/>
            </div>}
        </div>
    )
}