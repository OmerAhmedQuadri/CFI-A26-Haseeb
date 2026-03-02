//24. What is the difference between break and continue? Give one example
// of each.

/*the difference is that 'break' breaks the execution when the condition becomes true
continue skips one iteration when the condition becomes true */
// Example: 
let num = 1
while(num < 5){
    
    if(num == 3){
        num++
        break
    }
    console.log(num);
    num++
}
//it prints 1 2 and then breaks the execution in the block

 let num2 = 1
while(num2 < 5){
    
    if(num2 == 3){
        num2++
        continue
    }
    console.log(num2);
    num2++
}
// it prints 1 2 and then skips 3 and the continues execution to print 4
