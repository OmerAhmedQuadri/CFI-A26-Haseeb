//Question21
// const cart = [
//     { product: 'Shirt', price: 500, qty:2 },
//     { product: 'Pants', price: 1200, qty:1 },
//     { product: 'Shoes', price: 2000, qty:1 },
//     { product: 'Cap', price: 300, qty:3 },

// ]

// let updatedPrice = cart.map((product)=>{
//     return product.price*product.qty
// })
// console.log(updatedPrice);


//Question22
// let newArr = updatedPrice.filter((price)=>{
//     return price > 1000
// })
// console.log(newArr);1



//Question23
// const users = [
//     { name: 'Alice', age: 17, country: 'India' },
//     { name: 'Bob', age: 22, country: 'USA' },
//     { name: 'Charlie', age: 15, country: 'India' },
//     { name: 'David', age: 25, country: 'India' },
//     { name: 'Eve', age: 19, country: 'USA' }
// ]

// let newArr = users.filter((usr)=>{
//     if(usr.country == 'India' && usr.age >= 18) return usr
// })
// console.log(newArr);


//Question24
// newArr = newArr.map((usr)=>{
//     return usr.name
// })

// console.log(newArr);


//Question25 Couldn't really do it
// const sentences = ['helo world', 'i love javascript', 'coding is fun']
// let newArr = sentences.map((sentence)=>{
//     return sentence.charAt(0).toUpperCase + sentence.slice(1)
// })

// console.log(newArr);


//Question26
// const data = [1, 'two', 3, 'four', 5, 'six', 7]
// let newArr = data.filter((num)=>{
//    if(typeof num == 'number') return num
// })
// console.log(newArr);



//Question27
// const employees = [
//     { name: 'John', department: 'Engineering', salary: 80000 },
//     { name: 'Jane', department: 'Design', salary: 70000 },
//     { name: 'Mark', department: 'Engineering', salary: 90000 },
//     { name: 'Sara', department: 'HR', salary: 60000 },
//     { name: 'Tom', department: 'Engineering', salary: 85000 }
// ]

// let newArr = employees.filter((employee)=>{
//     if(employee.department == 'Engineering') return employee
// })

// newArr = newArr.map((employee)=>{
//     return employee.salary + employee.salary*10/100
// })

// console.log(newArr);


//Question28
// employees.forEach((employee)=>{
//     console.log(`${employee.name} works in ${employee.department} and earns ${employee.salary}`);
    
// })

//Question 29
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = nums.map((num)=>{
//     if(num%2==0) return num
// })
// console.log(newArr);
/*Output = [
  undefined, 2,
  undefined, 4,
  undefined, 6,
  undefined, 8,
  undefined, 10
]

this happened because the .map() function goes through every element and performs the given task 
since the odd numbers didn't return it returned undefined 
whereas the filter function only returns which is defined
*/


//Question30
// const products = [
//     { name: 'Laptop', price: 50000, inStock: true },
//     { name: 'Phone', price: 20000, inStock: false },
//     { name: 'Tablet', price: 30000, inStock: true },
//     { name: 'Watch', price: 5000, inStock: false },
//     { name: 'Headphones', price: 3000, inStock: true }
// ]

// let inStock = products.filter((product)=>{
//     if(product.inStock == true) return product
// })
// let prices = inStock.map((product)=>{
//     return product.price = product.price - product.price*10/100
// })
 
// console.log(prices);

// inStock.forEach((product)=>{
//  console.log(`${product.name} is available for ${prices[0]}`)
 
// })

//minor mistake