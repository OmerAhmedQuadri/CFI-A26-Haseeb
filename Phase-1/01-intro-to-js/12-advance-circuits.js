// console.log('AND') // The first false value

// console.log(0 && false) //output is 0 because and returns first falsee value

// console.log(false && false) //false
// console.log(true && false) // false 
// console.log(false && true)  // true
// console.log (true && true) // true
 
// console.log(100&&40&&30) // 30 because if there are no falsee values it returns the last truthee value
// console.log(100 && 40 && 0 && 30) // 0
// console.log(100 && 40 && "" && 15)// ""
// console.log(100 && 40 && undefined && 15) // undefined
// console.log( 100 && 40 && null && 15)// null


// console.log("OR") // the first true statement
// console.log(false || false) // false
// console.log(true || false ) // true 
// console.log(false || true) // true
// console.log ( true|| true) // true
// console.log( "" || undefined || null || NaN || "hello") //hello
// console.log("" || "7") // 7

console.log(100 || 40 || 30)
console.log(0 || 40 || 30)
console.log(0 || "" || 30)
console.log(0 || "" || undefined || null)
console.log(false || 0 || "" || undefined)
console.log("" || "hello" || 0) 
console.log( null || undefined || false || 50)
console.log(false || true || false)
console.log(0 || NaN || "JS")
console.log( undefined || null || 0 || "")

console.log("NOT")

//zero values or falsy values
/* 
0
empty strings
undefined
null
false
NaN
*/