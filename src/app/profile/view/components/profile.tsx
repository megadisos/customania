'use client'

import { AuthLogic } from "@/app/authentication/logic/authenticationLogic"
import { SideBarMenu } from "@/shared/models/shared"
import { faCreditCard, faHeart, faScrewdriverWrench, faUserLarge } from "@fortawesome/free-solid-svg-icons"
import { useContext, useEffect, useState } from "react"
import userLogic from "../../logic/usersLogic"
import Purchases from "../../../sales/view/components/ purchases"
import Account from "./account"
import Admin from "./admin"
import ProfileSideBar from "./profileSideBar"
import { ProfileContext } from "../context/profileContext"
import Likes from "./likes"


interface ProfileViewProps {
}

export default  function ProfileView () {
 
  const [isAdmin,setIsAdmin] = useState(false)
  const {menus,setMenus,onCLickMenu} =useContext(ProfileContext)
  useEffect(()=>{AuthLogic.isSuperAdmin().then(resp=>setIsAdmin(resp))},[])

  useEffect(()=>{
   const updatedMenus=  menus.map(menu=>{
      if(menu.enabled) return menu
      if(!isAdmin) return menu
      return {...menu,enabled:true}
    })
    setMenus(updatedMenus)
  },[isAdmin])


  return (
 <div className="h-screen w-full mt-16 flex flex-row ">
    <div className="w-1/6  bg-gradient-to-tl from-amber-400 to-orange-90">
        <ProfileSideBar menu={menus} onCLickMenu={onCLickMenu}/>
    </div>
    <div className="flex flex-row bg-white bg-opacity-50 w-5/6 p-2 justify-center">
      {menus.map(menu=>{
        if(menu.name === 'Mis compras' && menu.selected) return <Purchases />
        if(menu.name === 'Mi cuenta' && menu.selected) return <Account />
        if(menu.name === 'Admin' && menu.selected) return <Admin />
        if(menu.name === 'Me gusta' && menu.selected) return <Likes />
      })}
      
      
      
    </div>
 </div>
  
  )
}
