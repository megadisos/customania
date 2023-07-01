'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { ProductsFromCard } from "@/app/products/models/products"
import Button from "@/shared/views/components/button"
import Layout from "@/shared/views/components/layout"
import TitleHeader from "@/shared/views/components/titleHeader"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { CartLogic } from "../../logic/cartLogic"
import { CartContext } from "../contexts/cartContext"

interface CartTableProps {

}

export default function CartTable() {

const  {products,setProducts,setTotalInCart} = useContext(CartContext)
 
  const productsTotal = CartLogic.GetProductsFromCartNotAuthenticatedTotals()

const handleDelete = (index:number) =>{
  CartLogic.DeleteProductsFromCartNotAuthenticated(index)
  setProducts(CartLogic.GetProductsFromCartNotAuthenticated())
  setTotalInCart(CartLogic.getProductsFromCartCount())
}
const tdStyles = 'border-r border-black'
  return (
    <>
    <div className="w-full bg-slate-100 bg-opacity-80 shadow-md shadow-amber-400 rounded">
    <table className="table-fixed w-full">
    <thead className="border-b-2 bg-gradient-to-tl from-amber-400 to-orange-900">
      <tr>
        <th>Id</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>Talla</th>
        <th>Cantidad</th>
        <th>Total</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {products?.length === 0 && 
      <tr className="text-center h-16 font-bold">
        <td colSpan={7} >No tienes productos en el carrito!</td>
      </tr>
      }
      {products !== null && products && products.map((product,index)=>{
        const price = ProductsLogic.getProductPriceByDiscountByNot(product)
        const total = CartLogic.getProductTotals(price,product.cartQuantity)
       
        return (
          <tr className="text-center border-b border-black h-28" key={product.id}>
            <td className={tdStyles+' font-bold'}>{index + 1}</td>
            <td className={tdStyles}><div className="flex flex-row gap-5 justify-center relative cursor-pointer "> <div className="w-1/3 flex justify-end"><img src={product.imagepath} className='w-12 h-12 border border-cyan-900 hover:h-32 hover:w-32 hover:absolute hover:top-[-50px] hover:left-5 shadow-md shadow-cyan-900'/></div><span className="w-2/3 flex mr-2 justify-center items-center"> {product.name}</span></div></td>
            <td className={tdStyles}>$ {price}</td>
            <td className={tdStyles}>{product.getterSize}</td>
            <td className={tdStyles}>{product.cartQuantity}</td>
            <td className={tdStyles}>$ {total}</td>
            <td><div className="cursor-pointer" onClick={()=>handleDelete(index)}><FontAwesomeIcon icon={faTrash} color={'#CD1818'} title='Eliminar'/></div></td>
          </tr>
        )
      })}
      {products && products?.length >0 && <tr className="text-center h-16">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="font-bold  border-l border-r border-black">Total:</td>
        <td className="border-r border-black font-bold">$ {productsTotal}</td>
       
      </tr>}
    </tbody>
  </table>
  </div>
  {products && products?.length >0 && <div className="w-full mt-10"><Button name={"Pagar"} size={"25%"} position={"right"} type={"success"} height={'big'} ></Button></div>}
  {products?.length === 0 && 
     <div className="w-full mt-10"><Link href='/'><Button name={"Seguir comprando"} size={"25%"} position={"right"} type={"normal"}  height={'big'} ></Button></Link></div>
      }
  </>
  )
}
 