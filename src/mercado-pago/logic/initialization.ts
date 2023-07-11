import { initMercadoPago } from '@mercadopago/sdk-react';


/**
 * Start Mercado Pago authentication
 */
export const initMpAuthentication = () =>{
    const PUBLIC_KEY =process.env.NEXT_PUBLIC_PUBLIC_KEY as string
    initMercadoPago(PUBLIC_KEY);
}