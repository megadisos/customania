import axios, { AxiosResponse } from "axios"
import { deleteResponse, ProductUpdateResponse } from "../models/products"

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const PRODUCTS = process.env.NEXT_PUBLIC_PRODUCTS_PATH as string
const API =process.env.NEXT_PUBLIC_API_ROOT as string

export const deleteProductApi =async (productId:string):Promise<ProductUpdateResponse<deleteResponse>>=>{
    let path = BASE_API  + API+ PRODUCTS + `/${productId}`

    const response:AxiosResponse<ProductUpdateResponse<deleteResponse>> = await axios.delete(path)
    return response.data
}