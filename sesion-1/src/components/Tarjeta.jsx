import React from 'react'


const Tarjeta = ({ title, description, imageUrl, favorite = false }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${favorite ? "border-4 border-yellow-400" : ""}`}
    onClick={()=>{
        setFav(!fav)

    }
    }
    >
        {imageUrl && (
            <img
            src={imageUrl}
            alt={title}
            className='w-full h-48 object-cover mb-4 rounded' />
            )}
        <h3 className ="text-xl font-semibold mb-2">{title}</h3>
        <p className='text-gray-700'>{description}</p>
        {favorite && <span>🌟</span>}
    </div>
  )
}

export default Tarjeta



