import axios, { AxiosResponse } from "axios";
import { PaymentInfo, Prefrence } from "../models/brick";

const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL as string
const API_ROOT = process.env.NEXT_PUBLIC_API_RT as string
const MP_ROOT =process.env.NEXT_PUBLIC_MP_ROOT as string 

export const processPayment = async (paymentInfo:PaymentInfo) =>{
    const PROCESS_PAYMENT = process.env.NEXT_PUBLIC_PROCESS_PAYMENT as string
    const path = BASE_API + API_ROOT + MP_ROOT + PROCESS_PAYMENT 
    const response =  await axios.post(path,paymentInfo)
    return response.data
}


export const generatePreferenceId = async (preference:Prefrence):Promise<string> =>{
    const PREFERENCE_URL = process.env.NEXT_PUBLIC_PREFERENCEID_URL as string
     const path = BASE_API + API_ROOT + MP_ROOT  +PREFERENCE_URL
     const response:AxiosResponse<string> = await axios.post(path,preference)
     return response.data
}