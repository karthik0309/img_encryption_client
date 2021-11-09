import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="h-80 w-5/6 bg-white rounded-lg shadow-lg fixed top-2 left-12 ml-10 z-10 flex justify-around items-center">
            <div className="" id="logo">
                <h1 className="font-pacifico font-bold text-2xl hover:text-purple-700">ImgCrypto</h1>
            </div>
            <ul className="w-3/6 h-100 flex justify-around items-center" id="nav-links">
                <li className="text-lg hover:text-purple-700">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-lg hover:text-purple-700">
                    <Link to="/signup">signup</Link>
                </li>
                <li>
                    <Link to="/login">
                    <button class=" w-80 h-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold rounded" 
                    type="button"
                    >
                       Login
                    </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
