import { ProductsLogic } from "@/app/products/logic/productsLogic";
import { Product, ProductsFromCard, SizeType } from "@/app/products/models/products";
import { SharedLogic } from "@/shared/logic/sharedLogic";
import { CartLogic } from "./cartLogic";

export const SaveProductInCartNoAuthenticated = (product:ProductsFromCard) =>{
    let cartProducts = []
    const currentLSCart = localStorage.getItem('cm-cart')
    if (currentLSCart === null) return localStorage.setItem('cm-cart',SharedLogic.convertObjectsArrayToString([product]))
    if (currentLSCart !== null){
        cartProducts = SharedLogic.convertStringToObjectsArray(currentLSCart)
        const updatesProducts = CartLogic.updateProductsFromCard(cartProducts,product)
        localStorage.setItem('cm-cart',SharedLogic.convertObjectsArrayToString(updatesProducts))
    }
}


export const AddToCart = (product:Product,getterSize:SizeType|null,cartQuantity:number) =>{
    console.log('entre')
    const productCart = ProductsLogic.convertProductToProductFromCart(product,getterSize,cartQuantity)
    SaveProductInCartNoAuthenticated(productCart)
}