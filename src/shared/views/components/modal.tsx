import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


interface ModalProps {
    children?:React.ReactNode | React.JSX.Element,
    isOpen:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Modal({children,isOpen,setIsOpen}:ModalProps) {

  return (
    <>
   {isOpen &&
   <div className='fixed w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'>
   <div className='fixed rounded top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/ z-10 w-1/3 h-fit backdrop-filter shadow-md shadow-amber-400'>
    <div className='flex flex-row justify-end bg-gradient-to-tl from-amber-400 to-orange-900 p-1' onClick={()=>setIsOpen(false)}><FontAwesomeIcon color={'#7F1D1D'} style={{cursor:'pointer'}} icon={faCircleXmark} /></div>
    <div className='bg-slate-100 bg-opacity-90 p-5'>
    {children}
    </div>
   </div>
   </div>}
   </>
  )
}