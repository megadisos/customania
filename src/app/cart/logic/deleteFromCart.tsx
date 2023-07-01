import { SharedLogic } from "@/shared/logic/sharedLogic"

/**
 * Eliminar elemento del carrito
 * @param index element index
 */
export const DeleteProductsFromCartNotAuthenticated = (index:number):void =>{
    console.log('entre')
    const products = localStorage.getItem('cm-cart')
    if(products !== null){
        const convertedProducts = SharedLogic.convertStringToObjectsArray(products)
        const updatedProducts = convertedProducts.filter((prod,prodIndex)=> index !== prodIndex)
        console.log(updatedProducts,index)
        localStorage.setItem('cm-cart',SharedLogic.convertObjectsArrayToString(updatedProducts))
    }
}