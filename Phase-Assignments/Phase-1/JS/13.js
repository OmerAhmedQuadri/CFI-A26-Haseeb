//13. Write a function using filter() to find all words longer than 4
// letters in an array of strings.
let arr = ['Javascript', 'ilovejs', 'helloworld', 'ate', 'car']
function bigWord(arr){
let newArr = arr.filter((word)=> word.length > 4)
return newArr
}
console.log(bigWord(arr));

