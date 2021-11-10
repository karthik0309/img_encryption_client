import { getCookie } from "./cookie";

export const isAutheticated=()=>{
    const access = getCookie('access')

    if( access===undefined || 
        access==="" || 
        access===null){
        return false
    }

    return true
}