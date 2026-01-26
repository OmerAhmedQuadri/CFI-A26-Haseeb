// console.log( Number('45'))
// console.log(typeof Number('45'))

// console.log( Number('Haseeb'))
// console.log(typeof Number('Haseeb'))


// console.log(typeof "25")

// console.log(Number(""))
// console.log(Number(" "))
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(undefined))
// console.log(Number(null))


//parseInt

// console.log(parseInt('1067px90')) //parseInt returns strictly integer and if there are any decimal or other characters it ignores them and the characters after them
// console.log(parseInt("200px")) //200
// console.log(parseInt("200 20"))  //200
// console.log(parseInt("200-50"))  //200
// console.log(parseInt("  200 50")) //200
// console.log(parseInt("  ps200-50")) //NaN
// console.log(parseInt(" __200-50")) //NaN

// console.log(parseInt("255.57")) //255


// console.log(parseInt('1010'))
// console.log(parseInt('1010',2))
// console.log(parseInt('0x1010'))
// console.log(parseInt('1010', 16))
// console.log(parseInt('FDA', 16))
// console.log(parseInt('3DE', 16))
// console.log(parseInt('1010', 8))

//0b is the notation for binary
//0o is for octal  even if we don't give o it takes the number as octal if we start the number with 0 ex: 023
//0x is for hexa
// let num = 0b1010
// let num2= 034    //returns the decimal value considering this as octal
// console.log(num2)


// let num1 ='155.268333'
// // console.log(num1.toFixed(3))    retruns the whole value as number

// console.log(parseFloat(num1))


let num = 68687
console.log(num.toString(16))
console.log(num.toString(2))
console.log(num.toString(8))
console.log(num.toString())