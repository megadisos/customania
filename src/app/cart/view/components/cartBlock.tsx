import Layout from "@/shared/views/components/layout"
import TitleHeader from "@/shared/views/components/titleHeader"
import CartTable from "./cartTable"

interface CartBlockProps {
}

export default function CartBlock() {
  return (
   <div className="flex flex-col w-full h-fit  justify-center p-2">
    <div className="mb-5 flex flex-row justify-center"><TitleHeader title="Cart" /></div>
    <hr className="border-1 border-slate-200 mb-4"></hr>
   <CartTable />
   </div>
  )
}
