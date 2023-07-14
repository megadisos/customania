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
      const ipAddress = await SharedLogic.getIPAddress()
      formData['description'] = 'pago con pse'
      formData['additional_info'] ={}
      formData['additional_info']['ip_address'] = ipAddress
      formData['callback_url'] = 'https://cf67-2800-e2-5b00-f0f-f085-997b-9f8f-f452.ngrok-free.app/payments/callback'
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