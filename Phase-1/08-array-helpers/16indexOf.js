let fruits = ['apple', 'banana','orange', 'banana']
let banana = fruits.indexOf ('banana', 2)
console.log(banana);

let arr = [12, 32, 54, 96]
let index = arr.findIndex((ele)=>{
    if(ele > 50) return true
})

console.log(index);

const arr2 =[ 22, 34, NaN, 55]
const res2 = arr2.indexOf(NaN)
console.log(res2);

