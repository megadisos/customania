import axios from "axios"

export const getClientApiAddress=async ()=>{
    const path = process.env.NEXT_PUBLIC_GET_IP_URL as string
    const response = await axios.get(path)
    return response.data
}