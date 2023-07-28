import axios from "axios";
import { LoginParams } from "../models/authentication";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL as string
const BASE_AUTH = process.env.NEXT_PUBLIC_BASE_AUTH as string
const API = process.env.NEXT_PUBLIC_API_RT as string

export const loginApi = async (loginData:LoginParams) =>{
    const LOGIN = process.env.NEXT_PUBLIC_LOGIN as string
    const path = BASE_URL +  API + BASE_AUTH  + LOGIN
    const response = await axios.post(path,loginData)
    return response.data
}