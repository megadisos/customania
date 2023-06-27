import { Product, ProductsFromCard } from "@/app/products/models/products"

export const convertObjectsArrayToString = (object:ProductsFromCard[]):string =>{
    return JSON.stringify(object)
}

export const convertStringToObjectsArray = (object:string):ProductsFromCard[] =>{
    return JSON.parse(object)
}