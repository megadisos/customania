import { SharedLogic } from "@/shared/logic/sharedLogic";
import { generatePreferenceId, processPayment } from "../data/payment";
import { Prefrence } from "../models/brick";
/**
 * Perform process Payment
 * @param selectedPaymentMethod
 * @param formData
 */
export const onSubmit = async ({ selectedPaymentMethod, formData }:any) => {
  try {
    if(formData.payment_method_id  === 'pse'){
      formData['description'] = 'pago con pse'
      formData['additional_info'] ={}
      formData['additional_info']['ip_address'] = '181.136.134.132'
      formData['callback_url'] = 'https://ce26-2800-e2-5b00-f0f-7e7d-18be-e788-7c52.ngrok-free.app'
    }
  
    const response = await processPayment(formData)
    return response
  } catch (error) {
    console.log(error)
  }

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