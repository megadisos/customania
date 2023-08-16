import { User } from "@/app/authentication/models/authentication"
import { ProductsDataResponse, ProductUpdateResponse } from "@/app/products/models/products"
import axios, { AxiosResponse } from "axios"

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const USERS = process.env.NEXT_PUBLIC_USERS_PATH as string
const API =process.env.NEXT_PUBLIC_API_ROOT 

export const getUserById =async (userId:string):Promise<ProductUpdateResponse<User>>=>{
    let path = BASE_API  + API+ USERS+`/${userId}`
    const response:AxiosResponse<ProductUpdateResponse<User>> = await axios.get(path)
    return response.data
}