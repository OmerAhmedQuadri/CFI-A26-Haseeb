import React, { useEffect, useState , useRef} from 'react'

const App = () => {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')) || [])
    console.log(taskList)
    const inputRef = useRef(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList))
    }, [taskList])

    const addTaskHandler = () => {
        if (task.trim() != "") {
            const newTask = {
                id: Date.now(),
                title: task,
                idDone: false
            }
            setTaskList([...taskList, newTask])
            setTask("")
        }
    }

    const statusHandler = (e, index) => {
        if (e.target.tagName == 'LI') {
            const newTaskList = [...taskList]
            newTaskList[index].isDone = !newTaskList[index].isDone
            setTaskList(newTaskList)
        } else if (e.target.tagName == 'BUTTON') {
            const newTaskList = [...taskList]
            newTaskList.splice(index, 1)
            setTaskList(newTaskList)
        }
    }

    return (
        <div className='flex flex-col items-center h-screen justify-center bg-slate-700 text-white'>

            <div className='flex flex-col border-3 border-gray-900 rounded p-4 min-h-100 bg-slate-800 gap-4'>
                <div className='gap-2 flex'>
                    <input
                        type="text"
                        placeholder='Enter your task here'
                        className=' rounded p-2 bg-slate-600 text-white border-2 border-gray-900'
                        onChange={(e) => setTask(e.target.value)}
                        value={task} />
                    <button onClick={addTaskHandler} className='bg-yellow-500 p-2 rounded'>Add Task</button>
                </div>

                <ul className='flex flex-col w-full border-2 border-gray-900 bg-slate-900 gap-2 max-h-70 h-full'>
                    {taskList.map((task, index) => (
                        <li className={`p-3 bg-slate-600 rounded-lg flex flex-row m-1 justify-between ${task.isDone? 'opacity-80' : ''}`}
                            key={task.id}
                            onClick={(e) => statusHandler(e, index)}
                            >

                        <p className={`${task.isDone && 'line-through'}`}
                        >{task.title}</p>
                        <button
                        className='bg-red-500 px-2 rounded'
                        onClick={() => statusHandler(index)}
                        >Delete</button>

                        </li>
                    ))}

                </ul>

            </div>
        </div>
    )
}

export default App
