import { faStar } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { RatingType } from "../../models/products"


interface ProductCardProps {
    imagePath: string,
    name:string,
    price:number,
    rating:RatingType
}

const renderStars = () =>{
    const components = []
    for(let i =0; i< 5;i++){
       
        components.push(<FontAwesomeIcon icon={faStar} />)
    }
    return components
   }
export default function ProductCard({imagePath,name,price,rating}:ProductCardProps) {
  return (
   <div className="flex flex-col gap-1 w-1/5 h-96 border-2 border-cyan-900 p-1 cursor-pointer">
    <img src={imagePath} className='h-3/4'/>
    <p>{name}</p>
    <p>$ {price}</p>
    <p>{renderStars()}</p>
   </div>
  )
}
