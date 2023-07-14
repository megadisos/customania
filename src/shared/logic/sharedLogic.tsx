import { closeCartModal, showCartModal } from "./events";
import { convertObjectsArrayToString, convertStringToObjectsArray, getIPAddress } from "./helpers";
import { getPaymentById } from "./payments";


export const SharedLogic = {
    convertObjectsArrayToString,
    convertStringToObjectsArray,
    showCartModal,
    closeCartModal,
    getIPAddress,
    getPaymentById
}