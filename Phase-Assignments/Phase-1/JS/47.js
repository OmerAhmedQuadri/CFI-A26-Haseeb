//47. Write a program to count frequency of each element and store in an
// object.

let arr = ['a', 'b', 'a', 'c', 'b', 'a']
let res = arr.reduce((obj,letter)=>{
    if(!obj[letter]) obj[letter] = 1
    else obj[letter]++
    return obj
},{})

console.log(res);
