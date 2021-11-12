import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { deleteCookie } from '../helper/cookie'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import {VscChromeClose } from 'react-icons/vsc'

const Navbar = ({log,setLog}) => {

    const [showNav,setShowNav]=useState(false)

    const handleShowNav=()=>{
        setShowNav(!showNav)
    }

    return (
        <div className="h-80 w-5/6 bg-white rounded-lg shadow-lg fixed top-2 left-0 z-10 flex justify-around items-center" style={{marginLeft:'10%'}}>
            <div className="" id="logo">
                
                <h1 className="font-pacifico font-bold text-2xl hover:text-purple-700">ImgCrypto</h1>
            </div>
            <div className="med:block hidden text-3xl cursor-pointer" onClick={handleShowNav}> 
                    <HiOutlineMenuAlt3 />
            </div>
            <ul className={`w-3/6 h-100 flex justify-around items-center med:fixed  med:flex-col lg:flex-row med:h-screen  med:w-screen med:top-0 med:left-0  med:bg-white  med:transform med:transition-transform med:duration-500 ${!showNav ? 'med:-translate-x-full ' : 'med:translate-x-0'}`} id="nav-links" onClick={handleShowNav}>
                <div className="hidden med:block text-3xl cursor-pointer fixed top-2 right-2" onClick={handleShowNav}>
                    <VscChromeClose />
                </div>
                
                <li className="text-lg hover:text-purple-700 med:text-3xl med:font-semibold">
                    <Link to="/">Home</Link>
                </li>
                
                {!log&&
                <li className="text-lg hover:text-purple-700 med:text-3xl med:font-semibold">
                    <Link to="/signup">Signup</Link>
                </li>}

                {log && 
                <li className="text-lg hover:text-purple-700 med:text-3xl med:font-semibold">
                    <Link to="/upload">Upload</Link>
                </li>}

                {!log &&
                <li>
                    <Link to="/login">
                        <button className=" w-80 h-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold rounded med:text-3xl med:font-semibold med:w-32 med:h-50" 
                        type="button"
                        >
                            Login
                        </button>
                    </Link>
                </li>}
                
                {log &&
                <li>
                    <button className=" w-80 h-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold rounded med:text-3xl med:font-semibold med:w-32 med:h-50" 
                    type="button"
                    onClick={()=>{deleteCookie('access');
                            setLog(false);
                        }}
                    >
                        Signout        
                    </button>
                </li>}
                
            </ul>
        </div>
    )
}

export default Navbar
