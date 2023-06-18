"use client"
import { faCartShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const LOGO_PATH='/images/logo/customLogo.png'
export default function Header(){
    const pathname = usePathname()
    const menuSy = 'hover:animate-wiggle hover:text-xl'
    return (
        <div className="flex flex-row  h-1/6 bg-gradient-to-l from-red-900 via-amber-400 to-cyan-900 ">
            <div className="flex flex-row w-3/6 items-center">
            {/* <h1 className="flex ml-3 items-center w-1/2 h-full text-5xl text-amber-400">CUSTOMANIA</h1> */}
            </div>
            <div className="flex flex-row w-3/6 justify-end items-center animate-fade-down">
                <ul className="flex flex-row gap-4 mr-5 font-medium">
                    <li className={`${menuSy} ${pathname==="/"?"border-b-2 border-cyan-900":""}`}><Link href='/'>Home </Link></li>
                    <li className={`${menuSy} ${pathname==="/products"?"border-b-2 border-cyan-900":""}`}><Link href='/products'>Productos</Link></li>
                    <li className={`${menuSy} ${pathname==="/about"?"border-b-2 border-cyan-900":""}`}><Link href='/about'>Acerca de</Link></li>
                    <li className="hover:text-xl"><FontAwesomeIcon icon={faCircleUser} size='lg' title="Iniciar sesion" style={{'cursor':'pointer'}}/></li>
                    <li className="hover:text-xl"><FontAwesomeIcon icon={faCartShopping} size='lg' title="Carrito de compras" style={{'cursor':'pointer'}} /></li>
                </ul>
                </div>
        </div>
    )
}