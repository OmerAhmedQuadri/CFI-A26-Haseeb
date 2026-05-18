import React from 'react'

const Task = ({ taskname, deadline }) => {
  return (
    <li className='bg-slate-600 rounded w-[90%] p-1 flex justify-between'>
      <div className='flex flex-col'>
        {taskname}
        {deadline}
      </div>
      <button className='bg-red-700 px-1.5 rounded cursor-pointer'>X</button>
    </li>
  )
} 

export default Task
