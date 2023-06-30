import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { ProductsFromCard } from "@/app/products/models/products"
import { SharedLogic } from "@/shared/logic/sharedLogic"
import { CartLogic } from "./cartLogic"

/**
 * Obtener los productos del carrito sin estar authenticado
 * @returns {ProductsFromCard[]} Devuelve un arreglo de productos.
 */
export const GetProductsFromCartNotAuthenticated = ():ProductsFromCard[] | null =>{
    const products = localStorage.getItem('cm-cart')
    if(products !== null) return SharedLogic.convertStringToObjectsArray(products)
    return null   
}


/**
 * Obtener el total de los productos en el carrito
 * @returns {number} returns the total
 */
export const GetProductsFromCartNotAuthenticatedTotals = ():number =>{
    const products = localStorage.getItem('cm-cart')
    if(products !== null){
        const convertedProducts = SharedLogic.convertStringToObjectsArray(products)
        let total = 0
        convertedProducts.map(product=>{
           const price = ProductsLogic.getProductPriceByDiscountByNot(product)
           const productPrice = CartLogic.getProductTotals(price,product.cartQuantity)
           total = total + productPrice
        })
        return total
    } 
    return 0   
}