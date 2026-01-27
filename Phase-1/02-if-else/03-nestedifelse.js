// const name = 'yash'
// const marks = 80
 
// if (name =='haseeb') {
//     if (marks >90) {
//         console.log('haseeb has passed')
//     }
//     else if(marks > 70){
//         console.log('haseeb has just passed')
//     }
//     else {
//         console.log('haseeb has failed')
//     }
    
// }

// else if (name == 'yash') { 
// if (marks > 90 ) {
//     console.log('yash has scored')
// }

// else if (marks > 60) {
//     console.log('yash has just passed')
// }
// else {
//     console.log('yash has failed')
// }
// }

// let a = 20 
// let b = 100
// let max
// if (a>b) {
//     max = a
// }
// else {
//     max = b
// }
// //string or template literal - using backticks (`)
//  console.log(`Max value is : ${max}`)
//  console.log(`${b}`)

const price = 500
let discount= 0
if (price > 1000){
    discount = 30
} else if ( price >= 500){
    discount = 20
}
else {
    discount = 15
}
console.log(`Your discount is ${discount}%`)