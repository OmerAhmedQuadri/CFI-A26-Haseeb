/*
4. Write a program to print the following pattern.
10
10 20
10 20 30
10 20 30 40
*/
let str = ''
let num = 10
for(let i = 1; i <= 4; i++){
 str = str + num + ' '
 console.log(str);
 num = num + 10
}
