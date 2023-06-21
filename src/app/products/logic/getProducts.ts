import { getAllDataProducts } from "../data/getProducts";
import { Product } from "../models/products";

export const getAllProducts = ():Promise<Product[]> =>{
    return getAllDataProducts()
}