import readlineSync from 'readline-sync'
// do {
//     console.log('hello');
//                                                  // do while executes the code atleast once even though the condition is false because the condition is checked after
// } while (0);

// let i = 900
// let n = 100
// do{ 
//     if(i%3==0)
//     console.log(i)                
    
//     i++
   
// }
// while(i<=n)


let oneTimePassword = 4444
let userInput 
let count = 0
let allowedAttempts = 5
let loginStatus = true 
do {
     if(allowedAttempts==count){
        loginStatus= false
        break
     }
     count++


    userInput= readlineSync.questionInt('enter the OTP: ')

}while(userInput != oneTimePassword)
loginStatus? console.log('you have logged in successfully'):console.log('failed')