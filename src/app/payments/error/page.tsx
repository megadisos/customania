'use client'
import Layout from "@/shared/views/components/layout"
import { useSearchParams } from "next/navigation"

interface ErrorPaymentProps {

}
export default function ErrorPayment() {
    const searchParams = useSearchParams()
    const transactionId = searchParams?.get('payment_id')  as string
  return (
   <Layout>
     <div><h1>Tu  compra id {transactionId}  no fue realizada </h1></div>
   </Layout>
  )
}
