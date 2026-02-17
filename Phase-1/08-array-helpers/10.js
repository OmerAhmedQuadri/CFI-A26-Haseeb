const nums = [12 , 34, 52, 31, 22]
const max = nums.reduce((acc,curr) =>{
    // console.log(acc, curr);
    
   return  acc > curr?  acc : curr
},nums[0])
console.log(max);

// const min = nums.reduce ((acc, curr) =>{
//     return acc < curr?  acc: curr
// }, nums[0])


const min = nums.reduce ((min , curr) => min < curr ? min : curr , nums[0] )

console.log(min);