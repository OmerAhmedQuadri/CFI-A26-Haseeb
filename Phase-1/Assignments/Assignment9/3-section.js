//Question11
// function isPerfect(num){
//     let sum = 0
//     for( let i = 1; i < num; i++){
//         if (num%i == 0){
//         sum = sum + i
//         }
//     }
//    if(sum == num){
//     console.log( 'it is a perfect number');

//    }else { console.log('not a perfect number');
//    }
// }

// isPerfect(10)




//Question12
// function isArmstrong(num) {
//     let temp = num
//     let sum = 0
//     let arr = []
//     let count = 0
//     while (num > 0) {
//         arr.push(num % 10)
//         num = (Math.trunc(num / 10))
//         count++
//     }
//     for (i = 0; i < arr.length; i++) {
//         sum = sum + Math.pow(arr[i], count)
//     }
//     if (temp == sum) {
//         console.log('it is an Armstrong number')
//     } else {
//         console.log('not an Armstrong number');

//     }
// }
// isArmstrong(153)




//Question13















//Question14
// function sumOfDigits(num){
//     let sum = 0
//     if ( num == 0){
//         return 'please enter a valid number'
//     }
//     while(num !=0){
//     sum = sum + num%10
//     num = Math.trunc(num/10)
//      sumOfDigits(num)
//     }
//     return sum
    
// }

// console.log(sumOfDigits(1234));



//Question15
// let num = 1234
// function reverseNumber(num){
//     let sum = 0
//     while(num !=0){
//     sum = sum*10 + num%10
//     num = Math.trunc(num/10)
//     }
//     return sum    
//     }

//     console.log(reverseNumber(num));



//Question16
function fibonacci(num = 1 , a = 0, b = 1){
     if( num - 2 == 0){
        return
     }
    if (a == 0 && b == 1 ){
        console.log(a);
        console.log(b);
    }
    let c = a + b
    
    console.log(c);
    fibonacci(--num , b , c )
    


}

fibonacci(13)


//
    













