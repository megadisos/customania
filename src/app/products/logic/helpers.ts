/**
 * Obtener el valor con descuento del producto
 * @returns {number} Devuelve el valor del producto con descuento.
 */

export const getProductDiscount = (price:number,offer:number|null):number =>{
    if(offer === null) return price
    const percentage = offer / 100
    const discount = price * percentage
    return price - discount
}