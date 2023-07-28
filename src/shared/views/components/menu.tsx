"use client"
import { AuthLogic } from "@/app/authentication/logic/authenticationLogic";
import { CartContext } from "@/app/cart/view/contexts/cartContext";
import { SharedLogic } from "@/shared/logic/sharedLogic";
import { faCartShopping, faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useContext } from "react";
interface MenuProps {
    direction:'row' | 'column'
}

export default function Menu({direction}:MenuProps){
    const  {totalInCart} = useContext(CartContext)
    const pathname = usePathname()
    const isAuthenticated =  AuthLogic.isAuthenticated()
    const menuSy = 'hover:animate-wiggle hover:text-xl'
    const menuDirection = direction ==='row'?'flex-row':'flex-col'
    return (
                <ul className={`flex ${menuDirection} gap-4 mr-5 font-medium`}>
                    <li className={`${menuSy} ${pathname==="/"?"border-b-2 border-cyan-900":""}`}><Link href='/'>Home </Link></li>
                    <li className={`${menuSy} ${pathname==="/products"?"border-b-2 border-cyan-900":""}`}><Link href='/products'>Productos</Link></li>
                    <li className={`${menuSy} ${pathname==="/about"?"border-b-2 border-cyan-900":""}`}><Link href='/about'>Acerca de</Link></li>
                    <li className="hover:text-xl"><Link href='/cart'><div className="relative"><FontAwesomeIcon icon={faCartShopping} size='lg' title="Carrito de compras" style={{'cursor':'pointer'}} /><div className="absolute top-[-10px] right-[-10px] rounded-full w-5 h-5 text-red-900  bg-amber-400 flex justify-center items-center text-sm font-bold">{totalInCart}</div></div></Link></li>
                    <li className="hover:text-xl"><FontAwesomeIcon icon={isAuthenticated?faRightFromBracket:faCircleUser} size='lg' title={isAuthenticated?"Cerrar sesion":"Iniciar sesion"} style={{'cursor':'pointer'}} onClick={()=>SharedLogic.showLoginModal()}/></li>
                </ul>
        )
}