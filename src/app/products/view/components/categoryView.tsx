
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

export default function CategoryView({category}:CategoryProps) {
    const query = useQuery('AllProducts',ProductsLogic.getAllProducts)
    const products = query.data
    const [limits,setLimits] = useState({minor:0,mayor:7})

    const handlePagination = (page:number) =>{
        const newMayor = (limits.mayor * page) + 1
        const newMenor = newMayor - limits.mayor
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
    {products && <Pagination elementsByPage={8} elementsTotal={products?.length} handlePagination={handlePagination}/>} 
    </>
  )
}
