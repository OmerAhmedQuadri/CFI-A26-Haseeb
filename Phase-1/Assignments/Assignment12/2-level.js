//Question16
// const words = ['JavaScript', 'is', 'awesome'];
// const sentence = words.join(' ')
// const sentence2 = words.join('-')
// const sentence3 = words.join('')
// console.log(sentence);
// console.log(sentence2);
// console.log(sentence3);





//Question17
// const csv = "John,Doe,30,john@example.com";
// const split = csv.split(',')
// console.log(split);


//Question18
// const nums = [1, 2, 3, 4, 5];
// const reversedArray = nums.reverse()
// console.log(reversedArray); //[ 5, 4, 3, 2, 1 ] YES

//Question19
// const str = "JavaScript";
// const revStr = str.split('').reverse().join('')
// console.log(revStr); //tpircSavaJ



//Question20
// const words = ['zebra', 'apple', 'mango', 'banana'];
// const sortedArray = words.sort()
// console.log(sortedArray);


//Question21
// const nums = [100, 5, 20, 10, 1000];
// const sortedArray = nums.sort((a,b)=> a - b )
// console.log(sortedArray);




//Question22
// const sortedArray = nums.sort((a,b)=> b - a )
// console.log(sortedArray);


//Question23
const users = [
    { name: 'Charlie', age: 35 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];


// const sortedUsers = users.sort( (usr1,usr2) =>{
// return usr1.age - usr2.age
// })
// console.log(sortedUsers);


//Question24
// const sortedUsers = users.sort( (usr) =>  {
//     usr.name})
// console.log(sortedUsers);



//Questions25
// const nested = [1, [2, 3], [4, [5, 6]]];
// const flatArray = nested.flat(2)
// console.log(flatArray);


//Question26
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.fill(0,1,3)


// console.log(newArr);



//Question27
// const fruits = ['apple', 'banana', 'orange', 'grape'];
// const res1 = fruits.at(0)
// const res2 = fruits.at(-1)
// const res3 = fruits.at(-2)
// console.log(res1);
// console.log(res2);
// console.log(res3);



//Question28
const nums = [1, 2, [3, [4, [5]]]];
const string = nums.toString()
console.log(string);//1,2,3,4,5 the array becomes flat before becoming a string




