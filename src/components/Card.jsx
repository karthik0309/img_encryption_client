import React from 'react'

const Card = ({imgDetails}) => {
    return (
        <div className="overflow-hidden rounded shadow-lg">
          <img className="w-full" src={imgDetails.image} alt={imgDetails.name}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{imgDetails.name}</div>
            <p className="text-gray-700 text-base">
                {imgDetails.message}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AES</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#data-hiding</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#imgCrypt</span>
          </div>
        </div>
    )
}

export default Card
