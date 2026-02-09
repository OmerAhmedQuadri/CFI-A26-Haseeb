//Write a program to find if a number is prime or not

function isPrime(num){ 
    if (num<2) return false
    for(let i = 2; i< num; i++){
    if( num%i==0 ){
    
        return false
    }
}
    return true
    
    
    }
// console.log(isPrime(18))


for(let i = 0; i < 100; i++){
    if(isPrime(i)) console.log(i)
}

