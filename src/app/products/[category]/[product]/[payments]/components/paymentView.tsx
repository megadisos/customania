'use client'
import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic"
import { Items } from "@/mercado-pago/models/brick"
import Payments from "@/mercado-pago/view/components/payment"
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react"

export default function PaymentView() {
    const pathname = usePathname()
    const comeFromCart = pathname?.split('/')[3] === 'cart'
    const [initialization,setInitialization] = useState({ 
        amount: 0,
        preferenceId: ''})
    useEffect(()=>{

    if(!comeFromCart){ 
        const id = searchParams?.get('productId')  as string
        const title = searchParams?.get('name') as string
        const unit_price = parseInt(searchParams?.get('ammount') as string)
        const quantity = parseInt(searchParams?.get('quantity') as string)
        const size = searchParams?.get('size')
        const items : Items[]= [{
            id,
            title,
            quantity,
            unit_price
        }]
       MPLogic.getInitializationObject(unit_price,items).then(resp=>{
        setInitialization(resp)
       })
        
    }
    },[])
    const searchParams = useSearchParams()
    const customization = MPLogic.getCustomizationObject()

   

  return (
   <div className="flex flex-row">
    <Payments customization={customization} initialization={initialization} /> 
   </div>
  )
}
