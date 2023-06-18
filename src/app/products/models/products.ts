type ProductType = 't-shirts' | 'Mugs' | 'Caps' | 'Hoddies' | 'collectibles'
type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
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



interface Sizes {
    size:SizeType,
    amount:number,
    available:number,
}