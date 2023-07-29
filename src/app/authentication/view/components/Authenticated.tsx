import Home from "@/app/home/view/home"
import Layout from "@/shared/views/components/layout"
import React, { useEffect, useState } from "react"
import { AuthLogic } from "../../logic/authenticationLogic"
import { useRouter } from "next/navigation"

interface AuthenticatedProps {
  children?:React.ReactNode | React.JSX.Element,
  isProfile:boolean;
  unAuthenticated?: React.ReactNode | React.JSX.Element,
}
export default function Authenticated({children,isProfile, unAuthenticated}:AuthenticatedProps) {
  const router = useRouter();
const [isAuthenticated,setIsAuthenticated] = useState(false)


  useEffect(()=>{
    if(isProfile){
      AuthLogic.isAuthenticated().then(resp=>{
        if(!resp){
          return router.push('/')
        }
        setIsAuthenticated(true) 
      }) 
    }
  
  },[])

  return (
    <>
    {isAuthenticated ? children:unAuthenticated}
    </>
  )
}
