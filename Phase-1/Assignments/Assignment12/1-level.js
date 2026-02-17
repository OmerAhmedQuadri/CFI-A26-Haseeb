// const nums = [10, 20, 30, 40, 50, 30, 60];
// const index = nums.indexOf(30)

// console.log(index);


//Question2
// const index = nums.indexOf(30,3)
//  console.log(index);


//QUestion3
// const colors = ['red', 'blue', 'green', 'blue', 'yellow'];
// const lastBlue = colors.lastIndexOf('blue')
// console.log(lastBlue);

//Question4
// const nums = [1, 2, NaN, 4, 5];
// // const findNan = nums.indexOf(NaN) //-1
// const findNan = nums.includes(NaN) //true
// console.log(findNan);

//the difference is that includes looks at it like a datatype and includes in hence it is true but indexOf 
//does not look at it like a datatype

//Question5
// const permissions = ['read', 'write', 'execute'];
// const userPermission = 'write';
// if(permissions.includes(userPermission)){
//     console.log('Access Granted');
// }else{
//     console.log('Access Denied');
    
// }


//Question6
// const nums = [2, 4, 6, 8, 10]
// const evenNums = nums.every((num)=>{
//     if(num%2==0) return num
// })
//     console.log(evenNums);


//Question7
// const nums = [1, 2, 3, 4, 5, 6];
// const greaterNum = nums.some( (num) =>{
//     if(num > 5) return num
// })
// console.log(greaterNum);


//Question8
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }
];
// const allAdults = users.every((usr)=>{
//     if(usr.age >= 18) return 
// })

// console.log(allAdults);


//Question9
// const User = users.some( (usr) => usr.age < 18)
// console.log(User);


//Question10
// const stack = [];
// let push1 = stack.push('A')
// let push2 = stack.push('B')
// let push3 = stack.push('C')
// let pop1 = stack.pop()
// let pop2= stack.pop()
// console.log(pop1); //C
// console.log(pop2); //B

// console.log(stack); //['A']


//Question11
// const queue = ['task1', 'task2', 'task3'];
// let shift = queue.shift()
// let unShift = queue.unshift('urgent-task')
// console.log(queue); //[ 'urgent-task', 'task2', 'task3' ]


//Question12
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// const sliced = fruits.slice(1,4)
// console.log(sliced);


//Question13
// const fruit = fruits.slice(-2)
// console.log(fruit);



//Question14
// const nums = [1, 2, 3, 4, 5];
// const addElements = nums.splice(2,1,99,88)
// console.log(nums);//[ 1, 2, 99, 88, 4, 5 ]
// console.log(addElements); //3


//Question15
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrays = arr1.concat(arr2)
console.log(arrays);
const spreadArray = [...arr1,...arr2]
console.log(spreadArray);

//Yes both are same results










