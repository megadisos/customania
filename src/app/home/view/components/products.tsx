'use client'
import { ProductsLogic } from "@/app/products/logic/productsLogic";
import { Product } from "@/app/products/models/products";
import ProductCard from "@/app/products/view/components/productCard";
import { ICONSTYLES } from "@/shared/views/components/carrousel";
import TitleHeader from "@/shared/views/components/titleHeader";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight, faGifts, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    useQuery,
  } from 'react-query'


const  homeSections = [{title:'Ofertas',arrayName:'products',productLimit:{minor:0,mayor:4},arrows:{left:false,right:true}},{title:'Lo mas reciente',arrayName:'products',productLimit:{minor:0,mayor:4},arrows:{left:false,right:true}},{title:'Lo mas destacado',arrayName:'products',productLimit:{minor:0,mayor:4},arrows:{left:false,right:true}}]
export default function Products(){
    const query = useQuery('products',ProductsLogic.getAllProducts)
    const products = query.data
    const [sections,setSections] = useState(homeSections)

    const handleArrowsButton = (position:'left'|'right',type:string) =>{ 
            const updatedSection = sections.map(section=>{
            if(section.title === type){
                if(position === 'right'){
                    return {...section,productLimit:{minor:5,mayor:10},arrows:{right:false,left:true}}
                }
                if(position === 'left'){
                    return {...section,productLimit:{minor:0,mayor:4},arrows:{right:true,left:false}}
                }
            }
            return section
        })

        setSections(updatedSection)
    }

    return (
        <div className="flex flex-col w-full">
            {sections.map(section=>{
                return (
                    <div className="relative flex flex-col h-full mb-5  w-full p-4">
         
                    <TitleHeader title={section.title} icon={faGifts}/>
                    <div className="flex flex-col md:flex-row w-full items-center gap-8  justify-center mt-2">
                        {eval(section.arrayName) && eval(section.arrayName).filter((pr: any,index: number)=>index>=section.productLimit.minor && index<=section.productLimit.mayor).map((product: Product)=>{
                            return  <ProductCard imagePath={product.imagepath} name={product.name} price={product.price} rating={product.rating}/>
                        })}
                       {section.arrows.right  && <div id="arrow-right" className={ICONSTYLES+ ' right-10'} onClick={()=>handleArrowsButton('right',section.title)}>
                    <FontAwesomeIcon icon={faArrowRight} size='2xl'/>
                    </div> } 
           
                    {section.arrows.left  && <div id="arrow-left" className={ICONSTYLES+' left-10'} onClick={()=>handleArrowsButton('left',section.title)}>
                    <FontAwesomeIcon icon={faArrowLeft} size='2xl'/>
                    </div> }
           
                    </div>
                
                    <hr className="mt-5"></hr>
                </div>
                )
            })}
                   

</div>

    )
}