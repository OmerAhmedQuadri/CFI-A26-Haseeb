import readline from 'readline-sync'
class Queue {
    #data = []
    #limit
    constructor(limit = Infinity) {

        if (limit < 2 || isNaN(limit) || typeof limit != 'number') {
            throw new Error('Please enter a valid queue limit')
        }
        this.#limit = limit

    }
    get limit() {
        console.log(this.#limit);
        return this.#limit

    }
    get front() {
        console.log(this.#data[0]);

    }



    enQueue(ele) {
        if (this.#data.length == this.#limit) {
            console.log('Queue is full')
            return
        }
        this.#data.push(ele)

    }
    deQueue() {
        if (this.#data.length == 0) {
            console.log('Queue is empty');

        }
        this.#data.shift()
        this.print(this.#data)



    }
    print() {
        if (this.#data.length == 0) {
            return console.log('Queue is empty');
        }
        console.log('Front--> ' + this.#data.join(' '));
    }
}


function createQueue() {
    const size = readline.questionInt('Enter the size of the Queue: ')
    const myQueue = new Queue(size)
    console.log('Queue created successfully!');

    while (true) {
        console.log('\n====Queue Operations====');
        console.log('1: Enqueue');
        console.log('2: Dequeue');
        console.log('3: Front');
        console.log('4: Print');
        console.log('5: Exit');



        const choice = readline.questionInt('Enter your choice: ')

        switch (choice) {
            case 1: myQueue.enQueue(readline.questionInt('Enter the number'))
                break
            case 2:
                const removed = myQueue.deQueue()
                if (removed != undefined) console.log('Removed element: ' + removed);
                break
            case 3:
                myQueue.front
                break
            case 4:
                myQueue.print()
                break
            case 5:
                return
            default:
                break


        }

    }
}


createQueue()
