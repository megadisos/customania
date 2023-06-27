/**
 * Obtener el valor con descuento del producto
 * @returns {number} Devuelve el valor del producto con descuento.
 */

import { Product, ProductsFromCard, SizeType } from "../models/products"

export const getProductDiscount = (price:number,offer:number|null):number =>{
    if(offer === null) return price
    const percentage = offer / 100
    const discount = price * percentage
    return price - discount
}

/**
 * Create Product for cart
 * @param product Product object
 * @param getterSize Size get if has
 * @param quantity Quantity
 * @returns {ProductsFromCard} Devuelve el product con los detalles adicionales
 */

export const convertProductToProductFromCart = (product:Product,getterSize:SizeType|null,cartQuantity:number):ProductsFromCard=>{
    return {...product,getterSize,cartQuantity}
}