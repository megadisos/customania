import { generatePreferenceId, processPayment } from "../data/payment";
import { Prefrence } from "../models/brick";
/**
 * Perform process Payment
 * @param selectedPaymentMethod
 * @param formData
 */
export const onSubmit = async ({ selectedPaymentMethod, formData }:any) => {
  return new Promise<void>((resolve, reject) => {
    fetch("/process_payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        // recibir el resultado del pago
        resolve();
      })
      .catch((error) => {
        // manejar la respuesta de error al intentar crear el pago
        reject();
      });
  });
}


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