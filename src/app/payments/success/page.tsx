'use client'
import Layout from "@/shared/views/components/layout"
import { useSearchParams } from "next/navigation"

interface SuccessPaymenProps {

}
export default function SuccessPayment() {
    const searchParams = useSearchParams()
    const transactionId = searchParams?.get('payment_id')  as string
  return (
   <Layout>
    <div><h1>Felicitaciones tu compra id {transactionId} fue hecha! </h1></div>
   </Layout>
  )
}
