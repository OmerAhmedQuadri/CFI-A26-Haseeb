// function factorial (num){
//     if(num==1) return 1
//     return num*factorial(--num)

// }
// console.log(factorial(6));
// in functions the function is stored in heap memory and the block is also stored in heap
// but when it is called it comes to stack memory

function finalSum(num){
    if(num==0) return 1
    return num + finalSum(num-1)
}

console.log(finalSum(5))