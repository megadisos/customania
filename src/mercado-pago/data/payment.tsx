import axios, { AxiosResponse } from "axios";
import { Prefrence } from "../models/brick";

const BASE_API = process.env.NEXT_PUBLIC_BASE_API_URL as string
const API_ROOT = process.env.NEXT_PUBLIC_API_RT as string
const MP_ROOT =process.env.NEXT_PUBLIC_MP_ROOT as string 

export const processPayment = (formData:FormData) =>{
     // callback llamado al hacer clic en el botón enviar datos
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


export const generatePreferenceId = async (preference:Prefrence):Promise<string> =>{
    const PREFERENCE_URL = process.env.NEXT_PUBLIC_PREFERENCEID_URL as string
     const path = BASE_API + API_ROOT + MP_ROOT  +PREFERENCE_URL
     const response:AxiosResponse<string> = await axios.post(path,preference)
     return response.data

}