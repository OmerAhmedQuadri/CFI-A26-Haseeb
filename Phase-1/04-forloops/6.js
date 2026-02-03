import readlineSync from 'readline-sync'

let rows = readlineSync.questionInt('Enter the rows of the array: ')
let arr = []
// for(let i = 0; i < length; i++){
//  arr[i] = readlineSync.questionInt('enter element: ')
// }
// console.log(arr)
let cols = readlineSync.questionInt('enter the cols: ')

for(let i = 0; i < rows; i++){
    arr[i] = []
    for(let j = 0; j < cols; j++){
        arr[i][j]= readlineSync.questionInt('enter an element: ')
    }
}
console.log(arr)