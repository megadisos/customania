/**
 * Obtener el valor con descuento del producto
 * @returns {number} Devuelve el valor del producto con descuento.
 */

import { Items } from "@/mercado-pago/models/brick"
import { ReadonlyURLSearchParams } from "next/navigation"
import { Product, ProductsFromCard, SizeType } from "../models/products"
import { ProductsLogic } from "./productsLogic"

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


/**
 * Returns the Product price
 * @param product ProductsFromCard object
 * @returns {number} returns the value
 */

export const getProductPriceByDiscountByNot= (product:ProductsFromCard):number=>{
    // If does not have sizes 
    if(product.sizes === null){
        if(product.offer === null) return product.price
        return getProductDiscount(product.price,product.offer)
    }
    //If have sizes
    const sizeIndex = product.sizes.findIndex(prod=>prod.size === product.getterSize)
    if(product.offer === null) return product.sizes[sizeIndex].price
    return getProductDiscount(product.sizes[sizeIndex].price,product.offer)
}


/**
 * Returns the Total value of Product 
 * @param price Product price
 * @param quantity Product Quantity
 * @returns {number} returns the value
 */

export const getProductTotal = (price:number,quantity:number) =>{
    return price * quantity
}


/**
 * Returns products list base on items sales
 * @param items
 * @returns {items} returns the value
 */

export const getProductsInfoFromSales = async (items:Items[]) =>{
    const productListPromises = items.map(async (item)=>{
        const product = await ProductsLogic.getProduct(item.id)
        return {...item,imagePath:product.data?.imagesPaths.path1,name:product.data?.name,description:product.data?.description,type:product.data?.type}
    })

    const products = Promise.all(productListPromises)

    return products
}
