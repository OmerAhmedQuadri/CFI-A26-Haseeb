//Question1
// const nums = [5, 10, 15, 20, 25]
// sum = nums.reduce( (acc , curr) =>{
//     return acc + curr
// } ,0)
// console.log(sum);


//Question2
// const nums = [2, 3, 4, 5]
// prod = nums.reduce( (acc, curr) => {
//     return acc * curr
// } ,1)

// console.log(prod);


//Question3
// const nums = [45, 23, 67, 12, 89, 34]
// max = nums.reduce( (acc, curr) =>{
//     return acc > curr ? acc : curr
// })
// console.log(max);



// Question4
// const nums = [45, 23, 67, 12, 89, 34]
// min = nums.reduce( (acc, curr) => {
//     return acc < curr ? acc : curr
// })

// console.log(min);


//Question5
// const words = ['hello', 'world', 'javascript', 'is', 'awsome']
// const sentence = words.reduce( (acc , curr) =>{
//     return (`${acc} ${curr}`)
// })

// console.log(sentence);


//Question6
// const nums = [10, 20, 30, 40, 50]
// greaterNum = nums.find( (num) =>{
//     return num > 25
// })
// console.log(greaterNum);



//Question7
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]
// const findBob = users.find((usr)=> {
//  return usr.name == 'Bob'
// })
// console.log(findBob);


//Question8
// const index = users.findIndex((usr)=>{
//     return usr.name == 'Charlie'
// })
// console.log(index);


//Question9
// const nums = [5, 12, 8, 130, 44]
// const greaterNum = nums.findIndex( (num) =>{
//     return num > 100
// })
// console.log(greaterNum);


//Question10
const nums = [1, 2, 3, 4, 5]
let newArr = nums.reduce( (acc , curr)=> {
    console.log(acc,curr);
    
return acc+curr
},0)
console.log(newArr);

//when i don't take 0 as inital value the accumilating value takes the first element as it's value which is 1
//but when i take 0 as initial value the acc value is 0 and iterations start with acc = 0 and curr = 1




