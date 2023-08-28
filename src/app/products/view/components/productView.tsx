'use client'

import {
  useQuery,
} from 'react-query'
import { ProductsLogic } from '../../logic/productsLogic'
import { Product } from '../../models/products'
import ProductCard from './productCard'

interface ProductViewProps {
    productId:string
}

export default function ProductView({productId}:ProductViewProps) {
  const query = useQuery('productById',()=>ProductsLogic.getProduct(productId))
  if(query.isFetching) return <p>Cargando ...</p>
  const product = query.data?.data
const isOffer = product?.offer !== null ? true:false 

  return (
    <div className='flex flex-col items-center'>
<ProductCard product={product as Product} section={isOffer?'Offers':undefined}/>
</div>

)

}
