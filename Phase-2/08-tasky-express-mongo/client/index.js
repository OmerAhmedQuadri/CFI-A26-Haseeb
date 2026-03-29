import rs from 'readline-sync'
import axios from 'axios'
import chalk from 'chalk';
import { createTask, deleteTask, getAllTasks, getTaskById, getTaskByPriority, updateTask } from './controller.js';


const cli = async () =>{
    const OPTIONS =  {
        1: getAllTasks,
        2: getTaskById,
        3: getTaskByPriority,
        4: createTask,
        5: updateTask,
        6: deleteTask
        // 0: Exit
    }

    while (true) {
        console.log('===TASKY===');
        console.log('1. Get all tasks');
        console.log('2. Get task by id');
        console.log('3. Get task by priority');
        console.log('4. create a new task');
        console.log('5. update task');
        console.log('6. delete task');
        console.log('0. Exit');

        const choice = rs.questionInt('Enter your choice: ')

        if(!choice) return console.log(chalk.redBright('Exiting....'))
        
        if(!OPTIONS[choice]) {
            console.log(chalk.redBright('Invalid choice!'));
            continue
        }
        await OPTIONS[choice]()
        
    }
}

cli()