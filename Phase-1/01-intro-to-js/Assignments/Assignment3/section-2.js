//Question11
let myFruits = ['mango', 'banana', 'kiwi']
let myVeggies =['potato','carrot','cucumber']

let basket = [myFruits,myVeggies]
console.log(basket)

//Question12
console.log(basket[0][1])

//Question13
//Prediction: first: 2
        //    second:3
         //   third:2
let fruits = ['apple', 'mango', 'banana']
let veggies = ['tomato', 'potato']
let baskett = [fruits, veggies]

console.log(baskett.length) //2
console.log(baskett[0].length) //3
console.log(baskett[1].length) //2

//Question14
let data = [10,'hello',['a','b','c']]
console.log(data[2][1])

//Question15
//prediction: first: ['x','y','z'] , second: x , third: z
let arr = [5, 'test', ['x', 'y', 'z']]
console.log(arr[2])//[ 'x', 'y', 'z' ]
console.log(arr[2][0]) //x
console.log(arr[2][2]) //z

//Question16
let students= [
    [name= 'Ali' ,
    age = 20,
    city= 'Delhi'],
    [name= 'Sara',
     age= 22,
     city='Mumbai'],
    [ name= 'John',
    age= 21,
    city= 'Bangalore']
]
console.log(students[1][2])

//Question17
console.log(students[2][1])

//Question18
let Arr1 = ['Haseeb',20,'Football','FIFA']
let Arr2 = ['Sameer',22, 'Basketball', 'NBA']
console.log(Arr1,Arr2)
let Arrs=[Arr1,Arr2]
let flatArr=Arrs.flat()
console.log(flatArr)

//Question19
let arr1 = [['a', 'b'], ['c', 'd']]
let arr2 = ['a', 'b', 'c', 'd']
console.log(arr1,arr2)
//The difference is arr1 has characters in nested arrays and
//  arr2 is a whole array of characters

//Question20
let nestedArrayy = [
    ['Haseeb',  20],
    ['Habeeb',  56],
    ['Akif'  ,  21]
       ]
console.log(nestedArrayy[1][0])

