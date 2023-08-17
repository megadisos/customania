import { ProductUpdateResponse } from "@/app/products/models/products"
import { Sale } from "@/app/products/models/sales"
import { getSalesApi, getSalesByUserIdApi } from "../data/getSales"

export const getSaleByUser = (userId:string):Promise<ProductUpdateResponse<Sale>>=>{
    return getSalesByUserIdApi(userId)
}

export const getSales = ():Promise<ProductUpdateResponse<Sale[]>>=>{
    return getSalesApi()
}