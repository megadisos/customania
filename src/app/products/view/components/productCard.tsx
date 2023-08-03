'use client'

import { CartLogic } from "@/app/cart/logic/cartLogic"
import { CartContext } from "@/app/cart/view/contexts/cartContext"
import { SharedLogic } from "@/shared/logic/sharedLogic"
import Button from "@/shared/views/components/button"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { SetStateAction, useContext, useEffect, useState } from "react"
import { ProductsLogic } from "../../logic/productsLogic"
import { Product, RatingType, SectionType, SizeType } from "../../models/products"
import ItemsCounter from "./itemsCounter"
import ProductDetails from "./productDetails"
interface ProductCardProps {
    product:Product,
    section?:SectionType,
    size?:'little' | 'big'
}

const renderStars = (rating:RatingType,color:string) =>{
    const convertedRating = parseInt(rating)
    const components = []
    const borderColor = color === '#7F1D1D' ?'black':'white'
    for(let i =0; i< 5;i++){
       
        components.push(<FontAwesomeIcon icon={i<convertedRating?solidStar:faStar} color={i<convertedRating ?color:borderColor} />)
    }
    return components
   }


export default function ProductCard({product,section,size}:ProductCardProps) { 
  
    const [currentSize,setCurrentSize] =  useState<SizeType>('m')
    const [currentPrice,setCurrentPrice] = useState(product.price)
    const [currentAvailable,setCurrentAvailable] = useState<number>(1)
    const [ammountToCart,setAmmountToCart] =  useState<number>(1)
    const  {setTotalInCart} = useContext(CartContext)
    useEffect(()=>{
        if(product.sizes !== null){
            const sizeIndex = product.sizes.findIndex(size=>size.size === currentSize)
            const price = product.sizes[sizeIndex].price
            const available = product.sizes[sizeIndex].available
            setCurrentAvailable(available)
            setCurrentPrice(price)
        }
       
    },[currentSize])

   const urlName = product.name && product.name.split(' ').join('-').toLowerCase()
  if(size && size === 'little')  return (
    <>
    <div className="relative flex flex-col gap-1 w-3/5  md:w-1/5 h-96 bg-gradient-to-tl from-red-900 via-amber-400 to-cyan-900 p-1 shadow-lg shadow-cyan-900  cursor-pointer" >
     <Link href={{pathname:`/products/${product.type}/${urlName}`,query:{productId:product._id}}}>
    {section === 'Offers' && <div className="absolute  rounded top-[-10px]  left-2 w-fit p-2 bg-amber-400 bg-opacity-90 text-red-900 animate-bounce">
         <span className="text-stroke-black text-2xl font-black">{product.offer}%</span>
     </div>} 
 
     {section === 'outstanding' &&(<> <div className="absolute  rounded bottom-40 mb-1 right-5 w-fit p-2 text-red-900 z-10">
         <span className="text-stroke-black text-md font-black ">{product.rating}</span>
     </div>
     
     <div className="absolute  rounded bottom-40 right-2 w-fit p-2 text-red-900 ">
     <FontAwesomeIcon icon={solidStar}  size={'2xl'}  color={'#EEB226'}/>
 </div>
 </>
     )}   
     <img src={product.imagesPaths.path1} className='h-52 w-full hover:absolute hover:h-96 hover:w-72 hover:translate-x-[-10px] hover:border-2 hover:border-cyan-900 hover:translate-y-[-5px] hover:z-10'/>
     
     <p className="font-bold">{product.name}</p>
     <p>{section === 'Offers'?<> <span className="line-through">${currentPrice}</span> <span>${ProductsLogic.getProductDiscount(currentPrice,product.offer)}</span></>: <span>${currentPrice}</span> } </p>
     </Link>  
     <p>{product.sizes !== null && <><span className="font-bold">Size:</span> <select onChange={(e)=>{setCurrentSize((e.target.value as SizeType)); setAmmountToCart(1)}} value={currentSize}>
                     {product.sizes.filter(size=>size.available > 0).map(size=>{
                         return (
                             <option>{size.size}</option>
                         )
                     })}
            </select></>}</p>  
             
     <div className="flex flex-row"><p className=" w-2/4" title={`${product.rating}/5 estrellas`}>{renderStars(product.rating,'#7F1D1D')}</p><span className="w-2/4 flex flex-row justify-end"><ItemsCounter ammountToCart={ammountToCart} setAmmountToCart={setAmmountToCart} max={currentAvailable}/></span></div>
     <Button name="Agregar al carrito" position="right" size="full" type="normal" onClick={()=>{
        setTotalInCart(CartLogic.AddToCart(product,product.sizes !== null?currentSize:null,ammountToCart))
        SharedLogic.showCartModal(product)
    }}/>
     <Link href={{pathname:`/products/${product.type}/${urlName}/payments`,query:{productId:product._id,name:product.name,ammount:section === 'Offers'?ProductsLogic.getProductDiscount(currentPrice,product.offer):currentPrice,quantity:ammountToCart,size:product.sizes !==null?currentSize:null}}}><Button name="Comprar" position="right" size="full" type="success"/></Link>
    </div> 
    </>
   )

   return (
    <ProductDetails 
        product={product} 
        setCurrentPrice={setCurrentPrice} 
        currentPrice={currentPrice} 
        setAmmountToCart={setAmmountToCart} 
        ammountToCart={ammountToCart} 
        setCurrentSize={setCurrentSize} 
        currentSize={currentSize} 
        renderStars={renderStars} 
        currentAvailable={currentAvailable} 
        urlName={urlName} 
    />
   )
}
