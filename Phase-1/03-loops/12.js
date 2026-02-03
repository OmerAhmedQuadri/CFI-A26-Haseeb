//Question find the sum of first n natural numbers
import readline, { questionInt } from 'readline-sync'

let i = 1 
let max = readline.questionInt ('Enter a number:')
let sum = 0
while(i<=max){
    sum = sum+i
    i++
}
console.log('final sum:',sum)