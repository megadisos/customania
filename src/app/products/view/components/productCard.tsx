import { CartLogic } from "@/app/cart/logic/cartLogic"
import Button from "@/shared/views/components/button"
import { faStar } from "@fortawesome/free-regular-svg-icons"

import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProductsLogic } from "../../logic/productsLogic"
import { Product, RatingType, SectionType } from "../../models/products"


interface ProductCardProps {
    product:Product,
    section?:SectionType,
}

const renderStars = (rating:RatingType) =>{
    const convertedRating = parseInt(rating)
    const components = []
    for(let i =0; i< 5;i++){
       
        components.push(<FontAwesomeIcon icon={i<convertedRating?solidStar:faStar} color={i<convertedRating ?'#7F1D1D':'black'} />)
    }
    return components
   }
export default function ProductCard({product,section}:ProductCardProps) {
    const discount = section === 'Offers'?ProductsLogic.getProductDiscount(product.price,product.offer):product.price
  return (
   <div className="relative flex flex-col gap-1 w-3/5  md:w-1/5 h-96 bg-gradient-to-tl from-red-900 via-amber-400 to-cyan-900 p-1 shadow-lg shadow-cyan-900  cursor-pointer" >
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
    <img src={product.imagepath} className='h-3/5 hover:absolute hover:h-96 hover:w-72 hover:translate-x-[-10px] hover:border-2 hover:border-cyan-900 hover:translate-y-[-5px] hover:z-10'/>
    <p className="font-bold">{product.name}</p>
    <p>{section === 'Offers'&& <span className="line-through">${product.price}</span>} ${discount}</p>
    <p title={`${product.rating}/5 estrellas`}>{renderStars(product.rating)}</p>
    <Button name="Agregar al carrito" position="right" size="full" type="normal" onClick={()=>CartLogic.AddToCart(product,null,1)}/>
    <Button name="Comprar" position="right" size="full" type="success"/>
   </div> 
  )
}
