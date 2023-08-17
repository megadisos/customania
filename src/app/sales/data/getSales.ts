import { ProductUpdateResponse } from "@/app/products/models/products"
import { Sale } from "@/app/products/models/sales"
import axios, { AxiosResponse } from "axios"

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const SALES_USER = process.env.NEXT_PUBLIC_BASE_USERS_SALES as string
const API =process.env.NEXT_PUBLIC_API_ROOT 

export const getSalesApi =async ():Promise<ProductUpdateResponse<Sale[]>>=>{
    let path = BASE_API  + API+ SALES_USER
    const response:AxiosResponse<ProductUpdateResponse<Sale[]>> = await axios.get(path)
    return response.data
}

export const getSalesByUserIdApi =async (userId:string):Promise<ProductUpdateResponse<Sale>>=>{
    let path = BASE_API  + API+ SALES_USER +`/${userId}`
    const response:AxiosResponse<ProductUpdateResponse<Sale>> = await axios.get(path)
    return response.data
}