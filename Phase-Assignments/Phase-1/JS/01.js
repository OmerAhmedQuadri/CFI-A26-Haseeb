//1. Write a JS program to print odd numbers from 1 to 150.
let num = 1
let max = 150
while (num <= max){
    if(!(num % 2==0)){
        console.log(num);
     }
    num++
}