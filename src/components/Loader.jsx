import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
        </div>
    )
}

export default Loader
