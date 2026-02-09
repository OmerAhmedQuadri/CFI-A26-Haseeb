// let randomNumbers = [23, 55, 64, 76, 99, 108]
// let evenNumbers = []

// for ( let i= 0; i< randomNumbers.length; i++){
//     if(randomNumbers[i]%2==0){
//         evenNumbers.push(randomNumbers[i])
//     }
// }

// console.log(evenNumbers)


// function giveEvens(nums) {
//     let evenNumbers = []
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 0) {
//             // evenNumbers.push(nums[i])
//             evenNumbers[count++] = nums[i]
//         }
//     }
//     return evenNumbers
// }
// console.log(giveEvens(randomNumbers))


let randomNumbers = [23, 55, 64, 76, 99, 108]

function giveEvens(nums) {
    if (!(Array.isArray(nums))){
        console.log('please enter a valid array');
        return
        }
    let evenNumbers = []
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            // evenNumbers.push(nums[i])
            evenNumbers[count++] = nums[i]
        }
    }
    return evenNumbers
}

console.log(giveEvens())
