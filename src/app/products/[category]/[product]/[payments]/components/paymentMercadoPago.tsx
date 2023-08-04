import { Payment } from "@mercadopago/sdk-react";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/bricks/payment/type";
import React from "react";

interface AboutProps {
    initialization: {
        amount: number;
        preferenceId: string;
    },
    customization: IPaymentBrickCustomization,
    onSubmitPayment: ({ selectedPaymentMethod, formData }: any) => Promise<void>
}
const  PaymentMercadoPago=({initialization,customization,onSubmitPayment}:AboutProps)=> {
  return (
    <Payment
    initialization={initialization}
    customization={customization}
    onSubmit={onSubmitPayment}
    onReady={()=>{}}
    onError={()=>{}}
    locale={'es-CO'} />
  )
}
export default React.memo(PaymentMercadoPago)