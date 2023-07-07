'use client'
import Layout from "@/shared/views/components/layout"
import ProductView from "../../view/components/productView";
import { usePathname,useSearchParams } from 'next/navigation'

export default function Product() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const id = searchParams?.get('productId')
  return (

   <Layout>
    <ProductView productId={id as string}/>
   </Layout>
  )
}
