import fs from 'fs/promises'
import rs, { question } from 'readline-sync'
import chalk from 'chalk'
import { error, log } from 'console'

let db = './users2.json'


async function readTasks() {
    try {
        await fs.readFile(db, 'utf-8', (err, data) => {
            if (err) return console.log(err);
            const tasks = JSON.parse(data)
            console.log(tasks);

            while (true) {
                console.log('1. Create task: ');
                console.log('2. Update a task: ');
                console.log('3. Delete a task: ');
                console.log('4. Print tasks: ');
                console.log('5. Exit ');
                const choice = rs.questionInt('Enter your choice: ')
                switch (choice) {
                    case 1:
                        console.log('Enter the task below')
                        const task = {
                            id: Date.now(),
                            task: rs.question('Enter task'),
                            deadline: rs.questionInt('Enter the deadline'),
                            priority: rs.question('Enter the priority')


                        }
                }

            }

        })
    } catch (error){
        console.log(('Error'));
        
    }
} 

await readTasks()