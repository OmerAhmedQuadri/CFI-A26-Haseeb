const fruits = ['orange', 'banana', 'apple', 'mango', 'grapes']
//.slice ( start, end(optonal))
// start -- inclusive
//end -- exclusive
let res = fruits.slice(1 , 4)
console.log(fruits);
//[ 'orange', 'banana', 'apple', 'mango', 'grapes' ]
console.log(res);
//[ 'banana', 'apple', 'mango' ]

console.log('\n');

res = fruits.slice(-3 ,-1)
console.log(res);
//[ 'apple', 'mango' ]

console.log('\n');

res = fruits.slice(1 ,-1)
console.log(res);
//[ 'banana', 'apple', 'mango' ]


