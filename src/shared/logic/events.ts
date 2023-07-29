import { Product } from "@/app/products/models/products";
import { emitCustomEvent } from "react-custom-events";
import { ModalData, NotiStyck } from "../models/shared";

export const showCartModal= (product:Product) =>{
    emitCustomEvent('Cart-modal', product);
}


export const showModal= (data:ModalData) =>{
    emitCustomEvent('OpenClose-Modal',data);
}
export const showAlertModal= (data:{msg:string,type:NotiStyck}) =>{
    emitCustomEvent('Alert-modal',data);
}
