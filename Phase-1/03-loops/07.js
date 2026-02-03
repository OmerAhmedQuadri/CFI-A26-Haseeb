import readline from 'readline-sync'  //npm is node package manager
// *
// * *
// * * *
let str =''
let i = 0
let max = readline.questionInt('Enter a number: ')
//console.log(typeof max)
while (i<max){
    str=str+"* "
    console.log(str)
    i++
}

console.log('rest of the code')