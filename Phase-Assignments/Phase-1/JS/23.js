// 23. Write a function that checks if a given number is a prime number.

function isPrime(num) {
    let prime = true
    if (num % 2 == 0) {
        prime = false
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false
        }
    }
    if (prime) {
        return ('The number is prime');
    }else{
        return ('num is not prime');
        
    }
}

console.log(isPrime(23))