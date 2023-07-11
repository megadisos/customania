

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