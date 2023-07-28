import Home from "@/app/home/view/home"
import Layout from "@/shared/views/components/layout"
import React, { useEffect } from "react"
import { AuthLogic } from "../../logic/authenticationLogic"
import { useRouter } from "next/navigation"

interface AuthenticatedProps {
  children?:React.ReactNode | React.JSX.Element,
}
export default function Authenticated({children}:AuthenticatedProps) {
  const router = useRouter();
  const isAuthenticated = AuthLogic.isAuthenticated()

  useEffect(()=>{
    if(!isAuthenticated) router.push('/')
  },[])

  return (
    <>
    {isAuthenticated && children}
    </>
  )
}
