'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { SaleStatus } from "@/app/products/models/sales"
import Layout from "@/shared/views/components/layout"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface ErrorPaymentProps {

}
export default function ErrorPayment() {
    const searchParams = useSearchParams()
    const transactionId = searchParams?.get('payment_id')  as string
    const status = searchParams?.get('status')  as string
    const status_detail = searchParams?.get('status_detail')  as string
    useEffect(()=>{
      const updateObj:SaleStatus = {
        status,
        delivery_status:'not_deliver',
        status_detail
      }
      ProductsLogic.updateSale(updateObj,transactionId).then(resp=>{
        if(resp) console.log('Updated!')
      })
    },[])
  return (
   <Layout>
     <div><h1>Tu  compra id {transactionId}  no fue realizada </h1></div>
   </Layout>
  )
}
