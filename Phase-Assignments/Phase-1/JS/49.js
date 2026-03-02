//49. Write a program to find the largest and the smallest number in an
// array (both with and without sorting).

let arr = [3, 1, 9, 4, 7]
//without sorting
// let max = arr[0]
// let min = arr[0]
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log(max);
// console.log(min);

//with sorting
for(let i = 0 ; i< arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[j] < arr[i]){
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }

    }
    
}
console.log(arr);
let min = arr[0]
let max = arr[arr.length-1]
console.log(min);
console.log(max);




