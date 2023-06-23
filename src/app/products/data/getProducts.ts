import axios, { AxiosResponse } from 'axios'
import { Product } from '../models/products'

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const PRODUCTS = process.env.NEXT_PUBLIC_PRODUCTS_PATH as string
const API =process.env.NEXT_PUBLIC_API_ROOT 


export const getAllDataProducts=async ():Promise<Product[]>=>{
    const path = BASE_API  + API+ PRODUCTS
    const response:AxiosResponse<Product[]> = await axios.get(path)
    return response.data
}