import axios from "axios"


export const getColombiaCities=async ()=>{
    const path ='https://www.datos.gov.co/resource/xdk5-pm3f.json'
    const response = await axios.get(path)
    return response.data
}