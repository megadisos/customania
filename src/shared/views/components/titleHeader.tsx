"use client"

import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faCalendar, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TitleHeaderProps {
    title:string,
    icon:IconDefinition
}
export default function TitleHeader({title,icon}:TitleHeaderProps){
const lineBackground ='border-gradient-to-l from-red-900 via-amber-400 to-cyan-900'
    return (
        <div className="absolute flex items-center animate-rotate-x h-18 mt-[-40px] ml-[-15px] bg-slate-100 bg-opacity-25  ">
            <hr className={`flex-grow border-t-2 border-red-900`}></hr>
        <h1 className="px-4 text-xl font-bold "><FontAwesomeIcon icon={icon} color={'#164E63'}/> {title}</h1>
        <hr className={`flex-grow border-t-2 border-red-900`}></hr>
             </div>
      
    )
}