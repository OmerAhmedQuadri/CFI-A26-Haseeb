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
original2[1]=3
console.log(original)
console.log(original2)

//Question24
//prediction: arr1: 100 arr2:999

let array1 = [100,200]
let array2 = [...array1]
array2[0] = 999
console.log(array1[0])
console.log(array2[0])


//Question25
//prediction first: false second: false
let arrayy1 = [1, 2, 3]
let arrayy2 = [...arrayy1]
console.log(arrayy1 == arrayy2) //false
console.log(arrayy1[0] == arrayy2[0]) //true because we're comparing integers

//Question26
let gem = [22,34,52]
let meg = [22,34,52]

console.log(gem==meg) //the arrays are not equal because there are two 
//different refrences being created. If i compare the values like meg[1]==gem[1] then it would be true


//Question27
// let arr2 = arr1        // Method 1 here two different arrays are involved initially.
// let arr2 = [...arr1]   // Method 2 the difference is here the spread operator is involved so it spreads 
//                           the same array and creates a new array


//Question28
let bat = [12,56,89]
let cat = bat
let tab = [...bat]
cat.push(33)
console.log(bat)
console.log(cat)
console.log(tab)  // the edit occurs in the orignal and the refrence copy but not in the spread copy
                  // because in the refrence copy orignal reference is stored


