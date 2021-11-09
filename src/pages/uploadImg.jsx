import React,{useState} from 'react'

const UploadImg = () => {
    const style={
        marginLeft:'10%'
    }

    const [uploadedImg,setUploadedImg]=useState(null)
    const [imgURL,setImgURL]=useState(null)

    const handleFileUploadChange=(e)=>{
        setUploadedImg(e.target.files[0])
        setImgURL(URL.createObjectURL(e.target.files[0]))
    }

    console.log(uploadedImg)
    return (
        <div className="mt-40" style={style}>
            <label htmlFor="image_upload" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4 mb-4" >
                Upload
            </label>
            <input type="file" id="image_upload" name="image_upload" hidden onChange={e=>handleFileUploadChange(e)}/>

            {uploadedImg!==null &&
                <img src={imgURL} alt="uploaded image" className="w-3/6"/>
            }

        </div>
    )
}

export default UploadImg
