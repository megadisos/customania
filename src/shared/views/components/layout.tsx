'use client'
import { CartProvider } from '@/app/cart/view/contexts/cartContext'
import Header from '@/shared/views/components/header'
import React from 'react'
import Carrousel from './carrousel'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()

interface LayoutProps {
    children?:React.ReactNode
    hasCarrousel?:boolean
}
export default function Layout({children,hasCarrousel}:LayoutProps) {
  return (
    <main className="flex  h-fit flex-col  gap-1 bg-cover bg-center" style={{backgroundImage: 'url("/images/background.jpg")'}}>
    <CartProvider>
    <div className='h-fit flex flex-col rounded shadow-slate-800'>
    <div className='flex flex-col mb-5' >
    <Header />
   {hasCarrousel && <Carrousel />} 
    </div>
    <div className='flex  justify-center'>
    <div className='flex flex-col h-fit  mt-14  w-3/4 '>
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
