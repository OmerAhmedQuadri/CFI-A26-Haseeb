// arr.filter
// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let newArr = arr.filter((ele) => {
//     if(ele%2==0){
//         return true
//     }
// })
// let newArrr = arr.filter( ele => ele%2==0? true : false)
// console.log(newArrr);



let arr = [22, 55, 1, 76, 9, 10, 32, 0]
// let newArr = arr.filter( (ele)=> {
//     return ele <=10
//     // if(ele<=10) return true
// })

let newArr = arr.filter((ele =>{ return ele<=10}))

console.log(newArr);


