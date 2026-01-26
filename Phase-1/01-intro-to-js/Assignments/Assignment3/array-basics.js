//Question 1,2,3
let myInfo =[ "Haseeb", 20 , 'Hyderabad' , true]
console.log(myInfo[1])
myInfo[2] = "Bangalore"
console.log(myInfo)

//Question4
let colors= [ 'red' , 'yellow' , "blue"]
colors.push('orange','violet')
console.log(colors)

//Question5
let numbers = [ 5,10,15,20,25]
numbers.pop()
console.log(numbers)

//Question6
// the output is 4 and 3
let arr = [10, 20, 30, 40]
console.log(arr.length)//4
console.log(arr[arr.length - 1])//40
//first output was right
//explanation for (arr[arr.length-1]) is that we are printing arr[some value]so when arr.lenght-1 happens
//it subtracts 4-1 (length) then the value becomes arr[3] so it returns the third index which is 40.
//the explanation is for my refrence...

//Question7
let fruits = ['mango', 'banana', 'kiwi']
fruits.shift()
console.log(fruits)

//Question8
let animals = ['lion','tiger']
animals.unshift('zebra','giraffe')
console.log(animals)

//Question9
let numberss= [1, 2 , 3, 4 ,5]
numberss[numberss.length] = 6
    console.log(numberss) 

//Question10
//Array: ['eraser','pen', 'book', 'bag']
//length : [4]
let items = ['pen', 'book', 'bag']
items.push('pencil')
items.pop()
items.unshift('eraser')
console.log(items)// ['eraser','pen','book','bag']
console.log(items.length)// 4


