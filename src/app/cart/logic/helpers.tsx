import { ProductsFromCard } from "@/app/products/models/products";

export const updateProductsFromCard = (products:ProductsFromCard[],newProduct:ProductsFromCard) =>{
    const productIndex = products.findIndex(product=>product.id === newProduct.id && product.getterSize === newProduct.getterSize )
    if(productIndex === -1) return [...products,newProduct]
    if(productIndex !== -1){
        let tempProducts = [...products]
        tempProducts[productIndex] = {...tempProducts[productIndex],cartQuantity:tempProducts[productIndex].cartQuantity + newProduct.cartQuantity}
        return tempProducts
    }
}


export const getProductTotals =(price:number,quantity:number)=>{
    return price * quantity
}