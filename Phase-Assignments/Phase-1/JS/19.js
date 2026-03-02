// 19. Write a program that prints all numbers from 1 to 50 and prints
// "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible
// by 5, and "FizzBuzz" for both.
let num = 1
let max = 50
while (num <= max) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log(num, 'FizzBuzz');
    } else if (num % 5 == 0) {
        console.log(num, 'Buzz');
    } else if (num % 3 == 0) {
        console.log(num, 'Fizz');

    } else {
        console.log(num);

    }
    num++
}


