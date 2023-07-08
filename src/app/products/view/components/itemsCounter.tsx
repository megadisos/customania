import Button from "@/shared/views/components/button"
import Layout from "@/shared/views/components/layout"
import { Dispatch, SetStateAction } from "react"

interface ItemsCounterProps {
    max:number,
    setAmmountToCart: Dispatch<SetStateAction<number>>,
    ammountToCart:number,
    color?:string
}
export default function ItemsCounter({max,setAmmountToCart,ammountToCart,color}:ItemsCounterProps) {
  const textColor =  color ? 'text-'+color:''
  return (
 <>
 {ammountToCart > 1 && <Button name="-" position="left" size="25%" type="normal" onClick={()=>setAmmountToCart(ammountToCart -1)} disabled={ammountToCart <= 1}/>}
    <span className={`mr-2 ml-2 font-bold ${textColor}`}>{ammountToCart}/{max}</span>
{ammountToCart < max && <Button name="+" position="left" size="25%" type="normal" onClick={()=>setAmmountToCart(ammountToCart + 1)} disabled={ammountToCart === max}/> }

 </>
  )
}
