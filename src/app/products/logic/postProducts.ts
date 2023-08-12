import { Items } from "@/mercado-pago/models/brick"
import { updateProductQuantity } from "../data/postProducts"
import { ProductUpdateResponse } from "../models/products"

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
