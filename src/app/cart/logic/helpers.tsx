import { ProductsLogic } from "@/app/products/logic/productsLogic";
import { ProductsFromCard } from "@/app/products/models/products";
import { Items } from "@/mercado-pago/models/brick";

export const updateProductsFromCard = (products:ProductsFromCard[],newProduct:ProductsFromCard) =>{
    const productIndex = products.findIndex(product=>product._id === newProduct._id && product.getterSize === newProduct.getterSize )
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


export const convertCartItemsToMPItems = (cartItems:ProductsFromCard[]):Items[] =>{
    let items: Items[] = []
    cartItems.map(item=>{
        const newItem:Items = {
            id:item._id.toString(),
            quantity:item.cartQuantity,
            title:item.name,
            unit_price:item.offer ? ProductsLogic.getProductDiscount(item.price,item.offer):item.price,
            size:item.getterSize as string
        }
        items.push(newItem)
    })

    return items
}