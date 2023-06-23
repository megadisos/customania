"use client"
import { faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { MouseEventHandler } from "react";

interface ButtonProps {
    name:string,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    size: sizeType
    position:'right' | 'left',
    type:'normal' | 'success'
}
type sizeType = 'full' | '25%' | '50%' | '75%' 
type buttonType = 'normal' | 'success'
export default function Button({name,onClick,size,position,type}:ButtonProps){

    const generateSize = (size:sizeType)=>{
        switch(size){
            case 'full':
                return 'md:w-full'
            case '25%':
                return 'md:w-1/4'
            case '50%':
                return 'md:w-2/4'
            case '75%':
                return 'md:w-3/4'
        }
    }
    const generateColor = (buttonType:buttonType) =>{
        switch(buttonType){
            case 'normal':
                return 'bg-cyan-900'
            case 'success':
                return 'bg-green-800'
        }
    }
    const finalPosition = position === 'right'?'float-right':'float-left'
    const baseStyles = `rounded w-full ${generateColor(type)} ${generateSize(size)} h-1/6 ${finalPosition} text-slate-50  animate-jump-in hover:animate-jump hover:bg-red-900`
    return (
        <button onClick={onClick} className={baseStyles}>{name}</button>
        )
}