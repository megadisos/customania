'use client'
import Authenticated from "@/app/authentication/view/components/Authenticated"
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { SaleStatus } from "@/app/products/models/sales"
import { SharedLogic } from "@/shared/logic/sharedLogic"
import Button from "@/shared/views/components/button"
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
  const isDelivery = searchParams?.get('isDelivery')  as string
  const method = searchParams?.get('method')  as string
 

  const onPaymentReady = async () =>{
    const result = await SharedLogic.getPaymentById(transactionId)
    if(result.status === 'approved')router.push(`/payments/success?payment_id=${transactionId}&status=${result.status}&status_detail=${result.status_detail}&isDelivery=${isDelivery}`)
    if(result.status === 'rejected')  router.push(`/payments/error?payment_id=${transactionId}&status=${result.status}&status_detail=${result.status_detail}`)
    
  }
  return (
   <Layout>
    <div className="flex flex-col justify-top items-center h-screen gap-4">
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
{method === 'efecty' && <>
<Button name="Seguir comprando" position="center" size="25%" height="big" type="normal" onClick={()=>router.push('/cart')}/>
<Authenticated isProfile={false}>
<Button name="Seguir orden" position="center" size="25%" height="big" type="success" onClick={()=>router.push('/')}/>
</Authenticated></>}

    </div>
   
   </Layout>
  )
}
