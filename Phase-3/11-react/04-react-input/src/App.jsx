import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  console.log(text);
  const onchangeHandler = (e) =>{
    setText(e.target.value)
  }
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>

      <input type="text" 
      className='border border-gray-500 p-4 rounded'
      placeholder='Enter your text here'
      value={text}
      onChange={onchangeHandler}
      />
      <div className='flex gap-3'>
      <button 
      className='border-black-400 border bg-gray-300 p-1 rounded'
      onClick={()=>setText('')}
      >Clear</button>

      <button
       className='border-black-400 border bg-green-400 p-1 rounded'
       onClick={()=> alert(text)}
       >Submit</button>
      </div>
    </div>
  )
}

export default App
