import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import BG from '../assets/bg.png'
import Empty from '../assets/empty.png'
const Home = () => {

    const [userImages,setUserImages]=useState([])
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

            {userImages.length===0 &&
            <div className="w-screen flex flex-col justify-center items-center">
                <p className="font-semibold text-lg">You dont have any images</p>
                <img src={Empty} alt="empty bin" className="w-1/6"/>
            </div>
            }
        </div>
    )
}

export default Home
