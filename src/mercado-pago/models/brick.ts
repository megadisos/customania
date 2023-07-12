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