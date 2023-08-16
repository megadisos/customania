'use client'

import { AuthLogic } from "@/app/authentication/logic/authenticationLogic"
import { SideBarMenu } from "@/shared/models/shared"
import { faCreditCard, faUserLarge } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import userLogic from "../../logic/usersLogic"


interface ProfileSideBarProps {
  menu:SideBarMenu[],
  onCLickMenu: (menuName: string) => void
}


export default function ProfileSideBar({menu,onCLickMenu}:ProfileSideBarProps) {
 

  return (
 <div className="flex flex-col ">
    {menu.filter(menu=>menu.enabled).map(menu=>{
        return  <div className={`w-full  border-b border-black flex justify-center items-center gap-2 ${menu.selected && "bg-red-900 text-white"} hover:bg-red-900 hover:text-white cursor-pointer p-2`} onClick={()=>onCLickMenu(menu.name)}>
        <FontAwesomeIcon icon={menu.icon} /> <span className="font-center">{menu.name}</span>
    </div>
    })}
   
  
 </div>
  
  )
}
