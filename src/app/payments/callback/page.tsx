'use client'
import { SharedLogic } from "@/shared/logic/sharedLogic"
import Layout from "@/shared/views/components/layout"
import { StatusScreen } from "@mercadopago/sdk-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"


interface CallbackProps {
    
}
export default function Callback({}:CallbackProps ) {
  const router = useRouter();
  const searchParams = useSearchParams()
 const [status,setStatus] = useState({status:'',status_detail:''})
  const transactionId = searchParams?.get('payment_id')  as string

  const onPaymentReady = async () =>{
    const result = await SharedLogic.getPaymentById(transactionId)
    console.log(result)
    if(result.status === 'approved')  router.push(`/payments/success?payment_id=${transactionId}`)
    if(result.status === 'rejected')  router.push(`/payments/error?payment_id=${transactionId}`)
    
  }
  return (
   <Layout>
    <div className="flex flex-column justify-center h-screen">
    {status.status}
    <StatusScreen
   initialization={{paymentId:transactionId}}
   customization={{
    visual: {
      showExternalReference: true
    }
   }}
   onReady={onPaymentReady}
   onError={async ()=>{}}
   locale={'es-CO'}
/>
    </div>
   </Layout>
  )
}
