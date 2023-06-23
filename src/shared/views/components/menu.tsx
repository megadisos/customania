"use client"
import { faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from 'next/navigation'
interface MenuProps {
    direction:'row' | 'column'
}

export default function Menu({direction}:MenuProps){
    const pathname = usePathname()
    const menuSy = 'hover:animate-wiggle hover:text-xl'
    const menuDirection = direction ==='row'?'flex-row':'flex-col'
    return (
                <ul className={`flex ${menuDirection} gap-4 mr-5 font-medium`}>
                    <li className={`${menuSy} ${pathname==="/"?"border-b-2 border-cyan-900":""}`}><Link href='/'>Home </Link></li>
                    <li className={`${menuSy} ${pathname==="/products"?"border-b-2 border-cyan-900":""}`}><Link href='/products'>Productos</Link></li>
                    <li className={`${menuSy} ${pathname==="/about"?"border-b-2 border-cyan-900":""}`}><Link href='/about'>Acerca de</Link></li>
                    <li className="hover:text-xl"><FontAwesomeIcon icon={faCircleUser} size='lg' title="Iniciar sesion" style={{'cursor':'pointer'}}/></li>
                    <li className="hover:text-xl"><FontAwesomeIcon icon={faCartShopping} size='lg' title="Carrito de compras" style={{'cursor':'pointer'}} /></li>
                </ul>
                )
}