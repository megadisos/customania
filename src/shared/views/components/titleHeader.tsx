"use client"

import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faCalendar, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TitleHeaderProps {
    title:string,
    icon?:IconDefinition,
    
}
export default function TitleHeader({title,icon}:TitleHeaderProps){
const lineBackground ='border-gradient-to-l from-red-900 via-amber-400  to-cyan-900'
    return (
        <div className="absolute flex items-center  animate-rotate-x h-18 mt-[-60px] ml-[-15px]  bg-black bg-opacity-50 p-2 ">
        <h1 className="px-4 text-4xl text-white font-bold ">{title}</h1>
             </div>
      
    )
}