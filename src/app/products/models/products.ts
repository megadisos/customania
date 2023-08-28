import Product from "../[category]/[product]/page"

type ProductType = 't-shirts' | 'Mugs' | 'Caps' | 'Hoddies' | 'collectibles'
export type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type SectionType = 'Offers' | 'Recent' | 'outstanding'
export type RatingType = '1' |'2'|'3'|'4'|'5'

export interface Product {
    _id?:string,
    name:string,
    description:string,
    price:number,
    rating:RatingType,
    type:ProductType,
    amount: number,
    sizes: null | Sizes[],
    imagesPaths: ImagesPaths,
    available:number,
    created:string,
    offer:  number,
}

export interface CreateUpdateProduct {
    product?:Product,
    type:'create'|'update'
}
export interface Categories {
    _id?:string,
    name:string,
    image:string
}

export interface Delivery {
    name:string,
    city:string,
    address:string
}
export interface ProductsDataResponse<T> {
    data: T[],
    metadata: Metadata
}

export interface deleteResponse {
    deletedCount: number
}
interface Metadata {
    
        items: number,
        totalItems: number,
        page: number | null,
        totalPages: number

}


export interface updateResponse {
    matchedCount:number; // Number of documents matched
    modifiedCount:number; // Number of documents modified
    acknowledged:boolean; // Boolean indicating everything went smoothly.
    upsertedId:null | string; // null or an id containing a document that had to be upserted.
    upsertedCount:number
}
export interface ProductUpdateResponse<T> {
    error:null | string,
    data:T | null
}

export interface ImagesPaths {
    path1:string,
    pathd2:string,
    path3:string
}
export interface ProductsFromCard extends Product{
    getterSize: SizeType | null,
    cartQuantity: number
}

interface Sizes {
    id:string,
    size:SizeType,
    amount:number,
    available:number,
    price: number
}