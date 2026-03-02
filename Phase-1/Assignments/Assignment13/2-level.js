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
// class Temperature  {
//     #celcius
//     constructor(celcius){
//      this.#celcius = celcius
//     }
    
//     getCelcius(){
//         return this.#celcius
//     }
//     getFahrenheit(){
//         return this.#celcius*9/5+32
//     }
//     getKelvin(){
//         return this.#celcius + 273.15
//     }
//     setCelcius(val){
//         if(val >= -273.15){
//             return this.#celcius = val
//         }
//         else{
//             return 'Enter valid Celcius temperature'
//         }
        
//     }
// }
// const temperature = new Temperature(50)
// console.log(temperature.getCelcius());
// console.log(temperature.getFahrenheit());
// console.log(temperature.getKelvin());
// console.log(temperature.setCelcius(8));





//Question10
class ShoppingCart {
    #items 
    constructor(){
        this.#items = []
        
    }
    addItem(name, price, quantity){
        const item = {name, price, quantity}
     this.#items.push(item)   
    }
    removeItem(name){
       this.#items = this.#items.filter(item => item.name != name)
    }
    getTotal(){
        let total = 0 
        for(let i = 0; i <this.#items.length; i++){
          total += this.#items[i].price * this.#items[i].quantity
        }
        console.log(total);
        return  
    }
    getItemCount(){
        console.log(this.#items.length)
        return
    }
    displayCart(){
        console.log(this.#items);
        
    }

}
const cart = new ShoppingCart()
cart.addItem('apple', 20, 4)
cart.addItem('banana', 10, 4)
cart.addItem('strawberry', 50, 3)
cart.removeItem('apple')
cart.getItemCount()
cart.getTotal()
cart.displayCart()





