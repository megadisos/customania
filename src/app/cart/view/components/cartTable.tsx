'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { ProductsFromCard } from "@/app/products/models/products"
import Layout from "@/shared/views/components/layout"
import TitleHeader from "@/shared/views/components/titleHeader"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
  return (
    <div className="w-full bg-white">
    <table className="table-fixed w-full">
    <thead>
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
      <tr className="text-center">
        <td colSpan={7} >No tienes productos en el carrito!</td>
      </tr>
      }
      {products !== null && products && products.map((product,index)=>{
        const price = ProductsLogic.getProductPriceByDiscountByNot(product)
        const total = CartLogic.getProductTotals(price,product.cartQuantity)
       
        return (
          <tr className="text-center" key={product.id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>$ {price}</td>
            <td>{product.getterSize}</td>
            <td>{product.cartQuantity}</td>
            <td>$ {total}</td>
            <td><div className="cursor-pointer" onClick={()=>handleDelete(index)}><FontAwesomeIcon icon={faTrash} color={'#CD1818'} title='Eliminar'/></div></td>
          </tr>
        )
      })}
      {products && products?.length >0 && <tr className="text-center">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="font-bold">Total:</td>
        <td>$ {productsTotal}</td>
       
      </tr>}
    </tbody>
  </table>
  </div>
  )
}
