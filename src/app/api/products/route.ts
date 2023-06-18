
import { Product } from '@/shared/models/products';
import { NextResponse } from 'next/server';
import productsMock, { products } from '../../../mocks/products'

// export default function handler(req:any, res:any) {
//     // Aquí puedes agregar lógica adicional según tus necesidades.
//     // Por ejemplo, verificar la ruta solicitada y responder con el mock correspondiente.
//   console.log('entro')
//     if (req.url === '/api/products') {
//       return productsMock(req, res);
//     }
  
//     // Manejar otros endpoints aquí si es necesario.
  
//     res.status(404).end();
//   }

  // export default function GET(request: Request, response: any) {
  //   // Get the users from the mock data.
  //   const IMAGEPATH = '/images/products'
  //   const products:Product[] = [
  //     {name:'Camiseta 1',description:'Camiseta estampada en tecnica',amount:10,available:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_1.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Camiseta 2',description:'Camiseta estampada en tecnica',amount:10,available:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_2.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Camiseta 3',description:'Camiseta estampada en tecnica',amount:10,available:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_3.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Camiseta 4',description:'Camiseta estampada en tecnica',amount:10,available:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_4.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Camiseta 5',description:'Camiseta estampada en tecnica',amount:10,available:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_5.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Camiseta 6',description:'Camiseta estampada en tecnica',amount:10,available:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_6.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Mug 1',description:'Mug estampada en tecnica',amount:10,available:10,type:'Mugs',price:25000,imagepath:IMAGEPATH+'/mugs/mug_1.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Mug 2',description:'Mug estampada en tecnica',amount:10,available:10,type:'Mugs',price:25000,imagepath:IMAGEPATH+'/mugs/mug_2.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Mug 3',description:'Mug estampada en tecnica',amount:10,available:10,type:'Mugs',price:25000,imagepath:IMAGEPATH+'/mugs/mug_3.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     {name:'Mug 4',description:'Mug estampada en tecnica',amount:10,available:10,type:'Mugs',price:25000,imagepath:IMAGEPATH+'/mugs/mug_4.jpg',rating:'3',
  //     sizes:[{size:'s',amount:2,available:2},{size:'m',amount:2,available:2}]},
  //     ];
  
  //   // Send the users back to the client.
  //   response.status(200).json(products)
  // }

  export async function GET(req:Request) {

    try {
      await wait(Math.random() * 1000);
      return NextResponse.json(products)
    } catch (error) {
      return NextResponse.json({mesage:'An error occurred'})
    }

  }

  export function wait(time:number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }