type ProductType = 't-shirts' | 'Mugs' | 'Caps' | 'Hoddies' | 'collectibles'
export type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
export type SectionType = 'Offers' | 'Recent' | 'outstanding'
export type RatingType = '1' |'2'|'3'|'4'|'5'

export interface Product {
    id:number,
    name:string,
    description:string,
    price:number,
    rating:RatingType,
    type:ProductType,
    amount: number,
    sizes: null | Sizes[],
    imagepath: string,
    available:number,
    created:string,
    offer: null | number,
}


export interface ProductsFromCard extends Product{
    getterSize: SizeType | null,
    cartQuantity: number
}

interface Sizes {
    size:SizeType,
    amount:number,
    available:number,
    price: number
}