import { API } from "../backend";

export const postUserData=async(name,email)=>{
    console.log(API)
    return await fetch(`${API}/users/`,{
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        method:"POST",
        body:JSON.stringify({full_name:name,email:email})
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        throw err
    })
}