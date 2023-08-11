'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { SaleStatus } from "@/app/products/models/sales"
import Button from "@/shared/views/components/button"
import Layout from "@/shared/views/components/layout"
import { faBomb, faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface ErrorPaymentProps {

}
export default function ErrorPayment() {
    const searchParams = useSearchParams()
    const transactionId = searchParams?.get('payment_id')  as string
    const status = searchParams?.get('status')  as string
    const status_detail = searchParams?.get('status_detail')  as string
    const router = useRouter();
    useEffect(()=>{
      const updateObj:SaleStatus = {
        status,
        delivery_status:'not_deliver',
        status_detail
      }
      ProductsLogic.updateSale(updateObj,transactionId).then(resp=>{
        if(resp) console.log(resp.items)
      })
    },[])
  return (
   <Layout>
     <div className="flex flex-col h-screen justify-top items-center gap-2">
      <div className="bg-white bg-opacity-70 p-5 flex flex-col gap-2 mb-2"> 
      <FontAwesomeIcon icon={faCircleExclamation} size={'4x'} color={'#7F1D1D'}/>
      
      <h1><span className="font-bold">Opps!</span> Tu  compra id <span className="font-bold">{transactionId}</span>  no fue realizada! </h1>
      </div>
<Button name="Seguir comprando" position="center" size="25%" height="big" type="normal" onClick={()=>router.push('/')}/>
<Button name="Volver al carrito" position="center" size="25%" height="big" type="success" onClick={()=>router.push('/cart')}/>
      </div>
   </Layout>
  )
}
