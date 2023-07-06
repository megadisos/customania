'use client'
import Layout from "@/shared/views/components/layout"
import CategoryView from "../view/components/categoryView"


export default function Category({ params }: { params: { category: string } }) {

  return (

   <Layout>
        <CategoryView category={params.category}/>
   </Layout>
  )
}
