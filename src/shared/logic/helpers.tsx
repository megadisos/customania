import { Product, ProductsFromCard } from "@/app/products/models/products"
import { getClientApiAddress } from "../data/getIPAddress"

export const convertObjectsArrayToString = (object:ProductsFromCard[]):string =>{
    return JSON.stringify(object)
}

export const convertStringToObjectsArray = (object:string):ProductsFromCard[] =>{
    return JSON.parse(object)
}

export const getIPAddress = async () =>{
    const clientIp = await getClientApiAddress()
    return clientIp.ip
}