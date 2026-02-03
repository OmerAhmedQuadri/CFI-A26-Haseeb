import readlineSync from 'readline-sync'
//a
//a a a
//a a a a a
//a a a a a a a
let i = 1
let max = readlineSync.questionInt('Enter a number:')
let str = 'a '
while(i<max){
    console.log(str)
    str= str + 'a a '
    i++
}
