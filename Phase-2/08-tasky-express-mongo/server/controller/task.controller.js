import Task from '../models/Task.js'

const createTask = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({
                success: false,
                message: 'Missing body'
            })
        }

        const { task, deadline, priority } = req.body
        if (!task || !deadline) {
            return res.status(400).send({
                success: false,
                message: 'Incomplete or Invalid Data'
            })
        }

        const existingTask = await Task.findOne({ task: task })

        if (existingTask) return res.send({
            success: false,
            message: 'Task already exists',
            data: existingTask
        })

        
        const newTask = Task({ task, deadline, priority })
        await newTask.save()
        
        if (!['high', 'medium', 'low'].includes(priority)) {
            return res.status(400).send({
                success: false,
                message: 'Invalid task priority'
            })
        }
        res.send({
            success: true,
            message: 'Task created successfully',
            data: newTask
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: error
        })
    }
}


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()

        if (!tasks || tasks.length == 0) {
            return res.status(404).send({
                success: false,
                message: 'Tasks not found'
            })
        }
        res.send({
            success: true,
            message: 'Tasks fetched Successfully',
            data: tasks
        })
    } catch (error) {
        res.send({
            status: false,
            message: 'Error fetching tasks',
            data: null
        })
    }

}

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params
        if (id.length != 24) {
            return res.status(400).send({
                success: false,
                message: 'Invalid id'
            })
        }

        const task = await Task.findById(id)
        console.log(task);

        if (!task) {
            return res.status(400).send({
                success: false,
                message: 'Task not found'
            })
        }

        res.send({
            success: true,
            message: 'Task fetched successfully',
            data: task
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: false,
            message: 'Error fetching task',
        })
    }
}


const getTaskByPriority = async (req, res) => {
    try {
        const { priority } = req.params
        if (!['high', 'medium', 'low'].includes(priority)) {
            return res.status(400).send({
                success: false,
                message: 'Invalid task priority'
            })
        }

        const task = await Task.find({ priority })

        if (!task) {
            return res.status(400).send({
                success: false,
                message: 'Task not found with priority' + priority,
                data: []
            })
        }

        res.send({
            success: true,
            message: 'Task fetched successfully',
            data: task
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: false,
            message: 'Error fetching task',
        })
    }
}


const deleteTask = async (req, res) => {
    try {
        const id  = req.params.id
        if (id.length != 24) {
            return res.status(400).send({
                success: false,
                message: 'Invalid id'
            })
        }

        const task = await Task.findByIdAndDelete(id)
        
       
        if (!task) {
            return res.status(400).send({
                success: false,
                message: 'Task not found with priority' + priority,
                data: []
            })
        }
        

        res.send({
            success: true,
            message: 'Task deleted successfully'
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: false,
            message: 'Error deleting task',
        })
    }
}




const updateTask = async (req, res) => {
   try {
    if(!req.body){
        res.status(400).send({
            success: false,
            message: 'Body is missing'

        })
    }

    const {id, task, deadline, priority} = req.body
    
        if(!id || id.length != 24){
            return res.status(400).send({
                success: false,
                message: 'Invalid id'
            })
        }
    
    if(!(task || deadline || priority || completed)) {
        return res.status(400).send({
            success: false,
            message: 'Incomplete data'
        })
    }
    if (!['high', 'medium', 'low'].includes(priority)) {
            return res.status(400).send({
                success: false,
                message: 'Invalid task priority'
            })
        }
    const updatedAt = new Date().toLocaleString()
    const existingTask = await Task.findByIdAndUpdate(id, {completed, task, deadline, priority}, )

    if(!existingTask){
        return res.send({
            success: false,
            message: 'Task not found'
        })
    }

    res.send({
        success: true,
        message: 'Task Updated successfully',
        data: existingTask
    })

   } catch (error) {
        console.log(error)
        res.send({
            status: false,
            message: 'Internal server error',
        })
    }


}

export { createTask, getAllTasks, getTaskById, getTaskByPriority, deleteTask, updateTask }