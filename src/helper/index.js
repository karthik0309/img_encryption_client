import { getCookie } from "./cookie";

export const isAutheticated=()=>{
    let access = getCookie('access')

    access= access=='null'?null:access
    if( access==undefined || 
        access==="" || 
        access==null){
        return false
    }

    return true
}