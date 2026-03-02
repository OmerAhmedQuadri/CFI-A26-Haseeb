import {questionInt} from 'readline-sync'

// let timer = questionInt('Enter the time for timer in secs: ')
// for(let i = 1; i <= timer; i++){
//     setTimeout( () =>{
//         console.log(i);
        
//     }, (timer - i+1)*1000)
// }












let timer = questionInt('Enter the number for timer: ')
for(let i = timer; i > 0 ; i--){
setTimeout(()=>{
    console.log(i)
},(timer- i+1)*1000)
}

