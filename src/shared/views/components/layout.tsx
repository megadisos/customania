import Header from '@/shared/views/components/header'
import Image from 'next/image'
import React from 'react'
import Carrousel from './carrousel'
interface LayoutProps {
    children?:React.ReactNode
    hasCarrousel?:boolean
}
export default function Layout({children,hasCarrousel}:LayoutProps) {
  return (
    <main className="flex  h-screen flex-col  gap-1 ">
    <div className='h-full  rounded shadow-slate-800'>
    <div className='flex flex-col h-2/4' >
    <Header />
   {hasCarrousel && <Carrousel />} 
    </div>
    <div className='flex  justify-center'>
    <div className='flex flex-row h-fit  mt-5 bg-slate-100 bg-opacity-25 w-3/4 '>
        {children}
    </div>
    </div>
    </div>
  </main>
  )
}
