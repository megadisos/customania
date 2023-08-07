'use client'
import { CartLogic } from "@/app/cart/logic/cartLogic"
import {  ProductsFromCard } from "@/app/products/models/products"
import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic"
import { Items } from "@/mercado-pago/models/brick"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from "react"
import { Payment} from '@mercadopago/sdk-react';
import TitleHeader from "@/shared/views/components/titleHeader"
import PaymentDetails from "./paymentDetails"
import PaymentMercadoPago from "./paymentMercadoPago"
import { PaymentContext } from "@/app/products/view/contexts/paymentContext"
import { Sale } from "@/app/products/models/sales"
import { AuthLogic } from "@/app/authentication/logic/authenticationLogic"
import { ProductsLogic } from "@/app/products/logic/productsLogic"

export default function PaymentView() {
    const router = useRouter();
    const pathname = usePathname()
    const comeFromCart = pathname?.split('/')[3] === 'cart'
    const searchParams = useSearchParams()
    const {setInitialization,initialization,inStore,delivery ,buyerInfo,setPaymentClick,isAllowedToPay,} = useContext(PaymentContext)
    const [items,setItems] = useState<Items[]|[]>([])
    useEffect(()=>{
    let items:Items[]|[]= []
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
        setItems(items)
       })
        
    },[])
    const getItemsArrayFromBuyOne = ():Items[] =>{
        const id = searchParams?.get('productId')  as string
        const title =  searchParams?.get('name')  as string
        const quantity =  parseInt(searchParams?.get('quantity')  as string)
        const unit_price =  parseInt(searchParams?.get('price')  as string)
        return [{id,title,quantity,unit_price}]
    }

    const customization = MPLogic.getCustomizationObject()
    const onSubmitPayment = async ({ selectedPaymentMethod, formData }:any) =>{
        const response = await MPLogic.onSubmit({selectedPaymentMethod, formData })
        
        const isTransactionApporved =  response.status === 'approved' && response.status_detail === 'accredited'
        
        const saleObject:Sale = {
            transactionId:response.id,
            status:response.status,
            status_detail:response.status_detail,
            payment_method_id:formData.payment_method_id,
            payer:formData.payer,
            additional_info:formData.additional_info,
            isDelivery:delivery,
            delivery_status:isTransactionApporved?delivery?'to_sent':'to_deliver':'pending',
            items:comeFromCart?items:getItemsArrayFromBuyOne(),
            ammount:parseInt(searchParams?.get('ammount') as string),
        }
        if(AuthLogic.getLCUserId()) saleObject.userId = AuthLogic.getLCUserId()
        if(delivery){
            saleObject.delivery = buyerInfo
        } 
        console.log('check this! ',saleObject)
        try {
            const newSale = await ProductsLogic.createNewSale(saleObject)
        } catch (error) {
            console.log('there is an error fuck! ',error)
        }
        
        if(selectedPaymentMethod === 'bank_transfer' || selectedPaymentMethod === 'ticket' || response.status === 'pending') router.push(`/payments/callback?payment_id=${response.id}&isDelivery=${delivery}`)
        if(isTransactionApporved)  router.push(`/payments/success?payment_id=${response.id}&status=${response.status}&status_detail=${response.status_detail}&isDelivery=${delivery}`)
        if(response.status === 'rejected')  router.push(`/payments/error?payment_id=${response.id}&status=${response.status}&status_detail=${response.status_detail}`)
            
    }

  return (
    <>
       <div className="flex flex-col h-screen gap-2 ">

    <div className="flex justify-center">
    <TitleHeader title="Pagos" />
    </div>

    <div className="flex flex-row gap-2" >
        <PaymentDetails />
   <div className={`w-2/6 mb-5 ${!isAllowedToPay() && 'pointer-events-none'} `}  >
  <PaymentMercadoPago customization={customization} initialization={initialization} onSubmitPayment={onSubmitPayment} />
   </div>
   </div>
   </div>
   </> 
  )
}
