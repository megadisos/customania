'use client'
import Layout from "@/shared/views/components/layout"
import { useEffect } from "react"
import { AuthLogic } from "../authentication/logic/authenticationLogic"
import Authenticated from "../authentication/view/components/Authenticated"
import ProfileView from "./view/components/profile"
import { ProfileProvider } from "./view/context/profileContext"

interface ProfileProps {
}
export default function Profile() {


  return (
    <Authenticated isProfile={true}>
       <Layout contentFull={true}>
        <ProfileProvider>
      <ProfileView />
      </ProfileProvider>
</Layout>
    </Authenticated>
  
  )
}
