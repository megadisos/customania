import {  showAlertModal, showCartModal, showModal } from "./events";
import { convertObjectsArrayToString, convertStringToObjectsArray, getCities, getIPAddress } from "./helpers";
import { getPaymentById } from "./payments";


export const SharedLogic = {
    convertObjectsArrayToString,
    convertStringToObjectsArray,
    showCartModal,
    showModal,
    getIPAddress,
    getPaymentById,
    getCities,
    showAlertModal
}