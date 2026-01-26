// // Basic Objects




// let person = {
//     'full name' : 'MOhammed haseeb',
//     age : 20
// }
// person['full name'] = 'nigga'
// console.log(person)

// person.address= 'hyderabad'
// console.log(person)

// // person.fullname= person.name
// // console.log(person)

// // delete person.name
// // console.log(person)

// console.log(person['full name'])

// 

// let person = {
//     name : "Mohammed Haseeb Uddin"
//     , age :20 ,
//     subject: 'JS',
//     address : {                       // here address is a nested object like we did nested arrays
//     door_number : 12,
//     area : "masabtank"
// }
// }
// // let address = {
// //     door_number : 12,
// //     area : "masabtank"
// // }
// console.log( person['address']['door_number'] ) //we can print nested arrays this way
//                                                 // whenever writing strings isnide [] we need to use quotations


// let person = {
//          name : "Mohammed Haseeb Uddin"
// , age :20 ,
//     subject: 'JS'
// }
// let address = {
//      door_number : 12,
//     area : "masabtank"
// }

// let user ={                          // we can print like this as well . we can assign a key to the object like we did here
//     persnl_details: person,             // persnl_details is the key which is assigned to person which is an object
//     residence: address                 // we can use anything as key but we need to assign it to the exact object
// }
// console.log(user) 


// let obj1 ={
//      a:2,
//      b:1 
// }

// let obj2 = { 
//     c : 3,
//     d : 4
// }

// let obj3 = {
//      obj1,
//      obj2
// }
// console.log (obj3.obj2.d)

// let book = { 
//     name : "JavaScript",
//     pages : 200
// }

// let author = { 
//     name : 'Randall'
// ,   age : 67
// }

// let mergedObject = { 
//     ...book,
//     ...author
// }

// console.log(mergedObject)



// let fruits = { 
//     1 : 'mango',
//     2 : 'banana',
//     3 : ' kiwi'
// }

// let veggies = { 
//     4: 'tomato', 
//     5: 'potato', 
//     6: 'carrot'
// }

// let basket = { 
//     ...veggies,
//     ...fruits
// }

// console.log(basket)


let users= [ 
    {  
        name:'haseeb',
        age:20,
        subject:"number systems"
    },
    {
      name2:'mohammed',
      age2:24,
      subject2:'Operating Systems'
    }
    ,{ 
        name3:'zain',
        age3: 25,
        subject3:'Javascript'
    }
]
users.pop()
 console.log(users)

