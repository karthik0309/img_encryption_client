import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { postUserData } from '../actions/userApiCalls'
import Home from '../assets/bg2.webp'
import { setCookie } from '../helper/cookie'


const Signup = ({setLog}) => {

    const navigate=useNavigate()

    const [formData,setFormData]=useState({
        fullName:'',
        email:'',
        password:'',
        error:''
    })

    const handleFormData=(event)=>{
        setFormData({...formData,
        [event.target.name]:event.target.value})
    }

    const handleFormSubmit=()=>{
        if( formData.fullName==="" || 
            formData.email===""||
            formData.password===""){
            
            setFormData({...formData,error:"All fields are required"})
            return
        }

        try{
            postUserData(formData.fullName,formData.email,formData.password).then(res=>{
                localStorage.setItem('userId',res.payload.id)
                setCookie('access',res.access,1)
                setLog(true)
                navigate("/")
            })
        }catch(err){
            setFormData({...formData,error:err})
        }

        setFormData({fullName:'',
        email:'',
        error:'',
        password:''})
    }

    return (
        <div className="h-screen w-screen flex bg-gray-50 med:flex-col">
            <img src={Home} alt="Home" className="h-100 w-3/5 med:w-screen med:h-4/6 object-cover"/>
            <div className="h-100 w-2/5 med:w-screen  med:h-screen  flex flex-col justify-center items-center">
                <div className="w-4/5 h-4/6 med:h-full med:w-full shadow-xl rounded-xl bg-white px-8 pt-6 pb-8">
                <h1 className="text-center text-2xl mb-8 font-bold">Signup</h1>
                {formData.error!=='' && 
                <p className="text-center text-red-700 text-md font-semibold">
                    {formData.error}
                </p>}
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Full Name
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:ring-4" id="inline-full-name" type="text" 
                    onChange={handleFormData}
                    name="fullName"
                    value={formData.fullName}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                        UserEmail
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:ring-4" id="inline-email" type="email"
                    onChange={handleFormData}
                    value={formData.email}
                    name="email"
                    />
                    </div>
                </div>
                
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Password
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:ring-4" id="inline-password" type="password"
                    onChange={handleFormData}
                    value={formData.password}
                    name="password"
                    />
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" 
                    type="button"
                    onClick={handleFormSubmit}>
                        Sign Up
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
