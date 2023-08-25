import { Tabs } from "@/shared/models/shared"
import TabsComponent from "@/shared/views/components/tabs"
import TitleHeader from "@/shared/views/components/titleHeader"
import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


interface ProductsAdminViewProps {

}


export default function ProductsAdminView({}:ProductsAdminViewProps) {



const crudTypesStyles = "cursor-pointer  bg-gradient-to-tl from-amber-400 to-orange-90  w-40 h-40 flex flex-col gap-2 justify-center items-center text-xl text-center"
  return (
 <div className="flex flex-col gap-2">
    
     <div className="flex flex-row gap-2 mt-5">
   <div className={crudTypesStyles}>
   <FontAwesomeIcon icon={faPlus} />
    <span>Crear producto</span>
    </div>
   <div className={crudTypesStyles}> 
   <FontAwesomeIcon icon={faPenToSquare} />
   <span>Editar producto</span></div>
   <div className={crudTypesStyles}> 
   <FontAwesomeIcon icon={faTrash} />
   <span>Eliminar producto</span></div>
   </div>

 </div>
  
  )
}
