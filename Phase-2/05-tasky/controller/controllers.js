import { readDB,writeDB } from "../models/models";



const getAllTasks = async (req, res) => {
    const data = readDB()
    res.json(data)
}

const getTaskById = async (req,res) =>{
    const id = req.params.id
    const data = await readDB()

    const task = data.find((task)=> task.id == id)

    if(!task) return res.json({status : false, message: 'task not found'})

    res.json({status: true, message: 'task fetch successfully', task: task})
}



export {getAllTasks, getTaskById}