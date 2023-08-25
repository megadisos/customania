import { deleteProductApi } from "../data/deleteProducts"
import { deleteResponse, ProductUpdateResponse } from "../models/products"

/**
 * Eliminar un producto.
 * @returns {Product} Devuelve un producto
 */
export const deleteProduct = (productId:string):Promise<ProductUpdateResponse<deleteResponse>> =>{
    return deleteProductApi(productId)
}