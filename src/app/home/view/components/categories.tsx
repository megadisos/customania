import TitleHeader from "@/shared/views/components/titleHeader";

const CATEGORIES = [
    {name:'t-shirts',imagePath:'/shirts/main_shirts.jpg'} ,
    {name:'Mugs',imagePath:'/mugs/main_mugs.jpg'},
    {name:'Caps',imagePath:'/caps/main_caps.jpg'},
    {name:'Hoddies',imagePath:'/hoddies/main_hoddies.jpg'},
    {name:'collectibles',imagePath:'/collectibles/main_collectibles.jpg'}]

export default function Categories(){
    return (
        <>
        <div className="flex justify-center">
        <TitleHeader title="Search by categories" />
        </div>
        <div className="flex flex-col md:flex-row h-fit  mb-20 p-10  border-b-2 gap-10  justify-center items-center w-full">
            {CATEGORIES.map(categorie=>{
                return (
                    <div className="flex flex-col items-center ">
                    <div className="rounded-full border-gradient-to-tl from-red-900 via-amber-400 to-cyan-900 w-60 h-60 bg-cover mb-2 cursor-pointer hover:animate-jump" title={categorie.name} style={{backgroundImage:`url("/images/products${categorie.imagePath}")`}}></div>
                    <p className="bg-black bg-opacity-50 p-2 text-white text-bold text-2xl ">{categorie.name}</p>
                    </div>
                )
            })}
        </div>

        </>
    )
}