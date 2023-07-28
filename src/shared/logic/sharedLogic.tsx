import { closeCartModal, closeLoginModal, showCartModal, showLoginModal } from "./events";
import { convertObjectsArrayToString, convertStringToObjectsArray, getCities, getIPAddress } from "./helpers";
import { getPaymentById } from "./payments";


export const SharedLogic = {
    convertObjectsArrayToString,
    convertStringToObjectsArray,
    showCartModal,
    closeCartModal,
    getIPAddress,
    getPaymentById,
    getCities,
    showLoginModal,
    closeLoginModal
}