
import { ProductsLogic } from "@/app/products/logic/productsLogic";
import { Sale } from "@/app/products/models/sales";
import { Items } from "@/mercado-pago/models/brick";
import Link from "next/link";
import { useEffect, useState } from "react";
import salesLogic from "../../logic/salesLogic";



interface SaleCardProps {
    sale:Sale
}

export default  function SaleCard({sale}:SaleCardProps) {
    const [items,setItems] = useState<Items[] | []>([])

useEffect(()=>{
    ProductsLogic.getProductsInfoFromSales(sale.items).then(resp=>{
        setItems(resp)
    })
},[])

  return (
 <div className="flex flex-col bg-white w-11/12 h-fit rounded cursor-pointer  mt-5" >
    {/* header */}
    <div className="flex flex-row bg-gradient-to-tl from-amber-400 to-orange-900 gap-10 p-2">
        <div className="w-1/3 flex flex-col">
            <span className="font-bold">Order Id:</span>
            <span>{sale.transactionId}</span>
        </div>
        <div className="w-1/3 flex flex-col">
        <span className="font-bold">Fecha de orden:</span>
            <span>{sale.creationdate?.split('T')[0]}</span>
        </div>
        <div className="w-1/3 flex flex-col">
        <span className="font-bold">Total:</span>
            <span>${sale.ammount.toString()}</span>
        </div>
        <div className="w-1/3 flex flex-col">
        <span className="font-bold">Estado:</span>
            <span>{salesLogic.getConvertedStatus(sale.delivery_status)}</span>
        </div>
    </div>
   {/* body */}
<div className="bg-white flex flex-col gap-5 p-1 border border-black ">
    {items && items.map((item,index)=>{
         const urlName = item.name && item.name.split(' ').join('-').toLowerCase()
        return(
            <>
            <Link href={{pathname:`/products/${item.type}/${urlName}`,query:{productId:item.id}}}>
                <div className="flex flex-row w-full justify-center items-center" >
           <div className="w-7 rounded flex items-start mr-2"><p className="font-bold  mr-2">{index +1}</p> </div>
           <div className="w-1/12" ><img src={item.imagePath} width={60} /></div>
           <div className="flex flex-col w-3/12">
           <p className="font-bold">{item.name}</p> 
           <p>{item.description}</p> 
           </div>
           <p className="w-1/6"><span className="font-bold">Cantidad:</span> {item.quantity}</p>
           <p className="w-1/6"><span className="font-bold ">Talla:</span> {item.size !== null ?item.size:'N/A'}</p>
           <p className="w-3/12"><span className="font-bold">Precio:</span> ${item.unit_price.toString()}</p>
           </div></Link>
           </>
        )
    })}
</div>
 </div>
  
  )
}
