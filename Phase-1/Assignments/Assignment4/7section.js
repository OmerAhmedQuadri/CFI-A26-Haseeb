//Question52 Prediction: Passed
let marks = 90

marks >= 80 ? console.log('Passed') : console.log('Failed')

//Question53
let age = 20
let status 

age >= 18 ? status = 'Adult' : status = 'Minor'

console.log(status)


//Question54 Prediction: Odd
let num = 7
let result = num % 2 === 0 ? 'Even' : 'Odd'
console.log(result)

//Question55
let numm = -5
let resultt
numm<0? resultt='negative' : resultt='positive'
console.log(resultt)

//Question56  Prediction: Discount: 20%
let price = 1200
let discount = price >= 1000 ? 20 : 10
console.log(`Discount: ${discount}%`)


//Question57
let username = 'admin'
let message
username=='admin'? message='Welcome Admin' : message='Welcome Guest'
console.log(message)


//Question58 Prediction : B
let markss = 85
let grade = markss >= 90 ? 'A' : markss >= 80 ? 'B' : markss >= 70 ? 'C' : 'F'
console.log(grade)

//Question59
// We should avoid using ternary operators when there are too many cases
// as it is a one liner we can't perform complex cases using this operator


//Question60
let score = 55
let resullt
score>=50? resullt='Pass':resullt='Fail'
console.log(resullt)



