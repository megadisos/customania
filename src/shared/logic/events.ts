import { Product } from "@/app/products/models/products";
import { emitCustomEvent } from "react-custom-events";

export const showCartModal= (product:Product) =>{
    emitCustomEvent('Cart-modal', product);
}



export const closeCartModal= () =>{
    emitCustomEvent('Close-cart-modal');
}