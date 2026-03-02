//44. What is the output of this code and why?


console.log([] + []);
//it takes both as empty strings 
console.log([] + {});
// empty string + object so it becomes object object
console.log({} + []);
// object + empty string so it again become object object
