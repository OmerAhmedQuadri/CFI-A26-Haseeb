import {questionInt} from 'readline-sync'

let timer = questionInt('Enter the time for stopwatch in secs: ')
for(let i = 1; i <= timer; i++){
    setTimeout( () =>{
        console.log(i);
        
    }, i*1000)
}