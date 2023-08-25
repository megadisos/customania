import { Tabs } from "@/shared/models/shared"
import TabsComponent from "@/shared/views/components/tabs"
import TitleHeader from "@/shared/views/components/titleHeader"
import { useState } from "react"
import ProductsAdminView from "./productsAdminView"


interface AdminProps {

}

const adminTabs:Tabs[] = [
  {id:'1',name:'Productos',enabled:true},
  {id:'2',name:'ventas',enabled:false},
  {id:'3',name:'Usuarios',enabled:false}
  ]
export default function Admin({}:AdminProps) {


const [tabs,setTabs] = useState<Tabs[]>(adminTabs)
  return (
 <div className="flex flex-col ">
   
   <TitleHeader  title="Admin"/>
 <TabsComponent tabs={tabs} setTabs={setTabs}/>
  {tabs[0].enabled && <ProductsAdminView />}
 </div>
  
  )
}
