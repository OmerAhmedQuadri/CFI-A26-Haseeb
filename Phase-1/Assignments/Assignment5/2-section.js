//Question11  Prediction: infinite numbers
let i = 0

while (i < 10) {
    console.log(i++)
}
/* output:
1
2
3
4
5
6
7
8
9
Explanation: the value of i increases as it prints so values are printed and it stops at 9
if i do console.log(i) after the loop it will return 10
*/

//Question12  Prediction : 0 to 9 , some other code  , rest of the code
let j = 0

while (j < 10) {
    console.log(j++)
}
console.log('some other code')

while (j < 5) {
    console.log(j++)
}
console.log('rest of the code')

//Explanation: it doesn't print the second loop because the value of j is 10 and the condition is j<5 so it fails


//Question13
let it = 5
while(it<11){
    console.log(it)
    it++
}

//Question14
// Version 1
// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }

// // Version 2
// let i = 0
// while (i < 5) {
//     console.log(i++)
// }
//Your Answer: the output is the same the only difference is in version 1 we are printing the value then incrementing
//and in version 2 we are doing both at the same time

//Question15 Prediction: 1 2  2 3  3 4 
let num = 1

while (num <= 3) {
    console.log(num++)
    console.log(num)
}

//Question16
let a = 10
while(a>4){
    console.log(a)
    a--
}

//Question17
let b = 0

while (b < 5) {
    console.log('Count:', b++)
}
console.log('Final b:', b)
// Your Prediction: Count: 0 Final: 1 Count: 1 Final: 2 Count: 2 Final: 3 Count: 3 Final: 4 Count : 4 Final :5

/* output:
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
Final b: 5
Explanation: this happened because the loop executed first then the control came outside to print final 
*/

//Question18
let c = 0
while(c<11){
    console.log(c++)
c++
}
