'use client'
import { PaymentContext, PaymentProvider } from "@/app/products/view/contexts/paymentContext"
import Layout from "@/shared/views/components/layout"
import PaymentView from "./components/paymentView"


export default function Payment() {
 
  return (
   <Layout>
<PaymentProvider>
    <PaymentView />
    </PaymentProvider>
   </Layout>
  )
}
