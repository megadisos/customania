'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { Product, ProductsFromCard } from "@/app/products/models/products"
import Button from "@/shared/views/components/button"
import Layout from "@/shared/views/components/layout"
import TitleHeader from "@/shared/views/components/titleHeader"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { CartLogic } from "../../logic/cartLogic"
import { CartContext } from "../contexts/cartContext"

interface CartTableProps {
  actions:boolean,
  payments:boolean,
  isSingleProduct?:boolean
}

export default function CartTable({actions,payments,isSingleProduct}:CartTableProps) {

const  {products,setProducts,setTotalInCart} = useContext(CartContext)
const [singleProduct,setSingleProduct] = useState<Product | null>(null)
const searchParams = useSearchParams()
 useEffect(()=>{
  if(isSingleProduct){
    const id = searchParams?.get('productId')  as string
    if(id) ProductsLogic.getProduct(id).then(resp=>{
      if(resp)  setSingleProduct(resp)
    })
  
  }
 },[])
 const totalSingleProduct = isSingleProduct ? searchParams?.get('ammount')  as string : '0'
 const quantitySingleProduct = isSingleProduct ? searchParams?.get('quantity')  as string : '0'
 const sizeSingleProduct = isSingleProduct ? searchParams?.get('size')  as string : 'm'
 const priceSingleProduct = isSingleProduct ? searchParams?.get('price')  as string : '0'
  const productsTotal = CartLogic.GetProductsFromCartNotAuthenticatedTotals()

const handleDelete = (index:number) =>{
  CartLogic.DeleteProductsFromCartNotAuthenticated(index)
  setProducts(CartLogic.GetProductsFromCartNotAuthenticated())
  setTotalInCart(CartLogic.getProductsFromCartCount())
}
const tdStyles = 'border-r border-black'
const headColor = 'bg-gradient-to-tl from-amber-400 to-orange-900'
const shadows = payments?'':'shadow-md shadow-amber-400'
  return (
    <>
    <div className={`w-full ${payments?'bg-white':'bg-slate-100 bg-opacity-80'}  ${shadows} rounded`}>
    <table className="table-fixed w-full">
    <thead className={`border-b-2 ${headColor}`}>
      <tr>
        <th>Id</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>Talla</th>
        <th>Cantidad</th>
        <th>Total</th>
        {actions && <th>Acciones</th>}
      </tr>
    </thead>
    <tbody>
      {products?.length === 0 && singleProduct === null &&
      <tr className="text-center h-16 font-bold">
        <td colSpan={7} >No tienes productos en el carrito!</td>
      </tr>
      }
      {products !== null && singleProduct === null && products && products.map((product,index)=>{
        const price = ProductsLogic.getProductPriceByDiscountByNot(product)
        const total = CartLogic.getProductTotals(price,product.cartQuantity)
       
        return (
          <tr className="text-center border-b border-black h-28" key={product._id}>
            <td className={tdStyles+' font-bold'}>{index + 1}</td>
            <td className={tdStyles}><div className="flex flex-row gap-5 justify-center relative cursor-pointer "> <div className="w-1/3 flex justify-end"><img src={product.imagesPaths.path1} className='w-12 h-12 border border-cyan-900 hover:h-32 hover:w-32 hover:absolute hover:top-[-50px] hover:left-5 shadow-md shadow-cyan-900'/></div><span className="w-2/3 flex mr-2 justify-center items-center"> {product.name}</span></div></td>
            <td className={tdStyles}>$ {price}</td>
            <td className={tdStyles}>{product.getterSize}</td>
            <td className={tdStyles}>{product.cartQuantity}</td>
            <td className={tdStyles}>$ {total}</td>
            {actions && <td><div className="cursor-pointer" onClick={()=>handleDelete(index)}><FontAwesomeIcon icon={faTrash} color={'#CD1818'} title='Eliminar'/></div></td>}
          </tr>
        )
      })}

      {singleProduct  !== null &&  
        <tr className="text-center border-b border-black h-28" key={singleProduct._id}>
        <td className={tdStyles+' font-bold'}>{1}</td>
        <td className={tdStyles}><div className="flex flex-row gap-5 justify-center relative cursor-pointer "> <div className="w-1/3 flex justify-end"><img src={singleProduct.imagesPaths.path1} className='w-12 h-12 border border-cyan-900 hover:h-32 hover:w-32 hover:absolute hover:top-[-50px] hover:left-5 shadow-md shadow-cyan-900'/></div><span className="w-2/3 flex mr-2 justify-center items-center"> {singleProduct.name}</span></div></td>
        <td className={tdStyles}>${priceSingleProduct}</td>
        <td className={tdStyles}>{sizeSingleProduct}</td>
        <td className={tdStyles}>{quantitySingleProduct }</td>
        <td className={tdStyles}>$ {totalSingleProduct}</td>
       
      </tr>
      }
      {products && products?.length >0 && <tr className="text-center h-16">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className={`font-bold  ${payments?'':'border-l border-r border-black'} `}>Total:</td>
        <td className={`${payments?'':'border-r border-black'} font-bold`}>$ {isSingleProduct?totalSingleProduct:productsTotal}</td>
       
      </tr>}
    </tbody>
  </table>
  </div>
  {products && products?.length >0 && actions && <Link href={{pathname:`/products/all/cart/payments`,query:{ammount:productsTotal}}}><div className="w-full mt-10"><Button name={"Pagar"} size={"25%"} position={"right"} type={"success"} height={'big'} ></Button></div></Link>}
  {products?.length === 0 && actions &&
     <div className="w-full mt-10"><Link href='/'><Button name={"Seguir comprando"} size={"25%"} position={"right"} type={"normal"}  height={'big'} ></Button></Link></div>
      }
  </>
  )
}
 