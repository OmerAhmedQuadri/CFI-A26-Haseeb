//Question11
// const prices = [100, 200, 350, 400, 150]
// let newArray = prices.map((price)=>{
//     let gst = price*18/100
//     price = gst + price
//     Math.round(price)
//     return price
// })

// console.log(newArray);


//Question12
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArray = nums.filter((num)=>{
//     if(num%2==0)return num

// })
// newArray = newArray.map((num)=>{
//     return num*2
// })
// console.log(newArray);

//Question13
// const students = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 42 },
//     { name: 'Charlie', marks: 76 },
//     { name: 'David', marks: 35 },
//     { name: 'Eve', marks: 90 }
// ]

// let passedStudents = students.filter((student)=>{
//     if (student.marks >= 50) return student
// })

// console.log(passedStudents);


//Question14
// let newArray = students.map((student)=>{
//     return student.name
// })

// console.log(newArray);



//Question15
// gradedStudents = students.map((student)=>{
//     if(student.marks >=80) return student.grade = 'A'
//     else if(student.marks >=60) return student.grade = 'B'
//     else if(student.marks >=50) return student.grade = 'C'
//     else {student.marks < 50} return student.grade = 'F'
// })

// console.log(students);



//Question16
// const words = ['cat', 'elephant', 'dog', 'hippopotamus', 'rat']
// let newWords = words.filter((word)=>{
//     if(word.length > 4) return word
// })
// newWords = newWords.map((word)=>{
//     return word.charAt(0).toUpperCase() + word.slice(1)
// })
// console.log(newWords);





//Question17
// const emails = ['Alice@Gmail.com', 'BOB@YAHOO.COM', 'charlie@hotmail.COM']
// lowerEmails = emails.map((email)=>{
//     return email.toLowerCase()
// })
// console.log(lowerEmails);



//Question18
// const nums = [1, 2, 3, 4, 5]
// let newArr = nums.map((num)=>{
//     return { value: num , square : num*num}
// })
// console.log(newArr);


//Question19
const users = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    email: 'john@example.com',
    isActive: true
}

let arr1 = Object.keys(users)
arr1.forEach((e) => {
    console.log(e, ':', users[e]);
})

// Question20
// const nums = [-5, -3, 0, 2, 4, -1, 7, -8]
// let newArr = nums.filter((num)=>{
//     if(num > 0){
//         return num
//     }
// })

// newArr = newArr.map((num)=>{
//     return num*num
// })
// console.log(newArr);







