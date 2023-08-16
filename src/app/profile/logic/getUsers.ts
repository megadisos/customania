import { User } from "@/app/authentication/models/authentication"
import { ProductUpdateResponse } from "@/app/products/models/products"
import { getUserById } from "../data/getUsers"

export const getUser = (userId:string):Promise<ProductUpdateResponse<User>>=>{
    return getUserById(userId)
}