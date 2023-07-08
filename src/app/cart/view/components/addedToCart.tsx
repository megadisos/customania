import { Product } from "@/app/products/models/products"
import { SharedLogic } from "@/shared/logic/sharedLogic"
import Button from "@/shared/views/components/button"
import Layout from "@/shared/views/components/layout"
import Link from "next/link"

interface AddedToCartProps {
    product:Product
}
export default function AddedToCart({product}:AddedToCartProps){
  return (
   <div className="flex flex-col justify-center items-center">
    {/* product Info */}
    <div className="flex flex-row mt-2 mb-5">
    <img src={product.imagepath} className='w-12 h-12 border border-cyan-900 shadow-md shadow-cyan-900'/> <span className="ml-2 font-bold text-xl mt-2"> {product.name} fue agregado/a a tu carrito!</span>
    </div>
{/* Botones */}
<div className="flex flex-col gap-2">
    <Link href='/cart'><Button name="Ir al carrito" position="center" size="full" type="normal"  padding={true}/></Link>
    <Link href='/'><Button name="Seguir comprando" position="center" size="full" type="success" padding={true} onClick={()=>SharedLogic.closeCartModal()} /></Link>
</div>
   </div>
  )
}
