//Question 1: Basic Post-Increment
let a = 5
console.log(a++)//6
console.log(a)  //5

//Question 2: Basic Pre-Increment
let b = 5
console.log(++b) //6
console.log(b)//5

//Question 3: Basic Post-Decrement
let c = 10
console.log(c--)//9
console.log(c)//10

//Question 4: Basic Pre-Decrement
let d = 10
console.log(--d)//10
console.log(d)//9

//Question 5: Post-Increment in Expression
let x = 7
let y = x++ + 5
console.log(y)//13
console.log(x)//7

//Question 6: Pre-Increment in Expression
let t = 7
let u = ++x + 5
console.log(t)
console.log(u)

//Question 7: Multiple Post-Increments
let num = 3
console.log(num++) //4
console.log(num++)//5
console.log(num++)//6
console.log(num)//6

//Question 8: Mixing Pre and Post Increment
let r = 5
let result = r++ + ++r
console.log(result) //6
console.log(r)//7

//Question 9: Decrement in Expression
let p = 20
let q = --p + p--
console.log(q) //19
console.log(p) //18

//Question 10: Complex Expression
let m = 10
let n = m++ + m + ++m
console.log(n) //31
console.log(m)//12