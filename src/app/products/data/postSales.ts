import axios, { AxiosResponse } from "axios"
import { ProductUpdateResponse } from "../models/products"
import { Sale, SaleStatus } from "../models/sales"

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const SALES = process.env.NEXT_PUBLIC_BASE_SALES as string
const API =process.env.NEXT_PUBLIC_API_ROOT 


export const registerNewSale= async (sale:Sale):Promise<Sale>=>{
    const NEW = process.env.NEXT_PUBLIC_BASE_ADD as string
    let path = BASE_API  + API+ SALES + NEW
    const response:AxiosResponse<Sale> = await axios.post(path,sale)
    return response.data
}


export const updateSaleApi= async (newStatus:SaleStatus,transactionId:string):Promise<ProductUpdateResponse<Sale>>=>{
    const UPDATE = process.env.NEXT_PUBLIC_BASE_UPDATE as string
    let path = BASE_API  + API+ SALES + UPDATE + `/${transactionId}`
    const response:AxiosResponse<ProductUpdateResponse<Sale>> = await axios.post(path,newStatus)
    return response.data
}