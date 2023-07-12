import { MPLogic } from "@/mercado-pago/logic/mercadoPagoLogic";
import {  BrickInitialization } from "@/mercado-pago/models/brick"
import { Payment } from '@mercadopago/sdk-react';
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/bricks/payment/type";

interface PaymentProps {
    initialization:BrickInitialization,
    customization:IPaymentBrickCustomization
}
export default function Payments({initialization,customization}:PaymentProps) {
  return (
    <Payment
    initialization={initialization}
    customization={customization}
    onSubmit={MPLogic.onSubmit}
    onReady={MPLogic.onReady}
    onError={MPLogic.onError}
 />
  )
}
