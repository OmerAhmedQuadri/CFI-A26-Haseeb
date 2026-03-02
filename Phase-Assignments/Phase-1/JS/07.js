//7. Write a function that takes a number and prints EVEN or ODD, or throws
// an error if the given argument is not a number.

function everOrOdd(num){
    if(typeof num != 'number' || isNaN(num)){
        throw new Error ('Please enter a valid number')
    }
    if(num%2==0){
        console.log('The number is even');
        
    }else{
        console.log('The number is odd');
        
    }
}
everOrOdd(12)
//Expected output The number is even
