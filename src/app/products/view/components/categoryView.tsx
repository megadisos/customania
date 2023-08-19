
'use client'
import Pagination from "@/shared/views/components/pagination"
import TitleHeader from "@/shared/views/components/titleHeader"
import { useEffect, useState } from "react"
import {
    useQuery,
  } from 'react-query'
import { ProductsLogic } from "../../logic/productsLogic"
import { Product, ProductsDataResponse } from "../../models/products"
import ProductCard from "./productCard"

interface CategoryProps {
    category:string
}
const PORDUCT_BY_PAGE =  8
export default function CategoryView({category}:CategoryProps) {
const [products,setProducts] = useState<Product[]|null>(null)
const [pages,setPages] = useState<number|null>(null)
  useEffect(()=>{
    ProductsLogic.getAllProducts('1',category).then(resp=>{
      setProducts(resp.data)
      setPages(resp.metadata.totalPages)
    })
  },[])


  
    const elementsNumber = PORDUCT_BY_PAGE -1
    const [limits,setLimits] = useState({minor:0,mayor:elementsNumber})

    const handlePagination = async (page:number) =>{ 
        const changePage = await ProductsLogic.getAllProducts(page.toString(),category)
       setProducts(changePage.data)
    }
  return (
    <>
    <TitleHeader title={category.toUpperCase()} />
    <div className="flex flex-row gap-10 flex-wrap mt-5">
        {products && products.length >0 && products.map((product,index)=>{
        return(  
        <ProductCard product={product} size={'little'}/>
    )
    })}
    </div>
    {products && products.length >0 && <Pagination  elementsTotal={pages as number} handlePagination={handlePagination}/>} 
    </>
  )
}
  