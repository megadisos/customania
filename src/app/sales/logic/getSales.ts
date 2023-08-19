import { ProductsDataResponse, ProductUpdateResponse } from "@/app/products/models/products"
import { Sale } from "@/app/products/models/sales"
import { getSalesApi, getSalesByUserIdApi } from "../data/getSales"

export const getSaleByUser = (userId:string,page:string):Promise<ProductsDataResponse<Sale>> =>{
    return getSalesByUserIdApi(userId,page)
}

export const getSales = ():Promise<ProductUpdateResponse<Sale[]>>=>{
    return getSalesApi()
}