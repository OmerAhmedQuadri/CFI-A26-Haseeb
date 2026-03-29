import rs from 'readline-sync'
import chalk from 'chalk'
import axios from 'axios'


class CLI {
    #BASE_URL = 'http://localhost:3000'
    constructor() {
        console.clear();
        this.selectedTask = null
        this.tasks = null
        this.app = axios.create({
            baseURL: this.#BASE_URL,
            timeout: 5000,
            validateStatus: (status) => status < 500
        })
    }

    async start() {
        this.OPTIONS = {
            // 1: this.getAllTasks.bind(this),
            // 2: this.getTaskByPriority.bind(this),
            // 3: this.createTask.bind(this),
            // 4: this.updateTask.bind(this),
            // 5: this.deleteTask.bind(this)
        }

        console.log('\n\n===TASKY===');
        console.log('1. All tasks');
        console.log('2. Tasks by priority');
        console.log('3. Create a task');
        console.log('4. Update a task');
        console.log('4. Delete a task');
        console.log('0. Exit');

        const choice = rs.questionInt('Enter your choice: ')

        if(!choice) {
            console.log(chalk.redBright('Exiting...'));
            process.exit(0)
        }
        if(!this.OPTIONS[choice]) {
            console.log(chalk.redBright('Invalid choice!'));
            return await this.start()
        }

        await this.OPTIONS[choice]()

        await this.start()
    }
    async getAllTasks() {
        try {
            const response = await this.app('/api/tasks')
            if(!response.data.success){
                return console.log(chalk.redBright(response.data.message));            
            }
            console.log(chalk.greenBright(response.data.message));
            this.tasks = response.data.data
    
            await this.printTasks()
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }
    
    async getTaskByPriority() {
        try {
             const priority = rs.question('Enter the task priority: ') || 'high'
             const response = await this.app.get(`/api/priority/${priority}`)

             if(!response.data.success){
                return console.log(chalk.redBright(response.data.message));                
             }

             console.log(chalk.greenBright(response.data.message))

             this.tasks = response.data.data
            this.printTasks()
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }


    async printTasks() {
        try {

            if(!this.tasks || this.tasks.length == 0) {
                return console.log(chalk.redBright('Tasks not found'));
            }

            console.log(chalk.blueBright('-----------------------'));

            this.tasks.forEach( (t, i) => {
                if(t._id == this.selectedTask) {
                    console.log(chalk.bgYellow('Task' + (i + 1) + ': ' + t.task));
                    console.log('Deadline: ' + t.deadline);
                    console.log('Priority: ' + t.priority);
                    console.log('Completed: ' + t.completed);
                    console.log(chalk.blueBright('--------------------------'));
                } else {
                    console.log('Task' + (i + 1) + ': ' + t.task);
                    console.log('Deadline: ' + t.deadline);
                    console.log('Priority: ' + t.priority);
                    console.log('Completed: ' + t.completed);
                    console.log(chalk.blueBright('--------------------------'));   
                }
            })

            const choice = rs.question('Select from the above task?: ')
            if(choice) await this.selectATask()


        } catch (error) {
            console.log(chalk.redBright(error));
            
        }
    }

    async selectATask() {
        let index = rs.question('Enter the task index: ')
        index--
        if(index < 0 || index >= this.tasks.length) {
            return console.log(chalk.redBright('Invalid index'));
        }
        this.selectedTask = task.tasks[index]._id
    }

    




}
