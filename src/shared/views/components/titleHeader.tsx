"use client"

import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface TitleHeaderProps {
    title:string
}
export default function TitleHeader({title}:TitleHeaderProps){
const lineBackground ='border-gradient-to-l from-red-900 via-amber-400 to-cyan-900'
    return (
        <div className="flex items-center animate-rotate-x">
            <hr className={`flex-grow border-t-2 border-red-900`}></hr>
        <h1 className="px-4 text-lg font-bold "><FontAwesomeIcon icon={faCalendar} color={'#164E63'}/> {title.toUpperCase()}</h1>
        <hr className={`flex-grow border-t-2 border-red-900`}></hr>
             </div>
      
    )
}