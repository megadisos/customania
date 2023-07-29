import axios from "axios";
import { AuthInfo, LoginParams, User } from "../models/authentication";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL as string
const BASE_AUTH = process.env.NEXT_PUBLIC_BASE_AUTH as string
const API = process.env.NEXT_PUBLIC_API_RT as string

export const loginApi = async (loginData:LoginParams) =>{
    const LOGIN = process.env.NEXT_PUBLIC_LOGIN as string
    const path = BASE_URL +  API + BASE_AUTH  + LOGIN
    const response = await axios.post(path,loginData)
    return response.data
}

export const isValidTokenApi = async (authInfo:AuthInfo) =>{
    const VALID = process.env.NEXT_PUBLIC_VALID_TK
    const path = BASE_URL +  API + BASE_AUTH  + VALID
    const response = await axios.post(path,authInfo)
    return response.data
}

export const logOutApi = async (authInfo:AuthInfo) =>{
    const LOGOUT = process.env.NEXT_PUBLIC_LOGOUT
    const path = BASE_URL +  API + BASE_AUTH  + LOGOUT
    const response = await axios.post(path,authInfo)
    return response.data
}

export const RegisterUser = async (user:User) =>{
    const REGISTER = process.env.NEXT_PUBLIC_REGISTER as string
    const path = BASE_URL +  API + BASE_AUTH  + REGISTER
    const response = await axios.post(path,user)
    return response.data
}