'use client'
import { CartProvider } from '@/app/cart/view/contexts/cartContext'
import Header from '@/shared/views/components/header'
import React, { useState } from 'react'
import Carrousel from './carrousel'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Modal from './modal'
import { useCustomEventListener } from 'react-custom-events'
import { Product } from '@/app/products/models/products'
import AddedToCart from '@/app/cart/view/components/addedToCart'
const queryClient = new QueryClient()

interface LayoutProps {
    children?:React.ReactNode
    hasCarrousel?:boolean
}
export default function Layout({children,hasCarrousel}:LayoutProps) {
  const [isCartModalOpen,setIsCartModalOpen] = useState<boolean>(false)
  const [cartProduct,setCartProduct] =  useState<Product | null>(null)
  useCustomEventListener('Cart-modal', (product: Product) => {
    setIsCartModalOpen(true)
    setCartProduct(product)
  });

  useCustomEventListener('Close-cart-modal', () => {
    setIsCartModalOpen(false)
  });
  return (
    <main className="flex  h-fit flex-col  z-0 gap-1 bg-cover bg-center" style={{backgroundImage: 'url("/images/background.jpg")'}}>
   {isCartModalOpen && <Modal isOpen={isCartModalOpen} setIsOpen={setIsCartModalOpen}><AddedToCart product={cartProduct as Product}/></Modal>}
    <CartProvider>
    <div className='h-fit flex flex-col rounded shadow-slate-800 '>
    <div className='flex flex-col mb-5' >
    <Header />
   {hasCarrousel && <Carrousel />} 
    </div>
    <div className='flex  justify-center '>
    <div className='flex flex-col h-fit  mt-14  w-3/4  '>
    <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    </div>
    </div>
    </div>
    </CartProvider>
  </main>
  )
}
