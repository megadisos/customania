
interface PaginationProps {
    elementsTotal:number,
    elementsByPage:number,
    handlePagination: (page: number) => void
}

export default function Pagination({elementsTotal,elementsByPage,handlePagination}:PaginationProps){
    const numberDivs = Math.ceil(elementsTotal / elementsByPage)
    const generateNumberArrays = (total:number) =>{
        const newArray:number[] = []
        for(let i =1;i<=total;i++){
            newArray.push(i)
        }
        return newArray
    }
    const array = generateNumberArrays(numberDivs)
    return (
        <div className="flex flex-row gap-2 mt-5 justify-center mb-2">
         {array.map(element=>{
            return(
                <div className="w-8 h-8 rounded bg-cyan-900 flex text-white font-bold justify-center items-center cursor-pointer" onClick={()=>handlePagination(element)}>{element}</div>
            )
         })}
        </div>
      
    )
}