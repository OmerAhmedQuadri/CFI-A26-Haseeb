//8. Create a function sumOfArray(arr) that takes an array of numbers and
// returns the sum of the elements of the array.
let arr = [1, 2, 3, 4, 5]
function sumOfArray(arr) {
    for(let i = 0; i< arr.length; i++){
        if(typeof arr[i]!= 'number' || isNaN(arr[i])){
            throw new Error ('Please enter a Array with valid elements')
        }
    }
    let newArr = arr.reduce((acc, curr) => {
        let sum = 0
        sum = acc + curr
        return sum
    })
    return newArr
}
console.log(sumOfArray(arr));
//15


