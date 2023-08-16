'use client'
import Layout from "@/shared/views/components/layout"
import { useEffect } from "react"
import { AuthLogic } from "../authentication/logic/authenticationLogic"
import Authenticated from "../authentication/view/components/Authenticated"
import ProfileView from "./view/components/profile"

interface ProfileProps {
}
export default function Profile() {


  return (
    <Authenticated isProfile={true}>
       <Layout contentFull={true}>
      <ProfileView />
</Layout>
    </Authenticated>
  
  )
}
