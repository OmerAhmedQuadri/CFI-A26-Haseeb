// 18. Use .filter() and return only positive elements in the array
// Ex: [10, -20, 30, 40, -1] -> [10, 30, 40]

let arr =  [10, -20, 30, 40, -1]
let newArr = arr.filter((num)=> num > 0)
console.log(newArr);
