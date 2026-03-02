import { questionInt } from "readline-sync";

class Queue{
    #data = []
    #limit
    constructor(limit = Infinity){
        if(limit < 2 || isNaN(limit) || typeof limit != 'number'){
            throw new Error ('Please enter a valid queue limit')
        }
        this.#limit = limit
    }
    enQueue(ele){
        if(this.#data.length >= this.#limit){
            console.log('Queue is full!!');
            
            return 
        }
        this.#data.push(ele)
    }
    deQueue(){
        if(this.#data.length == 0){
            return 'Stack is empty!'
        }
        this.#data.shift()
    }
    get front(){
        if(this.#data.length == 0){
            return 'Stack is empty!'
        }
        console.log(this.#data[0]);
       
    }
    print(){
        if(this.#data.length == 0){
            return 'Queue is empty!'
        }
        
        console.log('Front-->',this.#data.join(' '));
        
        
    }
    get length(){
        return this.#data.length
    }
}


function createQueue(){
    const limit = questionInt('Enter the desired length of the queue: ')
    const queue = new Queue(limit)

while(true){
    console.log('\n===Queue Operations===');
    console.log('1. Enqueue');
    console.log('2. Dequeue');
    console.log('3. Front');
    console.log('4. Print');
    console.log('5. Exit');
    
const choice = questionInt('Enter your choice: ')
switch (choice) {
    case 1:
        let ele = questionInt('Enter the element: ')
        queue.enQueue(ele)
        break;
    case 2: 
    let removed = queue.deQueue()
    if(removed!= undefined) console.log('Removed Element: '+removed);
    break
    case 3: 
    queue.front
    break
    case 4:
        queue.print()
        break
    case 5: 
    return

    default:
        break;
}
}


}
createQueue()