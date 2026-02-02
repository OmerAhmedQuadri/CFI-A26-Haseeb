import readlineSync from "readline-sync"
//Question55
// let i = 1
// let max = 10
// let sum=0
// while(i<=max){
//     sum = sum + i
//     i++
// }
// console.log(sum)


//Question56
// let sum = 0
// let i = 1

// while (i <= 5) {
//     sum = sum + i
//     console.log('i:', i, 'sum:', sum)
//     i++
// }
// console.log('Total:', sum) 
// //prediction:
//i: 1  sum:1
//i: 2  sum:3
//i: 3  sum:6
//i: 4  sum:10
//i: 5  sum:15

//Total: 15


//Question57
// let i = 1
// let max = 10
// let sum=0
// while(i<=max){
//     sum = sum + i*2
//     i++
// }
// console.log(sum)


//Question58
// let i =1
// let count =0
// while (i<=100){ if(i%7==0){
//     count++
// }
// i++
// }

// console.log(count)



//Question59
let num = readlineSync.questionInt('enter a number: ')
let i = 1
let factorial = 1
while ( i<=num){
    factorial =factorial*i
    i++
}

console.log(factorial)


