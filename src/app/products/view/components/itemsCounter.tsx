import Button from "@/shared/views/components/button"
import Layout from "@/shared/views/components/layout"
import { Dispatch, SetStateAction } from "react"

interface ItemsCounterProps {
    max:number,
    setAmmountToCart: Dispatch<SetStateAction<number>>,
    ammountToCart:number
}
export default function ItemsCounter({max,setAmmountToCart,ammountToCart}:ItemsCounterProps) {
  return (
 <>
 <Button name="-" position="left" size="25%" type="normal" onClick={()=>setAmmountToCart(ammountToCart -1)} disabled={ammountToCart <= 1}/>
    <span className="mr-2 ml-2 font-bold">{ammountToCart}</span>
<Button name="+" position="left" size="25%" type="normal" onClick={()=>setAmmountToCart(ammountToCart + 1)} disabled={ammountToCart === max}/> 

 </>
  )
}
