import rs from 'readline-sync'
//3. Write a function that prints multiplication table of a given number.
// (take user input for n)

let n = rs.questionInt('Enter the number for table: ')
for(let i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
    
}