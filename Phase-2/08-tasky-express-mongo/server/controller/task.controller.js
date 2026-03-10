import Task from '../models/Task.js'

const createTask = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({
                success: false,
                message: 'Missing body'
            })
        }
        const {task, deadline, priority} = req.body
        if(!task || !deadline ){
            return res.status(400).send({
                success: false,
                message: 'Incomplete or Invalid Data'
            })
        }


        const existingTask = await Task.findOne({task: task})
        

        if(existingTask) return res.send({
            success: false,
            message: 'Task already exists',
            data: existingTask
        })

        const newTask = Task({task, deadline, priority})
        await newTask.save()

        res.send({
            success: true,
            message: 'Task created successfully',
            data: newTask
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message : error
        })
    }
}

export {createTask}