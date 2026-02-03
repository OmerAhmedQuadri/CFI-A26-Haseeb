//write a program to print even numbers <=n
import readlineSync from 'readline-sync'

// let i = 2
// let max = readlineSync.questionInt('Enter an even number')
// while(i<=max){ 

//     console.log(i)
//     i+=2
// }

//version2
// let i = 2
// let max = readlineSync.questionInt('Enter an even number')
// while(i<=max){
//           if(i%2==0) {

//     console.log(i)
//        }
//     i++
// }



//write a program to print first n even numbers
// let i = 1
// let n = readlineSync.questionInt('enter a number: ')
// let even_number= 2
// while(i<=n){

// console.log(even_number)
// even_number= even_number+2
// i++

// }

// let i = 1
// let n = readlineSync.questionInt("enter a number: ")
// while(i<=n){
//     console.log(i*2)
//     i++
// }
let i = 1
let n = readlineSync.questionInt("enter a number: ")
let even_numbers= []
while(i<=n){
    even_numbers.push(i*2)
    i++
    console.log(even_numbers)
}
console.log(even_numbers)