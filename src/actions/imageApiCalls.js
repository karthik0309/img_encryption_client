import { API } from "../backend";

export const uploadImage=async(formData)=>{
    return await fetch(`${API}/images/`,{
        headers:{
            "Accept": "*/*"
        },
        method:"POST",
        body:formData
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        throw err
    })
}

export const getImgById=async(id,userID)=>{
    return await fetch(`${API}/images/${id}/?user=${userID}`,{
        headers:{
            "Accept": "*/*"
        },
        method:"GET",
    }).then((res)=>{
        return res.json()
    }).catch(err=>{
        throw err
    })
}