import { CartLogic } from "@/app/cart/logic/cartLogic";
import { CartContext } from "@/app/cart/view/contexts/cartContext";
import { SharedLogic } from "@/shared/logic/sharedLogic";
import Button from "@/shared/views/components/button";
import Layout from "@/shared/views/components/layout"
import Link from "next/link";
import { Dispatch, SetStateAction, useContext } from "react";
import { ProductsLogic } from "../../logic/productsLogic";
import { Product, RatingType, SectionType, SizeType } from "../../models/products"
import ItemsCounter from "./itemsCounter";

interface ProductDetailsProps {
    product:Product,
    section?:SectionType,
    setCurrentPrice: Dispatch<SetStateAction<number>>,
    currentPrice: number,
    setAmmountToCart: Dispatch<SetStateAction<number>>,
    ammountToCart: number,
    setCurrentSize: Dispatch<SetStateAction<SizeType>>,
    currentSize: SizeType,
    renderStars: (rating: RatingType, color: string) => JSX.Element[],
    currentAvailable: number,
    urlName: string
}
export default function ProductDetails({product,currentAvailable,urlName,renderStars,currentSize, section,setAmmountToCart,setCurrentPrice,setCurrentSize,ammountToCart,currentPrice}:ProductDetailsProps) {
   const  {setTotalInCart} = useContext(CartContext)
   const renderImages = () =>{
    for(let image in product.imagesPaths){
      
    }
   }
    return (
    <div className="flex flex-col  gap-1 w-4/6 h-screen  self-center p-5  cursor-pointer" >
    {product && 
    <>
  <h1 className='text-white self-center mt-4 mb-5 text-5xl bg-black bg-opacity-50 font-bold'>{product.name}</h1>
  <div className='flex flex-row mt-5'>
    <div className="flex flex-col border-2 ">

    </div>
    {/* imagen */}
    <div className='relative flex flex-col items-center w-2/4'>
    {section === 'Offers' && <div className="absolute  rounded top-[-10px]  left-20 w-fit p-2 bg-amber-400 bg-opacity-90 text-red-900 animate-bounce">
         <span className="text-stroke-black text-2xl font-black">{product.offer}%</span>
     </div>} 
    <img src={product.imagesPaths.path1} className='h-52 w-80 h-auto  mt-5 border-2 border-gradient-to-tl from-red-900 via-amber-400 to-cyan-900'/>
    </div>
    {/* detalles */}
    <div className='relative flex flex-col w-2/4 gap-2 bg-black bg-opacity-40 p-5'>
    <h1 className='text-white self-center mt-4 mb-2 text-3xl font-bold'>Descripcion</h1>
    <p className='text-white self-center  mb-2 text-xl'>{product.description}</p>
    <p className="text-white text-3xl mb-2 mt-5">{section === 'Offers'?<> <span className="line-through">${currentPrice}</span> <span >${ProductsLogic.getProductDiscount(currentPrice,product.offer)}</span></>: <span >${currentPrice}</span> } </p>
     <p className="text-xl mb-5 mt-5">{product.sizes !== null && <><span className="font-bold text-white">Size:</span> <select onChange={(e)=>{setCurrentSize((e.target.value as SizeType)); setAmmountToCart(1)}} value={currentSize}>
                     {product.sizes.filter(size=>size.available > 0).map(size=>{
                         return (
                             <option >{size.size}</option>
                         )
                     })}
            </select></>}</p>     
     <div className="flex flex-row mt-5 "><p className=" w-2/4" title={`${product.rating}/5 estrellas`}>{renderStars(product.rating,'#E5A223')}</p><span className="w-2/4 flex flex-row justify-end"><ItemsCounter ammountToCart={ammountToCart} setAmmountToCart={setAmmountToCart} max={currentAvailable} color='white'/></span></div>
     <div className="flex flex-col absolute bottom-12  w-full items-center gap-2 ">
     <div className="w-4/5">
     <Button name="Agregar al carrito" position="right" size="full" type="normal" height="big" onClick={()=>{
        setTotalInCart(CartLogic.AddToCart(product,product.sizes !== null?currentSize:null,ammountToCart))
        SharedLogic.showCartModal(product)
     }}/>
     </div>
     <div className=" w-4/5">
     <Link href={{pathname:`/products/${product.type}/${urlName}/payments`,query:{productId:product._id,name:product.name,ammount:section === 'Offers'?ProductsLogic.getProductDiscount(currentPrice,product.offer):currentPrice,quantity:ammountToCart,size:product.sizes !==null?currentSize:null}}}><Button name="Comprar"  position="right" size="full" type="success" height="big"/></Link>
     </div>
     </div>
    </div> 
  </div>
  </>
    }
    </div>
  )
}
