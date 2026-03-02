import { questionInt } from "readline-sync"
class Stack {
    #data = []
    #limit
    constructor(size = Infinity){
        if(size < 2 || typeof size != 'number' || isNaN(size)){
            throw new Error ('Please enter a valid stack size')
        }
        this.#limit = size

    }
    push(val){
        if(this.#data.length >= this.#limit){
            console.log('Stack is full')
            return
        }
          this.#data[this.#data.length] = val
    }
    pop(){
        if(this.#data.length == 0){
            return 'Stack is empty'
        }
        this.#data.pop()
    }
    top(){
        if(this.#data.length == 0){
            return 'Stack is empty'
        }
        return this.#data[this.#data.length-1]
    }
    get height (){
        if(this.#data.length == 0){
            return 'Stack is empty'
        }
        console.log(this.#data.length)
    }
    print(){
        if(this.#data.length == 0){
            return 'Stack is empty'
        }
        for(let i = this.#data.length-1 ; i >= 0 ; i--){
           console.log (' |',this.#data[i],'| ');
            
        }
        return
        
    }

}

function createStack(){
    const size = questionInt('Enter the size of the Stack: ')
    const stack = new Stack(size)
while(true){
    console.log('\n====Stack Operations===');
    console.log('1. Push'); 
    console.log('2. Pop'); 
    console.log('3. Height'); 
    console.log('4. Top'); 
    console.log('5. Print'); 
    console.log('6. Exit'); 

    const choice = questionInt('Enter your choice: ')
    
    switch (choice) {
        case 1:
            let val = questionInt('Enter the value: ')
            stack.push(val)
            break;
        case 2:
            let removed = stack.pop()
            if(removed != undefined) console.log('Removed element = ',removed);
            break
        case 3:
            stack.height
            break
        case 4: 
            stack.top()
            break
        case 5: 
        stack.print()
            return
        case 6:
            return
    
        default:
            break;
    }
    
    

}

}

createStack()