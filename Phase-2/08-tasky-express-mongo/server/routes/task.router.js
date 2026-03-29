import express from 'express'
import { updateTask , getAllTasks, getTaskById, getTaskByPriority, deleteTask, createTask} from '../controller/task.controller.js'

const taskRouter = express.Router()

taskRouter.get('/', getAllTasks)
taskRouter.get('/:id', getTaskById)
taskRouter.get('/priority/:priority', getTaskByPriority)
taskRouter.get('/delete', deleteTask)
taskRouter.post('/create', createTask)
taskRouter.put('/update', updateTask)

taskRouter.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'task route not found'
    })
})


export default taskRouter