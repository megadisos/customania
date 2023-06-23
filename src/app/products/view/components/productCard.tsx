import Button from "@/shared/views/components/button"
import { faStar } from "@fortawesome/free-regular-svg-icons"

import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RatingType } from "../../models/products"


interface ProductCardProps {
    imagePath: string,
    name:string,
    price:number,
    rating:RatingType
}

const renderStars = (rating:RatingType) =>{
    const convertedRating = parseInt(rating)
    const components = []
    for(let i =0; i< 5;i++){
       
        components.push(<FontAwesomeIcon icon={i<convertedRating?solidStar:faStar} color={i<convertedRating ?'#7F1D1D':'black'} />)
    }
    return components
   }
export default function ProductCard({imagePath,name,price,rating}:ProductCardProps) {




  return (
   <div className="flex flex-col gap-1 w-3/5  md:w-1/5 h-96 bg-gradient-to-tl from-red-900 via-amber-400 to-cyan-900 p-1 shadow-lg shadow-cyan-900  cursor-pointer" >
    <img src={imagePath} className='h-3/5 hover:absolute hover:h-96 hover:w-72 hover:translate-x-[-10px] hover:border-2 hover:border-cyan-900 hover:translate-y-[-5px] hover:z-10'/>
    <p className="font-bold">{name}</p>
    <p>$ {price}</p>
    <p title={`${rating}/5 estrellas`}>{renderStars(rating)}</p>
    <Button name="Agregar al carrito" position="right" size="full" type="normal"/>
    <Button name="Comprar" position="right" size="full" type="success"/>
   </div>
  )
}
