//41. What is destructuring and how can you rename variables while
// destructuring an object?

// destructuring is used to take individual propertys depending on our requirement
// Example

let  student = {
    name: 'Haseeb',
    age: 21,
}

const {name: studentName, age: studentAge } = student

console.log(student);
console.log(studentName);
console.log(studentAge);


