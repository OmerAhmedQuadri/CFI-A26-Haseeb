import readlineSync from 'readline-sync'


let name = readlineSync.question('Enter your name: ')
let age = readlineSync.questionInt('Enter your age ')
let company = readlineSync.question('Where do you work: ')

console.log(`Hii ${name}
Your age is:${age}
You're working at ${company}`
)

 