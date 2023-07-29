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
import { MPLogic } from '@/mercado-pago/logic/mercadoPagoLogic'
import LoginForm from '@/app/authentication/view/components/LoginForm'
import LogoutComponent from '@/app/authentication/view/components/Logout'
import { SharedProps, SnackbarProvider, useSnackbar } from 'notistack'
import { ModalData, ModalTypes, NotiStyck } from '@/shared/models/shared'
import RegisterForm from '@/app/authentication/view/components/RegisterForm'

const queryClient = new QueryClient()

interface LayoutProps {
    children?:React.ReactNode
    hasCarrousel?:boolean
}
export default function Layout({children,hasCarrousel}:LayoutProps) {
  const [isCartModalOpen,setIsCartModalOpen] = useState<boolean>(false)
  const [isLoginModalOpen,setIsLoginModalOpen] = useState<boolean>(false)
  const [isLogoutModalOpen,setIsLogoutModalOpen] = useState<boolean>(false)
  const [isRegisterodalOpen,setIsRegisterModalOpen] = useState<boolean>(false)
  const [cartProduct,setCartProduct] =  useState<Product | null>(null)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  // cart modal
  useCustomEventListener('Cart-modal', (product: Product) => {
    setIsCartModalOpen(true)
    setCartProduct(product)
  });

    //Open modal
    useCustomEventListener('OpenClose-Modal', (data:ModalData) => {

      setIsCartModalOpen(false)
      setIsLoginModalOpen(false)
      setIsLogoutModalOpen(false)
      setIsRegisterModalOpen(false)

      if(data.type === 'Login'){
        setIsLoginModalOpen(data.opts === 'Open'?true:false)
      }
      if(data.type === 'Logout'){
        setIsLogoutModalOpen(data.opts === 'Open'?true:false)
      }
      if(data.type === 'Register'){
        setIsRegisterModalOpen(data.opts === 'Open'?true:false)
   
      }
      
    });

    


    //Alert modal
    useCustomEventListener('Alert-modal', (data:{msg:string,type: NotiStyck}) => {
      enqueueSnackbar(data.msg,{
        variant:data.type,
        autoHideDuration:3000,
        anchorOrigin:{
          vertical:'top',
          horizontal:'center'
        }
      })
    });
 


  MPLogic.initMpAuthentication()

  return (
    <SnackbarProvider maxSnack={3}>
    <main className="flex  h-fit flex-col  z-0 gap-1 bg-cover bg-center" style={{backgroundImage: 'url("/images/background.jpg")'}}>
   {isCartModalOpen && <Modal isOpen={isCartModalOpen} setIsOpen={setIsCartModalOpen}><AddedToCart product={cartProduct as Product}/></Modal>}
   {isLoginModalOpen && <Modal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen}><LoginForm /></Modal>}
   {isLogoutModalOpen && <Modal isOpen={isLogoutModalOpen} setIsOpen={setIsLogoutModalOpen}><LogoutComponent /></Modal>}
   {isRegisterodalOpen && <Modal isOpen={isRegisterodalOpen} setIsOpen={setIsRegisterModalOpen}><RegisterForm /></Modal>}
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
  </SnackbarProvider>
  )
}
