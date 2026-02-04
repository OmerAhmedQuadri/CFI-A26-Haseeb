//Question15  //code before return statement , 30,   code before function call  Function : sum(5)  code after function call
// function sum(a = 10, b = 20) {
//     console.log('code before return statement')
//     return a + b
//     console.log('code after return statement')
// }

// console.log('code before function call')
// console.log(sum(5)) //25 
// console.log('code after function call')  
//sum(5) assigned 'a' a new value
// return doesn't execute because the code written after is not executed


//Question16   //the difference is that in function 2 return is mentioned but in function 1 it is not mentioned so 1 return undefined whereas 2 has a return statement
// Function 1
// function add1(a, b) {
//     console.log(a + b)
// }

// Function 2
// function add2(a, b) {
//     return a + b
// }

// let result1 = add1(10, 20)
// let result2 = add2(10, 20)

// console.log(result1)
// console.log(result2) 



//Question17
// function getMax(a , b){
//     if(a > b){
//         return a
//     }else{
//         return b
//     }
// }

// console.log(getMax(10, 20))  // Should print: 20
// console.log(getMax(50, 30))  // Should print: 50



//Question18 Prediction: 20  30
// function multiply(a, b) {
//     return a * b
// }

// let result = multiply(5, 4)
// console.log(result)
// console.log(multiply(10, 3))



//Question19
// function calculateArea(l, b){
//     return (l*b);
// }

// console.log(calculateArea(20 , 12))


//Question20 Prediction Adult   Minor
// function checkAge(age) {
//     if (age >= 18) {
//         return 'Adult'
//     } else {
//         return 'Minor'
//     }
// }

// console.log(checkAge(25))
// console.log(checkAge(15))




//Question21
// function isEven(number){
//     if( number %2==0){
//         return true
//     }else {
//         return false
//     }
// }
// console.log(isEven(250))



//Question22
// function calculateGrade(marks){
//     if (marks >= 90){
//         return 'A'
//     }
 
//     if (marks >= 80){
//         return 'B'
//     }
 
//     if (marks >= 70){
//         return 'C'
//     }
 
//     if (marks >= 600){
//         return 'D'
//     }
 
//     if (marks < 60){
//         return 'F'
//     }
 
// }

// console.log(calculateGrade(95))  // A
// console.log(calculateGrade(75))  // C
// console.log(calculateGrade(55))  // F


