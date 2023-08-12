import { Items } from "@/mercado-pago/models/brick"
import axios, { AxiosResponse } from "axios"
import { ProductsDataResponse, ProductUpdateResponse } from "../models/products"

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const PRODUCTS_UPDATE = process.env.NEXT_PUBLIC_PRODUCTS_UPDATE_PATH as string
const API =process.env.NEXT_PUBLIC_API_ROOT 


export const updateProductQuantity =async (item:Items):Promise<ProductUpdateResponse>=>{
    let path = BASE_API  + API+ PRODUCTS_UPDATE+`/${item.id}`

    const response:AxiosResponse<ProductUpdateResponse> = await axios.post(path,item)
    return response.data
}