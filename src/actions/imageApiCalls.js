import { API } from "../backend";
import { getCookie } from "../helper/cookie";

export const uploadImage=async(formData)=>{
    const access = getCookie('access')

    return await fetch(`${API}/images/`,{
        headers:{
            "Accept": "*/*",
            "Authorization":`Bearer ${access}`
        },
        method:"POST",
        body:formData,
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        throw err
    })
}

export const getImgById=async(id,userID)=>{

    const access = getCookie('access')

    return await fetch(`${API}/images/${id}/?user=${userID}`,{
        headers:{
            "Accept": "*/*",
            "Authorization":`Bearer ${access}`
        },
        method:"GET",
    }).then((res)=>{
        return res.json()
    }).catch(err=>{
        throw err
    })
}

export const getAllUserImages=async(userId)=>{
    const access = getCookie('access')
    
    return await fetch(`${API}/images/?user=${userId}`,{
        headers:{
            "Accept": "*/*",
            "Authorization":`Bearer ${access}`
        },
        method:"GET"
    }).then(res=>{
        return res.json()
    }).catch((err)=>{
        throw err
    })
}