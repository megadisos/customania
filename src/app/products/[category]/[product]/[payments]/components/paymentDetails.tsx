'use client'
import { CartLogic } from "@/app/cart/logic/cartLogic"
import { Delivery, ProductsFromCard } from "@/app/products/models/products"
import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic"
import { Items } from "@/mercado-pago/models/brick"
import Payments from "@/mercado-pago/view/components/payment"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { Payment, StatusScreen } from '@mercadopago/sdk-react';
import TitleHeader from "@/shared/views/components/titleHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faChevronDown, faChevronUp, faCircleCheck, faStore, faTruck } from "@fortawesome/free-solid-svg-icons"
import CartTable from "@/app/cart/view/components/cartTable"
import {
    useQuery,
  } from 'react-query'
import { SharedLogic } from "@/shared/logic/sharedLogic"
import { CityInfo } from "@/shared/models/shared"
import { useSnackbar } from 'notistack';
import { useForm, SubmitHandler } from "react-hook-form"
import Button from "@/shared/views/components/button"
import { PaymentContext } from "@/app/products/view/contexts/paymentContext"


export default function PaymentDetails() {
    const {setDelivery,delivery,setBuyerInfo,setInStore,inStore,isAllowedToPay,buyerInfo} = useContext(PaymentContext)
    const queryCities = useQuery('cities',SharedLogic.getCities)
    const cities = queryCities.data
    const { register,formState: { errors }, handleSubmit } = useForm<Delivery>()
    const [error,setError] =  useState('')
    const onSubmit: SubmitHandler<Delivery> = async (data) => {
        setError('')
        setBuyerInfo(data)
      }
    const handleKindOfDelivery = (type:'store' | 'delivery') =>{
        if(type === 'store'){
            setDelivery(false)
            setInStore(true)
            setBuyerInfo({address:'',city:'',name:''})
        } 
    
        if(type === 'delivery'){
            setDelivery(true)
            setInStore(false)
        } 
    }
const renderAlertToBuy = (msg:string) =>{
  return  <p className="text-red-700 font-bold text-sm text-center mt-2 mb-2" role="alert">{msg}</p>
}
  return (
    <div className="w-5/6 bg-white rounded flex flex-col h-auto mb-5 border border-2 p-2">
    <div className="w-full h-8 border border-black-2 p-1"><span className="font-bold">Tus productos</span> </div>
    <div className="w-full h-fit border border-black-2 p-1 mt-2"><CartTable actions={false} payments={true} isSingleProduct={true} /></div>
    <div className="w-full h-8 border border-black-2 p-1 mt-2"><span className="font-bold">Entrega</span> </div>
    <div className="w-full h-fit border border-black-2 p-2 mt-2">

       {!delivery && !inStore && <>{!isAllowedToPay() && renderAlertToBuy('Por favor confirmar selecciona el tipo de envio parar completar la compra!')}<div className="flex flex-row gap-2 justify-center cursor-pointer">
       
            <div className="w-56 h-56 border flex flex-col gap-3 justify-center p-2" onClick={()=>handleKindOfDelivery('store')}>
            <FontAwesomeIcon icon={faStore} size={'7x'} />
            <span className="self-center">Recoge en tienda</span>
            </div>
            <div className="flex flex-col w-56 h-56 border gap-3 justify-center p-2" onClick={()=>handleKindOfDelivery('delivery')}>
            <FontAwesomeIcon icon={faTruck} size={'7x'}/>
            <span className="self-center">Domicilio</span>
            </div>
        </div></>} 
        {delivery && 
        <>
        <div className="flex flex-row gap-2 justify-center cursor-pointer" onClick={()=>handleKindOfDelivery('store')}>
              <FontAwesomeIcon icon={faStore} title={'Recoger en tienda'}/> 
        </div>
       {!isAllowedToPay() && renderAlertToBuy('Por favor confirmar los datos del formulario de envio para poder completar la compra!')}
            <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col gap-2">
            <p className="font-bold text-sm mt-2" role="alert">Nombre quien recibe:</p>
      <input {...register("name", { required: true, maxLength: 20 })}  aria-invalid={errors.name ? "true" : "false"} placeholder={'Escribe tu usuario'}/>
      {errors.name?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Nombre  es mandatorio!</p>
      )}

    <p className="font-bold text-sm mt-2" role="alert">Ciudad:</p>
          <select {...register("city", { required: true, maxLength: 200 })}  defaultValue={'Bogotá D.C'} aria-invalid={errors.city ? "true" : "false"} >
            {cities && cities.map((city:CityInfo)=>{
                return <option >{city.municipio}</option>
            })}
       
          </select>
          <p className="font-bold text-sm mt-2" role="alert">Direccion de envio:</p>
      <input {...register("address", { required: true, maxLength: 200 })}  aria-invalid={errors.address ? "true" : "false"} placeholder={'Escribe la direccion'}/>
      {errors.address?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Direccion  es mandatorio!</p>
      )}
     <div className="flex justify-center mt-4">{!isAllowedToPay()?<Button type="normal" name="Confirmar" size="50%" position="center"/>:<div className="flex flex-col"><div>
      <FontAwesomeIcon  icon={faCircleCheck} size={'2x'} color={'#166534'} /> <span>La direccion fue confirmada!</span>
      </div>
      <p className="text-gray-500 font-bold text-xs text-center underline cursor-pointer" role="alert" onClick={()=>setBuyerInfo({...buyerInfo,city:''})}>Modificar</p></div>}</div>
        </form>
        </>
        }
    {inStore && 
        <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-2 justify-center cursor-pointer" onClick={()=>handleKindOfDelivery('delivery')}>
              <FontAwesomeIcon icon={faTruck} title={'Recoger en tienda'}/> 
        </div>
            <span className="self-center">Puedes recoger tus productos en la direccion 123213</span>
        </div>
        }
        </div>

    
   </div>
  )
}
