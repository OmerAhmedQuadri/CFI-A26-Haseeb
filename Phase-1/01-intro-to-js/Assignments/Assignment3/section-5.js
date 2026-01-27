//Question41
let arr = [
    {
      name: 'PS5',
      price: 50000,
      inStock:true
    },
    {
      name:'XBox',
      price:40000,
      inStock:true
    },
    {
        name:'NintendoSwitch',
        price: 30000,
        inStock: false

    }
]

//Question42
console.log(arr[1].price) //40000


//Question43
let obj = {
    arr: [
        name='haseeb',
        age=20

    ]
}
console.log(obj.arr[1])


//Question44 predicted: fruits: apple,mango,banana ,basket(0):apple,mango,banana 
let fruits = ['apple', 'mango']
let veggies = ['tomato', 'potato']
let basket = [fruits, veggies]

basket[0].push('banana')
console.log(fruits) //[ 'apple', 'mango', 'banana' ]
console.log(basket[0]) //[ 'apple', 'mango', 'banana' ]


//Question45
let student= {
    name:'Haseeb',
    age:20,
    rollNumber:31,
    marks:[
        56,
        67,
        87
    ]
}
console.log((student.marks[0]+student.marks[1]+student.marks[2])/3)

//Question46
let obj4={
    name:'Haseeb',
    age:20
    
}
let obj5={
    name:'Haseeb',
    age:20
    
}
console.log(obj4==obj5) //false

//Question47 Prediction : 10,2,3  length: 3
let arr1 = [1, 2, 3]
arr1.push(4)
arr1[0] = 10
arr1.pop()
console.log(arr1) //[ 10, 2, 3 ]
console.log(arr1.length) //3


//Question48
let school={
    name:'ABC School',
    address:{
        city:'Hyderabad',
        pincode:500001
    },
    students:[
     student1="Haseeb",
     student2="tim",
     student3="Imran"
    ]
}

console.log(school.address.city)



//Question49
// Case 1
// let obj2 = obj1

// // Case 2  
// let obj2 = { ...obj1 }
// the difference is that in case 1 we are giving obj2 the reference of obj1
//but in case 2 we are giving obj2 the spread version of obj1 which != obj1

//Question50
let array = [
    {
        arr1:[
            name="Haseeb",
        ],
        arr2:[
            hobbies="gaming"
        ]
    },
    {
        arr3:[
            name="Imran",
        ],
        arr4:[
            hobbies='basketball'
        ]
    }
]
console.log(array)