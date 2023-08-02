import Button from "@/shared/views/components/button"
import TitleHeader from "@/shared/views/components/titleHeader"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthLogic } from "../../logic/authenticationLogic"
import {  RegisterParams, User } from "../../models/authentication"
import { useRouter } from "next/navigation"
import { SharedLogic } from "@/shared/logic/sharedLogic"


export default function RegisterForm() {
    const { register,formState: { errors }, handleSubmit } = useForm<RegisterParams>()
    const [error,setError] =  useState('')
    const onSubmit: SubmitHandler<RegisterParams> = async (data) => {
    setError('')
    if(data.cPassword !== data.password) return setError('Los passwords no concuerdan!')
    const user:User = {email:data.email,password:data.password,username:data.username}
    const resp = await AuthLogic.register(user)
    if(resp?.status) {
      SharedLogic.showModal({type:'Login',opts:'Open',msg:'El usuario fue registrado con exito!'})
    }
    setError(resp?.error)
  }

  return (
    <div className="flex flex-col gap-2 p-2">
        <div className="mt-10 flex justify-center">
        <TitleHeader title="Registrarse" />
        </div>
        {error!='' && <p className="text-red-700 font-bold text-sm text-center" role="alert">{error}!</p>}
        
        <div >
<form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col '} >
<p className="font-bold text-sm mt-2" role="alert">Usuario:</p>
      <input {...register("username", { required: true, maxLength: 20 })}  aria-invalid={errors.username ? "true" : "false"} placeholder={'Escribe tu usuario'}/>
      {errors.username?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Usuario es mandatorio!</p>
      )}
      <p className="font-bold text-sm mt-2" role="alert">Email:</p>
      <input {...register("email", { required: true, maxLength: 40,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:'Introduce una dirección de correo válida'} })}  aria-invalid={errors.email ? "true" : "false"} placeholder={'Escribe tu email'}/>
      {errors.email?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Email es mandatorio!</p>
      )}
      {errors.email && (
        <p className="text-red-700 font-bold text-sm" role="alert">{errors.email.message}</p>
      )}
      <p className="font-bold text-sm mt-2 mb-1" role="alert">Password:</p>
      <input type={'password'} {...register("password", { required: true,minLength:{value:8,message:'La contraseña debe tener al menos 8 caracteres'}, maxLength: 20,pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial',
          } })}    aria-invalid={errors.password ? "true" : "false"}  placeholder={'Escribe tu contraseña'} />
      {errors.password?.type === "required" && (
        <p className="text-red-700 font-bold text-sm mb-1" role="alert">Password es mandatorio!</p>
      )}
       {errors.password && (
        <p className="text-red-700 font-bold text-sm" role="alert">{errors.password.message}</p>
      )}
        <p className="font-bold text-sm mt-2 mb-1" role="alert">Confirmar Password:</p>
      <input type={'password'} {...register("cPassword", { required: true, maxLength: 20 })}    aria-invalid={errors.cPassword ? "true" : "false"}  placeholder={'Repite tu contraseña'} />
      {errors.cPassword?.type === "required" && (
        <p className="text-red-700 font-bold text-sm mb-1" role="alert">Confirmar password es mandatorio!</p>
      )}
      <div className="flex justify-center mt-4"><Button type="success" name="Registrarse" size="50%" position="center"/></div>
    
    </form>
    </div>
    </div>
  )
}
