import axios from "axios"

const API_BASE = process.env.NEXT_PUBLIC_BASE_MP_URL as string
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string
export const  getPaymentByIdApi = async (paymentId:string) =>{
    const PAYMENTS= process.env.NEXT_PUBLIC_GET_PAYMENT as string
    const headers = {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      };
    const path = API_BASE + PAYMENTS + `/${paymentId}`
    const response = await axios.get(path, {headers})
    return response.data
}