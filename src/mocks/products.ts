import { Product } from "@/shared/models/products";

const IMAGEPATH = '/images/products'
export const products:Product[] = [
    {id:1,name:'Camiseta 1',description:'Camiseta estampada en tecnica',amount:10,available:10,created:'2023-04-12',offer:null,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_1.jpg',rating:'3',
    sizes:[{size:'s',amount:2,available:2,price:22000},{size:'m',amount:2,available:2,price:25000}]},
    {id:2,name:'Camiseta 2',description:'Camiseta estampada en tecnica',amount:10,available:10,created:'2023-04-11',offer:20,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_2.jpg',rating:'3',
    sizes:[{size:'s',amount:2,available:4,price:22000},{size:'m',amount:2,available:2,price:25000}]},
    {id:3,name:'Camiseta 3',description:'Camiseta estampada en tecnica',amount:10,available:10,created:'2023-04-10',offer:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_3.jpg',rating:'5',
    sizes:[{size:'s',amount:2,available:2,price:22000},{size:'m',amount:2,available:2,price:25000}]},
    {id:4,name:'Camiseta 4',description:'Camiseta estampada en tecnica',amount:10,available:10,created:'2023-04-09',offer:15,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_4.jpg',rating:'3',
    sizes:[{size:'s',amount:2,available:2,price:22000},{size:'m',amount:2,available:2,price:25000}]},
    {id:5,name:'Camiseta 5',description:'Camiseta estampada en tecnica',amount:10,available:10,created:'2023-04-08',offer:10,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_5.jpg',rating:'3',
    sizes:[{size:'s',amount:2,available:2,price:22000},{size:'m',amount:2,available:2,price:25000}]},
    {id:6,name:'Camiseta 6',description:'Camiseta estampada en tecnica',amount:10,available:10,created:'2023-04-07',offer:null,type:'t-shirts',price:25000,imagepath:IMAGEPATH+'/shirts/tshirt_6.jpg',rating:'3',
    sizes:[{size:'s',amount:2,available:2,price:22000},{size:'m',amount:2,available:2,price:25000}]},
    {id:7,name:'Mug 1',description:'Mug estampada en tecnica',amount:10,available:10,created:'2023-04-12',type:'t-shirts',offer:10,price:25000,imagepath:IMAGEPATH+'/mugs/mug_1.jpg',rating:'3',
    sizes:null},
    {id:8,name:'Mug 2',description:'Mug estampada en tecnica',amount:10,available:10,created:'2023-04-11',type:'t-shirts',offer:null,price:25000,imagepath:IMAGEPATH+'/mugs/mug_2.jpg',rating:'4',
    sizes:null},
    {id:9,name:'Mug 3',description:'Mug estampada en tecnica',amount:10,available:10,created:'2023-04-10',type:'t-shirts',offer:10,price:25000,imagepath:IMAGEPATH+'/mugs/mug_3.jpg',rating:'3',
    sizes:null},
    {id:10,name:'Mug 4',description:'Mug estampada en tecnica',amount:10,available:10,created:'2023-04-9',type:'t-shirts',offer:null,price:25000,imagepath:IMAGEPATH+'/mugs/mug_4.jpg',rating:'3',
    sizes:null},
    ];



