import { Items } from "@/mercado-pago/models/brick"
import axios, { AxiosResponse } from "axios"
import { Product, ProductsDataResponse, ProductUpdateResponse, updateResponse } from "../models/products"

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const PRODUCTS_UPDATE_QT = process.env.NEXT_PUBLIC_PRODUCTS_UPDATE_QUANTITY_PATH as string
const PRODUCTS =  process.env.NEXT_PUBLIC_PRODUCTS_PATH
const PRODUCT_UPDATE = process.env.NEXT_PUBLIC_PRODUCTS_UPDATE_PATH as string
const API =process.env.NEXT_PUBLIC_API_ROOT 


export const updateProductQuantity =async (item:Items):Promise<ProductUpdateResponse<Product>>=>{
    let path = BASE_API  + API+ PRODUCTS_UPDATE_QT +`/${item.id}`

    const response:AxiosResponse<ProductUpdateResponse<Product>> = await axios.post(path,item)
    return response.data
}


export const updateProductApi =async (product:Product,productId:string):Promise<ProductUpdateResponse<Product>>=>{
    let path = BASE_API  + API+ PRODUCT_UPDATE+`/${productId}`

    const response:AxiosResponse<ProductUpdateResponse<Product>> = await axios.post(path,product)
    return response.data
}

export const createProductApi =async (product:Product):Promise<ProductUpdateResponse<Product>>=>{
    let path = BASE_API  + API+ PRODUCTS

    const response:AxiosResponse<ProductUpdateResponse<Product>> = await axios.post(path,product)
    return response.data
}