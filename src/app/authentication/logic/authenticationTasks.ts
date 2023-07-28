
import { loginApi } from "../data/authentication";
import { LoginParams } from "../models/authentication";
import { SharedLogic } from "@/shared/logic/sharedLogic";
import jwt from 'jsonwebtoken';
import { AuthLogic } from "./authenticationLogic";

export const login = async (loginData:LoginParams) =>{
    try {
        const response = await loginApi(loginData)
        if(response.error === null && response.token){
            localStorage.setItem('cm-authentication',
            SharedLogic.convertObjectsArrayToString({username:loginData.username,token:response.token,userId:response.userId}))
            return {status:true,error:null}
        }
    } catch (error:any) {
        return {status:false,error:error.response.data}    
    }
    
}


export const jwtVerification = async (token:string) =>{
    const SERVER_TOKEN = process.env.NEXT_PUBLIC_SERVER_TOKEN as string
try {
    const verify = await jwt.verify(token,SERVER_TOKEN,{
        algorithms: ['RS256'], // Opciones específicas para verificar con clave pública
      })
    console.log(verify)
    return true
} catch (error) {
    console.log(error)
    return false
}
}

export const isAuthenticated = () =>{
    return AuthLogic.getLCToken() && AuthLogic.getLCUserId()
} 