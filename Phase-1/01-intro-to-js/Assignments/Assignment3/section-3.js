//Question21
//prediction: arr1:100,20,30  arr2:100,20,30 
let arr1 = [ 10, 20,30]
let arr2 = arr1
arr1[0] = 100
console.log(arr1) //[ 100, 20, 30 ]
console.log(arr2)//[ 100, 20, 30 ] because the reference to arr1 is stored in arr2 
                 // so if arr1 is edited then arr2 is also edited

//Question22
//predicted :arr1: 5,10,15,20  arr2: 5,10,15,20
let arrr1 = [5, 10, 15]
let arrr2 = arrr1
arrr2.push(20)
console.log(arrr1) //[ 5, 10, 15, 20 ]
console.log(arrr2)// [ 5, 10, 15, 20 ]  again same logic

//Question23
let original = [1,2,3]
let original2 = [...original]
console.log(original)
