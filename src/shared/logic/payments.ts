import { getPaymentByIdApi } from "../data/payment"

export const getPaymentById = (paymentId:string) =>{
    return getPaymentByIdApi(paymentId)
}