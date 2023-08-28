import { ProductsLogic } from "@/app/products/logic/productsLogic"
import { Categories, Product } from "@/app/products/models/products"
import Button from "@/shared/views/components/button"
import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"


interface CreateEditProductFormProps {
    product?:Product
}


export default function CreateEditProductForm({product}:CreateEditProductFormProps) {
    const { register,formState: { errors }, handleSubmit } = useForm<Product>()
    const rating = ['1','2','3','4','5']
    const [categories,setCategories] = useState<Categories[] | null>(null)
    
    useEffect(()=>{
        ProductsLogic.getCategories().then(resp=>{
            try {
                setCategories(resp.data)
            } catch (error) {
                    console.log(error)
            }
            
        })
    },[])
    const onSubmit: SubmitHandler<Product> = async (data) => {
      
      }

  return (
 <div className="flex flex-col gap-2">
    {/* title */}
    <div>
    <h1>Crear nuevo producto</h1>
    </div>
{/* form */}
<form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col '} >
<p className="font-bold text-sm mt-2" role="alert">Nombre:</p>
      <input {...register("name", { required: true, maxLength: 20 })} defaultValue={product && product.name} aria-invalid={errors.name ? "true" : "false"} placeholder={'Escribe el nombre del producto'}/>
      {errors.name?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Nombre es mandatorio!</p>
      )}
     <p className="font-bold text-sm mt-2" role="alert">Descripcion:</p>
      <input {...register("description", { required: true, maxLength: 500 })}  defaultValue={product && product.description}  aria-invalid={errors.description ? "true" : "false"} placeholder={'Escribe una descripcion del producto'}/>
      {errors.description?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Descripcion es mandatorio!</p>
      )} 
    
    <p className="font-bold text-sm mt-2" role="alert">Precio:</p>
      <input {...register("price", { required: true})}   defaultValue={product && product.price}  aria-invalid={errors.price ? "true" : "false"} placeholder={'Escribe un precio del producto'}/>
      {errors.price?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Precio es mandatorio!</p>
      )} 

<p className="font-bold text-sm mt-2" role="alert">Puntaje:</p>
          <select {...register("rating", { required: true})}  defaultValue={product ? product.rating:'1'} aria-invalid={errors.rating ? "true" : "false"} >
            {rating && rating.map((rate)=>{
                return <option >{rate}</option>
            })}
            </select>

       <p className="font-bold text-sm mt-2" role="alert">Categoria:</p>
          <select {...register("type", { required: true})}  defaultValue={product && product.type} aria-invalid={errors.type ? "true" : "false"} >
            {categories && categories.map((category)=>{
                return <option >{category.name}</option>
            })}

          </select>

          <p className="font-bold text-sm mt-2" role="alert">Total productos:</p>
      <input {...register("amount", { required: true})}   defaultValue={product && product.amount}  aria-invalid={errors.price ? "true" : "false"} placeholder={'Escribe el total de productos'}/>
      {errors.price?.type === "required" && (
        <p className="text-red-700 font-bold text-sm" role="alert">Total  es mandatorio!</p>
      )} 

      <div className="flex justify-center mt-4"><Button type="normal" name="Guardar" size="50%" position="center"/></div>
      {/* <p className=" text-xs mt-2 text-center" role="alert">¿Perdiste tu contraseña?<span className="font-bold cursor-pointer underline ml-1">Recuperar</span></p> */}
     
    </form>
 </div>
  
  )
}
