import axios, { AxiosResponse } from 'axios'
import { Categories, Product, ProductsDataResponse, ProductUpdateResponse } from '../models/products'

const BASE_API = process.env.NEXT_PUBLIC_BASE_URL as string
const PRODUCTS = process.env.NEXT_PUBLIC_PRODUCTS_PATH as string
const API =process.env.NEXT_PUBLIC_API_ROOT 
const PR_LIMIT =10


export const getAllDataProducts=async (page:string,category?:string):Promise<ProductsDataResponse<Product[]>>=>{
    let path = BASE_API  + API+ PRODUCTS+`?page=${page}`
    if(category) path = path + `&category=${category}`
    const response:AxiosResponse<ProductsDataResponse<Product[]>> = await axios.get(path)
    return response.data
}

export const getProductById=async (productId:string):Promise<ProductUpdateResponse<Product>>=>{
    const path = BASE_API  + API+ PRODUCTS + `/${productId}`
    const response:AxiosResponse<ProductUpdateResponse<Product>> = await axios.get(path)
    return response.data
}


export const getProductsByOffersApi=async ():Promise<Product[]>=>{
    const OFFERS = process.env.NEXT_PUBLIC_PRODUCTS_OFFER_PATH as string
    const path = BASE_API  + API+ PRODUCTS + OFFERS +`?limit=${PR_LIMIT}`
    const response:AxiosResponse<Product[]> = await axios.get(path)
    return response.data
}

export const getProductsByRatingApi=async ():Promise<Product[]>=>{
    const RATING = process.env.NEXT_PUBLIC_PRODUCTS_RATING_PATH as string
    const path = BASE_API  + API+ PRODUCTS + RATING +`?limit=${PR_LIMIT}`
    const response:AxiosResponse<Product[]> = await axios.get(path)
    return response.data
}

export const getProductsByRecentsApi=async ():Promise<Product[]>=>{
    const RECENTS = process.env.NEXT_PUBLIC_PRODUCTS_RECENT_PATH as string
    const path = BASE_API  + API+ PRODUCTS + RECENTS +`?limit=${PR_LIMIT}`
    const response:AxiosResponse<Product[]> = await axios.get(path)
    return response.data
}


export const getCategoriesApi = async ():Promise<ProductUpdateResponse<Categories[]>> =>{
    const CATEGORIES = process.env.NEXT_PUBLIC_BASE_CATEGORIES as string
    const path = BASE_API  + API + CATEGORIES
    const response:AxiosResponse<ProductUpdateResponse<Categories[]>> = await axios.get(path)
    return response.data
}