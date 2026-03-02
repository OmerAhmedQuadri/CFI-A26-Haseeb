import fs from 'fs/promises'
import chalk from 'chalk'
import rs from 'readline-sync'

const db = './tasks.json'

async function dbInit() {
    try {
        await fs.access(db)
        const tasks = await readDB()
        if(!Array.isArray(tasks)){
            console.log('DB is corrupted initializing new DB');
            await writeDB([])
        }
    } catch (error) {
        console.log('DB not found , inititalizing new DB');
        await writeDB([])
        await dbInit()
    }
}

async function readDB() {
    try {
        const data = await fs.readFile(db, 'utf-8')

        return JSON.parse(data)
    } catch (error) {
        fs.writeFile(db, '[]')
        return readDB()
    }
}
async function writeDB(tasks) {
    try {
        const data = JSON.stringify(tasks, null, 4)
        await fs.writeFile(db, data)
    } catch (error) {
        console.log(error);
    }
}

async function printTasks() {
    try {
        const data = await readDB()
        console.log('Tasks: ');
        console.log(data)
    } catch (error) {
        console.log('Error printing the tasky');
    }
}

async function createTask() {
    try {
        const presetPriorities = ['high', 'medium', 'low']
        const tasks = await readDB()
        const newTask = {
            id: Date.now(),
            task: rs.question('Enter the task name: '),
            deadline: rs.question('Enter the deadline (dd/mm/yyyy): '),
            priority: rs.question('Enter the priority (high/medium/low): ')
        }
        if (!presetPriorities.includes(newTask.priority)) {
            console.log('Set your priorities right');
            return await createTask()
        }
        tasks.push(newTask)
        await writeDB(tasks)
        console.log('Task created successfully');
        
        
    } catch (error) {
        console.log('error creating a task');
    }
}

async function updateTask(){
    try{
        const taskId = rs.questionInt('Enter the task Id: ')
        const tasks = await readDB()
        const taskIndex = tasks.findIndex(t => t.id == taskId)
        if(taskIndex == -1){
            return console.log('Task not found');
        }
        const newTask = {
            ...tasks[taskIndex],
            priority: rs.question('Enter new priority'),
            deadline: rs.question('Enter new Deadline (dd/mm/yyyy)')
        }
    }catch(error){

    }
}

async

function tasky() {
    while (true) {
        console.log('=====TASKY=====');
        console.log('1. ');


    }
}