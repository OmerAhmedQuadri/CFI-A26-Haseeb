//Stack follows First in last out or last in first out
class Stack {
    #data = []
    height = 0
    limit = 5
    constructor (){

    }
    top(){
        if(this.height ==0){
            console.log('Stack is empty');
            return
        }
        console.log('Top:');
        console.log(this.#data[this.height-1]);
    }

    pop(){
        if(this.height == 0){
            console.log('Stack is empty'); 
            return
        }
        this.#data.pop()
        this.height--
    }

    push(val){
        if (this.height > this.limit){console.log('Stack is full!!');
        }
        this.#data[this.height]= val
        this.height++

    }
    print (){
         if(this.height == 0){
            console.log('Stack is empty'); 
            return
        }

        console.log('Stack: ');
        for (let i = this.height-1; i >= 0; i--){
            console.log('| '+this.#data[i]+' |');
            
        }
        

    }
}

const stack = new Stack()
stack.push(21)
stack.push(23) 
stack.push(31)
stack.push(31)
stack.push(31)
stack.push(31)
stack.push(31)
stack.push(31)
stack.push(31)
stack.print()
// console.log(stack);
