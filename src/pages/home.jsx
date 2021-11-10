import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getAllUserImages } from '../actions/imageApiCalls'
import BG from '../assets/bg.png'
import Empty from '../assets/empty.png'
import Card from '../components/Card'

const Home = () => {

    const [userImages,setUserImages]=useState([])
    const userId = localStorage.getItem('userId')

    useEffect(()=>{
        try{
            getAllUserImages(userId).then((res)=>{
                setUserImages(res)
            })
        }catch(err){
            console.log(err)
        }
    },[userId])

    return (
        <div className="h-screen w-screen">
            <img src={BG} alt="background" className="w-screen h-3/6 object-cover"/>

            <div className="w-screen flex justify-center mt-5 mb-10">
                <Link to="/upload">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" 
                    type="button"
                    >
                        Add img
                    </button> 
                </Link>
            </div>

            {userImages.length===0 ?
            <div className="w-screen flex flex-col justify-center items-center">
                <p className="font-semibold text-lg">You dont have any images</p>
                <img src={Empty} alt="empty bin" className="w-1/6"/>
            </div>:
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {userImages
                .filter(img=>!img.name.startsWith("encrypted_") && !img.name.startsWith("decrypted_"))
                .map((ele)=>(
                        <Card imgDetails={ele} key={ele.id}/>
                ))}
            </div>
            }

            
        </div>
    )
}

export default Home
