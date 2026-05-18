import React, { useState } from 'react'

const App = () => {
  const [count , setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4 bg-blue-950'>
      <h1 className={` font-bold text-3xl ${count >= 0 ? 'text-green-500': 'text-red-500'}`} >Counter: {count}</h1>
      <div className='flex flex-row gap-4'>
        <button className='bg-green-500 rounded py-1 px-3' onClick={() => setCount(count+1)}>Increment</button>
        <button className='bg-red-500 py-1 px-3 rounded' onClick={() => setCount(count - 1) }>Decrement</button>
      </div>
    </div>
  )
}

export default App