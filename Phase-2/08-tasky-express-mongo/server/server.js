import express from 'express'
import './dbConnect.js'

import { createTask , getAllTasks, getTaskById, getTaskByPriority, deleteTask} from './controller/task.controller.js'
import taskRouter from './routes/task.router.js'

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Server is running'
    })
})

app.use('/api/tasks/', taskRouter)


app.use((req, res) => {
    res.status(404).send({
        status: false,
        message: 'Route not found'
    })
})

app.listen(PORT, () => {
    console.log('Server is running');
})


// app.get('/api/tasks', getAllTasks)
// app.get('/api/tasks/:id', getTaskById)
// app.get('/api/tasks/priority/:priority', getTaskByPriority)
// app.get('/api/tasks/delete', deleteTask)
// app.post('/api/tasks/create', createTask)

/*
Routes:
    GET:
        /api/tasks - get all tasks
        /api/tasks/id - get task by id

    POST:
        /api/tasks/create - create a new task

    PUT:
        /api/tasks/update - update by id

    DELETE:
        /api/tasks/delete/id - delete task by id
*/