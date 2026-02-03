//write a program to print first n odd numbers
import readlineSync from 'readline-sync'
let i = 1
const odd_numbers=[]
let max = readlineSync.questionInt('enter a number: ')
while(i<=max){
    odd_numbers.push(i*2-1)
    i++
}
console.log(odd_numbers)