import { products } from "@/mocks/products";
import { NextResponse } from "next/server";
import { wait } from "../route";

export async function GET(req:Request,context:any) {
    const filteredProducts = products.filter(product=>product.id === parseInt(context.params.id))
    if(filteredProducts.length === 0)  return NextResponse.json({mesage:'A product with this Id does not exist'})
    try {
      await wait(Math.random() * 1000);
      return NextResponse.json(filteredProducts[0])
    } catch (error) {
      return NextResponse.json({mesage:'An error ocurred'})
    }
  }