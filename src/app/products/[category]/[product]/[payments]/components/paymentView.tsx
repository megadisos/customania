'use client'
import { CartLogic } from "@/app/cart/logic/cartLogic"
import { ProductsFromCard } from "@/app/products/models/products"
import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic"
import { Items } from "@/mercado-pago/models/brick"
import Payments from "@/mercado-pago/view/components/payment"
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react"
import { StatusScreen } from '@mercadopago/sdk-react';

export default function PaymentView() {
    const pathname = usePathname()
    const comeFromCart = pathname?.split('/')[3] === 'cart'
    const searchParams = useSearchParams()
    const [paymentStatus,setPaymentStatus] = useState({status:'',status_detail:'',id:0})
    const [showStatusBrick,setShowStatusBrick] = useState(false)
    const [bankTransferInit,setBankTransferInit] = useState({paymentId:''})
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
        const size = searchParams?.get('size')
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
       console.log(selectedPaymentMethod)
        const response = await MPLogic.onSubmit({selectedPaymentMethod, formData })
        if(selectedPaymentMethod === 'bank_transfer'){
            setShowStatusBrick(true)
        }
        setPaymentStatus(response)
        
       
        
    }
   

  return (
   <div className="flex flex-row">
    {paymentStatus && paymentStatus.status && paymentStatus.status === 'approved' && paymentStatus.status_detail && paymentStatus.status_detail ==='accredited' && <p>Pago aprobado</p>} 
    {paymentStatus && paymentStatus.status && paymentStatus.status === 'rejected' &&  <p>Pago rechazado</p>}
    {showStatusBrick && <StatusScreen
   initialization={{paymentId:paymentStatus.id.toString()}}
   onReady={async ()=>{}}
   onError={async ()=>{}}
/>}
    <Payments customization={customization} initialization={initialization} onSubmit={onSubmitPayment}/> 
   </div>
  )
}