import { processPayment } from "../data/payment";
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


