import { SharedLogic } from "@/shared/logic/sharedLogic"

export const getLCUsername = () =>{
    const authentication = localStorage.getItem('cm-authentication')
    if(authentication !== null){
        return SharedLogic.convertStringToObjectsArray(authentication).username
    }
    return null
}


export const getLCUserId = () =>{
    const authentication = localStorage.getItem('cm-authentication')
    if(authentication !== null){
        return SharedLogic.convertStringToObjectsArray(authentication).userId
    }
    return null
}


export const getLCToken= () =>{
    const authentication = localStorage.getItem('cm-authentication')
    if(authentication !== null){
        return SharedLogic.convertStringToObjectsArray(authentication).token
    }
    return null
}