import Layout from "@/shared/views/components/layout"
import TitleHeader from "@/shared/views/components/titleHeader"
import CartTable from "./cartTable"

interface CartBlockProps {
}

export default function CartBlock() {
  return (
   <div className="flex flex-col w-full h-screen  p-2">
    <div className="mb-5 flex flex-row justify-center"><TitleHeader title="Carrito de compras" /></div>
   <CartTable actions={true} payments={false}/>
   </div>
  )
}
