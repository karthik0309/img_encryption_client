import React,{useState} from 'react'
import { uploadImage,getImgById } from '../actions/imageApiCalls'
import { API } from '../backend'
import Loader from '../components/Loader'


const imgPath=API+"/media/"

const UploadImg = () => {
    const style={
        marginLeft:'10%'
    }

    const [formData,setFormData]=useState({
        name:'',
        message:'',
        error:''
    })
    const [uploadedImg,setUploadedImg]=useState()
    const [imgURL,setImgURL]=useState(null)
    const [encryptOptions,setEncryptOptions]=useState('encrypt_cbc')
    const [showOptions,setShowOptions]=useState(false)
    const [encryptedResult,setEncryptedResult]=useState({})
    const [uploadClicked,setUploadClicked]=useState(false)

    const handleFileUploadChange=(e)=>{
        setUploadedImg(e.target.files[0])
        setImgURL(URL.createObjectURL(e.target.files[0]))
    }

    const handleFormChange=(e)=>{
        setFormData({...formData,
        [e.target.name]:e.target.value})
    }

    const handleSetOptions=(type)=>{
        setEncryptOptions(type)
        if(type==='decrypt'){
            setFormData({...formData,name:'',message:''})
        }
    }
    
    const handleFormSubmit=()=>{
        setUploadClicked(true)

        const form=new FormData()
        const userId = localStorage.getItem('userId')
        form.append('name',formData.name)
        form.append('message',formData.message)
        form.append('type',encryptOptions)
        form.append('image',uploadedImg,uploadedImg.name)
        form.append('user',userId)
        
        try{
            uploadImage(form).then(res=>{
                getImgById(res.id,userId).then((img)=>{
                    const temp=img.image.split("/")
                    img.image=imgPath+temp[temp.length-1]
                    setUploadClicked(false)
                    setEncryptedResult(img)
                })
            })
        }catch(err){
            setFormData({...formData,error:err})
        }

    }

    const donwloadImg=()=>{
        fetch(encryptedResult.image,{
            method:"GET",
            responseType: 'blob'        
        }).then((response) => {
            response.arrayBuffer().then(function(buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `${encryptedResult.name}.png`); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        })
    }
    console.log(uploadClicked)
    return (
        <div className="mt-40" style={style}>
            <div className="pr-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div id="image-detail-container" className="">
                    <label htmlFor="image_upload" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4 mb-4" >
                    Upload
                    </label>
                    <input type="file" id="image_upload" name="image_upload" hidden onChange={e=>handleFileUploadChange(e)}/>

                    <div className="h-400 border-4 border-gray-500 rounded-md mt-2 flex justify-center">
                        {imgURL!==null &&
                            <img src={imgURL} alt="uploaded image" className=" h-auto w-auto object-cover"/>
                        }
                    </div>

                    <div className="" id="img-details">
                        <label >Name:</label><br/>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"
                        placeholder="name your image"
                        name="name"
                        onChange={e=>handleFormChange(e)}
                        value={formData.name}
                        /><br/><br/>
                        <label >Message:</label><br/>
                        <input readOnly={encryptOptions==='decrypt'} className={`${encryptOptions==='decrypt'? 'bg-gray-400' :'bg-gray-200'} appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`} id="inline-full-name" type="text"
                        placeholder="Enter a message(optional)"
                        name="message"
                        onChange={e=>handleFormChange(e)}
                        value={formData.message}
                        />
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center" id="encrypt-options">
                    <div>
                        <button className="h-50 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" 
                        type="button"
                        onClick={handleFormSubmit}
                        >
                            {encryptOptions}
                        </button> 
                        <button className="h-50 ml-1 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" 
                        type="button"
                        onClick={()=>setShowOptions(!showOptions)}
                        >
                            ...
                        </button> 
                    </div>
                    {showOptions && 
                    <div className="h-160 border-2 border-indigo-500 mt-3 rounded-md">
                        <span className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200" name="encrypt_cbc" onClick={e=>handleSetOptions("encrypt_cbc")}>
                            Encrypt <span className="text-gray-600">(AES_CBC)</span>
                        </span>
                        <span className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200" name="encrypt_ecb" onClick={e=>handleSetOptions("encrypt_ebc")}>
                            Encrypt <span className="text-gray-600">(AES_EBC)</span>
                        </span>
                        <span className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200" name="decrypt_cbc" onClick={e=>handleSetOptions("decrypt_cbc")}>
                            Decrypt <span className="text-gray-600">(AES_CBC)</span>
                        </span>
                        <span className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200" name="decrypt_ebc" onClick={e=>handleSetOptions("decrypt_ebc")}>
                            Decrypt <span className="text-gray-600">(AES_EBC)</span>
                        </span>
                    </div>
                    }
                </div>

                <div className="" id="result-container">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-4 rounded"
                    onClick={donwloadImg}>
                        Download
                    </button>  
                    <div className="h-400 border-4 border-gray-500 mt-1 rounded-md flex justify-center">
                        {Object.keys(encryptedResult).length!==0 ?
                            <img src={encryptedResult.image} alt="uploaded image" className=" h-auto w-auto object-cover"/> 
                            : uploadClicked && <Loader/>
                        }
                    </div>
                    {encryptOptions.startsWith('decrypt') &&
                    <div className="" id="img-details">
                        <label >Message:</label><br/>
                        <input readOnly className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"
                        name="message"
                        defaultValue={encryptedResult.message}
                        />
                    </div>}   
                </div>
            </div>
        </div>
    )
}

export default UploadImg
