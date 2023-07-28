import { Product, ProductsFromCard } from "@/app/products/models/products"
import { getClientApiAddress } from "../data/getIPAddress"
import { getColombiaCities } from "../data/getSharedInfo"

export const convertObjectsArrayToString = (object:any):string =>{
    return JSON.stringify(object)
}

export const convertStringToObjectsArray = (object:string):any =>{
    return JSON.parse(object)
}

export const getIPAddress = async () =>{
    const clientIp = await getClientApiAddress()
    return clientIp.ip
}

export const getCities = async () =>{
    const cities = await getColombiaCities()
    return cities}