const fruits = ['apple', 'banana', 'banana',  'orange', 'banana', NaN]
const res = fruits.includes('apple', 1)
const res2 = fruits.includes('apple', 0)
const res3 = fruits.includes(NaN)
console.log(res);
console.log(res2);
console.log(res3);
