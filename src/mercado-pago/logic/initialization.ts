import { initMercadoPago } from '@mercadopago/sdk-react';
import { IPaymentBrickCustomization } from '@mercadopago/sdk-react/bricks/payment/type';
import { BrickCustomization, BrickInitialization, Items } from '../models/brick';
import { MPLogic } from './mercadoPagoLogic';


/**
 * Start Mercado Pago authentication
 */
export const initMpAuthentication = () =>{
    const PUBLIC_KEY =process.env.NEXT_PUBLIC_PUBLIC_KEY as string
    initMercadoPago(PUBLIC_KEY);
}


/**
 * Returns Initialization Object for Mercado Pago
 * @param ammount Total Ammount 
 * @param items Items to buy
 * @returns {BrickInitialization} returns the initialization object
 */

export const getInitializationObject= async (amount:number,items:Items[])=>{
    const preference = {
        purpose: "wallet_purchase",
        items:items
    }
    const preferenceId = await MPLogic.generateNewPreferenceId(preference)
    
    return {
        amount,
        preferenceId
    }
}


/**
 * Returns CustomizationObject for Mercado Pago
 * @returns {IPaymentBrickCustomization} returns customization object
 */

export const getCustomizationObject= ():IPaymentBrickCustomization =>{
    return {
        paymentMethods: {
          ticket: "all",
          bankTransfer: "all",
          creditCard: "all",
          debitCard: "all",
        //   mercadoPago: "all",
        },
      }
 
}