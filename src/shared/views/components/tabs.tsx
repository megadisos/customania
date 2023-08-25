import TitleHeader from "@/shared/views/components/titleHeader"
import { Tabs } from "@/shared/models/shared"
import { Dispatch, SetStateAction } from "react"

interface TabsProps {
    tabs: Tabs[],
   setTabs: Dispatch<SetStateAction<Tabs[]>>
}


export default function TabsComponent({tabs,setTabs}:TabsProps) {

    const getColor= (tab:Tabs) =>{
       if(tab.enabled) return 'bg-cyan-900'
       return 'hover:bg-cyan-900 bg-red-900'
    } 

    const onClickTab = (tabId:string) =>{
        const updatedTabs = tabs.map(tab=>{
            if(tab.id === tabId) return {...tab,enabled:true}
            return {...tab,enabled:false}
        })
        setTabs(updatedTabs)
    }
    console.log(tabs)
  return (
   
   <div className="flex flex-row gap-3 justify-center">
    {tabs && tabs.map(tab=>{
        return <div className={`p-1 mt-2 text-white rounded cursor-pointer ${getColor(tab)}`} onClick={()=>onClickTab(tab.id)}>{tab.name}</div>
    })}
   </div>
  
  
  )
}