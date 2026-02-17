//Question1
// const car = {

//     brand : 'Toyota',
//     model : 'Camry',
//     year : 2020,
//     price : 2500000
//     , getInfo(){
//         return (`${this.brand} ${this.model} (${this.year}) - ${this.price}`);

//     }
// }
// console.log(car.getInfo())


//Question2
// const calculator ={
//     num1: 0,
//     num2: 0, 
//     setNumbers(a,b){
//        console.log( a , b)
//     },
//     add(a,b){
//         console.log( a+b)
//     },
//     subtract(a,b){
//         console.log( a-b)
//     },
//     multiply(a,b){
//         console.log( a*b)
//     },
//     divide(a,b){
//         if(a ==0 &&b ==0){
//             console.log( 'The number cannot be 0')
//         }
//         else console.log( a/b)
//     }
// }

// calculator.setNumbers(12,13)
// calculator.add( 34,35)
// calculator.subtract(65,32)
// calculator.multiply(12,4)
// calculator.divide(26,13)



//Question3
// const student = {

//     name: 'Rahul',
//     marks: [85, 90, 78, 92, 88],
//     getAverage(arr) {
//         let average = 0
//         for (let i = 0; i < arr.length; i++) {
//             average = average + arr[i]
//         }
//         return average / arr.length
//     },
//     getHighest(arr) {
//         let greatest = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] > greatest){
//                 greatest = arr[i]
//             }
//         }   
//         return greatest
//     },
//     getLowest(arr){
//         let lowest = arr[0]
//         for(let i = 1; i < arr.length; i++){
//             if(arr[i] < lowest){
//                 lowest = arr[i]
//             }
//         }
//         return lowest
//     },
//     hasPassed(arr){
//     if(this.getAverage(arr) >= 50){
//         return 'Passed'
//     }else { 
//         'Failed'
//     }

//     }
// }
// console.log(student.getAverage(student.marks));
// console.log(student.getHighest(student.marks));
// console.log(student.getLowest(student.marks));
// console.log(student.hasPassed(student.marks));



//Question4
// const counter = {
//     count : 0,

//     increment(){
//     return ++this.count   
//     },
//     decrement(){
//         return --this.count
//     },
//     reset(){
//         return this.count = 0
//     },
//     getValue(){
//     return this.count
//     }


// }
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.decrement());
// console.log(counter.reset());



//Question5
// const product = {
//     name : 'Laptop',
//     price : 50000,
//     discount : 0,
//     applyDiscount(percentage){
//     if(isNaN(percentage) || percentage < 0 || typeof percentage != 'number')
//         return 'Please enter a valid discount'
//     else{
//         return this.discount = percentage
//     }
//     },
//     getFinalPrice(){
//         return this.price = this.price - this.price*this.discount/100
//     },
//     removeDiscount(){
//         return discount = 0
//     }
                   
// }

// console.log(product.applyDiscount(10));
// console.log(product.getFinalPrice());
// console.log(product.removeDiscount());









