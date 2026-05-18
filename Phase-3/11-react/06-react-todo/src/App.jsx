import React, { useState } from 'react'
import Task from './components/Task'

const App = () => {
  let tasks = [
    {
      taskname: 'Complete Todo List',
      deadline: '12/5/26',
      priority: 'high'
    },
    {
      taskname: 'Complete TypeScript',
      deadline: '12/5/26',
      priority: 'high'
    }
  ]

  const [task, setTask] = useState('')
  

  const onChangeHandler = (e) => {
    setTask(e.target.value)

  }


  return (
    <div className='flex justify-center items-center h-screen bg-slate-900'>

      <div className='flex flex-col items-center min-h-50 min-w-50 rounded bg-slate-700'>

        <h3 className='font-bold text-2xl'>To Do</h3>

        <div className='flex gap-1'>
          <input type="text"
            className='p-1 border border-black m-1 rounded'
            placeholder='Enter your task here' />
          <button
            className='bg-gray-400 rounded p-1 m-1 cursor-pointer'
            onClick={onChangeHandler}
          >Add Task</button>
        </div>



        <ul className=' flex w-full justify-center mt-3 flex-col items-center gap-2.5'>
          {tasks.length > 0 ?
            tasks.map((task, index) => (
              <Task
                key={index}
                taskname={task.taskname}
                deadline={task.deadline}
              />

            )) :
            <h4>No Tasks</h4>
          }
        </ul>


      </div>
    </div>
  )
}

export default App
