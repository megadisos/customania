import { getAllDataProducts } from "../data/getProducts";
import { Product } from "../models/products";


/**
 * Obtiene la lista de todos los productos.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const getAllProducts = ():Promise<Product[]> =>{
    return getAllDataProducts()
}

/**
 * Ordena los productos de mas reciente a mas antigua creacion.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const  getProductsByRecentDate = async():Promise<Product[]>=>{
    const allProducts = await getAllDataProducts()
    return  allProducts.sort((a,b)=>{
        const date1 = new Date(a.created).getTime()
        const date2 = new Date(b.created).getTime()
        return date2 - date1
    })
}

/**
 * Crea un arreglo de productos que tengan ofertas de mayor a menor.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const getProductsByOffers = async():Promise<Product[]>=>{
    const allProducts = await getAllDataProducts()
    const offerProducts = allProducts.filter(product=>product.offer !== null)
    return offerProducts.sort((a,b)=>(b.offer as number)-(a.offer as number))
}

/**
 * Ordena los productos por rating.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const getProductsByRating = async():Promise<Product[]>=>{
    const allProducts = await getAllDataProducts()
    return allProducts.sort((a,b)=>{
        const rating1 = parseInt(a.rating)
        const rating2 = parseInt(b.rating)
        return rating2 - rating1
    })
}