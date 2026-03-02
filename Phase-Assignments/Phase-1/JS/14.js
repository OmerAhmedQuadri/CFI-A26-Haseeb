// 13. Write a function using filter() to find all words longer than 4
// letters in an array of strings.
let arr = [34, 22, 65, 79]
function sumOfArray(arr){
    let sum = 0
    let newArr = arr.reduce((acc,curr)=>{
        sum = acc + curr
        return sum
    })
    return newArr
}
console.log(sumOfArray(arr))

