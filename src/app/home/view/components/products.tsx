import ProductCard from "@/app/products/view/components/productCard";
import TitleHeader from "@/shared/views/components/titleHeader";

export default function Products(){
    return (
        <div className="flex flex-col h-full   w-4/5 p-2">
            <TitleHeader title={'Nuevo'}/>
            <div className="flex flex-row w-full gap-8 justify-center mt-2">
            <ProductCard imagePath="/images/products/shirts/thisrt_5.jpg" name="Camiseta tipo tigre" price={22000} rating={'4'}/>
            <ProductCard imagePath="/images/products/shirts/tshirt_4.jpg" name="Camiseta tipo tigre" price={22000} rating={'2'}/>
            <ProductCard imagePath="/images/products/shirts/tshirt_3.jpg" name="Camiseta tipo tigre" price={22000} rating={'1'}/>
            <ProductCard imagePath="/images/products/shirts/tshirt_2.jpg" name="Camiseta tipo tigre" price={22000} rating={'5'}/>
            </div>
            
           
        </div>
    )
}