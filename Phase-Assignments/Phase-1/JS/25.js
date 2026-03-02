//25. Use .reduce() to find the sum of all elements in [2,4,6,8].

let arr = [2, 4, 6, 8]
let sum = 0
let res = arr.reduce((acc, curr) => {
    sum = acc + curr
    return sum
}, 0)
console.log(sum);


