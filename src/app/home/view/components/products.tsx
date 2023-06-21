'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic";
import ProductCard from "@/app/products/view/components/productCard";
import { ICONSTYLES } from "@/shared/views/components/carrousel";
import TitleHeader from "@/shared/views/components/titleHeader";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'


export default function Products(){

    const queryClient =  useQueryClient()
    const query = useQuery('products',ProductsLogic.getAllProducts)
    const products = query.data
    const [viewLimit,setViewLimit] = useState({minor:0,mayor:4})
    const [showLeftArrow,setShowLeftArrow] = useState(false)
    const [showRightArrow,setShowRightArrow] = useState(true)
    const handleArrowsButton = (position:'left'|'right') =>{ 

        if(position === 'right'){
            setViewLimit({minor:5,mayor:10})
            setShowRightArrow(false)
            setShowLeftArrow(true)
        }
        if(position === 'left'){
            setViewLimit({minor:0,mayor:4})
            setShowLeftArrow(false)
            setShowRightArrow(true)
        } 
    }
    console.log(query.data)
    return (
        <div className="relative flex flex-col h-full   w-full p-4">
            <TitleHeader title={'Nuevo'}/>
            <div className="flex flex-row w-full gap-8 justify-center mt-2">
                {products && products.filter((pr,index)=>index>=viewLimit.minor && index<=viewLimit.mayor).map(product=>{
                    return  <ProductCard imagePath={product.imagepath} name={product.name} price={product.price} rating={product.rating}/>
                })}
               {showRightArrow && <div id="arrow-right" className={ICONSTYLES+ ' right-10'} onClick={()=>handleArrowsButton('right')}>
            <FontAwesomeIcon icon={faArrowRight} size='2xl'/>
            </div> } 

            {showLeftArrow && <div id="arrow-left" className={ICONSTYLES+' left-10'} onClick={()=>handleArrowsButton('left')}>
            <FontAwesomeIcon icon={faArrowLeft} size='2xl'/>
            </div> }

            </div>
            
           
        </div>
    )
}