import { Items } from "@/mercado-pago/models/brick"
import { createProductApi, updateProductApi, updateProductQuantity } from "../data/postProducts"
import { Product, ProductUpdateResponse } from "../models/products"

/**
 * Actualizar cantidad de un producto.
 * @param items Items sales
 */
export const updateProductsQuantities = async (items:Items[]) =>{
    console.log(items)
   const updateItemsPromise = items && items.map(async (item)=>{
    try {
        return await updateProductQuantity(item)
    } catch (error) {
        return error
    }
    })
    await Promise.all(updateItemsPromise)
}


/**
 * Actualiza un producto.
 * @returns {Product} Devuelve un producto
 */
export const updateProduct = (product:Product,productId:string):Promise<ProductUpdateResponse<Product>> =>{
    return updateProductApi(product,productId)
}


/**
 * Crear un producto.
 * @returns {Product} Devuelve un producto
 */
export const createProduct = (product:Product):Promise<ProductUpdateResponse<Product>> =>{
    return createProductApi(product)
}