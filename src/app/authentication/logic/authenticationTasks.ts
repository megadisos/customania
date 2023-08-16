
import { isValidTokenApi, loginApi, logOutApi, RegisterUser } from "../data/authentication";
import { AuthInfo, LoginParams, User } from "../models/authentication";
import { SharedLogic } from "@/shared/logic/sharedLogic";
import jwt from 'jsonwebtoken';
import { AuthLogic } from "./authenticationLogic";
import userLogic from "@/app/profile/logic/usersLogic";


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

export const isValidToken = async (userInfo:AuthInfo) =>{
   const response = await isValidTokenApi(userInfo)
   return response
}


export const isAuthenticated = async () =>{
    const token = AuthLogic.getLCToken() 
    const userId = AuthLogic.getLCUserId()
    if(token===null || userId=== null) return false
    const userInfo = {token,userId}
    const resp = await isValidToken(userInfo)
    return resp
} 

export const logout= async () =>{
    const token = AuthLogic.getLCToken() 
    const userId = AuthLogic.getLCUserId()
    if(token===null || userId=== null) return false
    const userInfo = {token,userId}
    const resp = await logOutApi(userInfo)
    localStorage.removeItem('cm-authentication');
    return resp
} 


export const register = async (user:User) =>{
    try {
        const response = await RegisterUser(user)
        if(response.error === null){
            return {status:true,error:null}
        }
    } catch (error:any) {
        return {status:false,error:error.response.data}    
    }
    
}


export const isSuperAdmin = async () =>{
    const userId =AuthLogic.getLCUserId()
    const user = await userLogic.getUser(userId)
    console.log('users ',user)
    if(user.error !== null) return false
    if (!user.data?.superadmin) return false
    return true
  }
