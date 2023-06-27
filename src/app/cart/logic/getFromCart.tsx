import { SharedLogic } from "@/shared/logic/sharedLogic"

/**
 * Obtener los productos del carrito sin estar authenticado
 * @returns {ProductsFromCard[]} Devuelve un arreglo de productos.
 */
export const GetProductsFromCartNotAuthenticated = () =>{
    const products = localStorage.getItem('cm-cart')
    if(products !== null) return SharedLogic.convertStringToObjectsArray(products)
    return null   
}