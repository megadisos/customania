'use client'
import { CartLogic } from "@/app/cart/logic/cartLogic"
import { ProductsFromCard } from "@/app/products/models/products"
import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic"
import { Items } from "@/mercado-pago/models/brick"
import Payments from "@/mercado-pago/view/components/payment"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react"
import { Payment, StatusScreen } from '@mercadopago/sdk-react';
import TitleHeader from "@/shared/views/components/titleHeader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import CartTable from "@/app/cart/view/components/cartTable"


export default function PaymentView() {
    const router = useRouter();
    const pathname = usePathname()
    const comeFromCart = pathname?.split('/')[3] === 'cart'
    const searchParams = useSearchParams()
    const [showProducts,setShowProducts] = useState(true)
    const [showAddress,setShowAddress] = useState(false)
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
        if(selectedPaymentMethod === 'bank_transfer' || selectedPaymentMethod === 'ticket') router.push(`/payments/callback?payment_id=${response.id}`)
        if(response.status === 'approved' && response.status_detail === 'accredited')  router.push(`/payments/success?payment_id=${response.id}`)
        if(response.status === 'rejected')  router.push(`/payments/error?payment_id=${response.id}`)
        
        
       
        
    }
   

  return (
    <>
       <div className="flex flex-col h-fit gap-2 ">

    <div className="flex justify-center">
    <TitleHeader title="Pagos" />
    </div>

    <div className="flex flex-row gap-2">
   <div className="w-5/6 bg-white rounded flex flex-col h-auto mb-5 border border-2 p-2">
    <div className="w-full h-8 border border-black-2 p-1"><span className="font-bold">Tus productos</span> <FontAwesomeIcon style={{'float':'right','cursor':'pointer'}} onClick={()=>{setShowProducts(!showProducts); setShowAddress(!showAddress)}} icon={showProducts?faChevronUp:faChevronDown} /></div>
    {showProducts && <div className="w-full h-fit border border-black-2 p-1 mt-2"><CartTable actions={false} payments={true}/></div>}
    <div className="w-full h-8 border border-black-2 p-1 mt-2"><span className="font-bold">Direccion de envio</span> <FontAwesomeIcon style={{'float':'right','cursor':'pointer'}} onClick={()=>{setShowAddress(!showAddress);setShowProducts(!showProducts)}} icon={showAddress?faChevronUp:faChevronDown} /></div>
    {showAddress && <div className="w-full h-fit border border-black-2 p-1 mt-2"><p>Dir</p></div>}
   </div>
   <div className="w-2/6 mb-5">
   <Payment
    initialization={initialization}
    customization={customization}
    onSubmit={onSubmitPayment}
    onReady={()=>{}}
    onError={()=>{}}
    locale={'es-CO'} />
   </div>
   </div>
   </div>
   </> 
  )
}
