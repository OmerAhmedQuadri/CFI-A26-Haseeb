// class Stack{
//     #data = []
//     #limit
//     constructor(size = Infinity){
//         if(size < 0 || isNaN(size) || typeof size != 'number'){
//             throw new Error ('Please enter a valid stack size')
//         }
//         this.#limit = size
//     }
//     push(ele){
//         if(this.#data.length >= this.#limit){
//            console.log( 'Stack is full')
//            return 
//         }
//          this.#data[this.#data.length] = ele

           
//     }
//     pop(){
//         if(this.#data.length == 0){
//             return 'Stack is empty'
//         }
//         return this.#data.pop()
//     }
//     top(){
//         if(this.#data.length == 0 ){
//             return 'Stack is empty'
//         }
//         return this.#data[this.#data.length-1]
//     }
//     print(){
//         if(this.#data.length == 0){
//             console.log('Stack is empty');
//             return
//         }
//         console.log('Stack: ')
//         for(let i=0; i < this.#data.length; i++){
//             console.log('|',this.#data[i],'|');
            
//         }
//     }
//     get height(){
//       return this.#data.length
//     }

// }

// const stack = new Stack(3)
// stack.push(12)
// stack.push(14)
// stack.push(15)
// stack.print()
// console.log(stack.height)




// function createStack(){
    
// }









class Stack {
    #data = []
    #limit
    constructor(size = Infinity){
        if(size < 0 || typeof size != 'number' || isNaN(size))
            throw new Error ('please enter a valid stack size')
        this.#limit = size
    }
    push(val){
        if(this.#data.length >= this.#limit){
            return 'Stack is full'
        }
        this.#data.length = val
    }
    pop(){
        if(this.#data.length == 0){
            return 'Stack is empty'
        }
    }
    print(){
        return 
    }
}
const s1 = new Stack(4)
console.log(s1.push(12));



