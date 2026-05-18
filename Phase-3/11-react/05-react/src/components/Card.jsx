import React from 'react'

const Card = ({price, title, description, image}) => {
  return (
    <div className= "card bg-blue-500 p-6 rounded-lg">
      <div>
        <img src={image} alt={title}
        className='w-full h-48 object-cover rounded-lg'
        />
      </div>
      <div className='text-center'>
        <h3 className='text-2xl font-bold mt-1'>{title}</h3>
        <p>{description}</p>
        <button
        className='bg-white text-black py-4 px-3 rounded-lg mt-4 cursor-pointer hover:bg-gray-400'
        >Buy Now: {price}</button>

      </div>

      
    </div>
  )
}

export default Card
