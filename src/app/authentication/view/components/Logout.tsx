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

interface LogoutProps {
  msg?:string | null
} 
export default function LogoutComponent({msg}:LogoutProps) {
    

  return (
    <div className="flex flex-col gap-2 p-2 justify-center items-center">
       <div className="flex flex-row mb-2"> 
       <FontAwesomeIcon icon={faCircleCheck} size={'2x'} color={'#166534'}/>  <span className="ml-2 font-bold">La session se cerro exitosamente!</span>
       </div>
       <div>
        <Button name="Seguir comprando" size="full" position="center" padding={true} type="success" height="fit" onClick={()=>SharedLogic.showModal({type:'Logout',opts:'Close'})}></Button>
       </div>
    </div>
  )
}
