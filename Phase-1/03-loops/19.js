//write a program to print elements in reverse order
// let arr = [12, 31 , 54 , 65 , 23]
// let i = arr.length - 1
// while(i>=0){
//     console.log(arr[i])
//     i--
// }


let arr2 = [67 , 12, 20 , 54 , 32 , 45]
let arr = []
let i = arr2.length-1
while(i>=0){
    arr[arr2.length-i-1]= arr2[i]
    i--

}
console.log(arr)