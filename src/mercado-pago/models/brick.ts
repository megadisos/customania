export interface BrickInitialization {
    amount: number,
    preferenceId: string,
}

export interface paymentMethods {
    ticket: string,
    bankTransfer: string,
    creditCard: string,
    debitCard: string,
    mercadoPago: string,
}
export interface BrickCustomization  {
    paymentMethods: paymentMethods
};


export interface Prefrence {
    purpose:string,
    items: Items[]
}


export interface Items {
    id: string,
    title: string,
    quantity: number,
    unit_price: number
}

export interface PaymentInfo {
    token: string,
    issuer_id: string,
    payment_method_id: string,
    transaction_amount: number,
    installments: number,
    payer:PayerInfo
}

interface PayerInfo {
  email: string,
 identification:PayerIdentification
}

interface PayerIdentification {
  type: string,
  number: number
}

export type paymentStatus = {
    status: string,
    status_detail: string,
    id: number 
}