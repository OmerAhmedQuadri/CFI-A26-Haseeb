//10. Write a function that finds the factorial of a number using:
// ➔ Recursion
// ➔ For loop

function factorial(num) {
    let fact = num
    for (let i = 1; i < num; i++) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(4));
//24

