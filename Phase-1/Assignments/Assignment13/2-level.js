//Question6
// class BankAccount{
//     #balance
//     constructor(accountHolder , initialBalance){
//         this.accountHolder = accountHolder
//         this.#balance = initialBalance
//     }
//     deposit(amount){
//         if(amount < 0 || isNaN(amount) || typeof amount != 'number'){
//             return 'Please enter valid amount'
//         }else{
//             return this.#balance += amount
//         }
//     }

//     withdraw(amount){
//         if(amount <= 0 || isNaN(amount) || typeof amount != 'number'){
//             console.log ('Please enter a valid amount')
//         }
//         else if(amount > this.#balance){
//             console.log( 'Insufficient Funds')
//         }
//         else if(amount <= this.#balance){
//             this.#balance = this.#balance - amount
            
//         }

//     }
//     getBalance(){
//         return this.#balance

//     }
//     getAccountInfo(){
//         return (`${this.accountHolder} , ${this.#balance} `)
//     }
// }
// const user1 = new BankAccount ('Haseeb' , 450)
// console.log(user1.deposit(50))
// user1.withdraw(2)
// console.log(user1.getBalance());
// console.log(user1.getAccountInfo());




//Question7
// class Rectangle {
//     width = 0 
//     height = 0
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
//     getArea(){
//         return this.width*this.height
//     }
//     getPerimeter(){
//         return 2*(this.width + this.height)
//     }
//     isSquare(){
//         if(this.width == this.height)
//             return true
//         else{
//             return false
//         }
//     }
//     scale(factor){
//         return (factor*this.width , factor*this.height)
//     }
// }
// const rectangle = new Rectangle(12 , 12)
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());
// console.log(rectangle.isSquare());
// console.log(rectangle.scale(3));



//Question8
// class Todolist {
//     #todos
//     constructor(...tasks){
//     this.#todos = tasks
//     }
//    addTodo(task){
//      this.#todos.push(task)
      
//    }
//    removeTodo(index){
//     this.#todos.splice(index,1)

//    }
//    getTodos(){
//     return this.#todos
//    }
//    getTodoCount(){
//     return this.#todos.length 
//    }
//    clearAll(){
//     return 
//    }
// }

// const list = new Todolist('finish coding', 'eat lunch', 'complete assignment')
// console.log(list.addTodo('pray'));
// console.log(list.removeTodo(1));
// console.log(list.getTodos());
// console.log(list.getTodoCount()); //incomplete



//Question9
const Temperature = {
    
}





