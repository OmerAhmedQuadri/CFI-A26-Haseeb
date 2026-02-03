//Question16 Prediction:  [11, 22, 33] [111, 222, 333, 444]   [1000, 2000, 3000]
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i])
// }
//max.length gives 3

//Question17 Prediction: all elements from 11 to 3000  then the sum
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]

// let sum = 0
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         sum = sum + matrix[i][j]
//         console.log(matrix[i][j])
//     }
// }
// console.log(sum) //6732



//Question18  Prediciton: 110 till 30000 the elements get multiplied by 10
// let matrix = [
//     [11, 22, 33],
//     [111, 222, 333, 444],
//     [1000, 2000, 3000]
// ]

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         matrix[i][j] = matrix[i][j] * 10
//         console.log(matrix[i][j])
//     }
// }


//Question19
// let arr =
// [
//   [1, 2, 3], [4, 5, 6], [7, 8, 9]
// ]
// let sum = 0
// for(i = 0; i < arr.length; i++){
//     for(j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j])
//         sum = sum + arr[i][j]
//     }
// }

// console.log(sum)

//Question20
let matrix = 
[
   [10, 20, 30, 40],
   [50, 60, 70, 80]

]

for(i = 0; i < matrix.length; i++){
    for(j = 0; j < matrix[i].length; j++ ){
        matrix[i][j] = matrix[i][j]*2
        console.log(matrix[i][j])
    }
}



//bonus question
/*
difference between while loop and for loop in while loop we declare , compare and increment in different steps
but in for loop we do it in the  same time
*/

//bonus Question2
for(i = 5; i >= 1; i--){
    
    let str = ''
    for(j = i; j > 0; j--){
        
        str = str + j + ' '
    }  
    console.log(str)
}