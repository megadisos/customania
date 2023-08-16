'use client'

import { AuthLogic } from "@/app/authentication/logic/authenticationLogic"
import { SideBarMenu } from "@/shared/models/shared"
import { faCreditCard, faScrewdriverWrench, faUserLarge } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import userLogic from "../../logic/usersLogic"
import Purchases from "./ purchases"
import Account from "./account"
import Admin from "./admin"
import ProfileSideBar from "./profileSideBar"


interface ProfileViewProps {
}
const menusAvailables:SideBarMenu[] = [
  {name:'Mis compras',icon:faCreditCard,enabled:true,selected:true},
  {name:'Mi cuenta',icon:faUserLarge,enabled:true,selected:false},
  {name:'Admin',icon:faScrewdriverWrench,enabled:false,selected:false},
]

export default  function ProfileView () {
  const [menus,setMenus] = useState(menusAvailables)
  const [isAdmin,setIsAdmin] = useState(false)
  useEffect(()=>{AuthLogic.isSuperAdmin().then(resp=>setIsAdmin(resp))},[])

  useEffect(()=>{
   const updatedMenus=  menus.map(menu=>{
      if(menu.enabled) return menu
      if(!isAdmin) return menu
      return {...menu,enabled:true}
    })
    setMenus(updatedMenus)
  },[isAdmin])

const onCLickMenu = (menuName:string) =>{
    const updateMenus = menus.map(menu=>{
      if(menu.name !== menuName) return {...menu,selected:false}
      return {...menu,selected:true}
    })
    setMenus(updateMenus)
}
  return (
 <div className="h-screen w-full mt-16 flex flex-row ">
    <div className="w-1/6  bg-gradient-to-tl from-amber-400 to-orange-90">
        <ProfileSideBar menu={menus} onCLickMenu={onCLickMenu}/>
    </div>
    <div className="flex flex-row bg-white bg-opacity-50 w-5/6">
      {menus.map(menu=>{
        if(menu.name === 'Mis compras' && menu.selected) return <Purchases />
        if(menu.name === 'Mi cuenta' && menu.selected) return <Account />
        if(menu.name === 'Admin' && menu.selected) return <Admin />
      })}
      
      
      
    </div>
 </div>
  
  )
}
