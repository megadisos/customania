import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { Product } from "@/app/products/models/products"
import { SharedLogic } from "@/shared/logic/sharedLogic"
import Modal from "@/shared/views/components/modal"
import { faBarcode, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SetStateAction, useState } from "react"
import CreateEditProductForm from "./forms/createEditProductForm"


interface ProductsAdminViewProps {

}


export default function ProductsAdminView({}:ProductsAdminViewProps) {

const [productId,setProductId] = useState('')
const [error,setError] = useState('')

const crudTypesStyles = "cursor-pointer  bg-gradient-to-tl from-amber-400 to-orange-90  w-40 h-40 flex flex-col gap-2 justify-center items-center text-xl text-center"


const onHandleUpdate = async () =>{
  if(productId === '') return setError('Debe seleccionar ID')
try {
  const  product = await  ProductsLogic.getProduct(productId)
  console.log(product)
  if(product.error === null) return SharedLogic.createUpdateProductModal({product:product.data as Product,type:'update'})
  return setError(product.error)
} catch (error) {
  setError(error as string)
}


}
return (
  <>


 <div className="flex flex-col gap-2">
    <div className="flex flex-row gap-2 mt-5 mb-2">
    <span className="font-bold">Digite Id del producto:</span> <input type={'text'} onChange={(e)=>setProductId(e.target.value)}></input> <FontAwesomeIcon icon={faBarcode} className={'cursor-pointer mt-1'} title="Escanear" />
    </div>
   {error!=='' && <div className="flex justify-center text-rose-900 font-bold">
      <p>{error}</p>
    </div>} 
     <div className="flex flex-row gap-2 mt-5">
   <div className={crudTypesStyles} onClick={()=>SharedLogic.createUpdateProductModal({type:'create'})}>
   <FontAwesomeIcon icon={faPlus} />
    <span>Crear producto</span>
    </div>
   <div className={crudTypesStyles} onClick={onHandleUpdate} > 
   <FontAwesomeIcon icon={faPenToSquare} />
   <span>Editar producto</span></div>
   <div className={crudTypesStyles}> 
   <FontAwesomeIcon icon={faTrash} />
   <span>Eliminar producto</span></div>
   </div>

 </div>
 </>
  
  )
}
