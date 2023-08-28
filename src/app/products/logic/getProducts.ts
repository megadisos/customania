import { getAllDataProducts, getCategoriesApi, getProductById, getProductsByOffersApi, getProductsByRatingApi, getProductsByRecentsApi } from "../data/getProducts";
import { updateProductApi } from "../data/postProducts";
import { Categories, Product, ProductsDataResponse, ProductUpdateResponse } from "../models/products";


/**
 * Obtiene la lista de todos los productos.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const getAllProducts = (page:string,category?:string):Promise<ProductsDataResponse<Product>> =>{
    return getAllDataProducts(page,category)
}

/**
 * Ordena los productos de mas reciente a mas antigua creacion.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const  getProductsByRecentDate = async():Promise<Product[]>=>{
    const products = await getProductsByRecentsApi()
    return  products
}

/**
 * Crea un arreglo de productos que tengan ofertas de mayor a menor.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const getProductsByOffers = async():Promise<Product[]>=>{
    const products = await getProductsByOffersApi()
    return products
}

/**
 * Ordena los productos por rating.
 * @returns {Product[]} Devuelve un arreglo de productos.
 */
export const getProductsByRating = async():Promise<Product[]>=>{
    const products = await getProductsByRatingApi()
    return products
}


/**
 * Obtiene un producto.
 * @returns {Product} Devuelve un producto
 */
export const getProduct = (productId:string):Promise<ProductUpdateResponse<Product>> =>{
    return getProductById(productId)
}



/**
 * Obtiene categorias
 * @returns {Categories} Devuelve un producto
 */
export const getCategories = ():Promise<ProductUpdateResponse<Categories[]>> =>{
    return getCategoriesApi()
}