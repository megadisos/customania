import { generatePreferenceId, processPayment } from "../data/payment";
import { Prefrence } from "../models/brick";
/**
 * Perform process Payment
 * @param selectedPaymentMethod
 * @param formData
 */
export const onSubmitBrick = async ({ selectedPaymentMethod, formData }:any) => processPayment(formData)


/**
 * llamado para todos los casos de error de Brick
 * @param error
 */
export const onError = async (error:any) => console.log(error);

/**
 *  Callback llamado cuando el Brick está listo.
   Aquí puede ocultar cargamentos de su sitio, por ejemplo.
 */
 export const onReady = async () => {};



 export const generateNewPreferenceId =(preference:Prefrence)=>{
    return generatePreferenceId(preference)
 }