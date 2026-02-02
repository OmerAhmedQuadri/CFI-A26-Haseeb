import readlineSync from 'readline-sync'
//Question47

// let name = readlineSync.question('Enter your name: ')
// let age = readlineSync.questionInt('Enter your age: ')

// console.log(`Hello ${name}, you are ${age} years old`)


// in terminal it gives 
// enter your name
//enter your age
//Hello name, you are age years old


//Question48
// let str= ''
// let i = 0
// let name = readlineSync.question('Enter a name: ')
// while (i<5){
//     console.log('Welcome',name+'!')
//     i++
// }


//Questin49
// let str = ''
// let i = 0
// let max = readlineSync.questionInt('Enter a number: ')

// while (i < max) {
//     str = str + '* '
//     console.log(str)
//     i++
// }
// we get a pattern of acsending * lines based on our input


//Question50
// let i = 1
// let max = readlineSync.question('Enter a number: ')
// while(i<=max){
//     console.log(i)
//     i++
// }


//Question51
// let i = 0
// let name = readlineSync.question('Enter your name: ')
// let times = readlineSync.questionInt('how many times? ')
// while (i<times){
//     console.log(name)
//     i++
// }


//Question52
//The difference between question and questionInt is that question can take any value
//but questionInt takes only integer value 


//Question53
// let i = 1
// let num = readlineSync.questionInt('Enter a number: ')
// while(i<=10){
//     console.log(`${num} x ${i} = ${num*i}`)
//     i++
// }


//Question54
let i =0
let str = ''
let rows = readlineSync.questionInt('Enter a number: ')
while(i<rows){
      str = str + '* '
      i++
      console.log(str)
}



