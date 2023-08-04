'use client'
import { CartLogic } from "@/app/cart/logic/cartLogic"
import {  ProductsFromCard } from "@/app/products/models/products"
import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic"
import { Items } from "@/mercado-pago/models/brick"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react"
import { Payment} from '@mercadopago/sdk-react';
import TitleHeader from "@/shared/views/components/titleHeader"
import PaymentDetails from "./paymentDetails"
import PaymentMercadoPago from "./paymentMercadoPago"

export default function PaymentView() {
    const router = useRouter();
    const pathname = usePathname()
    const comeFromCart = pathname?.split('/')[3] === 'cart'
    const searchParams = useSearchParams()
    const [delivery,setDelivery] = useState(false)
    const [inStore,setInStore] = useState(false)
    const [buyerInfo,setBuyerInfo] = useState({
        name:'',
        city:'',
        address:''
    })
    const [initialization,setInitialization] = useState({ 
        amount: 0,
        preferenceId: ''})

    useEffect(()=>{
    let items:Items[] = []
    const unit_price = parseInt(searchParams?.get('ammount') as string)
    // Buy one product
    if(!comeFromCart){ 
        const id = searchParams?.get('productId')  as string
        const title = searchParams?.get('name') as string
        const quantity = parseInt(searchParams?.get('quantity') as string)
        items = [{
            id,
            title,
            quantity,
            unit_price
        }]
       
    }
    // Buy from cart
    if(comeFromCart) items =  CartLogic.convertCartItemsToMPItems(CartLogic.GetProductsFromCartNotAuthenticated() as ProductsFromCard[])

    MPLogic.getInitializationObject(unit_price,items).then(resp=>{
        setInitialization(resp)
       })
        
    },[])
    
    const customization = MPLogic.getCustomizationObject()
    const onSubmitPayment = async ({ selectedPaymentMethod, formData }:any) =>{
        
        const response = await MPLogic.onSubmit({selectedPaymentMethod, formData })
        if(selectedPaymentMethod === 'bank_transfer' || selectedPaymentMethod === 'ticket') router.push(`/payments/callback?payment_id=${response.id}`)
        if(response.status === 'approved' && response.status_detail === 'accredited')  router.push(`/payments/success?payment_id=${response.id}`)
        if(response.status === 'rejected')  router.push(`/payments/error?payment_id=${response.id}`)
            
    }
   

  return (
    <>
       <div className="flex flex-col h-screen gap-2 ">

    <div className="flex justify-center">
    <TitleHeader title="Pagos" />
    </div>

    <div className="flex flex-row gap-2">
        <PaymentDetails delivery={delivery} inStore={inStore} setDelivery={setDelivery} setInStore={setInStore} setBuyerInfo={setBuyerInfo}/>
   <div className="w-2/6 mb-5 pointer-events-none">
  <PaymentMercadoPago customization={customization} initialization={initialization} onSubmitPayment={onSubmitPayment} />
   </div>
   </div>
   </div>
   </> 
  )
}
