//Question11
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape']
// const newObj = fruits.reduce( (obj , fruits) => {


    
    
//     if(!obj[fruits]) obj[fruits] = 1
//     else obj[fruits]++
//     return obj
    
// },{})
// console.log(newObj);



//Question12
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const Obj= numbers.reduce((obj,num) =>{
//   if(num%2==0)obj.even.push(num)
//     else obj.odd.push(num)
//   return obj

// },{even: [], odd: []})


// console.log(Obj);
//complex


//Question13
const students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 45 },
    { name: 'Charlie', marks: 75 },
    { name: 'David', marks: 92 }
]
// const average = students.reduce ( (acc, curr ) => {
//         return (acc + curr.marks )
// },0 ) 
// console.log(average/students.length);



//Question14
// const maxMarks = students.reduce( (acc , curr)=>{
//     if ( acc.marks > curr.marks) return acc
//     else return curr
// })


// console.log(maxMarks);


//Question15
// const cart = [
//     { product: 'Shirt', price: 500, qty: 2 },
//     { product: 'Pants', price: 1200, qty: 1 },
//     { product: 'Shoes', price: 2000, qty: 1 },
//     { product: 'Cap', price: 300, qty: 3 }
// ]
  
// totalCart = [...cart].reduce( (acc , curr) =>{
   
//    return acc + curr.price*curr.qty
// },0)


// console.log(totalCart); //5100


//Question16
const users = [
    { name: 'Alice', age: 25, city: 'Mumbai' },
    { name: 'Bob', age: 30, city: 'Delhi' },
    { name: 'Charlie', age: 25, city: 'Mumbai' },
    { name: 'David', age: 30, city: 'Mumbai' }
]

// const newObj = users.reduce( (obj , usr)=>{
//     if(!obj[usr.city]) obj[usr.city]= []
//      obj[usr.city].push(usr)
//   return obj
// },{})

// console.log(newObj);




//Question17
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
// const largeWord = words.find( (word)=>{
//     if(word.length > 6) return word
// })

// console.log(largeWord);


//Question18
const products = [
    { id: 1, name: 'Laptop', inStock: false },
    { id: 2, name: 'Phone', inStock: true },
    { id: 3, name: 'Tablet', inStock: true }
]

// const inStock = products.find((product) =>{
//     if(product.inStock == true) return product
// })
// console.log(inStock);


//Question19
// const index = products.findIndex((product) =>{
//  if(product.id == 3) return product
// })
// console.log(index);


//Question20
// const nums = [3, 7, 12, 5, 8, 15, 20]

// const index = nums.findIndex( (num)=>{
//     if(num %5== 0 ) return num
// })
// console.log(index); //3


