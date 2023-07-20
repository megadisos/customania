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
import { faArrowDown, faChevronDown, faChevronUp, faStore, faTruck } from "@fortawesome/free-solid-svg-icons"
import CartTable from "@/app/cart/view/components/cartTable"
import {
    useQuery,
  } from 'react-query'
import { SharedLogic } from "@/shared/logic/sharedLogic"
import { CityInfo } from "@/shared/models/shared"
import { useSnackbar } from 'notistack';

export default function PaymentView() {
    const router = useRouter();
    const pathname = usePathname()
    const comeFromCart = pathname?.split('/')[3] === 'cart'
    const searchParams = useSearchParams()
    const [showProducts,setShowProducts] = useState(true)
    const [showAddress,setShowAddress] = useState(false)
    const  [citySelected,setCitySelected] = useState('953')
    const [delivery,setDelivery] = useState(false)
    const [inStore,setInStore] = useState(false)
    const queryCities = useQuery('cities',SharedLogic.getCities)
    const cities = queryCities.data
    const [name,setName] = useState('')
    const [dir,setDir] = useState('')
    const { enqueueSnackbar } = useSnackbar();
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
        if(delivery) if(name === '' || dir === '') return console.log('campos vacios!!')
        
        const response = await MPLogic.onSubmit({selectedPaymentMethod, formData })
        if(selectedPaymentMethod === 'bank_transfer' || selectedPaymentMethod === 'ticket') router.push(`/payments/callback?payment_id=${response.id}`)
        if(response.status === 'approved' && response.status_detail === 'accredited')  router.push(`/payments/success?payment_id=${response.id}`)
        if(response.status === 'rejected')  router.push(`/payments/error?payment_id=${response.id}`)
        
        
       
        
    }
   
const handleKindOfDelivery = (type:'store' | 'delivery') =>{
    if(type === 'store'){
        setDelivery(false)
        setInStore(true)
    } 

    if(type === 'delivery'){
        setDelivery(true)
        setInStore(false)
    } 
}
  return (
    <>
       <div className="flex flex-col h-screen gap-2 ">

    <div className="flex justify-center">
    <TitleHeader title="Pagos" />
    </div>

    <div className="flex flex-row gap-2">
   <div className="w-5/6 bg-white rounded flex flex-col h-auto mb-5 border border-2 p-2">
    <div className="w-full h-8 border border-black-2 p-1"><span className="font-bold">Tus productos</span> <FontAwesomeIcon style={{'float':'right','cursor':'pointer'}} onClick={()=>{setShowProducts(!showProducts); setShowAddress(!showAddress)}} icon={showProducts?faChevronUp:faChevronDown} /></div>
    {showProducts && <div className="w-full h-fit border border-black-2 p-1 mt-2"><CartTable actions={false} payments={true}/></div>}
    <div className="w-full h-8 border border-black-2 p-1 mt-2"><span className="font-bold">Entrega</span> <FontAwesomeIcon style={{'float':'right','cursor':'pointer'}} onClick={()=>{setShowAddress(!showAddress);setShowProducts(!showProducts)}} icon={showAddress?faChevronUp:faChevronDown} /></div>
    {showAddress && <div className="w-full h-fit border border-black-2 p-2 mt-2">

       {!delivery && !inStore && <div className="flex flex-row gap-2 justify-center cursor-pointer">
            <div className="w-56 h-56 border flex flex-col gap-3 justify-center p-2" onClick={()=>handleKindOfDelivery('store')}>
            <FontAwesomeIcon icon={faStore} size={'7x'} />
            <span className="self-center">Recoge en tienda</span>
            </div>
            <div className="flex flex-col w-56 h-56 border gap-3 justify-center p-2" onClick={()=>handleKindOfDelivery('delivery')}>
            <FontAwesomeIcon icon={faTruck} size={'7x'}/>
            <span className="self-center">Domicilio</span>
            </div>
        </div>} 
        {delivery && 
        <>
        <div className="flex flex-row gap-2 justify-center cursor-pointer" onClick={()=>handleKindOfDelivery('store')}>
              <FontAwesomeIcon icon={faStore} title={'Recoger en tienda'}/> 
        </div>
            <form className="flex flex-col gap-2">
            <span>Nombre quien recibe:</span>
            <input  onChange={(e)=>setName(e.target.value)} className="border" type={'text'} name={'name'} />
            <span>Ciudad:</span>
          <select value={citySelected} onChange={(e)=>setCitySelected(e.target.value)}>
            {cities && cities.map((city:CityInfo,index:number)=>{
                return <option value={index}>{city.municipio}</option>
            })}
       
          </select>
            <span>Direccion de envio:</span>
            <input type={'text'} name={'dir'} className="border" onChange={(e)=>setDir(e.target.value)}/>
    
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
        </div>}

    
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
