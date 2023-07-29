import Button from "@/shared/views/components/button"
import TitleHeader from "@/shared/views/components/titleHeader"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthLogic } from "../../logic/authenticationLogic"
import { LoginParams } from "../../models/authentication"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { SharedLogic } from "@/shared/logic/sharedLogic"


export default function LogoutComponent() {
    

  return (
    <div className="flex flex-col gap-2 p-2">
       <div className="flex flex-row"> 
       <FontAwesomeIcon icon={faCircleCheck} color={'#2FDB15'}/>  <span className="ml-2 font-bold">La sesion fue cerrada correctamente!</span>
       </div>
       <div>
        <Button name="Seguir comprando" size="50%" position="center" type="success" onClick={()=>SharedLogic.closeLogoutModal()}></Button>
       </div>
    </div>
  )
}
