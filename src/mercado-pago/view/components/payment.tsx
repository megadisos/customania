import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic";
import {  BrickInitialization } from "@/mercado-pago/models/brick"
import { Payment } from '@mercadopago/sdk-react';
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/bricks/payment/type";

interface PaymentProps {
    initialization:BrickInitialization,
    customization:IPaymentBrickCustomization,
    onSubmit: ({ selectedPaymentMethod, formData }: any) => Promise<any>
}
export default function Payments({initialization,customization,onSubmit}:PaymentProps) {
  return (
    <Payment
    initialization={initialization}
    customization={customization}
    onSubmit={onSubmit}
    onReady={MPLogic.onReady}
    onError={MPLogic.onError}
    locale={''}
 />
  )
}
