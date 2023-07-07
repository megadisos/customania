
'use client'
import Pagination from "@/shared/views/components/pagination"
import TitleHeader from "@/shared/views/components/titleHeader"
import { useState } from "react"
import {
    useQuery,
  } from 'react-query'
import { ProductsLogic } from "../../logic/productsLogic"
import ProductCard from "./productCard"

interface CategoryProps {
    category:string
}
const PORDUCT_BY_PAGE =  8
export default function CategoryView({category}:CategoryProps) {
    const query = useQuery('AllProducts',ProductsLogic.getAllProducts)
    const products = query.data
    const elementsNumber = PORDUCT_BY_PAGE -1
    const [limits,setLimits] = useState({minor:0,mayor:elementsNumber})

    const handlePagination = (page:number) =>{ 
        const newMayor = (elementsNumber * page) + 1
        const newMenor = newMayor - elementsNumber
        setLimits({minor:newMenor,mayor:newMayor})
    }
  return (
    <>
    <TitleHeader title={category.toUpperCase()} />
    <div className="flex flex-row gap-10 flex-wrap mt-5">
        {products && products.filter(pr=>pr.type === category).filter((pr,index)=>index >= limits.minor  && index<=limits.mayor).map((product,index)=>{
        return(  
        <ProductCard product={product}/>
    )
    })}
    </div>
    {products && <Pagination elementsByPage={PORDUCT_BY_PAGE} elementsTotal={products?.length} handlePagination={handlePagination}/>} 
    </>
  )
}
