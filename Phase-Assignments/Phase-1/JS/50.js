//50. Write a program to generate 10 random numbers in an Array (ranging
// from 1 to 100). After generating the 10 random numbers, find the Mean,
// Mode, and Median values of those Array elements.

let nums = []
let sum = 0
for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor((Math.random() * 10) + 1)
    sum = sum + nums[i]
}
console.log(nums);


let mean = sum / nums.length
console.log(mean);

nums.sort((a, b) => a - b)
console.log(nums);
let median

if (nums.length % 2 == 0) {
    median = (nums[nums.length / 2] + nums[(nums.length / 2) - 1]) / 2
} else {
    median = num[num.length / 2]
}

console.log(median);

let freqq = nums.reduce((obj, curr) => {
    obj[curr] = (obj[curr] || 0) + 1
    return obj

}, {})

console.log(freqq);

let maxFreq = Math.max(...Object.values(freqq))

if (maxFreq == 1) {
    console.log('All values appeared just once');
}
else {
    let mode = Object.keys(freqq).filter(num => freqq[num] == maxFreq)
    console.log(mode.join(', '));

}
