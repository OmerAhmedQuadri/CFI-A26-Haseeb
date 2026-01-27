//Question29
let student={
    name: 'Haseeb',
    age: 20,
    city: 'Hyderabad'
}
console.log(student) //{ name: 'Haseeb', age: 20, city: 'Hyderabad' }

//Question30
console.log(student.name) //Haseeb

//Question31
student.marks = 85
console.log(student) //{ name: 'Haseeb', age: 20, city: 'Hyderabad',marks: 85 }


//Question32
// let full address = {
//     stno: 23
//     ,landmark:'fire station'
// }

// console.log(fulladdress.landmark) // it gives error becase it is not properly declared

//Question33 prediction: omer , 21 , Hyderabad
const person = {
  name: 'Omer',
  age: 21
}

person.city = 'Hyderabad'
console.log(person)

//Question34
let car = {
    brand: 'Ford',
    model: 'Mustang',
    year:1970
}
delete car.year
console.log(car)

//Question35 prediction first:john123  second:john@example.com
const user = {
  'user name': 'john123',
  'email address': 'john@example.com'
}

console.log(user['user name'])
console.log(user['email address'])

//Question36
let phone = {
    brand: 'Apple',
    price: 120000,
    color: 'black'


}

phone.price =140000
console.log(phone)

//Question37
// const personn =
//     'full name': 'Omer Ahmed'
//     ,age:21                    //we get a syntax error if we remove the bracket because that is not how we declare an object 

// console.log(personn)



//Question38
let book = {
    title:'red dead redemption',
    author:'arthur morgan',
    pages:350,
    isAvailable:true
}
console.log(book)


//Question39
const obj = { name: 'Omer' }
console.log(obj.age)  //undefined


//Question40
let objj={
    name:'Haseeb',
    age:20,
    Address:'Hyderabad',
    Team:'Real Madrid',
    titles:100

}

objj.UCL = 15
objj.laliga = 36
objj.Address = 'Spain'
delete objj.age
console.log(objj)



