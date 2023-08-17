import { AuthLogic } from "@/app/authentication/logic/authenticationLogic";
import { ProductUpdateResponse } from "@/app/products/models/products";
import { Sale } from "@/app/products/models/sales";
import TitleHeader from "@/shared/views/components/titleHeader"
import { useEffect, useState } from "react";
import salesLogic from "../../logic/salesLogic";
import SaleCard from "./saleCard";




interface PurchasesProps {
 data: ProductUpdateResponse<Sale>
}


export default  function Purchases() {
  const [sales,setSales] = useState<Sale[] | null>(null)
  useEffect(()=>{
    const userId = AuthLogic.getLCUserId()
  salesLogic.getSaleByUser(userId).then(resp=>{
    setSales(resp.data as Sale[] | null)
  })
  },[])
  

  return (
 <div className="w-full  p-1 ">
   
   <TitleHeader  title="Mis Compras" />
   <div className="flex flex-col w-full items-center ">
    {sales && sales.length >0 && sales?.map(sale=>{
      return <SaleCard key={sale.transactionId} sale={sale} />
    })}
    {sales && sales.length === 0 && <span className="font-bold text-2xl mt-2">
      No tiene compras aun!
      </span>}
   </div>
  
 </div>
  
  )
}
