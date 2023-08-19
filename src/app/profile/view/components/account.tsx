'use client'

import { AuthLogic } from "@/app/authentication/logic/authenticationLogic"
import { User } from "@/app/authentication/models/authentication"
import Button from "@/shared/views/components/button"
import TitleHeader from "@/shared/views/components/titleHeader"
import { faCreditCard, faEdit, faEnvelope, faMessage, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import userLogic from "../../logic/usersLogic"
import { ProfileContext } from "../context/profileContext"




interface AccountProps {

}


export default function Account({}:AccountProps) {
 const {totalPurchases,onCLickMenu} =useContext(ProfileContext)
 const [user,setUser]  = useState<User | null>(null)
 useEffect(()=>{
    const userId = AuthLogic.getLCUserId()
    userLogic.getUser(userId).then(resp=>{
      if(resp.error === null) setUser(resp.data)
    })
 },[])
  return (
 <div className="flex flex-col w-11/12  h-fit bg-white">
   
   <TitleHeader  title="Mi Cuenta"/>
  <div className="flex flex-col border-b-2 bg-gradient-to-tl from-amber-400 to-orange-900">
    <div className="flex flex-row justify-center items-center p-2">
      <div className="w-1/4 flex justify-center ">
        <div className="relative">
          {user?.profileImage !== null && <><img  src={user?.profileImage} width={200} height={150}/>
      </>}
       {user?.profileImage === null && <div className="rounded  w-64 h-64 border-2 border-black bg-white flex justify-center items-center">
        <div className="w-16 border-8 rounded-full border-amber-400 h-16 flex justify-center items-center"><span className="text-2xl">{user.username.substring(0,1).toUpperCase()}</span></div>
        </div>}
        <FontAwesomeIcon icon={faEdit} style={{position:'absolute',cursor:'pointer',right:5,top:5}}/>
      </div>
      </div>
      <div className="w-3/4  h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl">Hola, <span className="font-bold"> {user !== null && user?.username}</span></h1>
      </div>
    </div>
   
  </div>
  <div className="flex justify-center text-3xl font-bold mt-1 mb-2 border-b">
    <h1>Informacion del usuario</h1>
  </div>
  <div className="flex flex-col justify-start text-2xl p-2 gap-2 ml-2">
      <p> <FontAwesomeIcon icon={faUser} style={{color:'#BD781B' ,marginRight:5}}/><span className="font-bold">Usuario:</span> {user !== null && user?.username}</p>
      <p><FontAwesomeIcon icon={faEnvelope} style={{color:'#BD781B' ,marginRight:5}}/><span className="font-bold">Email:</span> {user !== null && user?.email}</p>
      <p><FontAwesomeIcon icon={faCreditCard} style={{color:'#BD781B' ,marginRight:5}}/><span className="font-bold">Compras realizadas:</span> <span className="cursor-pointer" onClick={()=>onCLickMenu('Mis compras')}>{totalPurchases}</span></p>
    </div>
    <div className="flex justify-center mt-5 mb-5">
      <Button name="Cambiar contraseña" position="center" size="25%" type="danger" height="big"></Button>
    </div>
 </div>
  
  )
}
