'use client'
import { MPLogic } from '@/mercado-pago/logic/mercadoPagoLogic'
import TitleHeader from '@/shared/views/components/titleHeader'
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
  // const query1= useQuery('ptest',()=>MPLogic.generateNewPreferenceId({
  //   "purpose": "wallet_purchase",
  //   "items": [
  //     {
  //       "id": "item-ID-1234",
  //       "title": "Meu produto",
  //       "quantity": 1,
  //       "unit_price": 75.76
  //     }
  //   ]
  // }))

  // console.log(query1.data)
  if(query.isFetching) return <p>Cargando ...</p>
  const product = query.data
const isOffer = product?.offer !== null ? true:false 

  return (
    <div className='flex flex-col items-center'>
<ProductCard product={product as Product} section={isOffer?'Offers':undefined}/>
</div>

)

}
