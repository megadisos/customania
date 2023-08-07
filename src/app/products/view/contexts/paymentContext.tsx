'use client'
import { Items } from "@/mercado-pago/models/brick";
import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface  BuyerInfo {
    name: string;
    city: string;
    address: string;
}

interface Initialization {
    amount: number;
    preferenceId: string;
}

type PaymentContext = {
    delivery: boolean;
    setDelivery: Dispatch<SetStateAction<boolean>>;
    inStore: boolean;
    setInStore: Dispatch<SetStateAction<boolean>>;
    buyerInfo: BuyerInfo;
    setBuyerInfo: Dispatch<SetStateAction<BuyerInfo>>;
    initialization: Initialization;
    setInitialization: Dispatch<SetStateAction<Initialization>>
    paymentClick: boolean;
    setPaymentClick: Dispatch<SetStateAction<boolean>>;
    isAllowedToPay: () => boolean | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PaymentContext = createContext<PaymentContext>(
  {} as PaymentContext
);

export const PaymentProvider = ({ children }:any) => {
    const [delivery,setDelivery] = useState(false)
    const [inStore,setInStore] = useState(false)
    const [buyerInfo,setBuyerInfo] = useState<BuyerInfo>({
        name:'',
        city:'',
        address:''
    })
    const [initialization,setInitialization] = useState<Initialization>({ 
        amount: 0,
        preferenceId: ''})
    const [paymentClick,setPaymentClick] = useState(false)
    const  [items,setItems] = useState<Items|[]>([])
    const isAllowedToPay = () =>{
        if(inStore) return true
        if(delivery){
            if(buyerInfo.address === '' || buyerInfo.city === '' ||buyerInfo.name === '') return false
            return true
        }
       }
  return (
    <PaymentContext.Provider
      value={{
        delivery,
        setDelivery,
        inStore,
        setInStore,
        buyerInfo,
        setBuyerInfo,
        initialization,
        setInitialization,
        paymentClick,
        setPaymentClick,
        isAllowedToPay}}
    >
      {children}
    </PaymentContext.Provider>
  );
};
