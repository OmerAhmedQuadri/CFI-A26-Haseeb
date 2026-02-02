// Question19 Prediction: 1 2 3 4 5 6 7 8 9
let i = 0

while (i < 10) {
    console.log(++i)
}
/*output:
1
2
3
4
5
6
7
8
9
10
Explanation: these values are printed because it increments first then print the changed number
*/
// Question20 Prediction : 1 2 3 4 5 6 7 8 9 10 some other code rest of the code
let t = 0

while (t < 10) {
    console.log(++t)
}
console.log('some other code')

while (t < 5) {
    console.log(++t)
}
console.log('rest of the code')


//Question 21
// Version 1: Post-increment
// let i = 0
// while (i < 5) {
//     console.log(i++)
// }

// // Version 2: Pre-increment
// let i = 0
// while (i < 5) {
//     console.log(++i)
// }

//the difference in the output is that in version1 0 is printed because the increment is post increment
//and in version 2 it starts from from because there is pre increment before it prints

//Question22
let a = 0
while(a<5){
    console.log(++a)
}


//Question23 Prediction: 1 1 2 2 3 3
let num = 0

while (num < 3) {
    console.log(++num)
    console.log(num)
}


//Question24
/*
Code	                               First Print	Second Print	Third Print
i = 0; while(i < 3) console.log(i++)	    0		    1                 2
i = 0; while(i < 3) console.log(++i)		1	        2                 3
i = 1; while(i < 4) console.log(i++)		1           2                 3	
i = 1; while(i < 4) console.log(++i)	    2           3                 4		
*/


//Question25
let f = 6
while (f>1){
    console.log(--f)
}

//Question26 Prediction: 1  2  3  4 Final: 5
let numm = 0

while (++numm < 5) {
    console.log(numm)
}
console.log('Final:', numm)

