import { useState } from "react"

interface PaginationProps {
    elementsTotal:number,
    handlePagination: (page: number) => void
}

export default function Pagination({elementsTotal,handlePagination}:PaginationProps){
    const [currentPage,setCurrentPage] = useState(1)
    const generateNumberArrays = (total:number) =>{
        const newArray:number[] = []
        for(let i =1;i<=total;i++){
            newArray.push(i)
        }
        return newArray
    }
    const array = generateNumberArrays(elementsTotal)
    return (
        <div className="flex flex-row gap-2 mt-5 justify-center mb-2">
         {array.map((element,index)=>{
            let color = 'bg-cyan-900'
            const isCurrentPage = currentPage === (index +1)
            if(isCurrentPage) color = 'bg-red-900'
            return(
                <div className={`w-8 h-8 rounded ${color} flex text-white font-bold justify-center items-center cursor-pointer`} onClick={isCurrentPage?()=>{}:()=>{setCurrentPage(element);handlePagination(element)}}>{element}</div>
            )
         })}
        </div>
      
    )
}