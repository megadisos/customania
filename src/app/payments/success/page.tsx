'use client'
import Authenticated from "@/app/authentication/view/components/Authenticated"
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { ProductUpdateResponse } from "@/app/products/models/products"
import { Sale, SaleStatus } from "@/app/products/models/sales"
import Product from "@/app/products/[category]/[product]/page"
import Button from "@/shared/views/components/button"
import Layout from "@/shared/views/components/layout"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface SuccessPaymenProps {

}
export default function SuccessPayment() {
    const searchParams = useSearchParams()
    const transactionId = searchParams?.get('payment_id')  as string
    const status = searchParams?.get('status')  as string
    const status_detail = searchParams?.get('status_detail')  as string
    const isDelivery = searchParams?.get('isDelivery')  as string
    const router = useRouter()
    useEffect(()=>{
      const updateObj:SaleStatus = {
        status,
        delivery_status:isDelivery?'to_send':'to_deliver',
        status_detail
      }
      ProductsLogic.updateSale(updateObj,transactionId).then(resp=>{

        if(resp && resp.error === null ) {
          ProductsLogic.updateProductsQuantities((resp.data as Sale).items).then(resp=>console.log(resp))
        }
      })
    },[])
  return (
   <Layout>
      <div className="flex flex-col h-screen justify-top items-center gap-2">
      <div className="bg-white bg-opacity-70 p-5 flex flex-col gap-2 mb-2"> 
      <FontAwesomeIcon icon={faThumbsUp} size={'4x'} color={'#166534'}/>
      
      <h1><span className="font-bold"></span> Tu  compra id <span className="font-bold">{transactionId}</span>  ha sido aprobada con exito! </h1>
      </div>
    
<Button name="Seguir comprando" position="center" size="25%" height="big" type="normal" onClick={()=>router.push('/cart')}/>
<Authenticated isProfile={false}>
<Button name="Seguir orden" position="center" size="25%" height="big" type="success" onClick={()=>router.push('/')}/>
</Authenticated>
      </div>
   </Layout>
  )
}
