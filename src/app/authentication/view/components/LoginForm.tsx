import Button from "@/shared/views/components/button"
import TitleHeader from "@/shared/views/components/titleHeader"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthLogic } from "../../logic/authenticationLogic"
import { LoginParams } from "../../models/authentication"
import { useRouter } from "next/navigation"
import { SharedLogic } from "@/shared/logic/sharedLogic"

interface LoginFormProps {
  msg?:string | null
}

export default function LoginForm({msg}:LoginFormProps) {
    const { register,formState: { errors }, handleSubmit } = useForm<LoginParams>()
    const [error,setError] =  useState('')
    const router = useRouter();
    const onSubmit: SubmitHandler<LoginParams> = async (data) => {
    setError('')
    const resp = await AuthLogic.login(data)
    if(resp?.status) return router.push('/profile')
    setError(resp?.error)
  }

  return (
    <div className="flex flex-col gap-2 p-2">
        <div className="mt-10 flex justify-center">
        <TitleHeader title="Iniciar sesion" />
        </div>
        {error!='' && <p className="text-red-700 font-bold text-sm text-center" role="alert">{error}!</p>}
        {msg !== null && error === '' && <p className="text-green-700 font-bold text-sm text-center" role="alert">{msg}!</p>}
        <div >
<form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col '} >
<p className="font-bold text-sm mt-2" role="alert">Usuario:</p>
      <input {...register("username", { required: true, maxLength: 20 })}  aria-invalid={errors.username ? "true" : "false"} placeholder={'Escribe tu usuario'}/>
      {errors.username?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Usuario es mandatorio!</p>
      )}
      <p className="font-bold text-sm mt-2 mb-1" role="alert">Password:</p>
      <input type={'password'} {...register("password", { required: true, maxLength: 20 })}    aria-invalid={errors.password ? "true" : "false"}  placeholder={'Escribe tu contraseña'} />
      {errors.password?.type === "required" && (
        <p className="text-red-700 font-bold text-sm mb-1" role="alert">Password es mandatorio!</p>
      )}
      <div className="flex justify-center mt-4"><Button type="normal" name="Entrar" size="50%" position="center"/></div>
      {/* <p className=" text-xs mt-2 text-center" role="alert">¿Perdiste tu contraseña?<span className="font-bold cursor-pointer underline ml-1">Recuperar</span></p> */}
      <p className=" text-xs mt-2 text-center" role="alert">¿No tienes cuenta? <span  className="font-bold cursor-pointer underline ml-1" onClick={()=>SharedLogic.showModal({type:'Register',opts:'Open'})}>Registrate</span></p>
    </form>
    </div>
    </div>
  )
}
