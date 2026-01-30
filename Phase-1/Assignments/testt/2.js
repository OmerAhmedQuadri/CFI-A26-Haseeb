import readlineSync from 'readline-sync'

let num = readlineSync.questionInt('Enter Year')
if (num%4==0){
    console.log('It is a leap year');
    
}else{
    console.log('It is not a leap year');
    
}