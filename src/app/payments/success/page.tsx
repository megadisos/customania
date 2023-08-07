'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { SaleStatus } from "@/app/products/models/sales"
import Product from "@/app/products/[category]/[product]/page"
import Layout from "@/shared/views/components/layout"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface SuccessPaymenProps {

}
export default function SuccessPayment() {
    const searchParams = useSearchParams()
    const transactionId = searchParams?.get('payment_id')  as string
    const status = searchParams?.get('status')  as string
    const status_detail = searchParams?.get('status_detail')  as string
    const isDelivery = searchParams?.get('isDelivery')  as string
    useEffect(()=>{
      const updateObj:SaleStatus = {
        status,
        delivery_status:isDelivery?'to_send':'to_deliver',
        status_detail
      }
      ProductsLogic.updateSale(updateObj,transactionId).then(resp=>{
        if(resp) console.log('Updated!')
      })
    },[])
  return (
   <Layout>
    <div><h1>Felicitaciones tu compra id {transactionId} fue hecha! </h1></div>
   </Layout>
  )
}
