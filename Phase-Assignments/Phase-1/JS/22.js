// 22. Write a program to find the average of numbers in an array.
let arr = [1, 2, 3, 4, 5]

let average = arr.reduce((acc,curr)=>{
    let sum = acc+curr/arr.le
    return sum
},0)
console.log(average);
