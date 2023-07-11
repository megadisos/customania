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