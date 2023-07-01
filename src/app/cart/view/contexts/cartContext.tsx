'use client'
import { ProductsFromCard } from "@/app/products/models/products";
import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { CartLogic } from "../../logic/cartLogic";

type CartContext = {
    products:ProductsFromCard[] | null,
    setProducts: Dispatch<SetStateAction<ProductsFromCard[] | null>>,
    totalInCart: number,
    setTotalInCart: Dispatch<SetStateAction<number>>
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CartContext = createContext<CartContext>(
  {} as CartContext
);

export const CartProvider = ({ children }:any) => {
    const [products,setProducts] =  useState<ProductsFromCard[] | null>(null)
    const [totalInCart,setTotalInCart] = useState<number>(0)
    useEffect(()=>{
        setProducts(CartLogic.GetProductsFromCartNotAuthenticated())
        setTotalInCart(CartLogic.getProductsFromCartCount())
    },[])
  
  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        totalInCart,
        setTotalInCart}}
    >
      {children}
    </CartContext.Provider>
  );
};
