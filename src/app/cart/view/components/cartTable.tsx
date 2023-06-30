'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { ProductsFromCard } from "@/app/products/models/products"
import Layout from "@/shared/views/components/layout"
import TitleHeader from "@/shared/views/components/titleHeader"
import { useEffect, useState } from "react"
import { CartLogic } from "../../logic/cartLogic"

interface CartTableProps {

}

export default function CartTable() {
  useEffect(()=>{
      setProducts(CartLogic.GetProductsFromCartNotAuthenticated())
  },[])

 
  const [products,setProducts] =  useState<ProductsFromCard[] | null>(null)
  const productsTotal = CartLogic.GetProductsFromCartNotAuthenticatedTotals()
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
      </tr>
    </thead>
    <tbody>
      {products !== null && products && products.map((product,index)=>{
        const price = ProductsLogic.getProductPriceByDiscountByNot(product)
        const total = CartLogic.getProductTotals(price,product.cartQuantity)
       
        return (
          <tr className="text-center">
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>$ {price}</td>
            <td>{product.getterSize}</td>
            <td>{product.cartQuantity}</td>
            <td>$ {total}</td>
          </tr>
        )
      })}
      <tr className="text-center">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="font-bold">Total:</td>
        <td>$ {productsTotal}</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}
