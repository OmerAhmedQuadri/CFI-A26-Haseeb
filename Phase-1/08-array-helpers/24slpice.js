const fruits = ['banana', 'orange', 'apple', 'mango', 'grapes']
console.log(fruits);
// const res = fruits.splice(1 ,2 , 'anas')
const res = fruits.splice(1 , 1 , 'anas', 'berries')

const index = fruits.indexOf('anas')
console.log(index);

if( index != -1)
    fruits.splice(index , 1)

console.log('fruits:', fruits);
console.log('result:', res);


